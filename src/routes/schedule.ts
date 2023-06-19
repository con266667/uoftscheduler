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

export function schedule(courses: Course[], optimizer: Function) {
    let _schedule: Schedule = new Map()
    let _courses = courses.slice()

    for (let course of _courses) {
        _schedule.set(course.code, new Map())
        for (let section_type in course.sections) {
            // @ts-ignore
            if (course.sections[section_type].length > 0) {
                // @ts-ignore
                _schedule.get(course.code)!.set(section_type, course.sections[section_type][0].id)
            } else {
                _schedule.get(course.code)!.set(section_type, "")
            }
        }
    }

    let otherSections = []
    for (let i = 0; i < _courses.length; i++) {
        for (let [section_type, sections] of Object.entries(_courses[i].sections)) {
            for (let section of sections) {
                if (section.id !== _schedule.get(_courses[i].code)?.get(section_type)) {
                    otherSections.push(section)
                }
            }
        }
    }

    let bestCost = optimizer(_courses, _schedule);
    let iters = 0

    let optimizerCache = new Map()

    while (iters < Math.sqrt(otherSections.length)*10000 && otherSections.length > 0) {
        iters++;

        let currentBestCost: number|undefined;
        let currentBestSection: Section|undefined;

        for (let section of otherSections) {
            let newSchedule = new Map(_schedule)
            newSchedule.get(section.code)!.set(section.type, section.id);
            
            if (optimizerCache.has(newSchedule.toString())) {
                continue
            } else  {
                if (currentBestCost === undefined) {
                    currentBestCost = optimizer(_courses, newSchedule);
                    currentBestSection = section
                }
                optimizerCache.set(newSchedule.toString(), currentBestCost)
            }
        }       
        
        if (currentBestCost! < bestCost) {
            _schedule = new Map(_schedule)
            _schedule.get(currentBestSection!.code)!.set(currentBestSection!.type, currentBestSection!.id);
            bestCost = currentBestCost
            otherSections = []
            for (let i = 0; i < _courses.length; i++) {
                for (let [section_type, sections] of Object.entries(_courses[i].sections)) {
                    for (let section of sections) {
                        if (section.id !== _schedule.get(_courses[i].code)?.get(section_type)) {
                            otherSections.push(section)
                        }
                    }
                }
            }
        }
    }

    console.log(bestCost)

    return _schedule
}