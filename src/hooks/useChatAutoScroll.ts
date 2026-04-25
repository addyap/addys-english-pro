import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Reliable chat auto-scroll for both plain divs and Radix ScrollArea viewports.
 *
 * Usage:
 *   const { scrollRef, endRef, isAtBottom, scrollToBottom } = useChatAutoScroll([messages]);
 *   <ScrollArea ...>
 *     <div ref={scrollRef}>
 *       {messages.map(...)}
 *       <div ref={endRef} />
 *     </div>
 *   </ScrollArea>
 *
 * - Auto-scrolls to bottom when deps change AND the user is already near the bottom.
 * - If the user scrolls up to read older messages, auto-scroll is paused until they
 *   come back near the bottom (or click the Jump-to-latest button).
 * - Works with any scrollable ancestor (incl. Radix ScrollArea viewport).
 */
export function useChatAutoScroll(deps: ReadonlyArray<unknown>, threshold = 120) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const endRef = useRef<HTMLDivElement | null>(null);
  const stickRef = useRef(true);
  const [isAtBottom, setIsAtBottom] = useState(true);

  // Find the nearest scrollable ancestor (handles Radix ScrollArea viewport).
  const getScroller = useCallback((): HTMLElement | null => {
    let el: HTMLElement | null = scrollRef.current;
    while (el) {
      const style = window.getComputedStyle(el);
      const overflowY = style.overflowY;
      if ((overflowY === "auto" || overflowY === "scroll") && el.scrollHeight > el.clientHeight) {
        return el;
      }
      el = el.parentElement;
    }
    return null;
  }, []);

  const checkAtBottom = useCallback(() => {
    const scroller = getScroller();
    if (!scroller) return true;
    const distance = scroller.scrollHeight - scroller.scrollTop - scroller.clientHeight;
    return distance <= threshold;
  }, [getScroller, threshold]);

  const scrollToBottom = useCallback((behavior: ScrollBehavior = "smooth") => {
    stickRef.current = true;
    setIsAtBottom(true);
    // Prefer the end anchor — most reliable across Radix ScrollArea + plain divs.
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior, block: "end" });
      return;
    }
    const scroller = getScroller();
    if (scroller) {
      scroller.scrollTo({ top: scroller.scrollHeight, behavior });
    }
  }, [getScroller]);

  // Track user scroll position to decide whether to keep auto-scrolling.
  useEffect(() => {
    const scroller = getScroller();
    if (!scroller) return;
    const onScroll = () => {
      const atBottom = checkAtBottom();
      stickRef.current = atBottom;
      setIsAtBottom(atBottom);
    };
    scroller.addEventListener("scroll", onScroll, { passive: true });
    // Initial state
    onScroll();
    return () => scroller.removeEventListener("scroll", onScroll);
  }, [getScroller, checkAtBottom]);

  // Auto-scroll on dep changes — only if user is currently sticking to bottom.
  useEffect(() => {
    if (!stickRef.current) return;
    // Wait one frame so newly rendered content is laid out.
    const id = requestAnimationFrame(() => {
      if (endRef.current) {
        endRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
      } else {
        const scroller = getScroller();
        if (scroller) scroller.scrollTo({ top: scroller.scrollHeight, behavior: "smooth" });
      }
    });
    return () => cancelAnimationFrame(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { scrollRef, endRef, isAtBottom, scrollToBottom };
}
