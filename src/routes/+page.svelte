<script lang="ts">
  import NotchEdge from "$lib/assets/notch-edge.svg";
  import EmptyCard from "$lib/components/EmptyCard.svelte";
  import MoreSoonCard from "$lib/components/MoreSoonCard.svelte";
  import { onMount } from "svelte";
  import FilterCard from "$lib/components/cards/FilterCard.svelte";
  import GomokuCard from "$lib/components/cards/GomokuCard.svelte";
  import VanishCard from "$lib/components/cards/VanishCard.svelte";
  import GithubCard from "$lib/components/cards/GithubCard.svelte";
  import SpotifyCard from "$lib/components/cards/SpotifyCard.svelte";
  import MiiChannel from "$lib/components/cards/MiiChannel.svelte";
  import WhopCard from "$lib/components/cards/WhopCard.svelte";
  import Twitter from "$lib/assets/twitter.svg";
  import Email from "$lib/assets/email.svg";

  onMount(() => {
    const container: HTMLElement | null =
      document.querySelector(".horizontal-scroll");
    container?.addEventListener("wheel", function (e: WheelEvent) {
      if (e.deltaY) {
        e.preventDefault(); // Prevents vertical scroll
        container.scrollLeft += e.deltaY * 0.4; // Adjust scrolling speed
      }
    });
  });
</script>

<main class="h-screen fixed w-screen overflow-hidden flex flex-col">
  <div
    class="flex flex-col justify-start items-start m-auto max-w-7xl relative w-full"
  >
    <div
      class="hidden md:block absolute top-0 bottom-0 right-0 w-14 bg-gradient-to-r from-transparent to-[#EEEEEE] z-10"
    />
    <div
      class="hidden md:block absolute top-0 bottom-0 left-0 w-14 bg-gradient-to-l from-transparent to-[#EEEEEE] z-10"
    />
    <div
      class="fade-in-right grid grid-rows-3 grid-flow-col gap-4 p-2 px-4 md:p-8 md:px-14 w-full max-w-7xl mx-auto horizontal-scroll"
    >
      <MoreSoonCard />
      <VanishCard />
      <SpotifyCard />

      <MiiChannel />
      <GomokuCard />
      <WhopCard />

      <FilterCard />
      <GithubCard />
      <EmptyCard />

      <EmptyCard />
      <EmptyCard />
      <EmptyCard />

      <EmptyCard soft={true} />
      <EmptyCard soft={true} />
      <EmptyCard soft={true} />
    </div>
  </div>

  <div class="w-full flex flex-col sm:mb-0 relative fade-in-bottom">
    <a
      href="https://twitter.com/bvvst"
      class="z-10 absolute transition-all shadow-md hover:shadow-lg rounded-full flex ring-1 hover:ring-4 ring-[#C5C7CA] hover:ring-blue-400 bg-[#EEEEEE] w-10 h-10 sm:h-20 sm:w-20 top-2.5 left-2.5 sm:top-6 sm:left-6"
    >
      <img class="m-auto" src={Twitter} alt="" />
    </a>
    <a
      href="mailto:hi@luke.boo"
      class="z-10 absolute transition-all shadow-md hover:shadow-lg rounded-full flex ring-1 hover:ring-4 ring-[#C5C7CA] hover:ring-blue-400 bg-[#EEEEEE] w-10 h-10 sm:h-20 sm:w-20 top-2.5 right-2.5 sm:top-6 sm:right-6"
    >
      <img class="m-auto" src={Email} alt="" />
    </a>
    <p
      class="absolute left-0 right-0 bottom-2 sm:bottom-6 text-sm font-medium text-center whitespace-nowrap text-[#010313]/30"
    >
      not affiliated with nintendo
    </p>
    <div class="flex">
      <div class="w-full overflow-hidden bg-[#DBDCDD] h-[50px] sm:h-[70px]" />
      <img
        class="w-[122px] h-[50px] sm:w-[170px] sm:h-[70px] -scale-x-100"
        src={NotchEdge}
        alt=""
      />
      <div class=" sm:w-[100rem]">
        <p
          class="text-xl sm:text-2xl font-medium text-center whitespace-nowrap text-[#010313]/50 translate-y-3 w-full"
        >
          luke.boo
        </p>
        <!-- <p
          class="text-sm font-medium text-center whitespace-nowrap text-[#010313]/30 translate-y-3 w-full"
        >
          not affiliated with nintendo
        </p> -->
      </div>
      <img
        class="w-[122px] h-[50px] sm:h-[70px] sm:w-[170px]"
        src={NotchEdge}
        alt=""
      />
      <div class="w-full bg-[#DBDCDD] h-[50px] sm:h-[70px]" />
    </div>
    <div class="w-full bg-[#DBDCDD] h-[40px] sm:min-h-[70px]" />
  </div>
  <div class="block sm:hidden w-full h-28 bg-[#DBDCDD]" />
</main>

<style>
  .horizontal-scroll {
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    scrollbar-width: none; /* For Firefox */
    -ms-overflow-style: none; /* For Internet Explorer and Edge */
  }

  .horizontal-scroll::-webkit-scrollbar {
    width: 0px; /* For Chrome, Safari, and Opera */
  }
</style>
