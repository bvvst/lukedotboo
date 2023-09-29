<script lang="ts">
  import clsx from "clsx";
  import { onMount, onDestroy } from "svelte";
  let left = "0";
  let top = "0";
  let clicked = false;
  let visible = false;

  onMount(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      // Cancel the previous frame if it exists
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }

      // Request the next frame
      animationFrameId = requestAnimationFrame(() => {
        left = e.pageX + "px";
        top = e.pageY + "px";
      });
    };

    const handleMouseDown = () => {
      clicked = true;
    };

    const handleMouseUp = () => {
      clicked = false;
    };

    const handleMouseEnter = () => {
      visible = true; // Show custom cursor
    };

    const handleMouseLeave = () => {
      visible = false; // Hide custom cursor
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup function
    onDestroy(() => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    });
  });
</script>

<img
  style="left: {left}; top: {top}; display: {visible ? 'block' : 'none'}"
  class={clsx(
    "absolute drop-shadow-md  z-20 pointer-events-none origin-top-left transition-transform opacity-100",
    clicked && "scale-105"
  )}
  src="/cursor.svg"
  alt=""
/>
