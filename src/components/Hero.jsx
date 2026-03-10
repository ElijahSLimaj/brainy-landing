function PhoneMock({ screenshot, label, className = '' }) {
  return (
    <div className={`relative rounded-[2.2rem] overflow-hidden border border-white/10 bg-surface shadow-2xl ${className}`} style={{ width: 210 }}>
      {screenshot
        ? <img src={screenshot} alt={label} className="w-full block" />
        : (
          <div className="w-full flex flex-col items-center justify-center gap-3 text-t3 text-xs font-medium" style={{ aspectRatio: '9/19.5' }}>
            <div className="w-10 h-10 rounded-xl bg-purple-dim border border-purple-border flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A89FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2"/>
                <line x1="12" y1="18" x2="12.01" y2="18"/>
              </svg>
            </div>
            {label}
          </div>
        )
      }
    </div>
  )
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-16 relative overflow-hidden">
      {/* bg glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,111,255,0.16) 0%, transparent 65%)' }} />

      <div className="relative z-10 flex flex-col items-center">
        {/* eyebrow */}
        <div className="inline-flex items-center gap-2 border border-purple-border bg-purple-dim text-purple-2 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-purple shadow-[0_0_8px_#7C6FFF]" />
          NOW AVAILABLE ON IOS
        </div>

        <h1 className="text-[clamp(48px,9vw,96px)] font-black leading-[1.02] tracking-[-3px] max-w-4xl mb-6">
          Learn anything<br />in <span className="text-grad-purple">minutes a day</span>
        </h1>

        <p className="text-t2 text-[clamp(16px,2vw,19px)] max-w-[440px] leading-relaxed mb-12">
          Bite-sized lessons, AI tutoring, and daily streaks that actually stick. Personal growth that fits your life.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="#download"
            id="download"
            className="inline-flex items-center gap-2.5 bg-purple text-white font-bold text-[15px] px-7 py-4 rounded-2xl glow transition-all hover:-translate-y-0.5"
          >
            <AppleIcon />
            Download on App Store
          </a>
          <a
            href="#how"
            className="inline-flex items-center gap-2 border border-white/10 text-t2 font-semibold text-[15px] px-7 py-4 rounded-2xl transition-all hover:border-purple-border hover:text-white hover:-translate-y-0.5"
          >
            See how it works
            <ArrowIcon />
          </a>
        </div>

        {/* phones */}
        <div className="relative flex items-end justify-center gap-4 mt-20">
          <PhoneMock label="screenshot 2" className="opacity-70 translate-y-6" />
          <PhoneMock label="screenshot 1" className="z-10 shadow-[0_60px_100px_rgba(0,0,0,0.7),0_0_60px_rgba(124,111,255,0.2)]" style={{ width: 248 }} />
          <PhoneMock label="screenshot 3" className="opacity-70 translate-y-6" />
          {/* ground glow */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-72 h-24 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(124,111,255,0.22) 0%, transparent 70%)' }} />
        </div>
      </div>
    </section>
  )
}

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  )
}
function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  )
}
