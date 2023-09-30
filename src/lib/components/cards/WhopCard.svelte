<script>
  import Card from "../Card.svelte";
  import WhopBg from "$lib/assets/whop-bg.png";
  import Whop from "$lib/assets/whop.svg";
</script>

<Card
  href="https://whop.io/sell"
  additionalClasses="hover:scale-100 bg-[#F5F5F7]/20"
>
  <div
    class="px-[22px] py-4 flex flex-col justify-end items-start text-white h-full"
  >
    <img
      class="z-10 translate-y-6 group-hover:translate-y-0 transition-transform"
      src={Whop}
      alt=""
    />
    <span
      class="translate-y-6 z-10 group-hover:translate-y-0 transition-transform text-xl mt-1 font-semibold text-gray-800"
      >(prev.) whop.io</span
    >
    <p
      class="font-medium translate-y-6 group-hover:translate-y-0 z-10 text-gray-800/80 opacity-0 group-hover:opacity-100 transition"
    >
      frontend/design
    </p>
    <img
      class="absolute bottom-0 right-0 h-[164px] group-hover:-translate-y-2 transition-transform"
      src={WhopBg}
      alt=""
    />
  </div>
</Card>
