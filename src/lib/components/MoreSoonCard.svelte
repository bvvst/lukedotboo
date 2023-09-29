<script>
  import Card from "./Card.svelte";
  import Disc from "$lib/assets/disc.png";
</script>

<Card>
  <img
    class="w-28 h-28 m-auto group-hover:animate-spin-slow duration-300"
    src={Disc}
    alt="Disc"
  />
  <p class="absolute bottom-4 left-[22px] text-lg text-[#010313]/50 font-bold">
    more soon...
  </p>
</Card>
