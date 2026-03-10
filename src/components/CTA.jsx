export default function CTA() {
  return (
    <section className="px-6 pb-24">
      <div className="max-w-4xl mx-auto relative overflow-hidden rounded-3xl border border-purple-border px-8 py-20 text-center"
        style={{ background: 'linear-gradient(145deg, #1A1832 0%, #0F0F1E 100%)' }}>
        {/* bg glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-72 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(124,111,255,0.2) 0%, transparent 65%)' }} />
        <div className="relative z-10">
          <h2 className="text-[clamp(28px,5vw,52px)] font-black tracking-tight mb-4">Start learning today.</h2>
          <p className="text-t2 text-lg mb-10">5 minutes a day is all it takes.</p>
          <a
            href="#download"
            className="inline-flex items-center gap-3 bg-purple text-white font-bold text-base px-9 py-4 rounded-2xl glow transition-all hover:-translate-y-0.5"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download Free on App Store
          </a>
        </div>
      </div>
    </section>
  )
}
