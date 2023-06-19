<script lang="ts">
  import { onMount } from "svelte";
  import { Division, Sessions } from "./values";
  import Courses from "./courses.svelte";
  import { writable } from "svelte/store";
  import Timetable from "./timetable.svelte";
  import { selectedCourses, selectedOptimizations } from "../stores";
  import CourseTile from "../components/course_tile.svelte";

  let selectedSession: typeof Sessions.Fall2023 = Sessions.Fall2023;
  let divisions: any[] = [];
  let course_levels: any[] = [];
  let can_search = false;
  let viewingCourses = false;
  let viewingTimetable = false;
  let cachedSearchResults: Record<string, Record<string, any[]>> = {};
  let searchTerm = "";

  const divisionLabel: Record<string, string> = {
    "Faculty of Applied Science & Engineering": "Engineering",
    "Faculty of Arts and Science": "Arts & Science",
    "Faculty of Music": "Music",
    "Faculty of Kinesiology and Physical Education": "Kinesiology",
    "John H. Daniels Faculty of Architecture, Landscape, & Design":
      "Architecture",
    "University of Toronto Mississauga": "UTM",
    "University of Toronto Scarborough": "UTSC",
  };

  let optimizations = [
    "Late Start",
    "Early Finish",
    "Fewer Days",
    "Fewer Gaps",
  ];

  let optimizationImages: Record<string, string> = {
    "Late Start": "/late-start.png",
    "Early Finish": "/early-finish.png",
    "Fewer Days": "/fewer-days.png",
    "Fewer Gaps": "/fewer-gaps.png",
  };

  function optimizationClicked(optimization: string) {
    if ($selectedOptimizations.includes(optimization)) {
      selectedOptimizations.update((s) =>
        s.filter((opt) => opt != optimization)
      );
    } else {
      selectedOptimizations.update((s) => [...s, optimization]);
    }
  }

  $: {
    can_search =
      divisions.some((e) => e.selected) &&
      course_levels.some((e) => e.selected);
  }

  async function getData() {
    let res = await fetch("/get-reference-data");
    return await res.json();
  }

  async function searchCourses(searchTerm: string) {
    console.log(searchTerm);
    if (searchTerm == "") {
      return [];
    }

    if (!(selectedSession.id in cachedSearchResults)) {
      cachedSearchResults[selectedSession.id] = {};
    }

    if (searchTerm in cachedSearchResults[selectedSession.id]) {
      return cachedSearchResults[selectedSession.id][searchTerm];
    }

    let params = new URLSearchParams();
    params.append("term", searchTerm);
    for (let division of divisions) {
      params.append("divisions", division.value);
    }

    params.append("sessions", selectedSession.id);
    params.set("upperThreshold", "200");
    params.set("lowerThreshold", "50");

    let res = await fetch("/search-courses?" + params.toString());
    let data = await res.json();
    console.log(data);
    cachedSearchResults[selectedSession.id][searchTerm] =
      data.payload.codesAndTitles;
  }

  $: searchCourses(searchTerm);

  function viewCourses() {
    viewingCourses = true;
    history.pushState({}, "", "?page=courses");
  }

  onMount(async () => {
    let data = await getData();
    divisions = data.payload.divisions;
    course_levels = data.payload.courseLevels;

    window.addEventListener("popstate", () => {
      viewingCourses = false;
      viewingTimetable = false;
    });
  });
</script>

<div class="main" class:searching={viewingCourses || viewingTimetable}>
  <h1>UofT Planner</h1>
  <div class="sessions">
    {#each Object.values(Sessions) as session}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="session"
        class:selected={selectedSession == session}
        style={session.style}
        on:click={() => (selectedSession = session)}
      >
        {session.displayName}
      </div>
    {/each}
  </div>
  <!-- <h2 class="subtitle">Choose Courses</h2> -->
  {#if $selectedCourses.length > 0}
    <div class="courses">
      {#each $selectedCourses as course}
        <div class="course">
          <h2>{course.code}</h2>
          <button
            on:click={() =>
              selectedCourses.update((courses) =>
                courses.filter((c) => c != course)
              )}>✕</button
          >
        </div>
      {/each}
      <div>⠀</div>
    </div>
  {/if}
  <!-- <div class="divisions">
    {#each divisions as division (division.value)}
      <button
        class="division"
        on:click={() => {
          division.selected = !division.selected;
        }}
        class:selected={division.selected}
      >
        <h2>{divisionLabel[division.label] ?? division.label}</h2>
      </button>
    {/each}
    <div>⠀</div>
  </div> -->
  <!-- <div class="course-levels">
    {#each course_levels as course_level}
      <div
        class="course-level"
        on:click={() => (course_level.selected = !course_level.selected)}
        class:selected={course_level.selected}
      >
        <h2>{course_level.label}</h2>
      </div>
    {/each}
    <div>⠀</div>
  </div> -->
  <div class="search-courses">
    <input
      type="text"
      placeholder="Search Courses"
      on:input={(e) => (searchTerm = e.target.value)}
    />
    {#each (cachedSearchResults[selectedSession.id] ?? {})[searchTerm] ?? [] as course}
      <CourseTile
        {course}
        enabled={true}
        added={$selectedCourses.includes(course)}
        on:click={() => {
          selectedCourses.update((courses) => [...courses, course]);
        }}
      />
    {/each}
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- <button
    disabled={!can_search}
    class="create"
    class:selected={can_search}
    on:click={viewCourses}>RESULTS</button
  > -->
  <pre style="margin-top: 10pt;" />
  <!-- <h2 class="subtitle">Optimize</h2> -->
  <div class="optimizations">
    {#each optimizations as optimization}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="optimization"
        class:selected={$selectedOptimizations.includes(optimization)}
        on:click={() => optimizationClicked(optimization)}
      >
        <img src={optimizationImages[optimization]} alt={optimization} />
        <h2>{optimization}</h2>
      </div>
    {/each}
  </div>
  <button
    class="create"
    disabled={!($selectedCourses.length > 0)}
    on:click={() => (viewingTimetable = true)}
    class:selected={$selectedCourses.length > 0}
  >
    CREATE
  </button>
</div>

<div class="page" class:enabled={viewingCourses && !viewingTimetable}>
  <Courses
    {viewingCourses}
    {selectedCourses}
    selectedSession={selectedSession.id}
    divisonIds={divisions.filter((d) => d.selected).map((d) => d.value)}
    courseLevels={course_levels.filter((c) => c.selected).map((c) => c.value)}
  />
</div>

<div class="page" class:enabled={viewingTimetable}>
  <Timetable
    selectedOptimizations={$selectedOptimizations}
    {viewingTimetable}
    {selectedCourses}
  />
</div>

<style>
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding: 1rem;
  }

  .main.searching {
    height: 100vh;
    overflow: hidden;
    display: none;
  }

  .page {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 200;
  }

  .enabled {
    display: block;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
    color: black;
  }

  .subtitle {
    width: 100%;
    text-align: left;
    margin-left: 5pt;
    margin-top: 50pt;
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: 700;
    color: #777;
  }

  .sessions {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 15pt;
    margin-bottom: 30pt;
    gap: 15pt;
    width: 100%;
  }

  .session {
    /* aspect-ratio : 1 / 1; */
    opacity: 0.2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 0.8rem;
    width: 100%;
    height: 100%;
    padding: 1rem;
    border-radius: 8pt;
    transition: all 0.2s ease-in-out;
  }

  .session.selected {
    opacity: 1;
    box-shadow: 0 0 30px 5px rgba(0, 0, 0, 0.1);
  }

  .courses,
  .divisions,
  .course-levels {
    overflow-x: scroll;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    margin-top: 8pt;
    gap: 15pt;
    width: 100vw;

    &:after {
      content: "";
      width: 1rem;
    }
  }

  .courses {
    margin-bottom: 4pt;
  }

  .divisions {
    margin-top: 8pt;
  }

  .course-levels {
    margin-top: 10pt;
  }

  .courses::-webkit-scrollbar,
  .divisions::-webkit-scrollbar,
  .course-levels::-webkit-scrollbar {
    display: none;
  }

  .course:first-of-type,
  .division:first-of-type,
  .course-level:first-of-type {
    margin-left: 20pt;
  }

  .courses h2,
  .division h2,
  .course-level h2 {
    font-size: 0.8rem;
    font-weight: 700;
    padding: 0;
    margin: 0;
    margin-top: 2pt;
  }

  .courses h2 {
    margin-right: 10pt;
  }

  .course,
  .division,
  .course-level {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: white;
    border-radius: 8pt;
    padding: 1rem;
    transition: all 0.2s ease-in-out;
  }

  .course {
    padding-right: 0.5rem;
  }

  .division {
    flex-shrink: 0;
  }

  .division,
  .course-level {
    opacity: 0.2;
    scale: 0.9;
  }

  .division.selected,
  .course-level.selected {
    opacity: 1;
    scale: 1;
  }

  .search-courses {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 8pt;
    margin-bottom: 8pt;
    width: calc(100% - 20pt);
  }

  .search-courses input {
    width: 100%;
    padding: 0.8rem;
    border-radius: 8pt;
    border: 1px solid #ccc;
    font-size: 1.2rem;
    font-weight: 700;
    outline: none;
  }

  .optimizations {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 15pt;
    width: 100%;
    margin-top: 8pt;
  }

  .optimization {
    aspect-ratio: 1 / 1;
    opacity: 0.2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: white;
    border-radius: 8pt;
    padding: 1rem;
    transition: all 0.2s ease-in-out;
  }

  .optimization.selected {
    opacity: 1;
    box-shadow: 0 0 30px 5px rgba(0, 0, 0, 0.1);
  }

  .optimization h2 {
    font-size: 1.2rem;
    font-weight: 700;
    padding: 0;
    margin: 0;
  }

  .optimization img {
    display: block;
    max-width: 100%;
    max-height: 6rem;
    width: auto;
    height: auto;
    margin-bottom: 0.5rem;
  }

  .create {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(90deg, #356bd1 0%, #5688df 100%);
    color: white;
    font-weight: 700;
    font-size: 1.1rem;
    width: 100%;
    height: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 8pt;
    transition: all 0.2s ease-in-out;
    margin-top: 15pt;
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
  }

  .create.selected {
    opacity: 1;
  }
</style>
