<script lang="ts">
  interface HeaderProps {
    name: string;
    optionalName?: string;
  }

  let { name, optionalName }: HeaderProps = $props();
</script>

<h1>header</h1>
<div>{name}</div>
<div>{optionalName}</div>
