const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#A89FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: 'Micro-Lessons',
    desc: 'Every lesson fits in under 5 minutes — on the commute, at lunch, or before bed. No hour-long videos, no filler.',
    wide: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#A89FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: 'AI Tutor',
    desc: "Ask anything in plain English. Your AI tutor knows exactly what you've been studying and answers in context.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#A89FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Role Play',
    desc: 'Apply your knowledge in AI-driven real-world scenarios before the next lesson unlocks.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#A89FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Streaks & XP',
    desc: 'Daily streaks, XP rewards, badges, and a global leaderboard that make learning genuinely addictive.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#A89FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    title: 'Progress Tracking',
    desc: "Detailed stats, course completion tracking, and a clear picture of how far you've come.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#A89FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="3"/>
        <circle cx="6" cy="6" r="3"/>
        <path d="M6 21V9a9 9 0 0 0 9 9"/>
      </svg>
    ),
    title: 'Learn with Friends',
    desc: "Add friends, share progress, and compete on quests. Learning is faster when it's social.",
  },
]

export default function Features() {
  return (
    <section id="features" className="border-t-subtle">
      <div className="max-w-5xl mx-auto px-8 py-24">
        <p className="text-purple text-xs font-bold tracking-[1.5px] uppercase mb-4">Features</p>
        <h2 className="text-[clamp(28px,4vw,48px)] font-black tracking-tight leading-tight mb-4">
          Built for how people<br />actually learn
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
          {features.map((f, i) => (
            <div
              key={i}
              className={`bg-surface border-subtle rounded-2xl p-8 transition-all duration-200 hover:border-purple-border hover:-translate-y-1 ${f.wide ? 'lg:col-span-2' : ''}`}
            >
              <div className="w-11 h-11 rounded-xl bg-purple-dim border border-purple-border flex items-center justify-center mb-5">
                <div className="w-5 h-5">{f.icon}</div>
              </div>
              <h3 className="text-[16px] font-bold mb-2">{f.title}</h3>
              <p className="text-t2 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
