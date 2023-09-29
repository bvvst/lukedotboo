<script lang="ts">
  import "../app.css";
  import { onMount } from "svelte";
  import Cursor from "$lib/components/Cursor.svelte";

  onMount(() => {
    if ("paintWorklet" in CSS) {
      //@ts-ignore
      CSS.paintWorklet.addModule("/squircle.js");
    }
  });
</script>

<Cursor />
<slot />
