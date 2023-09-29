<script>
  export let additionalClasses = "";
  import clsx from "clsx";
</script>

<button
  class={clsx(
    "bg-[#F7F7F7] p-4 rounded-3xl w-64 h-36 channel-shadow group",
    additionalClasses
  )}
>
  <slot />
</button>
