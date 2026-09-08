"use client";

import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr } from "@react-three/drei";
import { NodeGraph } from "./node-graph";
import { useMediaQuery } from "@/lib/hooks";

export function WebGLScene() {
  const mobile = useMediaQuery("(max-width: 768px)");
  const coarse = useMediaQuery("(pointer: coarse)");
  const reduced = mobile || coarse;

  return (
    <Canvas
      camera={{ position: [0, 0.2, 7.2], fov: 42, near: 0.1, far: 40 }}
      dpr={reduced ? [1, 1.25] : [1, 1.5]}
      gl={{
        antialias: !reduced,
        alpha: true,
        powerPreference: reduced ? "low-power" : "high-performance",
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
      frameloop="always"
    >
      <AdaptiveDpr pixelated />
      <color attach="background" args={["#090a0c"]} />
      <fog attach="fog" args={["#090a0c", 6.5, 16]} />
      <ambientLight intensity={0.35} />
      <pointLight position={[4, 3, 4]} intensity={8} color="#c6a36a" distance={18} />
      <pointLight position={[-5, -2, 2]} intensity={4} color="#8f8a80" distance={16} />
      <NodeGraph reduced={reduced} />
    </Canvas>
  );
}
