<script lang="ts">
  import type { Writable } from "svelte/store";
  import {
    schedule,
    type Course,
    type Event,
    daysOffOptimizer,
    type Schedule,
    averageStartTimeOptimizer,
    averageEndTimeOptimizer,
    chainOptimizers,
    type Section,
  } from "./schedule";
  import { courses } from "../stores";

  export let selectedCourses: Writable<any[]>;
  export let selectedOptimizations: string[];
  let timetable: any[] = [];
  let currentlySelectedTimetableCourses: any[] = [];
  let currentlySelectedTimetableOptimizations: string[] = [];

  const times = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  function startMillisToIndex(millis: number) {
    let hours = Math.floor(millis / 3600000);
    if (hours > 12) {
      return times.indexOf(hours - 12);
    }
    return times.indexOf(hours);
  }

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  let currentDay = 0;

  function getTimes(course: any) {
    let times = [];
    for (let section of course.sections) {
      for (let meetingTime of section.meetingTimes) {
        times.push({
          course: course,
          section: section.name,
          day: meetingTime.start.day,
          startTime: meetingTime.start.millisofday,
          endTime: meetingTime.end.millisofday,
        });
      }
    }
    return times;
  }

  function sectionType(id: string) {
    if (id.includes("LEC")) {
      return "lecture";
    } else if (id.includes("TUT")) {
      return "tutorial";
    } else if (id.includes("PRA")) {
      return "lab";
    }
  }

  function callScheduler() {
    let scheduleCourses: Course[] = [];

    for (let selectedCourse of $selectedCourses) {
      let course = $courses[selectedCourse.code];
      let schedule_course: Course = {
        code: course.code,
        sections: {
          lecture: [],
          tutorial: [],
          lab: [],
        },
      };

      for (let section of course.sections) {
        let events: Event[] = [];
        for (let meetingTime of section.meetingTimes) {
          events.push({
            id: course.code + section.name,
            day: meetingTime.start.day,
            startTime: meetingTime.start.millisofday,
            endTime: meetingTime.end.millisofday,
          });
        }

        events = events.filter(
          (e, i, a) =>
            a.findIndex(
              (e2) =>
                e2.day == e.day &&
                e2.startTime == e.startTime &&
                e2.endTime == e.endTime
            ) == i
        );

        schedule_course.sections[sectionType(section.name)!].push({
          code: course.code,
          type: sectionType(section.name)!,
          id: section.name,
          events: events,
        });
      }
      if (scheduleCourses.find((e) => e.code == schedule_course.code)) {
        continue;
      }
      scheduleCourses.push(schedule_course);
    }

    let optimizationFunctions = [];
    if (selectedOptimizations.includes("Fewer Days")) {
      optimizationFunctions.push(daysOffOptimizer);
    }
    if (selectedOptimizations.includes("Late Start")) {
      optimizationFunctions.push(averageStartTimeOptimizer);
    }
    if (selectedOptimizations.includes("Early Finish")) {
      optimizationFunctions.push(averageEndTimeOptimizer);
    }

    if (optimizationFunctions.length == 0) {
      optimizationFunctions.push(daysOffOptimizer);
    }

    let newSchedule: Schedule = schedule(
      scheduleCourses,
      chainOptimizers(optimizationFunctions)
    )!;

    // timetable = [];

    timetable = timetable
      .filter(
        (e) =>
          newSchedule.get(e.course.code)?.get(sectionType(e.section)!) ==
          e.section
      )
      .filter(
        (e, i, a) =>
          a.findIndex(
            (e2) =>
              e2.course.code == e.course.code &&
              e2.section == e.section &&
              e2.day == e.day &&
              e2.startTime == e.startTime &&
              e2.endTime == e.endTime
          ) == i
      );

    currentlySelectedTimetableCourses = [...$selectedCourses];
    currentlySelectedTimetableOptimizations = [...selectedOptimizations];
  }

  function buildTimetable() {
    timetable = [];
    for (let selectedCourse of $selectedCourses) {
      let course = $courses[selectedCourse.code];
      let events = getTimes(course);
      timetable = [...timetable, ...events];
    }
    callScheduler();
  }

  $: {
    if (
      $selectedCourses !== currentlySelectedTimetableCourses ||
      selectedOptimizations !== currentlySelectedTimetableOptimizations
    ) {
      if (!($selectedCourses.length == 0)) {
        let courseMissing = false;
        for (let selectedCourse of $selectedCourses) {
          if (!(selectedCourse.code in $courses)) {
            courseMissing = true;
            break;
          }
        }

        if (!courseMissing) {
          buildTimetable();
        }
      }
    }
  }
</script>

<div class="timetable">
  <div class="header">
    <button disabled={currentDay == 0} on:click={() => currentDay--}
      >{"<-"}</button
    >
    <h1>{days[currentDay]}</h1>
    <button disabled={currentDay == 4} on:click={() => currentDay++}
      >{"->"}</button
    >
  </div>
  <div class="schedule">
    {#each times as time, index}
      <div
        class="time"
        class:filled={timetable
          .filter((e) => e.day == currentDay + 1)
          .find((e) => startMillisToIndex(e.startTime) == index) != undefined}
      >
        <div class="line">
          <h2>{time + ":00"}</h2>
          <hr />
        </div>

        {#each timetable
          .filter((e) => e.day == currentDay + 1)
          .filter((e) => startMillisToIndex(e.startTime) == index) as event}
          <div class="event">
            <h3>{event.course.name} {event.section}</h3>
            <h3>{event.course.code}</h3>
          </div>
        {/each}
      </div>
    {/each}
  </div>
</div>

<style>
  .timetable {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
  }

  button {
    font-family: "Inter", sans-serif;
    touch-action: manipulation;
    background: none;
    border: none;
    color: black;
  }

  button:disabled {
    color: #999;
  }

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 50pt;
    padding-top: 5pt;
    padding-bottom: 5pt;
    width: 100%;
  }

  .header h1 {
    margin: 0;
    padding: 0;
    font-size: 1rem;
  }

  .header button {
    margin: 0;
    padding: 0;
    font-size: 2rem;
  }

  .header button:first-child {
    margin-left: 20pt;
  }

  .header button:last-child {
    margin-right: 20pt;
  }

  .schedule {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .time {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
    width: 100%;
    height: 60pt;
  }

  .time .line {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }

  .time h2 {
    font-family: "Inter", sans-serif;
    margin: 0;
    padding: 0;
    font-size: 0.8rem;
    color: #999;
    margin-left: 8pt;
  }

  .time hr {
    width: 100%;
    margin-left: 10pt;
    margin-right: 10pt;
  }

  .event {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 40pt;
    margin-right: 60pt;
    margin-top: 5pt;
    margin-bottom: 5pt;
  }

  .event h3 {
    font-family: "Inter", sans-serif;
    margin: 0;
    padding: 0;
    font-size: 0.8rem;
    color: #999;
  }

  .event h3:first-child {
    font-size: 1rem;
    color: black;
  }
</style>
