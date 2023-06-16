<script lang="ts">
  import { onMount } from "svelte";
  import { Division, Session } from "./values";

  let courses: any[] = [];

  async function getCourses() {
    let res = await fetch("https://get-courses.cnwilson29.workers.dev", {
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
        sessions: [Session.Fall2023],
        requirementProps: [],
        instructor: "",
        courseLevels: [],
        deliveryModes: [],
        dayPreferences: [],
        timePreferences: [],
        divisions: [Division.Engineering],
        creditWeights: [],
        page: 1,
        pageSize: 100,
        direction: "asc",
      }),
    });
    return await res.json();
  }

  onMount(async () => {
    // let _courses = await getCourses();
    // courses = _courses.payload.pageableCourses;
    fetch("/helloworld").then((res) => {
      console.log(res);
    });
  });
</script>


<h1>UofT Scheduler</h1>

<div>
  <h2>Course List</h2>
  <ul>
    {#each courses as course}
      <li>{course.name}</li>
    {/each}
  </ul>
</div>