<script lang="ts">
  import { onMount } from "svelte";
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
    context.lineWidth = 3;
  });

  $: if (context) {
    context.strokeStyle = "black";
  }

  const handleStart = ({ offsetX: x, offsetY: y }: Offset) => {
    isDrawing = true;
    start = { x, y };
  };

  const handleMove = ({ offsetX: x1, offsetY: y1 }: Offset) => {
    if (!context) return;
    if (!isDrawing) return;

    const { x, y } = start;
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x1, y1);
    context.closePath();
    context.stroke();

    start = { x: x1, y: y1 };
  };

  const handleEnd = () => {
    isDrawing = false;
  };
  const handleSize = () => {
    canvas.width = size.width;
    canvas.height = size.height;
  };
</script>

<svelte:window on:load="{handleSize}" on:resize="{handleSize}" />
<canvas
  bind:this="{canvas}"
  on:mousedown="{handleStart}"
  on:mousemove="{handleMove}"
  on:mouseup="{handleEnd}"
></canvas>
