<script>
  import Card from "../Card.svelte";
  import VanishLogo from "$lib/assets/vanish.svg";
  import FilterBackground from "$lib/assets/filter-bg.png";
</script>

<Card href="https://vanish.so" additionalClasses="hover:scale-100 bg-[#010313]">
  <div
    class="px-[22px] py-4 flex flex-col justify-end items-start text-white h-full"
  >
    <img
      class="translate-y-6 group-hover:translate-y-0 transition-transform"
      src={VanishLogo}
      alt=""
    />
    <span
      class="z-10 translate-y-6 group-hover:translate-y-0 transition-transform text-xl mt-1 font-semibold"
      >vanish.so</span
    >
    <p
      class="font-medium translate-y-6 group-hover:translate-y-0 z-10 text-[#a78cea] opacity-0 group-hover:opacity-100 transition"
    >
      secure vanishing notes
    </p>
    <div
      class="absolute mx-auto bg-[#6F32F0] w-48 rounded-[50%] h-12 blur-[30px] -top-8 group-hover:translate-y-4 group-hover:scale-110 transition-transform"
    />
    <div
      class="absolute mx-auto bg-[#CDB8FC] w-48 rounded-[50%] h-12 blur-[30px] -bottom-8"
    />
    <div
      class="absolute mx-auto bg-[#6F32F0] w-48 rounded-[50%] h-10 blur-[30px] -bottom-8"
    />
  </div>
</Card>
