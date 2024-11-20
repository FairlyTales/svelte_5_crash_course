<script lang="ts">
  import type { Snippet } from 'svelte';

  interface HeaderProps {
    name: string;
    optionalName?: string
    children: Snippet;
  }

  let { name, optionalName, children }: HeaderProps = $props();
</script>

<h1>header</h1>
<div>{name}</div>
<div>{optionalName}</div>
<div>{@render children()}</div>
