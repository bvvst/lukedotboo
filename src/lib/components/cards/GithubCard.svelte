<script>
  import Card from "../Card.svelte";
  import Github from "$lib/assets/github.svg";
  import Heatmap from "$lib/assets/heatmap.svg";
</script>

<Card
  href="https://github.com/bvvst"
  additionalClasses="hover:scale-100 bg-[#010313]"
>
  <div
    class="px-[22px] py-4 flex flex-col justify-end items-start text-white h-full"
  >
    <img
      class="translate-y-6 group-hover:translate-y-0 transition-transform"
      src={Github}
      alt=""
    />
    <span
      class="translate-y-6 group-hover:translate-y-0 transition-transform text-xl mt-1 font-semibold"
      >github/bvvst</span
    >
    <p
      class="font-medium translate-y-6 group-hover:translate-y-0 z-10 text-white/80 opacity-0 group-hover:opacity-100 transition"
    >
      my code
    </p>
    <img
      class="absolute top-5 left-20 w-[256px] h-[158px] group-hover:-translate-y-2 transition-transform opacity-60"
      src={Heatmap}
      alt=""
    />
  </div>
</Card>
