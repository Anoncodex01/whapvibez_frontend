import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ – WhapVibez",
  description:
    "Frequently asked questions about how WhapVibez works, safety, and fees.",
};

const faqs = [
  {
    question: "What is WhapVibez?",
    answer:
      "WhapVibez is an all‑in‑one social platform where you can watch and create short videos, go live, chat with your community, and buy or sell products directly inside the app.",
  },
  {
    question: "Is WhapVibez free to use?",
    answer:
      "Yes. Downloading the app, creating an account, and using the core social features are free. Some optional features for creators and shops may involve fees or revenue sharing, which are shown clearly inside the app.",
  },
  {
    question: "How do creators and shops make money?",
    answer:
      "Creators and shops can earn from product sales, live‑stream gifts, tips, and other in‑app monetization tools. Earnings and performance are visible in your in‑app dashboard so you can track your digital hustle in real time.",
  },
  {
    question: "What fees does WhapVibez charge?",
    answer:
      "WhapVibez may charge platform or transaction fees on earnings from sales, gifts, and other monetization features. Exact fees, payout thresholds, currencies (like TZS), and schedules are shown inside the creator or shop dashboard and may vary by region and payment method.",
  },
  {
    question: "Is my data safe?",
    answer:
      "We use industry‑standard security practices and reputable infrastructure providers to protect your data. We collect only the information needed to operate and improve the service, as explained in our Privacy Policy.",
  },
  {
    question: "Where can I read the Privacy Policy and Terms?",
    answer:
      "You can review our Privacy Policy at /legal/privacy-policy and our Terms & Conditions at /legal/terms. They explain in detail how we handle your data and how the platform works.",
  },
  {
    question: "Who can use WhapVibez?",
    answer:
      "WhapVibez is intended for users who are at least 13 years old (or the minimum age required in your country). In some regions, a parent or guardian may need to give consent.",
  },
  {
    question: "How do I delete my account?",
    answer:
      "You can delete your account from inside the app by going to Profile → Settings → Delete account. If you no longer have access to the app, you can request deletion via email using the contact details in our Privacy Policy.",
  },
  {
    question: "How do I report abuse or a problem?",
    answer:
      "If you see content or behavior that breaks our rules, you can report it directly in the app or contact our support team at support@whapvibez.com with as much detail as possible.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F]">
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[150px] rounded-full pointer-events-none z-0" />

      <section className="relative z-10 max-w-4xl mx-auto px-6 pt-28 pb-20">
        <div className="max-w-2xl mb-8">
          <p className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-primary text-[11px] font-extrabold tracking-[0.16em] uppercase mb-3">
            Help Center
          </p>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-medium">
            Short answers to the things people ask most about how WhapVibez
            works, how you earn, and how we keep you safe.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <details
              key={item.question}
              className="group bg-white/90 backdrop-blur-xl border border-gray-100 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] px-4 sm:px-6 py-3 sm:py-4"
              open={index === 0}
            >
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h2 className="text-sm sm:text-base font-semibold text-gray-900 mr-4">
                  {item.question}
                </h2>
                <span className="ml-auto flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-gray-700 text-xs font-bold transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                {item.answer}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-10 text-sm text-gray-500">
          <p>
            Still need help? Reach our team at{" "}
            <a
              href="mailto:support@whapvibez.com"
              className="text-primary font-semibold hover:underline"
            >
              support@whapvibez.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}

