<script context="module" lang="ts">
  import * as stylex from "@stylexjs/stylex";

  const styles = stylex.create({
    base: {
      position: "absolute",
      left: 0,
      top: 0,
      zIndex: 2,
    },
  });
</script>

<script lang="ts">
  import { afterUpdate, onMount } from "svelte";
  import type { Size } from "../../types/Size";
  import type { Offset } from "../../types/Offset";
  import type { Position } from "../../types/Position";
  export let size: Size;

  let canvas: HTMLCanvasElement;
  let context: CanvasRenderingContext2D | null;
  let isDrawing: boolean;
  let start: Position;

  onMount(() => {
    context = canvas.getContext("2d");
    if (!context) return;
  });

  afterUpdate(() => {
    handleSize();
  });

  const handleStart = ({ offsetX: x, offsetY: y }: Offset) => {
    isDrawing = true;
    start = { x, y };
    if (!context) return;
    context.beginPath();
    context.arc(x, y, 4, 0, 2 * Math.PI);
    context.fillStyle = "pink";
    context.fill();
    context.stroke();
  };

  const handleMove = ({ offsetX: x1, offsetY: y1 }: Offset) => {
    if (!context) return;
    if (!isDrawing) return;

    // const { x, y } = start;
    // context.beginPath();
    // context.moveTo(x, y);
    // context.lineTo(x1, y1);
    // context.closePath();
    // context.stroke();

    start = { x: x1, y: y1 };
  };

  const handleEnd = () => {
    isDrawing = false;
  };
  const handleSize = () => {
    if (!size) return;
    canvas.width = size.width;
    canvas.height = size.height;
  };
</script>

<canvas
  {...stylex.attrs(styles.base)}
  bind:this="{canvas}"
  on:mousedown="{handleStart}"
  on:mousemove="{handleMove}"
  on:mouseup="{handleEnd}"
></canvas>
