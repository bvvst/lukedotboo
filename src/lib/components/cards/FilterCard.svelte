<script>
  import Card from "../Card.svelte";
  import FilterLogo from "$lib/assets/filter.svg";
  import FilterBackground from "$lib/assets/filter-bg.png";
</script>

<Card
  href="https://filter.im/"
  additionalClasses="hover:scale-100 bg-[#010313]"
>
  <div
    class="px-[22px] py-4 flex flex-col justify-end items-start text-white h-full"
  >
    <img
      class="translate-y-6 group-hover:translate-y-0 transition-transform"
      src={FilterLogo}
      alt=""
    />
    <span
      class="translate-y-6 group-hover:translate-y-0 transition-transform text-xl mt-1 font-semibold"
      >filter.im</span
    >
    <p
      class="font-medium translate-y-6 group-hover:translate-y-0 z-10 text-white/80 opacity-0 group-hover:opacity-100 transition"
    >
      my design studio
    </p>
    <img
      class="absolute -top-2 -right-20 w-[232px] h-[196px] group-hover:-translate-y-2 transition-transform opacity-60"
      src={FilterBackground}
      alt=""
    />
  </div>
</Card>
