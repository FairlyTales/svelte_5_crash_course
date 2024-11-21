<script lang="ts">
  import { getGlobalCounterState } from '$lib';
  import type { Snippet } from 'svelte';

  interface HeaderProps {
    name: string;
    optionalName?: string;
    children: Snippet;
  }

  let { name, optionalName, children }: HeaderProps = $props();

  const globalCounterState = getGlobalCounterState();
</script>

<h1>header</h1>
<div>{name}</div>
<div>{optionalName}</div>
<div>{@render children()}</div>

<h2>Global counter value: {globalCounterState.get()}</h2>
