<script lang="ts">
  import { onMount } from "svelte";
  import type { Writable } from "svelte/store";

  export let viewingCourses: boolean;
  export let selectedCourses: Writable<any[]>;
  export let selectedSession: string;
  export let divisonIds: string[];
  export let courseLevels: string[];

  let courses: any[] = [];
  let fetchingCourses = true;

  async function getCourses() {
    let res = await fetch("/get-courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        courseCodeAndTitleProps: {
          courseCode: "",
          courseTitle: "",
          courseSectionCode: "",
        },
        departmentProps: [],
        campuses: [],
        sessions: [selectedSession],
        requirementProps: [],
        instructor: "",
        courseLevels: courseLevels,
        deliveryModes: [],
        dayPreferences: [],
        timePreferences: [],
        divisions: divisonIds,
        creditWeights: [],
        direction: "asc",
      }),
    });
    courses = (await res.json()).payload;
    fetchingCourses = false;
  }

  $: {
    if (viewingCourses && courses.length == 0) {
      getCourses();
    }

    if (!viewingCourses) {
      courses = [];
    }
  }
</script>

<div class="main">
  <h1>Courses</h1>
  {#if fetchingCourses}
    <h2>Loading...</h2>
  {/if}
  {#if courses.length == 0 && !fetchingCourses}
    <h2>No courses found</h2>
  {/if}
  {#each courses as course}
    <div class="course">
      <div class="info">
        <h2>{course.name}</h2>
        <p>{course.code}</p>
      </div>
      <button
        class="add"
        on:click={() => {
          if ($selectedCourses.includes(course)) {
            selectedCourses.update((courses) =>
              courses.filter((c) => c != course)
            );
          } else {
            selectedCourses.update((courses) => [...courses, course]);
          }
        }}>{$selectedCourses.includes(course) ? "Remove" : "Add"}</button
      >
    </div>
    <hr />
  {/each}
  <pre style="margin-bottom: 70pt;" />
</div>

<style>
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    background: #f2f2f2;
    font-family: "Inter", sans-serif;
    overflow-x: hidden;
    height: 100vh;
    overflow-y: scroll;
  }

  .main h1 {
    font-size: 2rem;
    width: 100%;
    text-align: left;
    margin-left: 50pt;
  }

  .course {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 50pt;
    padding-top: 5pt;
    padding-bottom: 5pt;
  }

  .course .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .course h2 {
    margin: 0;
    padding: 0;
    margin-left: 20px;
    font-size: 1rem;
  }

  .course p {
    margin: 0;
    padding: 0;
    margin-left: 20px;
    font-size: 0.8rem;
    color: #777;
  }

  hr {
    width: 100%;
    margin: 0;
    padding: 0;
    margin-left: 10px;
    border: 1px solid #e0e0e0;
  }

  .add {
    margin-right: 20px;
    margin-left: 20px;
    border-radius: 5px;
    padding: 5px;
    font-size: 0.8rem;
    font-weight: 700;
    border: none;
    transition: all 0.2s ease-in-out;
  }
</style>
