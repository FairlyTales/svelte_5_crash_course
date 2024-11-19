<script lang="ts">
  import Header from './Header.svelte';

  let name = $state('Name');

  const onclick = () => {
    console.log('clicked');
  };
</script>

<Header {name} />

<input type="text" bind:value={name}>
<button {onclick}>button</button>
