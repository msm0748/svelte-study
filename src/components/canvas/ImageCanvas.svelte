<script context="module" lang="ts">
  import * as stylex from "@stylexjs/stylex";

  const styles = stylex.create({
    base: {
      position: "absolute",
      left: 0,
      top: 0,
      zIndex: 1,
    },
  });
</script>

<script lang="ts">
  import { afterUpdate, beforeUpdate, onMount } from "svelte";
  import type { Size } from "../../types/Size";
  export let size: Size;

  let canvas: HTMLCanvasElement;
  let context: CanvasRenderingContext2D | null;
  let image: HTMLImageElement;
  image = new Image();

  onMount(() => {
    context = canvas.getContext("2d");
  });

  afterUpdate(() => {
    handleSize();
  });

  const handleSize = () => {
    if (!size) return;
    image = new Image();
    image.src = "/images/milk.png";
    canvas.width = size.width;
    canvas.height = size.height;

    image.onload = () => {
      context?.drawImage(image, 0, 0, size.width, size.height);
    };
  };
</script>

<svelte:window on:load="{handleSize}" on:resize="{handleSize}" />
<canvas {...stylex.attrs(styles.base)} bind:this="{canvas}"></canvas>
