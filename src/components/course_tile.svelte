<script lang="ts">
  export let course: any;
  export let enabled: boolean;
  export let added: boolean;
</script>

<div class="course" class:enabled>
  <div class="info">
    <h2>{course.name}</h2>
    <p>{course.code}</p>
  </div>
  {#if added !== undefined}
    <button class="add" on:click>{added ? "Remove" : "Add"}</button>
  {/if}
</div>
<hr />

<style>
  .course {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-family: "Inter";
    width: 100%;
    min-height: 50pt;
    padding-top: 5pt;
    padding-bottom: 5pt;
    opacity: 0;
    height: 0;
    transition: all 0.3s ease-in-out;
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

  hr {
    width: 100%;
    margin: 0;
    padding: 0;
    margin-left: 10px;
    border: 1px solid #e0e0e0;
  }
</style>
