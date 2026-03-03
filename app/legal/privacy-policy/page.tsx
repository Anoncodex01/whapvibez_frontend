import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – WhapVibez",
  description: "Learn how WhapVibez collects, uses, and protects your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F]">
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[150px] rounded-full pointer-events-none z-0" />

      <section className="relative z-10 max-w-3xl mx-auto px-6 pt-28 pb-20">
        <div className="bg-white/90 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-[0_18px_60px_rgba(0,0,0,0.08)] p-6 sm:p-10">
          <header className="mb-8">
            <p className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-primary text-[11px] font-extrabold tracking-[0.16em] uppercase mb-3">
              Legal &amp; Safety
            </p>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-2">
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-500 font-medium">
              Last updated: January 2026
            </p>
          </header>

          <div className="prose prose-sm sm:prose-base max-w-none prose-headings:font-black prose-h2:text-gray-900 prose-h3:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-a:text-primary">
            <p>
              WhapVibez (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
              committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, store, and protect your information
              when you use our mobile application, website, and related
              services (collectively, the &quot;Services&quot;).
            </p>

            <h2>1. Information We Collect</h2>
            <p>We collect information in the following ways:</p>
            <ul>
              <li>
                <strong>Account information:</strong> When you register, we
                collect your email address, username, full name, and password.
                You may also provide a profile photo, bio, phone number,
                website, location, date of birth, gender, and category.
              </li>
              <li>
                <strong>User-generated content:</strong> Videos, photos,
                captions, comments, likes, reposts, community posts, shop
                listings, and messages you create or send through the app.
              </li>
              <li>
                <strong>Camera and microphone:</strong> We access your
                device&apos;s camera and microphone only when you choose to
                record or stream video or audio. We do not collect or store raw
                camera or microphone data beyond the content you choose to
                upload or broadcast.
              </li>
              <li>
                <strong>Location:</strong> If you enable location services, we
                may collect your location to tag posts, improve relevance, or
                provide location-based features. You can disable this in your
                device or app settings.
              </li>
              <li>
                <strong>Shop and payments:</strong> If you use our marketplace,
                we collect shop details (name, description, logo), product
                listings, order and payment-related data, and payout
                information as needed to process transactions.
              </li>
              <li>
                <strong>Messaging:</strong> Messages you send and receive, and
                related metadata (for example, read receipts and online status
                if you enable them), to provide real-time chat and
                notifications.
              </li>
              <li>
                <strong>Device and usage:</strong> Device type, operating
                system, app version, approximate region, and usage data (for
                example, how you use the app and which features you interact
                with) to improve services and fix issues. We may use analytics
                and crash-reporting tools.
              </li>
              <li>
                <strong>Push notifications:</strong> We store a push token (for
                example, FCM) to send you notifications you have agreed to
                receive.
              </li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>
                Provide, maintain, and improve the Services (feed, profiles,
                posts, live streaming, messaging, communities, shop, and
                notifications).
              </li>
              <li>Create and manage your account and authenticate you.</li>
              <li>Process payments and fulfill orders in the marketplace.</li>
              <li>
                Enable creators, shops, and buyers to communicate and complete
                transactions.
              </li>
              <li>
                Send you service-related communications and, where allowed,
                marketing communications and push notifications.
              </li>
              <li>
                Enforce our terms, prevent fraud and abuse, and comply with
                legal obligations.
              </li>
              <li>
                Analyze usage to improve the product, safety systems, and new
                features.
              </li>
            </ul>

            <h2>3. Data Storage and Security</h2>
            <p>
              Your data is stored on secure servers (including cloud providers
              we use for hosting and storage). We use industry-standard
              technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure,
              or destruction. No method of transmission or storage is 100%
              secure; we cannot guarantee absolute security.
            </p>

            <h2>4. Sharing of Information</h2>
            <p>We do not sell your personal information. We may share it only in these cases:</p>
            <ul>
              <li>
                <strong>Service providers:</strong> With vendors who help us
                operate the Services (for example, hosting, analytics, payment
                processing, push notifications, live streaming). They are
                contractually required to protect your data and use it only for
                the services they provide to us.
              </li>
              <li>
                <strong>Other users:</strong> Your profile and public content
                (for example, username, profile photo, public posts, shop name)
                are visible according to your privacy and app settings.
              </li>
              <li>
                <strong>Legal:</strong> When required by law, court order, or
                government request, or to protect our rights, safety, or
                property, or the rights, safety, or property of others.
              </li>
              <li>
                <strong>Business transfer:</strong> In connection with a
                merger, sale, or acquisition, subject to the same privacy
                commitments.
              </li>
            </ul>

            <h2>5. Data Retention</h2>
            <p>
              We retain your information for as long as your account is active
              or as needed to provide you Services, comply with legal
              obligations, resolve disputes, and enforce our agreements. If you
              delete your account, we delete your personal data as described in
              this policy, subject to data we may need to retain for legal,
              security, or fraud-prevention reasons.
            </p>

            <h2>6. Your Rights and Choices</h2>
            <ul>
              <li>
                <strong>Access and correction:</strong> You can access and
                update your profile and account information in the app
                settings.
              </li>
              <li>
                <strong>Delete account:</strong> You may request deletion of
                your account at any time via <strong>Settings → Delete
                account</strong> or by email. We will delete your personal data
                (for example, username, email, profile, shop name) in line with
                our data retention rules.
              </li>
              <li>
                <strong>Privacy settings:</strong> You can control who can
                message you, see your online status, and view your content
                using in-app privacy settings.
              </li>
              <li>
                <strong>Notifications:</strong> You can manage push and in-app
                notification preferences in your device and app settings.
              </li>
              <li>
                <strong>Location:</strong> You can disable location access in
                your device settings or when the app prompts you.
              </li>
            </ul>

            <h2>7. Children&apos;s Privacy</h2>
            <p>
              Our Services are not directed to children under 13 (or the
              applicable age in your country). We do not knowingly collect
              personal information from children. If you believe we have
              collected such information, please contact us and we will delete
              it promptly.
            </p>

            <h2>8. International Transfers</h2>
            <p>
              Your information may be processed in countries other than your
              own. We ensure appropriate safeguards are in place so that your
              data remains protected in line with this policy and applicable
              law.
            </p>

            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of material changes by posting the updated policy in
              the app or on this website and, where appropriate, via
              notification. The &quot;Last updated&quot; date at the top
              indicates when the policy was last revised. Continued use of the
              Services after changes constitutes acceptance of the updated
              policy.
            </p>

            <h2>10. Contact Us</h2>
            <p className="contact">
              If you have questions about this Privacy Policy or our data
              practices, please contact us at:
            </p>
            <p>
              <strong>Email (privacy &amp; data):</strong>{" "}
              <a href="mailto:privacy@whapvibez.com">privacy@whapvibez.com</a>
            </p>
            <p>
              <strong>Email (general support):</strong>{" "}
              <a href="mailto:support@whapvibez.com">support@whapvibez.com</a>
            </p>
            <p>WhapVibez – Privacy inquiries</p>
          </div>
        </div>
      </section>
    </main>
  );
}

