export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-16 bg-bg/80 backdrop-blur-xl border-b-subtle">
      <span className="text-[17px] font-black tracking-tight text-grad-white">Brainy</span>
      <div className="hidden md:flex items-center gap-8">
        <a href="#features" className="text-t2 text-sm font-medium hover:text-t1 transition-colors">Features</a>
        <a href="#why" className="text-t2 text-sm font-medium hover:text-t1 transition-colors">Why text?</a>
        <a href="#pricing" className="text-t2 text-sm font-medium hover:text-t1 transition-colors">Pricing</a>
      </div>
      <a
        href="#download"
        className="bg-purple text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all hover:bg-purple-dark hover:-translate-y-px"
      >
        Download
      </a>
    </nav>
  )
}
