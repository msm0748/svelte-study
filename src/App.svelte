<script context="module" lang="ts">
  import * as stylex from "@stylexjs/stylex";

  const styles = stylex.create({
    base: {
      width: "100dvw",
      height: "100dvh",
      display: "flex",
      overflow: "hidden",
    },
  });
</script>

<script lang="ts">
  import Canvas from "./components/canvas/index.svelte";
</script>

<main {...stylex.attrs(styles.base)}>
  <Canvas />
</main>
