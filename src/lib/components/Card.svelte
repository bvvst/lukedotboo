<script>
  export let additionalClasses = "";
  export let href = "/";
  export let soft = false;

  import clsx from "clsx";
</script>

<a
  target="_blank"
  {href}
  class={clsx(
    "rounded-3xl flex relative w-64 h-36 group hover:scale-[1.01] transition-transform",
    additionalClasses,
    soft ? "soft-channel-shadow" : "channel-shadow"
  )}
>
  <div class="overflow-hidden flex relative w-full rounded-3xl">
    <slot />
  </div>
</a>
