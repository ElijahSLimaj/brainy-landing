const testimonials = [
  {
    name: 'Ciarán Murphy',
    location: 'Dublin, Ireland',
    text: "I've tried video courses, podcasts, books — nothing stuck. Brainy is the first thing that actually fits into my day. I read a lesson on the Luas and genuinely remember it.",
  },
  {
    name: 'James Fletcher',
    location: 'Manchester, UK',
    text: "The AI tutor is something else. I asked it to explain a concept from a completely different angle and it just did it, instantly. No other app comes close to that.",
  },
  {
    name: 'Aoife Kelly',
    location: 'Cork, Ireland',
    text: "Three weeks in and I've finished two full courses. I'm not the kind of person who finishes courses. The streak system is annoyingly effective.",
  },
  {
    name: 'Lukas Novák',
    location: 'Prague, Czech Republic',
    text: "I was sceptical about text-based learning at first. Now I understand why it works — you engage with the material instead of just watching it go by. Big difference.",
  },
  {
    name: 'Sophie Whitmore',
    location: 'London, UK',
    text: "The role play feature is genuinely clever. Knowing I have to apply the idea before moving on makes me read more carefully. It changes how you engage with the content.",
  },
  {
    name: 'Katarzyna Wiśniewska',
    location: 'Warsaw, Poland',
    text: "Clean, fast, no nonsense. I open it in the morning with my coffee and close it knowing I actually learned something. That's a rare thing for an app to pull off.",
  },
]

export default function Testimonials() {
  return (
    <section className="border-t-subtle">
      <div className="max-w-5xl mx-auto px-8 py-24">
        <p className="text-purple-light text-xs font-bold tracking-[1.5px] uppercase mb-4">Early access</p>
        <h2 className="text-[clamp(28px,4vw,44px)] font-black tracking-tight leading-tight mb-16">
          What early testers<br />are saying
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-surface rounded-2xl p-7 flex flex-col justify-between"
              style={{ border: '1px solid #3D3D5C' }}
            >
              <p className="text-t1 text-[15px] leading-relaxed mb-8">"{t.text}"</p>
              <div>
                <p className="font-bold text-[14px] text-t1">{t.name}</p>
                <p className="text-t3 text-xs mt-0.5">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
