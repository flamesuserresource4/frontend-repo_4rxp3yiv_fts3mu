import { useState } from "react";

export default function WaitlistForm() {
  const [form, setForm] = useState({ name: "", email: "", link: "" });
  const [status, setStatus] = useState(null);

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // For this static announcement page, we'll use a simple mailto fallback.
      const params = new URLSearchParams({
        subject: "StoryHost Waitlist Signup",
        body: `Name: ${form.name}\nEmail: ${form.email}\nLink: ${form.link}`,
      });
      window.location.href = `mailto:hello@storyhost.app?${params.toString()}`;
      setStatus("Thanks! Your email client will open to confirm your spot.");
    } catch (err) {
      setStatus("Something went wrong. Please email hello@storyhost.app");
    }
  };

  return (
    <section id="waitlist" className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Be the First to Know.</h2>
          <p className="mt-3 text-gray-600">
            We are launching soon. Sign up for our private waitlist to get project updates and a special early-bird discount when we go live.
          </p>
        </div>

        <form onSubmit={onSubmit} className="mt-10 grid gap-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={onChange}
              required
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Your Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              required
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">(Optional) Link to your current book/website</label>
            <input
              type="url"
              name="link"
              value={form.link}
              onChange={onChange}
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              placeholder="https://..."
            />
          </div>
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Join the Waitlist
          </button>
          {status && <p className="text-sm text-gray-600">{status}</p>}
        </form>
      </div>
    </section>
  );
}
