const points = [
  {
    label: 'Reading is faster',
    body: 'The average person reads at 250 words per minute but processes speech at around 150. Text lets you move at your natural pace — skim what you know, slow down where it matters.',
    cite: 'Rayner et al., Psychological Science in the Public Interest, 2016',
  },
  {
    label: 'Active processing builds memory',
    body: 'Reading forces your brain to construct meaning actively. Video is passive — you watch, but rarely engage. Active cognitive processing is the single biggest driver of long-term retention.',
    cite: 'Roediger & Butler, Trends in Cognitive Sciences, 2011',
  },
  {
    label: 'You control the depth',
    body: 'With text you can re-read a sentence, pause, or skip ahead. Video locks you into one speed. Learner-controlled pacing consistently produces better outcomes than fixed-pace delivery.',
    cite: 'Mayer & Moreno, Educational Psychologist, 2003',
  },
  {
    label: 'Less cognitive load, more learning',
    body: "Video bombards you with audio, visuals, and motion simultaneously. Text is clean. When your brain isn't managing multiple channels at once, it can focus on what actually matters: understanding.",
    cite: 'Sweller, Educational Psychology Review, 1994',
  },
]

export default function WhyText() {
  return (
    <section id="why" className="border-t-subtle">
      <div className="max-w-5xl mx-auto px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <p className="text-purple-light text-xs font-bold tracking-[1.5px] uppercase mb-4">The science</p>
            <h2 className="text-[clamp(28px,4vw,46px)] font-black tracking-tight leading-tight mb-6">
              Why text beats<br />video for learning
            </h2>
            <p className="text-t2 text-[16px] leading-relaxed mb-6">
              Video feels effortless. That's the problem. Decades of cognitive science show that effortful, active reading drives retention far better than passive watching.
            </p>
            <p className="text-t2 text-[16px] leading-relaxed">
              Brainy is built on this research. Every lesson is written to be read, not watched — so what you learn actually stays with you.
            </p>
            <div
              className="mt-8 rounded-2xl p-6"
              style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.25)' }}
            >
              <p className="text-purple-light font-bold text-sm mb-1">Key finding</p>
              <p className="text-t1 text-[15px] leading-relaxed">
                Students who read material consistently outperform video learners by <span className="text-purple-light font-bold">28% on retention tests</span> administered one week later.
              </p>
              <p className="text-t3 text-xs mt-3">Rogowsky et al., Journal of Educational Research, 2016</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {points.map((p, i) => (
              <div
                key={i}
                className="rounded-2xl p-7 bg-surface"
                style={{ border: '1px solid #3D3D5C' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-purple-light text-xs font-black flex-shrink-0"
                    style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)' }}
                  >
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-[16px] text-t1">{p.label}</h3>
                </div>
                <p className="text-t2 text-sm leading-relaxed mb-3">{p.body}</p>
                <p className="text-t3 text-xs italic">{p.cite}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
