export default function Divider({ icon = "✦" }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 40px" }}>
      <div style={{ flex: 1, height: 1, background: "linear-gradient(to right,transparent,var(--gold2))" }} />
      <span style={{ color: "var(--gold)", fontSize: "1rem", letterSpacing: 6 }}>{icon}</span>
      <div style={{ flex: 1, height: 1, background: "linear-gradient(to left,transparent,var(--gold2))" }} />
    </div>
  );
}