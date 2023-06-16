<script lang="ts">
  import { onMount } from "svelte";
  import { Division, Session } from "./values";

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
    let courses = await getCourses();
    console.log(courses);
  });
</script>
