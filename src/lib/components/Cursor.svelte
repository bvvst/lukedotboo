<script lang="ts">
  import clsx from "clsx";
  import { onMount, onDestroy } from "svelte";
  let left = "0";
  let top = "0";
  // let tleft = "0";
  // let ttop = "0";
  let clicked = false;
  let visible = false;
  // let tvisible = false;

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
    // let tanimationFrameId: number;

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
    }, 0);

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

    // const handleMousetMove = throttle((e: MouseEvent) => {
    //   // Cancel the previous frame if it exists
    //   if (animationFrameId !== null) {
    //     cancelAnimationFrame(tanimationFrameId);
    //   }

    //   tvisible = true;

    //   // Request the next frame
    //   tanimationFrameId = requestAnimationFrame(() => {
    //     tleft = e.pageX + "px";
    //     ttop = e.pageY + "px";
    //   });
    // }, 10);

    // const handleMousetEnter = () => {
    //   tvisible = true; // Show custom cursor
    // };

    // const handleMousetLeave = () => {
    //   visible = false; // Hide custom cursor
    // };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    // document.addEventListener("mousemove", handleMousetMove);
    // document.addEventListener("mouseenter", handleMousetEnter);
    // document.addEventListener("mouseleave", handleMousetLeave);

    // Cleanup function
    onDestroy(() => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      // document.removeEventListener("mousemove", handleMousetMove);
      // document.removeEventListener("mouseenter", handleMousetEnter);
      // document.removeEventListener("mouseleave", handleMousetLeave);

      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
        // cancelAnimationFrame(tanimationFrameId);
      }
    });
  });
</script>

<img
  style="left: {left}; top: {top}; display: {visible ? 'block' : 'none'}"
  class={clsx(
    "crt absolute drop-shadow-md z-10 pointer-events-none origin-top-left transition-transform opacity-0 md:opacity-50",
    clicked && "scale-105"
  )}
  src="/trail.svg"
  alt=""
/>
