<script context="module" lang="ts">
  import * as stylex from "@stylexjs/stylex";

  const styles = stylex.create({
    base: {
      flex: 1,
      position: "relative",
    },
  });
</script>

<script lang="ts">
  import Canvas from "./Canvas.svelte";
  import type { Size } from "../../types/Size";
  import ImageCanvas from "./ImageCanvas.svelte";

  let wrap: HTMLDivElement;
  let size: Size;

  const handleSize = () => {
    size = { width: wrap.offsetWidth, height: wrap.offsetHeight };
  };
</script>

<svelte:window on:load="{handleSize}" on:resize="{handleSize}" />

<div {...stylex.attrs(styles.base)} bind:this="{wrap}">
  <Canvas size="{size}" />
  <ImageCanvas size="{size}" />
</div>
