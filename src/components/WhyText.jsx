const points = [
  {
    label: 'Reading is thinking',
    body: 'When you read, your brain is working. It builds sentences, fills in gaps, questions claims, makes connections. When you watch a video, it waits. That difference, active versus passive, is the whole ballgame. And it shows up clearly in the research.',
    cite: 'Roediger & Butler, Trends in Cognitive Sciences, 2011',
  },
  {
    label: 'You move at your own pace',
    body: "Reading lets you slow down where something matters and move quickly through what you already know. Video locks you into one speed: the speaker's. Learner-controlled pacing consistently produces better outcomes than fixed-pace delivery.",
    cite: 'Mayer & Moreno, Educational Psychologist, 2003',
  },
  {
    label: 'Your brain can only do so much at once',
    body: 'Video throws sound, motion, graphics, and narration at you simultaneously. It feels rich. What it actually is, is noisy. Text is quiet. When your brain is not managing multiple inputs at once, it can spend that energy on the only thing that matters: understanding.',
    cite: 'Sweller, Educational Psychology Review, 1994',
  },
  {
    label: 'What you read, you keep',
    body: 'Students who read material consistently outperform video learners on retention tests administered a week later. Not because reading is harder, but because the work of reading is exactly the kind of cognitive effort that makes memories stick.',
    cite: 'Rogowsky et al., Journal of Educational Research, 2016',
  },
]

export default function WhyText() {
  return (
    <section id="why" className="border-t-subtle">
      <div className="max-w-5xl mx-auto px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <p className="text-purple-light text-xs font-bold tracking-[1.5px] uppercase mb-5">The science</p>
            <h2 className="text-[clamp(28px,4vw,46px)] font-black tracking-tight leading-tight mb-6">
              We made a deliberate<br />choice. No videos.
            </h2>
            <p className="text-t2 text-[16px] leading-[1.85] mb-5">
              Not because it was cheaper or easier. Because we genuinely believe that reading is the deepest, most powerful way to learn something, and that most apps have forgotten that.
            </p>
            <p className="text-t2 text-[16px] leading-[1.85]">
              Decades of cognitive science back us up. Here is what the research actually says.
            </p>
            <div
              className="mt-8 rounded-2xl p-7"
              style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.25)' }}
            >
              <p className="text-purple-light font-bold text-sm mb-2">The bottom line</p>
              <p className="text-t1 text-[15px] leading-[1.75]">
                Readers outperform video learners by <span className="text-purple-light font-semibold">28% on retention</span> when tested one week later. Not because they studied harder, but because they were present in a different way.
              </p>
              <p className="text-t3 text-xs mt-3">Rogowsky et al., Journal of Educational Research, 2016</p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
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
                <p className="text-t2 text-[14px] leading-[1.8] mb-3">{p.body}</p>
                <p className="text-t3 text-xs italic">{p.cite}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
