<script context="module" lang="ts">
  import * as stylex from "@stylexjs/stylex";

  const styles = stylex.create({
    base: {
      flex: 1,
    },
  });
</script>

<script lang="ts">
  import Canvas from "./Canvas.svelte";
  import { onMount } from "svelte";
  import type { Size } from "../../types/Size";

  let wrap: HTMLDivElement;
  let size: Size;

  onMount(() => {
    size = { width: wrap.offsetWidth, height: wrap.offsetHeight };
  });
</script>

<div {...stylex.attrs(styles.base)} bind:this="{wrap}">
  <Canvas size="{size}" />
</div>
