const Check = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7C6FFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const plans = [
  {
    name: 'Free',
    price: '$0',
    desc: 'Try it out — no commitment.',
    features: ['5 free lessons', 'Course previews', 'Streaks & XP'],
    cta: 'Get Started Free',
    variant: 'outline',
  },
  {
    name: 'Pro',
    price: '$9.99',
    desc: 'Unlimited learning across every course.',
    features: ['Unlimited lessons', 'All courses included', 'Quizzes & role play', 'Leaderboard & leagues'],
    cta: 'Get Pro',
    variant: 'solid',
    featured: true,
  },
  {
    name: 'Pro+',
    price: '$19.99',
    desc: 'Everything in Pro, plus unlimited AI Tutor.',
    features: ['Everything in Pro', 'Unlimited AI Tutor', 'Early access to courses'],
    cta: 'Get Pro+',
    variant: 'outline',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-subtle">
      <div className="max-w-5xl mx-auto px-8 py-24">
        <p className="text-purple text-xs font-bold tracking-[1.5px] uppercase mb-4">Pricing</p>
        <h2 className="text-[clamp(28px,4vw,48px)] font-black tracking-tight leading-tight">
          Start free.<br />Upgrade when you're ready.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl p-8 transition-all duration-200 hover:-translate-y-1 ${
                p.featured
                  ? 'bg-purple-dim border border-purple/50 shadow-[0_0_40px_rgba(124,111,255,0.15)]'
                  : 'bg-surface border-subtle hover:border-purple-border'
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple text-white text-[11px] font-bold px-4 py-1 rounded-full tracking-wide">
                  MOST POPULAR
                </div>
              )}

              <p className="text-t2 text-xs font-bold tracking-[1px] uppercase mb-3">{p.name}</p>
              <p className="text-[42px] font-black tracking-tight leading-none mb-1">
                {p.price}
                <span className="text-t2 text-base font-medium">/mo</span>
              </p>
              <p className="text-t2 text-sm mb-6 mt-2">{p.desc}</p>
              <div className="h-px bg-white/[0.07] mb-6" />
              <ul className="flex flex-col gap-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-t2">
                    <Check /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#download"
                className={`block text-center text-sm font-bold py-3.5 rounded-xl transition-all hover:-translate-y-px ${
                  p.variant === 'solid'
                    ? 'bg-purple text-white hover:opacity-90'
                    : 'border border-white/10 text-t2 hover:border-purple-border hover:text-white'
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
