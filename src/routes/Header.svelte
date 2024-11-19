<script lang="ts">
  interface HeaderProps {
    name: string;
  }

  let { name }: HeaderProps = $props();
</script>

<h1>header</h1>
<div>{name}</div>
