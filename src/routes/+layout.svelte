<script lang="ts">
  import "../app.css";
  import { onMount } from "svelte";

  onMount(() => {
    if ("paintWorklet" in CSS) {
      //@ts-ignore
      CSS.paintWorklet.addModule("/squircle.js");
    }
  });
</script>

<slot />
