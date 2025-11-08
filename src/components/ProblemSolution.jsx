import { AlertTriangle, CheckCircle2 } from "lucide-react";

export default function ProblemSolution() {
  const points = [
    {
      icon: AlertTriangle,
      title: "The Problem",
      text: "Tired of high fees, complex platforms, and getting lost in the crowd?",
      color: "text-rose-600",
      bg: "bg-rose-50",
    },
    {
      icon: CheckCircle2,
      title: "Our Solution",
      text: "StoryHost gives you a beautiful, professional website that's 100% yours, all for a simple monthly price.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
  ];

  return (
    <section className="bg-white py-16" id="why">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why StoryHost?</h2>
          <p className="mt-3 text-gray-600">A focused platform built for children’s book authors.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {points.map((p) => (
            <div key={p.title} className={`rounded-2xl ${p.bg} p-6 shadow-sm`}>
              <div className="flex items-start gap-4">
                <p.icon className={`h-6 w-6 ${p.color}`} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                  <p className="mt-1 text-gray-700">{p.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
