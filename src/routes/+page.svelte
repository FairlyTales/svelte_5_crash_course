<script lang="ts">
  import type { IFormState, Item } from '$lib';
  import { fade } from 'svelte/transition';
  import Header from './Header.svelte';

  let form = $state<IFormState>({
    name: '',
    date: '',
    step: 0,
    error: ''
  });

  const handleIncrementStep = () => form.step += 1;
  const itemList: Item[] = [
    { name: 'item1', amount: 1 },
    { name: 'item2', amount: 2 },
    { name: 'item3', amount: 3 }
  ];
</script>

{#snippet listItem(item: Item)}
  <li
    class:class_one={item.amount === 1}
    class={item.amount === 2 ? 'class_two' : ''}
  >{item.name} - {item.amount}</li>
{/snippet}

<Header name="header">
  <h3>child</h3>
</Header>

<main>
  <p class="paragraph_class" style:color="red">Step: {form.step}</p>

  {#if form.step === 0 }
    <div>
      <label for="name" style="color: red">Name</label>
      <input type="text" id="name" bind:value={form.name} />
    </div>

    <button onclick={handleIncrementStep}>Next</button>
  {:else}
    <div>else</div>
  {/if}

  {#each itemList as item (item.name)}
    {@render listItem(item)}
  {:else}
    <p>No items</p>
  {/each}

  {#key form.step}
    <div
      transition:fade
      onintrostart={() => (console.log('intro started'))}
      onoutrostart={() => (console.log('outro started'))}
      onintroend={() => (console.log('intro ended'))}
      onoutroend={() => (console.log('outro ended'))}
    >
      I'm recreated when form.step is updated
    </div>
  {/key}
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
