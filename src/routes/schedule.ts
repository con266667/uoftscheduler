export type Event = {
    day: number,
    startTime: number,
    endTime: number,
}

export type Course = {
    code: string,
    sections: {
        id: string,
        events: Event[]
    }[]
}

export type Schedule = Map<string, string>

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
        let session = course.sections.find(session => session.id === schedule.get(course.code))
        if (session) {
            events = events.concat(session.events)
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
                        if (i === j) continue
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
    return averageStartTime(events) / 3600000 + (numberOfConflicts(events) * 100)
}

export function daysOffOptimizer(courses: Course[], schedule: Schedule) {
    let events = allEvents(courses, schedule)
    return 5 - daysOff(events) + (numberOfConflicts(events) * 100)
}

export function averageEndTimeOptimizer(courses: Course[], schedule: Schedule) {
    let events = allEvents(courses, schedule)
    return 21 - (averageEndTime(events) / 3600000) + (numberOfConflicts(events) * 100)
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
        if (course.sections.length > 0) _schedule.set(course.code, course.sections[0].id)
    }

    let otherSessions = []
    for (let i = 0; i < _courses.length; i++) {
       for (let session of _courses[i].sections) {
           if (session.id !== _schedule.get(_courses[i].code)) {
                otherSessions.push(session)
           }
       }
    }


    let bestCost = optimizer(_courses, _schedule);
    let iters = 0

    let optimizerCache = new Map()

    while (iters < Math.sqrt(otherSessions.length)*200 && otherSessions.length > 0) {
        iters++;
        let randomSession = otherSessions[Math.floor(Math.random() * otherSessions.length)]
        let newSchedule = new Map(_schedule)
        let newCost = 0;
        newSchedule.set(_courses[0].code, randomSession.id)
        if (optimizerCache.has(newSchedule.toString())) {
            continue
        } else {
            newCost = optimizer(_courses, newSchedule)
            console.log(newCost)
            optimizerCache.set(newSchedule.toString(), newCost)
        }
        if (newCost < bestCost) {
            _schedule = newSchedule
            bestCost = newCost
            otherSessions = []
            for (let i = 0; i < _courses.length; i++) {
                for (let session of _courses[i].sections) {
                     if (session.id !== _schedule.get(_courses[i].code)) {
                            otherSessions.push(session)
                     }
                }
            }
        }
        
    }

    console.log(bestCost)
    console.log("Done!")

    return _schedule
}