<script>
  import Card from "../Card.svelte";
  import GomokuLogo from "$lib/assets/gomoku.svg";
  import Board from "$lib/assets/board.png";
</script>

<Card
  href="https://gomoku.gg/"
  additionalClasses="hover:scale-100 bg-[#C2C2C2]"
>
  <div
    class="px-[22px] py-4 flex flex-col justify-end items-start text-white h-full"
  >
    <img
      class="translate-y-6 group-hover:translate-y-0 transition-transform"
      src={GomokuLogo}
      alt=""
    />
    <span
      class="translate-y-6 group-hover:translate-y-0 transition-transform text-xl mt-1 font-semibold text-gray-800"
      >gomoku.gg</span
    >
    <p
      class="font-medium translate-y-6 group-hover:translate-y-0 z-10 text-gray-800/80 opacity-0 group-hover:opacity-100 transition"
    >
      five in a row!
    </p>
    <img
      class="absolute top-5 -right-16 w-40 h-40 group-hover:-translate-y-2 transition-transform"
      src={Board}
      alt=""
    />
  </div>
</Card>
