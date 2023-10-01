<script>
  import Card from "../Card.svelte";
</script>

<Card
  href=""
  additionalClasses="hover:scale-100 bg-gradient-to-b from-[#D8DAE0] to-[#C0C3CE]"
>
  <div
    class="px-[22px] py-4 flex flex-col justify-end items-start text-white h-full"
  >
    <span
      class="translate-y-6 group-hover:translate-y-0 transition-transform text-xl mt-1 font-semibold text-gray-800"
      >meet my friends!</span
    >
    <p
      class="font-medium translate-y-6 group-hover:translate-y-0 z-10 text-gray-800/80 opacity-0 group-hover:opacity-100 transition"
    >
      coming soon
    </p>
    <div class="absolute top-4 left-5 flex gap-1">
      <img class="h-14 rendering-pixelated" src="sprites/luke.png" alt="" />
      <img class="h-14 rendering-pixelated" src="sprites/alex.png" alt="" />
      <img class="h-14 rendering-pixelated" src="sprites/kyle.png" alt="" />
      <img class="h-14 rendering-pixelated" src="sprites/src.png" alt="" />
      <img class="h-14 rendering-pixelated" src="sprites/pizza.png" alt="" />
    </div>
  </div>
</Card>
