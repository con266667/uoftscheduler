<script lang="ts">
  import { onMount } from "svelte";
  import type { Writable } from "svelte/store";
  import MiniSearch from "minisearch";

  export let viewingCourses: boolean;
  export let selectedCourses: Writable<any[]>;
  export let selectedSession: string;
  export let divisonIds: string[];
  export let courseLevels: string[];

  let courses: any[] = [];
  let defaultOrder: string[] = [];
  let fetchingCourses = true;
  let miniSearch: MiniSearch<any> | undefined;
  let searchTerm = "";
  let searchSet = new Set();

  async function setupSearch() {
    if (miniSearch == undefined) {
      miniSearch = new MiniSearch({
        fields: ["code", "name", "cmCourseInfo.description"], // fields to index for full-text search
        storeFields: ["code"], // fields to return with search results
        tokenize: (string, fieldName) => {
          if (fieldName == "code") {
            let tokens = [];
            tokens.push(string.substring(0, 3));
            tokens.push(string.substring(3, 6));
            tokens.push(string.substring(0, 6));
            return tokens;
          }
          return MiniSearch.getDefault("tokenize")(string, fieldName);
        },
      });
      miniSearch.addAll(courses);
    }
  }

  $: {
    if (searchTerm != "") {
      setupSearch();
      let ids = miniSearch!.search(searchTerm, { fuzzy: 5 }).map((c) => c.id);
      searchSet = new Set(ids);
      // Sort by relevance
      courses.sort((a, b) => {
        if (ids.includes(a.id) && ids.includes(b.id)) {
          return ids.indexOf(a.id) - ids.indexOf(b.id);
        } else if (ids.includes(a.id)) {
          return -1;
        } else if (ids.includes(b.id)) {
          return 1;
        }
        return 0;
      });

      courses = [...courses];
    } else {
      courses = courses.sort((a, b) => {
        return defaultOrder.indexOf(a.id) - defaultOrder.indexOf(b.id);
      });
    }
  }

  async function getCourses() {
    fetchingCourses = true;
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
    defaultOrder = courses.map((c) => c.id);
    fetchingCourses = false;
    setupSearch();
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
  <input
    class="search"
    type="text"
    placeholder="Search"
    on:input={(e) => {
      searchTerm = e.target.value;
    }}
  />
  {#if fetchingCourses}
    <h2>Loading...</h2>
  {/if}
  {#if courses.length == 0 && !fetchingCourses}
    <h2>No courses found</h2>
  {/if}
  {#each courses as course}
    <div
      class="course"
      class:enabled={searchTerm == "" || searchSet.has(course.id)}
    >
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
    margin-top: 20pt;
    margin-bottom: 7pt;
  }

  .search {
    width: 80%;
    height: 30pt;
    border-radius: 8px;
    border: none;
    margin-bottom: 20pt;
    padding-left: 10pt;
    padding-top: 7pt;
    padding-bottom: 7pt;
    font-size: 1rem;
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
    opacity: 0;
    height: 0;
  }

  .course.enabled {
    opacity: 1;
    height: auto;
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
