<script lang="ts">
  import { onMount } from "svelte";
  import type { Writable } from "svelte/store";
  import MiniSearch from "minisearch";
  import CourseTile from "../components/course_tile.svelte";

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
    <CourseTile
      {course}
      enabled={searchTerm == "" || searchSet.has(course.id)}
      on:click={() => {
        if ($selectedCourses.includes(course)) {
          selectedCourses.update((courses) =>
            courses.filter((c) => c != course)
          );
        } else {
          selectedCourses.update((courses) => [...courses, course]);
        }
      }}
      added={$selectedCourses.includes(course)}
    />
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
</style>
