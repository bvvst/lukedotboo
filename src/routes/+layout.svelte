<script lang="ts">
  import "../app.css";
  import { onMount } from "svelte";
  import Cursor from "$lib/components/Cursor.svelte";
  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";

  inject({ mode: dev ? "development" : "production" });

  onMount(() => {
    if ("paintWorklet" in CSS) {
      //@ts-ignore
      CSS.paintWorklet.addModule("/squircle.js");
    }
  });
</script>

<svelte:head>
  <title>luke</title>
  <meta name="description" content="fullstack designer" />

  <meta property="og:url" content="https://www.luke.boo/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="my portfolio" />
  <meta property="og:image" content="https://www.luke.boo/og.png" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content="luke.boo" />
  <meta property="twitter:url" content="https://www.luke.boo/" />
  <meta name="twitter:title" content="luke" />
  <meta name="twitter:description" content="fullstack designer" />
  <meta name="twitter:image" content="https://www.luke.boo/og.png" />
</svelte:head>
<div class="crt">
  <Cursor />
  <slot />
</div>
