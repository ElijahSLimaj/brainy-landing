const steps = [
  { n: 1, title: 'Pick a course', desc: 'Browse courses on productivity, communication, finance, mindset, leadership, and more.' },
  { n: 2, title: 'Read a lesson in 10–15 minutes', desc: 'Text-based, tightly written, no padding. Then test yourself with a short quiz.' },
  { n: 3, title: 'Practice with AI role play', desc: 'Apply what you learned in a realistic scenario before the next lesson unlocks.' },
  { n: 4, title: 'Watch your skills compound', desc: 'Lessons add up. Track XP, streaks, and completions as your knowledge grows.' },
]

const mockLessons = [
  { tag: 'Productivity · Lesson 3 of 8', title: 'The Two-Minute Rule', sub: 'If it takes less than two minutes, do it now.', pct: 37 },
  { tag: 'Communication · Lesson 1 of 6', title: 'Active Listening', sub: 'How to actually hear what someone is saying.', pct: 16 },
  { tag: 'Finance · Lesson 5 of 10', title: 'The 50/30/20 Budget', sub: 'A simple framework anyone can follow.', pct: 50 },
]

export default function HowItWorks() {
  return (
    <section id="how" className="border-t-subtle">
      <div className="max-w-5xl mx-auto px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-purple-light text-xs font-bold tracking-[1.5px] uppercase mb-4">How it works</p>
            <h2 className="text-[clamp(28px,4vw,44px)] font-black tracking-tight leading-tight mb-4">
              From zero to fluent,<br />one lesson at a time
            </h2>
            <p className="text-t2 text-[16px] leading-relaxed mt-2 mb-10">
              A structured path that builds real knowledge without the overwhelm.
            </p>

            <div className="flex flex-col">
              {steps.map((s, i) => (
                <div key={i} className={`flex gap-5 py-7 ${i < steps.length - 1 ? 'border-b border-bdr' : ''}`}>
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-purple-light text-sm font-black"
                    style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.3)' }}
                  >
                    {s.n}
                  </div>
                  <div>
                    <p className="font-bold text-[15px] mb-1 text-t1">{s.title}</p>
                    <p className="text-t2 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-4">
            {mockLessons.map((l, i) => (
              <div
                key={i}
                className="bg-surface rounded-2xl px-6 py-5 transition-all"
                style={{ border: '1px solid #3D3D5C' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(124,58,237,0.4)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#3D3D5C'}
              >
                <p className="text-purple-light text-[11px] font-bold tracking-wide uppercase mb-2">{l.tag}</p>
                <p className="font-bold text-[15px] mb-1 text-t1">{l.title}</p>
                <p className="text-t2 text-sm">{l.sub}</p>
                <div className="mt-4 h-1 rounded-full overflow-hidden" style={{ background: '#3D3D5C' }}>
                  <div className="h-full rounded-full bg-purple" style={{ width: `${l.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
