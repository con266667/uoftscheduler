export type Event = {
    day: number,
    startTime: number,
    endTime: number,
}

export type Course = {
    code: string,
    sections: {
        lab: Section[],
        lecture: Section[],
        tutorial: Section[],
    }
};

export type Section = {
    code: string,
    id: string,
    type: string,
    events: Event[]
}

export type Schedule = Map<string, Map<string, string>>

function averageStartTime(events: Event[]) {
    let sum = 0
    let num = 0
    for (var i = 1; i <= 5; i++) {
        let eventsOnDay = events.filter(event => event.day === i)
        if (eventsOnDay.length > 0) {
            sum += Math.min(...eventsOnDay.map(event => event.startTime))
            num++
        }
    }

    if (num === 0) return 0

    return sum / num
}

function averageEndTime(events: Event[]) {
    let sum = 0
    let num = 0
    for (var i = 1; i <= 5; i++) {
        let eventsOnDay = events.filter(event => event.day === i)
        if (eventsOnDay.length > 0) {
            sum += Math.max(...eventsOnDay.map(event => event.endTime))
            num++
        }
    }

    if (num === 0) return 0

    return sum / num
}

function daysOff(events: Event[]) {
    const days = new Set<number>()
    for (const event of events) {
        days.add(event.day)
    }
    return 5 - days.size
}

function allEvents(courses: Course[], schedule: Schedule) {
    let events: Event[] = []
    for (let course of courses) {
        for (let [section_type, sections] of Object.entries(course.sections)) {
            let section: Section|undefined = sections.find(section => section.id === schedule.get(course.code)?.get(section_type));
            if (section) {
                events = events.concat(section.events)
            }
        }
    }
    return events
}

function numberOfConflicts(events: Event[]) {
    let conflicts = 0
    for (let day = 1; day <= 5; day++) {
        let eventsOnDay = events.filter(event => event.day === day)
        for (let i = 0; i < eventsOnDay.length; i++) {
            for (let j = i + 1; j < eventsOnDay.length; j++) {
                if (eventsOnDay[i].endTime > eventsOnDay[j].startTime) {
                    if (eventsOnDay[i].startTime < eventsOnDay[j].endTime) {
                        conflicts++
                    }
                }
            }
        }
    }
    return conflicts
}

export function averageStartTimeOptimizer(courses: Course[], schedule: Schedule) {
    let events = allEvents(courses, schedule)
    return 24 - averageStartTime(events) / 3600000 + (numberOfConflicts(events) * 100)
}

export function daysOffOptimizer(courses: Course[], schedule: Schedule) {
    let events = allEvents(courses, schedule)
    return 5 - daysOff(events) + (numberOfConflicts(events) * 100)
}

export function averageEndTimeOptimizer(courses: Course[], schedule: Schedule) {
    let events = allEvents(courses, schedule)
    return (averageEndTime(events) / 3600000) + (numberOfConflicts(events) * 100)
}

export function chainOptimizers(optimizers: Function[]) {
    return (courses: Course[], schedule: Schedule) => {
        let cost = 0
        for (let optimizer of optimizers) {
            cost += optimizer(courses, schedule)
        }
        return cost
    }
}

function randomSchedule(courses: Course[], schedule: Schedule | undefined): [Schedule, Section[]] {
    let _schedule: Schedule = new Map()

    if (schedule) {
        _schedule = new Map(schedule)
    } else {
        for (let course of courses) {
            _schedule.set(course.code, new Map())
            for (let section_type in course.sections) {
                // @ts-ignore
                if (course.sections[section_type].length > 0) {
                    // @ts-ignore
                    _schedule.get(course.code)!.set(section_type, course.sections[section_type][
                        // @ts-ignore
                        Math.floor(Math.random() * course.sections[section_type].length)
                    ].id)
                } else {
                    _schedule.get(course.code)!.set(section_type, "")
                }
            }
        }
    }

    let otherSections = []
    for (let i = 0; i < courses.length; i++) {
        for (let [section_type, sections] of Object.entries(courses[i].sections)) {
            for (let section of sections) {
                if (section.id !== _schedule.get(courses[i].code)?.get(section_type)) {
                    otherSections.push(section)
                }
            }
        }
    }

    return [_schedule, otherSections]
}

function trySchedule(courses: Course[], optimizer: Function, optimizerCache: Map<string, number>, schedule: Schedule | undefined): [Schedule, number] {
    let [_schedule, otherSections] = randomSchedule(courses, schedule);
    let bestCost = optimizer(courses, _schedule);
    let iters = 0

    let currentSchedule = new Map(_schedule);
    let currentCost = bestCost;

    while (iters < 30 && otherSections.length > 0) {
        iters++;

        let randomSection = otherSections[Math.floor(Math.random() * otherSections.length)]
        currentSchedule.get(randomSection.code)!.set(randomSection.type, randomSection.id);

        if (optimizerCache.has(currentSchedule.toString())) {
            currentCost = optimizerCache.get(currentSchedule.toString())
        } else {
            currentCost = optimizer(courses, currentSchedule)
            optimizerCache.set(currentSchedule.toString(), currentCost);
        }
        
        if (currentCost < bestCost) {
            _schedule = new Map(currentSchedule);
            bestCost = currentCost;
            otherSections = []
            for (let i = 0; i < courses.length; i++) {
                for (let [section_type, sections] of Object.entries(courses[i].sections)) {
                    for (let section of sections) {
                        if (section.id !== _schedule.get(courses[i].code)?.get(section_type)) {
                            otherSections.push(section)
                        }
                    }
                }
            }
        }
    }

    return [_schedule, bestCost]
}

export function schedule(courses: Course[], optimizer: Function) {
    let schedules: any[] = []
    let optimizerCache = new Map()
    let bestSchedule: [Schedule, number] | undefined = undefined

    for (let i = 0; i < 400; i++) { // Generations
        for (let j = 0; j < 10; j++) { // Population
            if (schedules.length === 0) {
                schedules.push(trySchedule(courses, optimizer, optimizerCache, undefined))
            } else {
                schedules.push(trySchedule(courses, optimizer, optimizerCache, bestSchedule?.[0]))
            }
            bestSchedule = schedules.find(schedule => schedule[1] === Math.min(...schedules.map(schedule => schedule[1])))
        }
    }

    console.log(bestSchedule)
    
    return bestSchedule?.[0]
}