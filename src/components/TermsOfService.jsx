const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-lg font-bold text-t1 mb-3">{title}</h2>
    <div className="text-t2 text-sm leading-relaxed space-y-3">{children}</div>
  </div>
)

export default function TermsOfService() {
  return (
    <div style={{ background: '#0D0D1A', minHeight: '100vh' }}>
      <div className="max-w-3xl mx-auto px-8 py-16">
        <a href="/" className="text-purple-light text-sm font-semibold hover:text-white transition-colors mb-10 inline-block">← Back to Brainy</a>
        <h1 className="text-[clamp(28px,4vw,42px)] font-black tracking-tight text-t1 mb-3">Terms of Service</h1>
        <p className="text-t3 text-sm mb-12">Last updated: March 31, 2026</p>

        <Section title="1. Acceptance of Terms">
          <p>By downloading, installing, or using the Brainy app or visiting brainy.buildstackhq.com, you agree to be bound by these Terms of Service. If you do not agree, do not use Brainy.</p>
          <p>These Terms constitute a legal agreement between you and Buildstack HQ, the operator of Brainy.</p>
        </Section>

        <Section title="2. Use of the Service">
          <p>Brainy is a mobile learning platform that provides courses, quizzes, AI-assisted tutoring, and reading content to help you learn and develop skills.</p>
          <p>You must be at least 13 years old to use Brainy. By using the app, you confirm that you meet this age requirement.</p>
          <p>You agree not to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Use the service for any unlawful purpose</li>
            <li>Attempt to reverse-engineer, hack, or disrupt the service</li>
            <li>Share your account credentials with others</li>
            <li>Use automated tools to scrape or extract content</li>
            <li>Reproduce or distribute course content without permission</li>
          </ul>
        </Section>

        <Section title="3. Accounts">
          <p>You are responsible for maintaining the security of your account and for all activity that occurs under it. Notify us immediately at support@brainy.buildstackhq.com if you suspect unauthorised access to your account.</p>
          <p>We reserve the right to suspend or terminate accounts that violate these Terms.</p>
        </Section>

        <Section title="4. Subscriptions and Payments">
          <p>Brainy offers free access with limited lessons. Premium features are available through two paid subscription tiers: Pro ($9.99/month) and Pro+ ($19.99/month).</p>
          <p>Subscriptions are billed monthly through your Apple App Store or Google Play account. Payment is charged to your account at confirmation of purchase.</p>
          <p><strong className="text-t1">Auto-renewal:</strong> Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period. You can manage or cancel your subscription in your device's App Store or Play Store settings.</p>
          <p><strong className="text-t1">Refunds:</strong> Refunds are handled in accordance with Apple App Store or Google Play refund policies. We do not process refunds directly.</p>
          <p>We reserve the right to change subscription pricing with reasonable notice.</p>
        </Section>

        <Section title="5. Content">
          <p>All course content, stories, quizzes, and materials in Brainy are owned by Buildstack HQ and protected by copyright. You may access content for personal, non-commercial learning only.</p>
          <p>AI-generated responses from the AI Tutor and Role Play features are provided as-is for educational purposes. They do not constitute professional advice of any kind.</p>
        </Section>

        <Section title="6. Intellectual Property">
          <p>The Brainy name, logo, app design, and all content are the property of Buildstack HQ. Nothing in these Terms grants you any right to use our trademarks, logos, or other proprietary materials.</p>
        </Section>

        <Section title="7. Disclaimer of Warranties">
          <p>Brainy is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that the service will be uninterrupted, error-free, or free of harmful components.</p>
          <p>Educational content is provided for informational purposes only and is not a substitute for professional advice.</p>
        </Section>

        <Section title="8. Limitation of Liability">
          <p>To the fullest extent permitted by law, Buildstack HQ shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the service. Our total liability to you for any claims arising from these Terms shall not exceed the amount you paid us in the 12 months preceding the claim.</p>
        </Section>

        <Section title="9. Termination">
          <p>You may stop using Brainy and delete your account at any time from the Profile screen in the app.</p>
          <p>We may suspend or terminate your access to Brainy at any time, with or without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.</p>
        </Section>

        <Section title="10. Changes to Terms">
          <p>We may modify these Terms at any time. We will provide notice of material changes by updating the date at the top of this page. Continued use of Brainy after changes take effect constitutes your acceptance of the revised Terms.</p>
        </Section>

        <Section title="11. Governing Law">
          <p>These Terms are governed by and construed in accordance with applicable law. Any disputes will be resolved in the courts of the jurisdiction in which Buildstack HQ operates.</p>
        </Section>

        <Section title="12. Contact">
          <p>For questions about these Terms, contact us at:</p>
          <p><a href="mailto:support@brainy.buildstackhq.com" className="text-purple-light hover:underline">support@brainy.buildstackhq.com</a></p>
        </Section>
      </div>
    </div>
  )
}
