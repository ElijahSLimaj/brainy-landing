const features = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
    title: 'Written to be remembered',
    desc: 'Each lesson is the kind of book most people mean to read but never do, distilled into something you can finish in a single sitting. The depth stays. The length doesn\'t.',
    wide: true,
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
    title: 'Learn through story',
    desc: "Some ideas land differently when they're alive inside a character. Stories are short novels written to teach — each one wraps a real skill inside a narrative that makes it stick long after you finish.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>,
    title: 'An AI tutor that actually listens',
    desc: "Every good lesson raises questions you didn't know you had. Your AI tutor is there for those moments. Patient, precise, and always working from what you've actually been learning.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: 'From knowing to doing',
    desc: "Understanding something and being able to use it are different things. After every lesson you step into a real scenario and put the idea to work. That's when it stops being knowledge and starts being yours.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    title: 'Consistency, not willpower',
    desc: "Willpower runs out. Good habits don't. Streaks, XP, and a leaderboard make showing up tomorrow easier than skipping. Not through guilt, but through something that feels more like momentum.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
    title: 'Watch yourself grow',
    desc: "There's something quietly powerful about a record of your own curiosity. Your completions, your streak, your XP. Proof of every day you chose to show up.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>,
    title: 'Better together',
    desc: "Shared curiosity is one of life's best things. Invite a friend, compare progress, challenge each other. Some of the best conversations start with \"I learned something interesting today.\"",
  },
]

export default function Features() {
  return (
    <section id="features" className="border-t-subtle">
      <div className="max-w-5xl mx-auto px-8 py-24">
        <p className="text-purple-light text-xs font-bold tracking-[1.5px] uppercase mb-5">What you get</p>
        <h2 className="text-[clamp(28px,4vw,48px)] font-black tracking-tight leading-tight">
          Every feature exists<br />for one reason
        </h2>
        <p className="text-t2 text-[17px] leading-relaxed mt-5 max-w-xl">
          To put serious ideas in front of people who deserve them. Everything else is in service of that.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
          {features.map((f, i) => (
            <div
              key={i}
              className={`bg-surface rounded-2xl p-8 transition-all duration-200 hover:-translate-y-1 ${f.wide ? 'lg:col-span-2' : ''}`}
              style={{ border: '1px solid #3D3D5C' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(124,58,237,0.4)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#3D3D5C'}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.3)' }}
              >
                <div className="w-5 h-5">{f.icon}</div>
              </div>
              <h3 className="text-[16px] font-bold mb-3 text-t1">{f.title}</h3>
              <p className="text-t2 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
