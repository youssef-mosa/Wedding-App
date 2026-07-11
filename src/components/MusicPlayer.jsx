import { useState, useRef, useEffect } from "react";

// ── استبدل الـ URL ده بأي لنك mp3 عندك ──
const MUSIC_URL = "/music.mp3";   // لو الملف في public/
// أو حط لنك خارجي مثلاً:
// const MUSIC_URL = "https://example.com/your-song.mp3";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [tried, setTried] = useState(false);

  // محاولة تشغيل تلقائي بعد أول تفاعل
  useEffect(() => {
    const tryPlay = () => {
      if (!tried && audioRef.current) {
        audioRef.current.volume = 0.25;
        audioRef.current.play()
          .then(() => setPlaying(true))
          .catch(() => {});
        setTried(true);
      }
    };
    window.addEventListener("click", tryPlay, { once: true });
    window.addEventListener("touchstart", tryPlay, { once: true });
    return () => {
      window.removeEventListener("click", tryPlay);
      window.removeEventListener("touchstart", tryPlay);
    };
  }, [tried]);

  const toggle = (e) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.volume = 0.25;
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} src={MUSIC_URL} loop preload="auto" />

      {/* زرار صغير ثابت في الشاشة */}
      <button
        onClick={toggle}
        title={playing ? "إيقاف الموسيقى" : "تشغيل الموسيقى"}
        style={{
          position:   "fixed",
          bottom:     24,
          left:       24,
          zIndex:     999,
          width:      46,
          height:     46,
          borderRadius: "50%",
          border:     "1.5px solid rgba(201,160,85,.5)",
          background: "rgba(253,248,245,.85)",
          backdropFilter: "blur(8px)",
          cursor:     "pointer",
          display:    "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize:   "1.25rem",
          boxShadow:  "0 4px 16px rgba(180,100,120,.2)",
          transition: "transform .2s, box-shadow .2s",
        }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      >
        {playing ? "🔊" : "🔇"}
      </button>
    </>
  );
}