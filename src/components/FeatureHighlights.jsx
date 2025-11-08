import { Palette, CreditCard, Headphones } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Beautiful Templates",
    text: "Look professional with storefronts designed specifically for children's books.",
  },
  {
    icon: CreditCard,
    title: "Direct Payments",
    text: "Connect your Stripe or PayPal and get paid instantly. We don't touch your money.",
  },
  {
    icon: Headphones,
    title: "Digital Delivery",
    text: "Automatically send secure download links for your eBooks and audiobooks.",
  },
];

export default function FeatureHighlights() {
  return (
    <section className="bg-indigo-50 py-16" id="how">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900">Sneak Peek</h2>
          <p className="mt-3 text-gray-600">Three core features we’re polishing for launch.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <f.icon className="h-6 w-6 text-indigo-600" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
