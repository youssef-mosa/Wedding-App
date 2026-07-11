import { useState, useEffect, useRef } from "react";

export default function CountBlock({ value, label }) {
  const prev = useRef(value);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    if (prev.current !== value) {
      setFlip(true);
      setTimeout(() => setFlip(false), 350);
    }
    prev.current = value;
  }, [value]);

  return (
    <div style={{
      background: "rgba(255,255,255,.85)", border: "1px solid var(--gold2)",
      borderRadius: 16, padding: "18px 22px", textAlign: "center",
      minWidth: 72, boxShadow: "0 4px 20px rgba(180,100,120,.1)",
      backdropFilter: "blur(6px)",
    }}>
      <span key={value} className={flip ? "flip-in" : ""} style={{
        display: "block", fontFamily: "'Playfair Display',serif",
        fontSize: "2.4rem", color: "var(--deep)", lineHeight: 1,
      }}>
        {String(value).padStart(2, "0")}
      </span>
      <span style={{ fontSize: ".78rem", color: "var(--txt3)", fontFamily: "'Lateef', serif", marginTop: 4, display: "block" }}>
        {label}
      </span>
    </div>
  );
}