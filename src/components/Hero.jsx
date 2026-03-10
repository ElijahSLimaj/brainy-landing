function Phone({ src, alt, center }) {
  return (
    <div
      className={`relative rounded-[2.2rem] overflow-hidden bg-surface-2 ${center ? 'z-10' : 'opacity-75'}`}
      style={{
        width: center ? 256 : 210,
        border: '1.5px solid #3D3D5C',
        boxShadow: center
          ? '0 60px 100px rgba(0,0,0,0.8), 0 0 60px rgba(124,58,237,0.25)'
          : '0 40px 80px rgba(0,0,0,0.6)',
        transform: center ? 'translateY(-20px)' : 'translateY(0)',
      }}
    >
      <img src={src} alt={alt} className="w-full block" />
    </div>
  )
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-16 relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[700px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.18) 0%, transparent 65%)' }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <div
          className="inline-flex items-center gap-2 text-purple-light text-xs font-semibold px-4 py-1.5 rounded-full mb-10 tracking-widest uppercase"
          style={{ border: '1px solid rgba(124,58,237,0.3)', background: 'rgba(124,58,237,0.1)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-purple" style={{ boxShadow: '0 0 8px #7C3AED' }} />
          Now available on iOS
        </div>

        <h1 className="text-[clamp(48px,9vw,94px)] font-black leading-[1.02] tracking-[-3px] max-w-4xl mb-8">
          There is so much<br /><span className="text-grad">worth knowing.</span>
        </h1>

        <p className="text-t2 text-[clamp(17px,2vw,20px)] max-w-[520px] leading-[1.8] mb-12" style={{ fontWeight: 400 }}>
          Brainy brings the world's most important ideas to you in short, 
          beautifully written lessons, built for people who still believe 
          learning matters.
        </p>

        <div className="flex flex-wrap gap-3 justify-center" id="download">
          <a
            href="#download"
            className="inline-flex items-center gap-2.5 bg-purple text-white font-bold text-[15px] px-7 py-4 rounded-2xl glow transition-all hover:-translate-y-0.5"
          >
            <AppleIcon />
            Download on App Store
          </a>
          <a
            href="#why"
            className="inline-flex items-center gap-2 text-t2 font-semibold text-[15px] px-7 py-4 rounded-2xl transition-all hover:text-t1 hover:-translate-y-0.5"
            style={{ border: '1px solid #3D3D5C' }}
          >
            Why text-based?
            <ArrowIcon />
          </a>
        </div>

        <div className="relative flex items-end justify-center gap-5 mt-20">
          <Phone src="/images/courses.png" alt="Courses" />
          <Phone src="/images/homepage.png" alt="Home" center />
          <Phone src="/images/reviewcoursepage.png" alt="Review" />
          <div
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-80 h-24 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.2) 0%, transparent 70%)' }}
          />
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
