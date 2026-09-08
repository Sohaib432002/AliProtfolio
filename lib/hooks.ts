import { useSyncExternalStore } from "react";

function subscribeMedia(query: string, onStoreChange: () => void) {
  const mq = window.matchMedia(query);
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

export function useMediaQuery(query: string, serverSnapshot = false) {
  return useSyncExternalStore(
    (onStoreChange) => subscribeMedia(query, onStoreChange),
    () => window.matchMedia(query).matches,
    () => serverSnapshot,
  );
}

export function usePrefersReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}

export function useScrolled(threshold = 16) {
  return useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener("scroll", onStoreChange, { passive: true });
      return () => window.removeEventListener("scroll", onStoreChange);
    },
    () => window.scrollY > threshold,
    () => false,
  );
}

export function useSaveData() {
  return useSyncExternalStore(
    (onStoreChange) => {
      const connection = (
        navigator as Navigator & { connection?: EventTarget }
      ).connection;
      connection?.addEventListener("change", onStoreChange);
      return () => connection?.removeEventListener("change", onStoreChange);
    },
    () =>
      Boolean(
        (navigator as Navigator & { connection?: { saveData?: boolean } })
          .connection?.saveData,
      ),
    () => false,
  );
}
