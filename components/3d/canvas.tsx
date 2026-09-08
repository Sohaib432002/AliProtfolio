"use client";

import dynamic from "next/dynamic";
import { usePrefersReducedMotion, useSaveData } from "@/lib/hooks";

const WebGLScene = dynamic(
  () => import("./webgl-scene").then((m) => m.WebGLScene),
  {
    ssr: false,
    loading: () => null,
  },
);

export function SceneCanvas() {
  const reduce = usePrefersReducedMotion();
  const saveData = useSaveData();

  if (reduce || saveData) return null;
  return <WebGLScene />;
}
