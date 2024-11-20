<script lang="ts">
  import type { IFormState } from '$lib';

  let form = $state<IFormState>({
    name: '',
    date: '',
    step: 0,
    error: ''
  });

  const handleIncrementStep = () => form.step += 1;

</script>

<main>
  <p>Step: {form.step}</p>

  {#if form.step === 0 }
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" bind:value={form.name} />
    </div>

    <button onclick={handleIncrementStep}>Next</button>
  {:else}
    <div>else</div>
  {/if}

</main>

<style>
  :global(button) {
    padding: 0.5rem 1rem;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  div {
    margin-bottom: 1rem;
  }

</style>
