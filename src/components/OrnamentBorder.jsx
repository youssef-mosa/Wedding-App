export default function OrnamentBorder() {
  return (
    <svg viewBox="0 0 400 560" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
      <rect x="12" y="12" width="376" height="536" rx="20" ry="20" fill="none" stroke="#c9a055" strokeWidth="1.2" strokeDasharray="8 4" />
      <rect x="24" y="24" width="352" height="512" rx="14" ry="14" fill="none" stroke="#e8d5a8" strokeWidth=".6" />
      
      {[[28,28,1,1],[372,28,-1,1],[28,532,1,-1],[372,532,-1,-1]].map(([cx,cy,sx,sy],i)=>(
        <g key={i} transform={`translate(${cx},${cy}) scale(${sx},${sy})`}>
          <path d="M0,0 Q12,-6 20,0 Q12,6 0,0Z" fill="#c9a055" opacity=".7"/>
          <path d="M0,0 Q-6,12 0,20 Q6,12 0,0Z" fill="#c9a055" opacity=".7"/>
          <circle cx="0" cy="0" r="3" fill="#c9a055" opacity=".5"/>
        </g>
      ))}

      <g transform="translate(200,36)">
        <path d="M-30,0 Q-15,-8 0,0 Q15,-8 30,0" fill="none" stroke="#c9a055" strokeWidth=".8"/>
        <circle cx="0" cy="0" r="3" fill="#c9a055" opacity=".6"/>
      </g>

      <g transform="translate(200,524)">
        <path d="M-30,0 Q-15,8 0,0 Q15,8 30,0" fill="none" stroke="#c9a055" strokeWidth=".8"/>
        <circle cx="0" cy="0" r="3" fill="#c9a055" opacity=".6"/>
      </g>
    </svg>
  );
}