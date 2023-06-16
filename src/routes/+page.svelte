<script lang="ts">
  import { onMount } from "svelte";
  import { Division, Sessions } from "./values";

  let selectedSession: typeof Sessions.Fall2023 = Sessions.Fall2023;

  let optimizations = [
    "Late Start",
    "Early Finish",
    "Fewer Days",
    "Fewer Gaps",
  ]

  let optimizationImages: Record<string, string> = {
    "Late Start": "/late-start.png",
    "Early Finish": "/early-finish.png",
    "Fewer Days": "/fewer-days.png",
    "Fewer Gaps": "/fewer-gaps.png",
  }

  let selectedCourses = [
    "AER210",
    "ESC203",
    "MAT292",
    "CSC258",
  ]

  let selectedOptimizations: string[] = [];

  function optimizationClicked(optimization: string) {
    console.log(optimization);
    if (selectedOptimizations.includes(optimization)) {
      selectedOptimizations = selectedOptimizations.filter((opt) => opt != optimization);
    } else {
      selectedOptimizations.push(optimization);
      selectedOptimizations = [...selectedOptimizations];
    }
    console.log(selectedOptimizations);
  }

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
        sessions: [Sessions.Fall2023.id],
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

  async function getData() {
    let res = await fetch("/get-reference-data");
    return await res.json();
  }

  onMount(async () => {
    let data = await getData();
    console.log(data);
  });
</script>


<div class="main">
  <h1>UofT Planner</h1>
  <div class="sessions">
    {#each Object.values(Sessions) as session}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="session" class:selected={selectedSession==session} style={session.style} on:click={()=>selectedSession=session}>{session.displayName}</div>
    {/each}
  </div>
  <h2 class="subtitle">Choose Courses</h2>
  <div class="courses">
    {#each selectedCourses as course}
      <div class="course">
        <h2>{course}</h2>
      </div>
    {/each}
    <div class="x-space"></div>
  </div>
  <div class="faculties"></div>
  <div class="optimizations">
    {#each optimizations as optimization}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="optimization" class:selected={selectedOptimizations.includes(optimization)} on:click={()=>optimizationClicked(optimization)}>
        <img src={optimizationImages[optimization]} alt={optimization} />
        <h2>{optimization}</h2>
      </div>
    {/each}
  </div>
  <div class="create">CREATE</div>
</div>

<style>
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding: 1rem;
  }

  .subtitle {
    width: 100%;
    text-align: left;
    margin-left: 5pt;
    margin-top: 25pt;
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
    margin-top: 10pt;
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

  .courses {
    overflow-x: scroll;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    margin-top: 8pt;
    gap: 15pt;
    width: 100vw; 
  }

  .courses::-webkit-scrollbar {
    display: none;
  }

  .course:first-of-type {
    margin-left: 20pt;
  }

  .x-space {
    width: 20pt;
    height: 10px;
    background: white;
    border-radius: 8pt;
  }

  .courses h2 {
    font-size: 0.8rem;
    font-weight: 700;
    padding: 0;
    margin: 0;
  }

  .course {
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

  .optimizations {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 15pt;
    width: 100%;
    margin-top: 15pt;
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
  }
</style>
