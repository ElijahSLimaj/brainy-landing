export default function Footer() {
  return (
    <footer className="border-t-subtle px-8 py-8 flex flex-wrap items-center justify-between gap-4">
      <span className="text-sm font-black text-grad-white tracking-tight">Brainy</span>
      <div className="flex gap-6">
        <a href="/privacy" className="text-t3 text-sm hover:text-t2 transition-colors">Privacy Policy</a>
        <a href="/terms" className="text-t3 text-sm hover:text-t2 transition-colors">Terms of Service</a>
        <a href="mailto:elijahlimaj@gmail.com" className="text-t3 text-sm hover:text-t2 transition-colors">Support</a>
      </div>
      <p className="text-t3 text-xs">© 2025 Brainy. All rights reserved.</p>
    </footer>
  )
}
