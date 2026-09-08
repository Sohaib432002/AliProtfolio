"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type NodeGraphProps = {
  reduced: boolean;
};

export function NodeGraph({ reduced }: NodeGraphProps) {
  const group = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const scroll = useRef(0);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scroll.current = max > 0 ? window.scrollY / max : 0;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const { pointGeo, lineGeo, hubs } = useMemo(() => {
    const count = reduced ? 42 : 96;
    const pts: THREE.Vector3[] = [];

    for (let i = 0; i < count; i += 1) {
      const layer = i % 3;
      const a = (i / count) * Math.PI * 2 * 2.4;
      const r = 1.9 + (i % 8) * 0.16;
      const x = Math.cos(a) * r * (0.55 + (i % 5) * 0.07);
      const y = (layer - 1) * 1.28 + Math.sin(i * 1.7) * 0.22;
      const z = Math.sin(a) * r * (0.55 + (i % 4) * 0.09);
      pts.push(new THREE.Vector3(x, y, z));
    }

    const pointGeo = new THREE.BufferGeometry();
    pointGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(
        pts.flatMap((p) => [p.x, p.y, p.z]),
        3,
      ),
    );

    const linePos: number[] = [];
    const threshold = reduced ? 1.15 : 1.32;
    for (let i = 0; i < pts.length; i += 1) {
      for (let j = i + 1; j < pts.length; j += 1) {
        if (pts[i].distanceTo(pts[j]) < threshold) {
          linePos.push(pts[i].x, pts[i].y, pts[i].z, pts[j].x, pts[j].y, pts[j].z);
        }
      }
    }
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(linePos, 3));

    const hubs: [number, number, number][] = [
      [0.15, 1.28, 0.4],
      [-0.2, 0, -0.15],
      [0.35, -1.28, 0.2],
    ];

    return { pointGeo, lineGeo, hubs };
  }, [reduced]);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    const targetY = mouse.current.x * 0.28 + scroll.current * 0.9;
    const targetX = -mouse.current.y * 0.14;
    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.035;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.035;
    group.current.position.y = Math.sin(t * 0.18) * 0.07;
  });

  return (
    <group ref={group} position={[1.55, 0.15, 0]} scale={reduced ? 0.92 : 1.12}>
      <points geometry={pointGeo}>
        <pointsMaterial
          size={reduced ? 0.028 : 0.034}
          color="#c6a36a"
          transparent
          opacity={0.72}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
      <lineSegments geometry={lineGeo}>
        <lineBasicMaterial color="#c6a36a" transparent opacity={0.13} />
      </lineSegments>
      {hubs.map((pos) => (
        <mesh key={pos.join("-")} position={pos}>
          <icosahedronGeometry args={[0.16, 0]} />
          <meshStandardMaterial
            color="#c6a36a"
            wireframe
            transparent
            opacity={0.55}
            roughness={0.4}
            metalness={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}
