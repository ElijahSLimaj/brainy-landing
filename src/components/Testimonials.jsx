const testimonials = [
  {
    name: 'Ciarán Murphy',
    location: 'Dublin, Ireland',
    text: "I've tried video courses, audiobooks, podcasts — something always got in the way. Brainy was the first thing that actually fit. I read a lesson on the Luas this morning and I'm still thinking about it.",
  },
  {
    name: 'James Fletcher',
    location: 'Manchester, UK',
    text: "The AI tutor surprised me. I asked it to explain a concept from a different angle — completely off the cuff — and it just did it, immediately, in the context of what I'd been reading. I've not seen anything else do that.",
  },
  {
    name: 'Aoife Kelly',
    location: 'Cork, Ireland',
    text: "Three weeks in and I've finished two full courses. I don't finish things. That's just the truth about me. Whatever Brainy is doing, it's working on a level I don't fully understand.",
  },
  {
    name: 'Lukas Novák',
    location: 'Prague, Czech Republic',
    text: "I was sceptical of text-based learning. I thought I needed videos, visuals, something dynamic. Then I finished my first lesson and realised I'd actually been thinking the whole time. That was the difference.",
  },
  {
    name: 'Sophie Whitmore',
    location: 'London, UK',
    text: "The role play feature is genuinely clever. Knowing I have to apply something before I can move forward changes how carefully I read. It's a small design decision with a surprisingly large effect.",
  },
  {
    name: 'Katarzyna Wiśniewska',
    location: 'Warsaw, Poland',
    text: "I open it with my morning coffee. Fifteen minutes later I close it knowing something I didn't know before. That's the whole pitch, really, and it delivers on it every single day.",
  },
]

export default function Testimonials() {
  return (
    <section className="border-t-subtle">
      <div className="max-w-5xl mx-auto px-8 py-24">
        <p className="text-purple-light text-xs font-bold tracking-[1.5px] uppercase mb-5">Early access</p>
        <h2 className="text-[clamp(28px,4vw,44px)] font-black tracking-tight leading-tight mb-4">
          What early learners<br />are saying
        </h2>
        <p className="text-t2 text-[17px] leading-relaxed mb-16 max-w-lg">
          These are real people who spent time with Brainy before launch and came back to tell us why.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-surface rounded-2xl p-7 flex flex-col justify-between"
              style={{ border: '1px solid #3D3D5C' }}
            >
              <p className="text-t1 text-[14px] leading-[1.85] mb-8">"{t.text}"</p>
              <div>
                <p className="font-bold text-[14px] text-t1">{t.name}</p>
                <p className="text-t3 text-xs mt-1">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
