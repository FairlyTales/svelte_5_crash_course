<script lang="ts">
  import Header from './Header.svelte';

  let name = $state('Name');
  let formattedName = $derived(`Mr. ${name}`);

  const onclick = () => {
    console.log('clicked');
  };
</script>

<Header {name} />

<input type="text" bind:value={name}>
<p>{formattedName}</p>
<button {onclick}>button</button>
