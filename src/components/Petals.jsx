import { useRef } from "react";

export default function Petals() {
  const itemsRef = useRef(
    Array.from({ length: 34 }, (_, i) => {
      const rotate = Math.random() * 360;
      const drift = -40 + Math.random() * 80;

      const duration = 16 + Math.random() * 20;
      const delay = -(Math.random() * duration);

      return {
        id: i,
        left: Math.random() * 100,
        size: 12 + Math.random() * 18,
        opacity: 0.2 + Math.random() * 0.35,
        rotate,
        drift,
        duration,
        delay,
      };
    })
  );

  const items = itemsRef.current;

  const css = items
    .map(
      (r) => `
@keyframes petal_${r.id} {
  0% {
    transform: translate3d(0,-10vh,0) rotate(${r.rotate}deg);
    opacity: 0;
  }
  10% { opacity: ${r.opacity}; }
  100% {
    transform: translate3d(${r.drift}px,110vh,0) rotate(${r.rotate + 480}deg);
    opacity: 0;
  }
}
`
    )
    .join("\n");

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      <style>{css}</style>

      {items.map((r) => (
        <div
          key={r.id}
          style={{
            position: "absolute",
            left: `${r.left}%`,
            top: "-10vh",
            fontSize: `${r.size}px`,
            opacity: r.opacity,
            animation: `petal_${r.id} ${r.duration}s linear ${r.delay}s infinite`,
            willChange: "transform",
          }}
        >
          🌸
        </div>
      ))}
    </div>
  );
}