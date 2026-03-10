const features = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
    title: 'Short, focused lessons',
    desc: 'Each lesson is designed to be read in 10–15 minutes. Just the core idea, clearly explained — no padding, no fluff.',
    wide: true,
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>,
    title: 'AI Tutor',
    desc: "Ask anything in plain English. Your AI tutor knows exactly what you've been learning and answers in full context.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: 'Role Play Practice',
    desc: 'Apply what you learned in an AI-driven real-world scenario before moving on. Concepts go from theory to habit.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    title: 'Streaks & XP',
    desc: 'Daily streaks, XP rewards, badges, and a global leaderboard that make showing up every day genuinely satisfying.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
    title: 'Progress Tracking',
    desc: "Detailed stats, course completion, and a clear picture of how far you've come — and what comes next.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>,
    title: 'Learn with Friends',
    desc: "Add friends, share progress, compete on quests. Accountability makes consistency easier.",
  },
]

export default function Features() {
  return (
    <section id="features" className="border-t-subtle">
      <div className="max-w-5xl mx-auto px-8 py-24">
        <p className="text-purple-light text-xs font-bold tracking-[1.5px] uppercase mb-4">Features</p>
        <h2 className="text-[clamp(28px,4vw,48px)] font-black tracking-tight leading-tight">
          Built for how people<br />actually learn
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
          {features.map((f, i) => (
            <div
              key={i}
              className={`bg-surface border-subtle rounded-2xl p-8 transition-all duration-200 hover:-translate-y-1 ${f.wide ? 'lg:col-span-2' : ''}`}
              style={{ borderColor: '#3D3D5C' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(124,58,237,0.4)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#3D3D5C'}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.3)' }}
              >
                <div className="w-5 h-5">{f.icon}</div>
              </div>
              <h3 className="text-[16px] font-bold mb-2 text-t1">{f.title}</h3>
              <p className="text-t2 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
