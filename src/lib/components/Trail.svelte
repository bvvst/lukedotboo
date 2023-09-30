<script lang="ts">
  import clsx from "clsx";
  import { onMount, onDestroy } from "svelte";
  let left = "0";
  let top = "0";
  let clicked = false;
  let visible = false;

  function throttle(func: any, delay: number) {
    let lastCall = 0;
    return (...args: any[]) => {
      const now = Date.now();
      if (now - lastCall < delay) return;
      lastCall = now;
      return func(...args);
    };
  }

  onMount(() => {
    let animationFrameId: number;

    const handleMouseMove = throttle((e: MouseEvent) => {
      // Cancel the previous frame if it exists
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }

      visible = true;

      // Request the next frame
      animationFrameId = requestAnimationFrame(() => {
        left = e.pageX + "px";
        top = e.pageY + "px";
      });
    }, 6);

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
    "crt absolute drop-shadow-md z-20 pointer-events-none origin-top-left transition-transform opacity-40",
    clicked && "scale-105"
  )}
  src="/trail.svg"
  alt=""
/>
