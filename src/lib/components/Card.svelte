<script>
  export let additionalClasses = "";
  export let href = "/";

  import clsx from "clsx";
</script>

<a
  {href}
  class={clsx(
    "rounded-3xl flex overflow-hidden relative w-64 h-36 channel-shadow group hover:scale-[1.01] transition-transform",
    additionalClasses
  )}
>
  <slot />
</a>
