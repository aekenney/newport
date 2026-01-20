import { useEffect, useRef, RefObject } from 'react';

/**
 * Custom hook to auto-scroll an element to bottom when content changes
 * @param dependencies - Dependencies that trigger scroll
 * @returns Ref to attach to scrollable element
 */
export function useAutoScroll<T extends HTMLElement>(
    dependencies: unknown[] = []
): RefObject<T> {
    const scrollRef = useRef<T>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);

    return scrollRef;
}
