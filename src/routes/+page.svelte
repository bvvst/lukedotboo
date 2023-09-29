<script>
  import Card from "$lib/components/Card.svelte";
  import Disc from "$lib/assets/disc.png";
  import NotchEdge from "$lib/assets/notch-edge.svg";
  import EmptyCard from "$lib/components/EmptyCard.svelte";
  import MoreSoonCard from "$lib/components/MoreSoonCard.svelte";
  // notch
  // https://stackoverflow.com/questions/31765345/how-to-round-out-corners-when-using-css-clip-path

  // static/fonts/SpaceGrotesk-Bold.ttf
  // static/fonts/SpaceGrotesk-Light.ttf
  // static/fonts/SpaceGrotesk-Medium.ttf
  // static/fonts/SpaceGrotesk-Regular.ttf
  // static/fonts/SpaceGrotesk-SemiBold.ttf
</script>

<main class="h-screen flex flex-col">
  <div
    class="flex flex-col justify-start items-start m-auto max-w-7xl relative w-full"
  >
    <div
      class="absolute top-0 bottom-0 right-0 w-14 bg-gradient-to-r from-transparent to-[#EEEEEE] z-10"
    />
    <div
      class="absolute top-0 bottom-0 left-0 w-14 bg-gradient-to-l from-transparent to-[#EEEEEE] z-10"
    />
    <div
      class="grid grid-rows-3 grid-flow-col gap-4 p-8 px-14 w-full max-w-7xl mx-auto overflow-scroll"
    >
      <MoreSoonCard />

      <EmptyCard />
      <EmptyCard />

      <EmptyCard />
      <EmptyCard />
      <EmptyCard />

      <EmptyCard />
      <EmptyCard />
      <EmptyCard />

      <EmptyCard />
      <EmptyCard />
      <EmptyCard />

      <EmptyCard />
      <EmptyCard />
      <EmptyCard />

      <EmptyCard />
      <EmptyCard />
      <EmptyCard />
    </div>
  </div>

  <div class="w-full flex flex-col">
    <div class="flex">
      <div class="w-full bg-[#DBDCDD] h-[70px]" />
      <img class="w-[170px] h-[70px] -scale-x-100" src={NotchEdge} alt="" />
      <div class="w-[100rem]">
        <p
          class="text-2xl font-medium text-center text-[#010313]/50 translate-y-3 w-full"
        >
          my projects
        </p>
      </div>
      <img class="w-[170px] h-[70px]" src={NotchEdge} alt="" />
      <div class="w-full bg-[#DBDCDD] h-[70px]" />
    </div>
    <div class="w-full bg-[#DBDCDD] min-h-[70px]" />
  </div>
</main>
