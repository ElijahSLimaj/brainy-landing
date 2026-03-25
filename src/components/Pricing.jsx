const Check = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const plans = [
  {
    name: 'Free',
    price: '$0',
    desc: 'Try it out. No commitment.',
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
    desc: 'Everything in Pro, plus AI Tutor and Stories.',
    features: ['Everything in Pro', 'Unlimited AI Tutor', 'Stories — learn through fiction', 'Early access to courses'],
    cta: 'Get Pro+',
    variant: 'outline',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-subtle">
      <div className="max-w-5xl mx-auto px-8 py-24">
        <p className="text-purple-light text-xs font-bold tracking-[1.5px] uppercase mb-4">Pricing</p>
        <h2 className="text-[clamp(28px,4vw,48px)] font-black tracking-tight leading-tight">
          Start free.<br />Upgrade when ready.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl p-8 transition-all duration-200 hover:-translate-y-1 bg-surface`}
              style={{
                border: p.featured ? '1px solid rgba(124,58,237,0.5)' : '1px solid #3D3D5C',
                background: p.featured
                  ? 'linear-gradient(160deg, rgba(124,58,237,0.1) 0%, #1A1A2E 100%)'
                  : '#1A1A2E',
                boxShadow: p.featured ? '0 0 40px rgba(124,58,237,0.12)' : 'none',
              }}
            >
              {p.featured && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-[11px] font-bold px-4 py-1 rounded-full tracking-wide"
                  style={{ background: 'linear-gradient(135deg, #7C3AED, #EC4899)' }}
                >
                  MOST POPULAR
                </div>
              )}

              <p className="text-t3 text-xs font-bold tracking-[1px] uppercase mb-3">{p.name}</p>
              <p className="text-[42px] font-black tracking-tight leading-none mb-1 text-t1">
                {p.price}
                <span className="text-t3 text-base font-medium">/mo</span>
              </p>
              <p className="text-t2 text-sm mb-6 mt-2">{p.desc}</p>
              <div className="divider mb-6" />
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
                    ? 'text-white'
                    : 'text-t2 hover:text-t1'
                }`}
                style={
                  p.variant === 'solid'
                    ? { background: 'linear-gradient(135deg, #7C3AED, #9333EA)', boxShadow: '0 0 20px rgba(124,58,237,0.3)' }
                    : { border: '1px solid #3D3D5C' }
                }
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
