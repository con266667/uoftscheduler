<script lang="ts">
  import type { Writable } from "svelte/store";

  export let viewingTimetable: boolean;
  export let selectedCourses: Writable<any[]>;
  //   let timetable: any[] = [
  //     {
  //       course: {
  //         code: "CSC108H1",
  //         name: "Introduction to Computer Programming",
  //       },
  //       day: 1,
  //       startTime: 64800000,
  //       endTime: 72000000,
  //     },
  //   ];
  let timetable: any[] = [];

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
          day: meetingTime.start.day,
          startTime: meetingTime.start.millisofday,
          endTime: meetingTime.end.millisofday,
        });
      }
    }
    return times;
  }

  function buildTimetable() {
    for (let course of $selectedCourses) {
      let events = getTimes(course);
      timetable = [...timetable, ...events];
    }
  }

  $: {
    if (viewingTimetable && timetable.length == 0) {
      buildTimetable();
    }
  }

  $: console.log(
    timetable
      .filter((e) => e.day == currentDay + 1)
      .filter((e) => startMillisToIndex(e) == 10)
  );

  $: console.log(timetable.filter((e) => e.day == currentDay + 1));
</script>

<div class="main">
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
              <h3>{event.course.name}</h3>
              <h3>{event.course.code}</h3>
            </div>
          {/each}
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
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

  .timetable {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
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
    width: 100%;
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
