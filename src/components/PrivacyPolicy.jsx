const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-lg font-bold text-t1 mb-3">{title}</h2>
    <div className="text-t2 text-sm leading-relaxed space-y-3">{children}</div>
  </div>
)

export default function PrivacyPolicy() {
  return (
    <div style={{ background: '#0D0D1A', minHeight: '100vh' }}>
      <div className="max-w-3xl mx-auto px-8 py-16">
        <a href="/" className="text-purple-light text-sm font-semibold hover:text-white transition-colors mb-10 inline-block">← Back to Brainy</a>
        <h1 className="text-[clamp(28px,4vw,42px)] font-black tracking-tight text-t1 mb-3">Privacy Policy</h1>
        <p className="text-t3 text-sm mb-12">Last updated: April 1, 2026</p>

        <Section title="1. Introduction">
          <p>Brainy ("we", "us", or "our") is a mobile learning application operated by Buildstack HQ. This Privacy Policy explains how we collect, use, and protect your personal information when you use the Brainy app and website at brainy.buildstackhq.com.</p>
          <p>By using Brainy, you agree to the collection and use of information as described in this policy.</p>
        </Section>

        <Section title="2. Information We Collect">
          <p><strong className="text-t1">Account information:</strong> When you create an account, we collect your email address and display name. If you sign in with Apple or Google, we receive your name and email address from those providers in accordance with their own privacy policies.</p>
          <p><strong className="text-t1">Usage data:</strong> We collect information about how you use the app, including lessons completed, quiz scores, streaks, XP earned, courses accessed, and reading progress in Stories.</p>
          <p><strong className="text-t1">Social and leaderboard data:</strong> Your display name, XP, and streak are visible to other Brainy users on the leaderboard and in leagues. When you connect with friends in the app, those friends can see your streak and activity. You control who you add as a friend.</p>
          <p><strong className="text-t1">Referral data:</strong> If you use or share a referral code, we store that code and any associated rewards in your account.</p>
          <p><strong className="text-t1">Purchase information:</strong> If you subscribe to Pro or Pro+, we receive confirmation of your purchase through Apple's or Google's payment system. We do not store your payment card details.</p>
          <p><strong className="text-t1">AI conversation data:</strong> When you use the AI Tutor or Role Play features, your messages are processed by Anthropic's Claude API to generate responses. These conversations are stored in your account to provide chat history.</p>
          <p><strong className="text-t1">Device and technical data:</strong> We collect device identifiers, operating system version, and push notification tokens to deliver notifications and improve app performance.</p>
        </Section>

        <Section title="3. How We Use Your Information">
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Provide, maintain, and improve the Brainy app</li>
            <li>Track your learning progress and personalise your experience</li>
            <li>Power social features including leaderboards, leagues, and friend connections</li>
            <li>Process subscriptions and verify access to premium features</li>
            <li>Manage referral rewards</li>
            <li>Send push notifications about streaks, rewards, and learning reminders (you can opt out at any time in your device settings)</li>
            <li>Respond to support requests</li>
            <li>Detect and prevent fraud or abuse</li>
          </ul>
        </Section>

        <Section title="4. Third-Party Services">
          <p>Brainy uses the following third-party services that may process your data:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-t1">Firebase (Google):</strong> Authentication, database, and push notifications — <a href="https://firebase.google.com/support/privacy" className="text-purple-light hover:underline" target="_blank" rel="noreferrer">Privacy Policy</a></li>
            <li><strong className="text-t1">Anthropic:</strong> Powers the AI Tutor and Role Play features — <a href="https://www.anthropic.com/privacy" className="text-purple-light hover:underline" target="_blank" rel="noreferrer">Privacy Policy</a></li>
            <li><strong className="text-t1">Apple:</strong> Sign in with Apple, in-app purchases, and push notifications — <a href="https://www.apple.com/legal/privacy/" className="text-purple-light hover:underline" target="_blank" rel="noreferrer">Privacy Policy</a></li>
            <li><strong className="text-t1">Google:</strong> Sign in with Google and in-app purchases — <a href="https://policies.google.com/privacy" className="text-purple-light hover:underline" target="_blank" rel="noreferrer">Privacy Policy</a></li>
            <li><strong className="text-t1">Vercel:</strong> Website hosting</li>
          </ul>
        </Section>

        <Section title="5. Data Sharing">
          <p>We do not sell your personal data. We do not share your personal data with third parties except as necessary to operate the service (as described above) or if required by law.</p>
          <p>Certain information — specifically your display name, XP, and streak — is visible to other users as part of the leaderboard and social features. You can review what is shared by visiting your Profile in the app.</p>
        </Section>

        <Section title="6. Data Retention">
          <p>We retain your account data for as long as your account is active. You may delete your account at any time from the Profile screen in the app, which will permanently delete your data from our systems within 30 days.</p>
        </Section>

        <Section title="7. Children's Privacy">
          <p>Brainy is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided us with personal information, please contact us and we will delete it promptly.</p>
        </Section>

        <Section title="8. Security">
          <p>We use industry-standard security measures including encrypted data transmission (TLS), Firebase security rules, and authenticated access controls. No method of transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>
        </Section>

        <Section title="9. Your Rights">
          <p>Depending on your location, you may have rights to access, correct, or delete your personal data. To exercise these rights, contact us at the address below. California residents may have additional rights under the CCPA. Users in the European Economic Area may have rights under the GDPR.</p>
        </Section>

        <Section title="10. Changes to This Policy">
          <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the date at the top of this page. Continued use of the app after changes constitutes acceptance of the updated policy.</p>
        </Section>

        <Section title="11. Contact Us">
          <p>If you have questions about this Privacy Policy, please contact us at:</p>
          <p><a href="mailto:support@brainy.buildstackhq.com" className="text-purple-light hover:underline">support@brainy.buildstackhq.com</a></p>
        </Section>
      </div>
    </div>
  )
}
