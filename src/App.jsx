import "./styles/App.css";
import { useState, useEffect, useRef } from "react";
import Divider from "./components/Divider";
import CountBlock from "./components/CountBlock";
import OrnamentBorder from "./components/OrnamentBorder";
import { useCountdown } from "./hooks/useCountdown";
import { useReveal } from "./hooks/useReveal";
import Petals from "./components/Petals";

// ─── Photos ───────────────────────────────────────────────────────────────────
const PHOTOS = [
  "public/flowers.jpeg",
  "public/glass.jpeg",
  "public/thoush.jpeg",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=85",
  "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&q=85",
];

const WEDDING_DATE = new Date("2026-07-20T21:00:00");

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection({ r1 }) {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "80px 24px",
      background: "linear-gradient(160deg,#fdf8f5 0%,#f9eef0 60%,#f5dfe3 100%)",
      position: "relative", overflow: "hidden",
    }}>
      <Petals />

      {/* watermark */}
      <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", pointerEvents:"none", overflow:"hidden",zIndex: 1 }}>
        <span style={{ fontFamily:"'Playfair Display',serif", fontSize:"min(18vw,180px)", color:"rgba(201,160,85,.05)", whiteSpace:"nowrap", userSelect:"none", letterSpacing:20 }}>WEDDING</span>
      </div>

      {/* corner floral SVG – right */}
      <svg style={{ position:"absolute", top:0, right:0, width:190, height:210, opacity:.2, pointerEvents:"none",zIndex: 1 }} viewBox="0 0 200 220" fill="none">
        <circle cx="160" cy="40"  r="38" fill="#c97a88"/>
        <circle cx="185" cy="80"  r="26" fill="#e8b4bc"/>
        <circle cx="140" cy="75"  r="22" fill="#c97a88"/>
        <circle cx="170" cy="115" r="18" fill="#e8b4bc" opacity=".7"/>
        <path d="M160 40 Q140 90 120 140" stroke="#c9a055" strokeWidth="2" fill="none"/>
        <path d="M185 80 Q165 115 155 155" stroke="#c9a055" strokeWidth="1.5" fill="none"/>
        <ellipse cx="148" cy="95"  rx="14" ry="8" fill="#b8d4a8" transform="rotate(-30 148 95)"/>
        <ellipse cx="162" cy="130" rx="12" ry="7" fill="#b8d4a8" transform="rotate(20 162 130)"/>
      </svg>

      {/* corner floral SVG – left (mirrored) */}
      <svg style={{ position:"absolute", top:0, left:0, width:190, height:210, opacity:.2, pointerEvents:"none", transform:"scaleX(-1)" }} viewBox="0 0 200 220" fill="none">
        <circle cx="160" cy="40"  r="38" fill="#c97a88"/>
        <circle cx="185" cy="80"  r="26" fill="#e8b4bc"/>
        <circle cx="140" cy="75"  r="22" fill="#c97a88"/>
        <circle cx="170" cy="115" r="18" fill="#e8b4bc" opacity=".7"/>
        <path d="M160 40 Q140 90 120 140" stroke="#c9a055" strokeWidth="2" fill="none"/>
        <path d="M185 80 Q165 115 155 155" stroke="#c9a055" strokeWidth="1.5" fill="none"/>
        <ellipse cx="148" cy="95"  rx="14" ry="8" fill="#b8d4a8" transform="rotate(-30 148 95)"/>
        <ellipse cx="162" cy="130" rx="12" ry="7" fill="#b8d4a8" transform="rotate(20 162 130)"/>
      </svg>

      <div ref={r1} className="reveal" style={{ textAlign:"center", maxWidth:680, position:"relative", zIndex:2, width:"100%" }}>

        {/* بسم الله */}
        <p style={{ fontFamily:"'Amiri',serif", fontSize:"1.1rem", color:"var(--txt3)", letterSpacing:3, marginBottom:10 }}>
          بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ
        </p>

        {/* verse card */}
        <div style={{
          background: "rgba(255,255,255,.72)",
          border: "1px solid var(--gold2)",
          borderRadius: 16, padding: "16px 26px",
          margin: "0 auto 18px", maxWidth: 540,
          backdropFilter: "blur(6px)",
          boxShadow: "0 4px 20px rgba(180,100,120,.08)",
        }}>
          <p style={{ fontFamily:"'Amiri',serif", fontSize:"clamp(.95rem,2.3vw,1.15rem)", color:"var(--txt)", lineHeight:2.1, fontStyle:"italic" }}>
            "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً"
          </p>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:".8rem", color:"var(--txt3)", marginTop:6, letterSpacing:2 }}>
            — سورة الروم، آية ٢١
          </p>
        </div>

        {/* بارك الله */}
        <p style={{ fontFamily:"'Amiri',serif", fontSize:"clamp(1rem,2.6vw,1.3rem)", color:"var(--deep)", marginBottom:18, lineHeight:1.8 }}>
          بَارَكَ اللهُ لَهُمَا وَبَارَكَ عَلَيْهِمَا وَجَمَعَ بَيْنَهُمَا فِي خَيْر
        </p>

        {/* gold divider */}
        <div style={{ display:"flex", alignItems:"center", gap:12, margin:"0 auto 20px", maxWidth:420 }}>
          <div style={{ flex:1, height:1, background:"linear-gradient(to right,transparent,var(--gold))" }}/>
          <span style={{ color:"var(--gold)", fontSize:"1rem", letterSpacing:8 }}>✦ ✦ ✦</span>
          <div style={{ flex:1, height:1, background:"linear-gradient(to left,transparent,var(--gold))" }}/>
        </div>

        {/* يتشرفون banner */}
        <div style={{
          background: "linear-gradient(135deg,var(--deep),#b06070)",
          color: "#fff", borderRadius: 12,
          padding: "12px 26px", margin: "0 auto 24px",
          maxWidth: 480, fontFamily:"'Amiri',serif",
          fontSize: "clamp(.95rem,2.4vw,1.15rem)", lineHeight: 1.9,
          boxShadow: "0 6px 20px rgba(180,100,120,.35)",
        }}>
          يَتَشَرَّفُونَ بِدَعْوَتِكُمْ وَعَائِلَتَكُمُ الكَرِيمَةِ لِحُضُورِ حَفْلِ زِفَافِ نَجْلَيْهِمَا
        </div>

        {/* الآباء */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr auto 1fr", alignItems:"center", gap:12, margin:"0 auto 26px", maxWidth:520 }}>
          <div style={{ textAlign:"center" }}>
            <p style={{ fontFamily:"'Amiri',serif", fontSize:".8rem", color:"var(--txt3)", letterSpacing:2, marginBottom:4 }}>الأستاذ</p>
            <p style={{ fontFamily:"'Amiri',serif", fontSize:"clamp(1.05rem,2.8vw,1.4rem)", color:"var(--txt)", fontWeight:700, lineHeight:1.3 }}>عاطف فتحي حماد</p>
          </div>
          <div style={{ width:1, height:56, background:"linear-gradient(to bottom,transparent,var(--gold2),transparent)" }}/>
          <div style={{ textAlign:"center" }}>
            <p style={{ fontFamily:"'Amiri',serif", fontSize:".8rem", color:"var(--txt3)", letterSpacing:2, marginBottom:4 }}>الأستاذ</p>
            <p style={{ fontFamily:"'Amiri',serif", fontSize:"clamp(1.05rem,2.8vw,1.4rem)", color:"var(--txt)", fontWeight:700, lineHeight:1.3 }}>عبدالمعز محمد موسى</p>
          </div>
        </div>

        {/* فاصل */}
        <div style={{ display:"flex", alignItems:"center", gap:12, margin:"0 auto 24px", maxWidth:380 }}>
          <div style={{ flex:1, height:1, background:"linear-gradient(to right,transparent,var(--gold))" }}/>
          <span style={{ color:"var(--gold)", fontSize:"1.2rem" }}>❧</span>
          <div style={{ flex:1, height:1, background:"linear-gradient(to left,transparent,var(--gold))" }}/>
        </div>

        {/* أسماء العريس والعروسة */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"clamp(14px,4vw,46px)", flexWrap:"wrap", margin:"0 0 22px" }}>

          {/* العريس */}
          <div style={{ textAlign:"center", animation:"slideR .9s ease .15s both" }}>
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:".76rem", letterSpacing:4, color:"var(--txt3)", textTransform:"uppercase", marginBottom:8 }}>العريس</p>
            <h2 style={{ fontFamily:"'Amiri',serif", fontSize:"clamp(2.4rem,7vw,4rem)", color:"var(--txt)", lineHeight:1, textShadow:"0 2px 12px rgba(201,122,136,.15)" }}>أحمد</h2>
          </div>

          {/* قلب */}
          <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:6, animation:"popIn .8s cubic-bezier(.34,1.56,.64,1) .4s both" }}>
            <svg className="hb" width="66" height="60" viewBox="0 0 68 62" fill="none">
              <path d="M34 58C34 58 3 38 3 18C3 10 10 4 18 4C25 4 31 8 34 13C37 8 43 4 50 4C58 4 65 10 65 18C65 38 34 58 34 58Z" fill="url(#hgA)" stroke="#c9848f" strokeWidth="1.2"/>
              <defs>
                <radialGradient id="hgA" cx="40%" cy="35%" r="65%">
                  <stop offset="0%"   stopColor="#f9e0e3"/>
                  <stop offset="55%"  stopColor="#e8b4bc"/>
                  <stop offset="100%" stopColor="#c9848f"/>
                </radialGradient>
              </defs>
              <circle cx="24" cy="22" r="4"   fill="white" opacity=".5"/>
              <circle cx="31" cy="16" r="2.5" fill="white" opacity=".35"/>
            </svg>
            <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.3rem", fontStyle:"italic", color:"var(--gold)" }}>&amp;</span>
          </div>

          {/* العروسة */}
          <div style={{ textAlign:"center", animation:"slideL .9s ease .15s both" }}>
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:".76rem", letterSpacing:4, color:"var(--txt3)", textTransform:"uppercase", marginBottom:8 }}>العروسة</p>
            <h2 style={{ fontFamily:"'Amiri',serif", fontSize:"clamp(2.4rem,7vw,4rem)", color:"var(--txt)", lineHeight:1, textShadow:"0 2px 12px rgba(201,122,136,.15)" }}>منه الله</h2>
          </div>
        </div>

        <div style={{ height:1, background:"linear-gradient(to right,transparent,var(--gold),transparent)", margin:"0 auto 18px", maxWidth:380 }}/>

        <p style={{ fontFamily:"'Amiri',serif", fontSize:"1.15rem", color:"var(--txt2)", lineHeight:2 }}>
          يسعدنا بدعوتكم لحضور حفل زفافهما
        </p>

        {/* scroll hint */}
        <div style={{ marginTop:36, display:"flex", flexDirection:"column", alignItems:"center", gap:6, color:"var(--txt3)", fontSize:".85rem", animation:"float 2.5s ease-in-out infinite" }}>
          <span>اسكرول للتفاصيل</span>
          <span style={{ fontSize:"1.3rem" }}>↓</span>
        </div>
      </div>
    </section>
  );
}


// ─── Music Player ─────────────────────────────────────────────────────────────
function MusicPlayerInline() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const MUSIC_URL =
    "/starostin-wedding-wedding-invitation-music-261857.mp3";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.22;

    const tryPlay = () => {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
    };

    // تشغيل بعد أول تفاعل
    document.addEventListener("click", tryPlay, { once: true });
    document.addEventListener("touchstart", tryPlay, { once: true });
    document.addEventListener("keydown", tryPlay, { once: true });

    // محاولة تشغيل مباشرة
    tryPlay();

    return () => {
      document.removeEventListener("click", tryPlay);
      document.removeEventListener("touchstart", tryPlay);
      document.removeEventListener("keydown", tryPlay);
    };
  }, []);

  const toggle = (e) => {
    e.stopPropagation();

    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={MUSIC_URL}
        loop
        preload="auto"
      />

      <button
        onClick={toggle}
        title={playing ? "إيقاف الموسيقى" : "تشغيل الموسيقى"}
        style={{
          position: "fixed",
          bottom: 24,
          left: 24,
          zIndex: 999,
          width: 46,
          height: 46,
          borderRadius: "50%",
          border: "1.5px solid rgba(201,160,85,.5)",
          background: "rgba(253,248,245,.88)",
          backdropFilter: "blur(8px)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.2rem",
          boxShadow: "0 4px 16px rgba(180,100,120,.2)",
          transition: "transform .2s",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "scale(1.12)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "scale(1)")
        }
      >
        {playing ? "🔊" : "🔇"}
      </button>
    </>
  );
}
// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [phase, setPhase] = useState(0);
  const countdown = useCountdown(WEDDING_DATE.getTime());
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal(), r5 = useReveal();

  const handleOpen = () => {
    if (phase !== 0) return;
    setPhase(1);
    setTimeout(() => setPhase(2), 1400);
  };

  return (
    <>
      <Petals />
      <MusicPlayerInline />

      {/* ── Envelope overlay ── */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 10,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "linear-gradient(135deg,#fdf8f5 0%,#f9eef0 50%,#f5dfe3 100%)",
        pointerEvents: phase === 2 ? "none" : "auto",
        opacity: phase === 2 ? 0 : 1,
        transition: "opacity .8s ease .6s",
      }}>
        <div style={{ position:"relative", width:"min(420px,92vw)", height:"min(580px,88vh)", perspective:1400 }}>
          <OrnamentBorder />

          {/* Top flap */}
          <div style={{
            position:"absolute", top:0, left:0, right:0, height:"50%",
            background:"linear-gradient(160deg,#fdf6f0,#f9eef0,#f2d4d7)",
            borderRadius:"18px 18px 0 0",
            transformOrigin:"top center",
            transform: phase >= 1 ? "rotateX(-165deg)" : "rotateX(0deg)",
            transition:"transform 1.1s cubic-bezier(.45,.05,.55,.95)",
            zIndex:20, backfaceVisibility:"hidden",
            boxShadow:"inset 0 -20px 40px rgba(180,100,120,.08)",
          }}>
            <svg viewBox="0 0 420 290" style={{ position:"absolute", bottom:0, left:0, width:"100%", height:"100%" }}>
              <path d="M0,290 L210,120 L420,290" fill="rgba(201,160,85,.08)" stroke="rgba(201,160,85,.25)" strokeWidth=".8"/>
            </svg>
            <div style={{
              position:"absolute", bottom:20, left:"50%", transform:"translateX(-50%)",
              width:54, height:54, borderRadius:"50%",
              background:"radial-gradient(circle at 35% 35%,#e8d080,#c9a055,#9a7030)",
              display:"flex", alignItems:"center", justifyContent:"center",
              boxShadow:"0 3px 12px rgba(150,100,30,.4)", fontSize:"1.3rem",
            }}>💍</div>
          </div>

          {/* Bottom flap */}
          <div style={{
            position:"absolute", bottom:0, left:0, right:0, height:"50%",
            background:"linear-gradient(200deg,#f9eef0,#f2d4d7,#eedadd)",
            borderRadius:"0 0 18px 18px",
            transformOrigin:"bottom center",
            transform: phase >= 1 ? "rotateX(165deg)" : "rotateX(0deg)",
            transition:"transform 1.1s cubic-bezier(.45,.05,.55,.95) .1s",
            zIndex:20, backfaceVisibility:"hidden",
          }}>
            <svg viewBox="0 0 420 290" style={{ position:"absolute", top:0, left:0, width:"100%", height:"100%" }}>
              <path d="M0,0 L210,170 L420,0" fill="rgba(201,160,85,.08)" stroke="rgba(201,160,85,.25)" strokeWidth=".8"/>
            </svg>
          </div>

          {/* Card inner */}
          <div style={{
            position:"absolute", inset:0, borderRadius:18, zIndex:20,
            display:"flex", flexDirection:"column", alignItems:"center",
            justifyContent:"space-evenly", gap:20, padding:"40px 32px",
          }}>
            <div className="float" style={{ fontSize:"3rem" }}>💌</div>
            <div style={{ textAlign:"center" }}>
              <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:".9rem", letterSpacing:5, color:"var(--txt3)", textTransform:"uppercase", marginTop:-26 }}>Wedding Invitation</p>
              <h1 className="shimmer" style={{ fontFamily:"'Amiri',serif", fontSize:"2.2rem", lineHeight:1.4,marginBottom:15 }}>دعوة زفاف</h1>
            </div>
            <div style={{ color:"var(--gold)", fontSize:"1.6rem", letterSpacing:10, marginTop:-10 }}>✦ ✦ ✦</div>
            <p style={{ fontFamily:"'Amiri',serif", fontSize:"1.1rem", color:"var(--txt2)", textAlign:"center", lineHeight:1.8 }}>
              يسعدنا دعوتكم للاحتفال<br/>بزفاف نجلينا الكريمين
            </p>
            <div style={{ position:"relative" }}>
              <div className="ring"/>
              <div className="ring ring2"/>
              <button onClick={handleOpen} style={{
                position:"relative", zIndex:11,
                background:"linear-gradient(135deg,var(--deep),#b06070)",
                color:"#fff", border:"none", borderRadius:50,
                padding:"14px 36px", fontSize:"1.05rem",
                fontFamily:"'Amiri',serif", cursor:"pointer",
                letterSpacing:1, boxShadow:"0 8px 24px rgba(180,100,120,.4)",
              }}>
                افتح الدعوة ✨
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Page content ── */}
      <div style={{ position:"relative", zIndex:1, overflowX:"hidden" }}>

        <HeroSection r1={r1} />

        {/* divider */}
        <div style={{ display:"flex", alignItems:"center", gap:14, padding:"10px 40px", background:"white" }}>
          <div style={{ flex:1, height:1, background:"linear-gradient(to right,transparent,var(--gold2))" }}/>
          <span style={{ color:"var(--gold)", fontSize:".9rem", letterSpacing:6 }}>✦ ✦ ✦</span>
          <div style={{ flex:1, height:1, background:"linear-gradient(to left,transparent,var(--gold2))" }}/>
        </div>

        {/* DATE & COUNTDOWN */}
        <section style={{ padding:"80px 24px", background:"white", position:"relative" }}>
          <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(var(--gold2) 1px,transparent 1px)", backgroundSize:"28px 28px", opacity:.4, pointerEvents:"none" }}/>
          <div ref={r2} className="reveal" style={{ maxWidth:640, margin:"0 auto", textAlign:"center", position:"relative", zIndex:1 }}>
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:".85rem", letterSpacing:6, color:"var(--txt3)", textTransform:"uppercase", marginBottom:20 }}>موعد الاحتفال</p>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"clamp(10px,3vw,28px)", margin:"0 0 28px" }}>
              {[["20","يوم"],["07","شهر"],["2026","سنة"]].map(([n,l],i) => (
                <div key={i} style={{ textAlign:"center" }}>
                  <div style={{ fontFamily:"'Playfair Display',serif", fontSize:`clamp(2.4rem,${i===2?6:7}vw,${i===2?"3.4rem":"4.2rem"})`, color:"var(--deep)", lineHeight:1 }}>{n}</div>
                  <div style={{ fontFamily:"'Amiri',serif", fontSize:".85rem", color:"var(--txt3)", marginTop:4 }}>{l}</div>
                </div>
              ))}
            </div>
            <Divider icon="🌸"/>
            <p style={{ fontFamily:"'Amiri',serif", fontSize:"1.2rem", color:"var(--txt2)", margin:"16px 0 8px" }}>🕘 الساعة التاسعة مساءً</p>
            <p style={{ fontFamily:"'Amiri',serif", fontSize:"1.05rem", color:"var(--txt3)" }}>📍 قاعة بارادايس — زفتى، الغربية</p>
            <a href="https://maps.app.goo.gl/DhWomWwueeFM4UEo6"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 14,
                  padding: "10px 24px",
                  background: "linear-gradient(135deg,var(--deep),#b06070)",
                  color: "#fff",
                  borderRadius: 50,
                  fontFamily: "'Amiri',serif",
                  fontSize: "1rem",
                  textDecoration: "none",
                  boxShadow: "0 4px 16px rgba(180,100,120,.35)",
                  transition: "transform .2s",
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                🗺️ عرض الموقع على الخريطة
              </a>
              <p style={{ fontFamily:"'Amiri',serif", fontSize:".9rem", color:"var(--txt3)", marginTop:8 }}>
                قاعة بارادايس — أمام مصنع النسيج، زفتى
              </p>
            <Divider/>
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:".85rem", letterSpacing:6, color:"var(--txt3)", textTransform:"uppercase", margin:"8px 0 20px" }}>العد التنازلي</p>
            <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
              <CountBlock value={countdown.days}    label="يوم"/>
              <CountBlock value={countdown.hours}   label="ساعة"/>
              <CountBlock value={countdown.minutes} label="دقيقة"/>
              <CountBlock value={countdown.seconds} label="ثانية"/>
            </div>
          </div>
        </section>

        <Divider icon="✦ ✦ ✦"/>

        {/* VERSE */}
        <section style={{ padding:"60px 24px", textAlign:"center", background:"linear-gradient(160deg,#fdf8f5,#f5dfe3)" }}>
          <div ref={r3} className="reveal" style={{ maxWidth:520, margin:"0 auto" }}>
            <div style={{ fontSize:"2.5rem", marginBottom:20 }}>🕊</div>
            <blockquote style={{ fontFamily:"'Amiri',serif", fontSize:"clamp(1.2rem,3vw,1.6rem)", color:"var(--txt)", lineHeight:2, fontStyle:"italic", borderRight:"3px solid var(--gold)", paddingRight:20, marginBottom:14 }}>
              "وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً"
            </blockquote>
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:".9rem", color:"var(--txt3)", letterSpacing:2 }}>— سورة الروم، آية ٢١</p>
          </div>
        </section>

        <Divider/>

        {/* GALLERY */}
        <section style={{ padding:"60px 24px 80px", background:"var(--cream)" }}>
          <div ref={r4} className="reveal" style={{ textAlign:"center", marginBottom:40 }}>
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:".85rem", letterSpacing:6, color:"var(--txt3)", textTransform:"uppercase", marginBottom:10 }}>معرض الصور</p>
            <h2 style={{ fontFamily:"'Amiri',serif", fontSize:"clamp(1.6rem,4vw,2.2rem)", color:"var(--txt)" }}>لحظات سعيدة 💕</h2>
          </div>
          <div ref={r5} className="reveal" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:14, maxWidth:860, margin:"0 auto" }}>
            <div className="gitem" style={{ gridColumn:"1/2", gridRow:"1/3", aspectRatio:"2/3" }}><img src={PHOTOS[0]} alt="" loading="lazy"/></div>
            <div className="gitem" style={{ gridColumn:"2/3", gridRow:"1/2", aspectRatio:"4/3" }}><img src={PHOTOS[1]} alt="" loading="lazy"/></div>
            <div className="gitem" style={{ gridColumn:"3/4", gridRow:"1/2", aspectRatio:"4/3" }}><img src={PHOTOS[2]} alt="" loading="lazy"/></div>
            <div className="gitem" style={{ gridColumn:"2/3", gridRow:"2/3", aspectRatio:"4/3" }}><img src={PHOTOS[3]} alt="" loading="lazy"/></div>
            <div className="gitem" style={{ gridColumn:"3/4", gridRow:"2/3", aspectRatio:"4/3" }}><img src={PHOTOS[4]} alt="" loading="lazy"/></div>
          </div>
        </section>

        {/* FOOTER */}
        <section style={{ padding:"60px 24px 80px", textAlign:"center", background:"linear-gradient(160deg,#f9eef0,#f5dfe3,#fdf8f5)" }}>
          <div style={{ maxWidth:480, margin:"0 auto" }}>
            <div style={{ color:"var(--gold)", fontSize:"1.8rem", letterSpacing:14, marginBottom:24 }}>✦ ✦ ✦</div>
            <p className="shimmer" style={{ fontFamily:"'Amiri',serif", fontSize:"1.8rem", lineHeight:1.6, fontStyle:"italic", marginBottom:20 }}>أحمد ❤ منه الله</p>
            <Divider/>
            <p style={{ fontFamily:"'Amiri',serif", fontSize:"1.15rem", color:"var(--txt2)", lineHeight:2, marginTop:16 }}>
              في انتظار حضوركم الكريم<br/>
              <span style={{ fontSize:".95rem", color:"var(--txt3)" }}>الإثنين ٢٠ يوليو ٢٠٢٦</span>
            </p>
            <div style={{ marginTop:32, color:"var(--txt3)", fontSize:".85rem", fontFamily:"'Amiri',serif" }}>
              Made by Youssef Mosa ❤️
            </div>
          </div>
        </section>
      </div>
    </>
  );
}