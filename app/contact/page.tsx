"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-alabaster min-h-screen">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-24">
          <div className="max-w-3xl mx-auto">
            <span className="text-accent-label text-antique-gold mb-4 block text-center">GET IN TOUCH</span>
            <h1 className="text-5xl md:text-6xl font-serif text-obsidian mb-6 text-center">Contact Us</h1>
            <p className="text-charcoal font-light text-center mb-16 text-lg max-w-md mx-auto">
              We would love to hear from you. Reach out for bespoke inquiries, store visits, or any questions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {[
                { title: "Visit Us", detail: "Mumbai, Maharashtra\nIndia 400001", icon: "📍" },
                { title: "Call Us", detail: "+91 98200 55555\nMon–Sat, 10am–7pm", icon: "📞" },
                { title: "Email Us", detail: "hello@ataramen.com\ncustomercare@ataramen.com", icon: "✉️" },
              ].map((c) => (
                <div key={c.title} className="bg-pearl border border-cashmere p-8 text-center">
                  <div className="text-2xl mb-4">{c.icon}</div>
                  <h3 className="text-sm tracking-[0.15em] uppercase text-obsidian font-medium mb-3">{c.title}</h3>
                  <p className="text-charcoal font-light text-sm whitespace-pre-line">{c.detail}</p>
                </div>
              ))}
            </div>

            {/* Contact form */}
            <div className="bg-pearl border border-cashmere p-10 lg:p-14">
              <h2 className="text-3xl font-serif text-obsidian mb-2">Send a Message</h2>
              <p className="text-charcoal font-light mb-10">Fill in the form below and we&apos;ll get back to you within 24 hours.</p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs tracking-[0.15em] uppercase text-obsidian font-medium mb-2 block">First Name</label>
                    <input
                      type="text"
                      className="w-full border border-cashmere bg-alabaster px-4 py-3 text-sm text-obsidian focus:outline-none focus:border-obsidian transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-[0.15em] uppercase text-obsidian font-medium mb-2 block">Last Name</label>
                    <input
                      type="text"
                      className="w-full border border-cashmere bg-alabaster px-4 py-3 text-sm text-obsidian focus:outline-none focus:border-obsidian transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs tracking-[0.15em] uppercase text-obsidian font-medium mb-2 block">Email</label>
                  <input
                    type="email"
                    className="w-full border border-cashmere bg-alabaster px-4 py-3 text-sm text-obsidian focus:outline-none focus:border-obsidian transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="text-xs tracking-[0.15em] uppercase text-obsidian font-medium mb-2 block">Subject</label>
                  <select className="w-full border border-cashmere bg-alabaster px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-obsidian transition-colors">
                    <option>General Inquiry</option>
                    <option>Bespoke Order</option>
                    <option>Shipping & Delivery</option>
                    <option>Returns & Exchange</option>
                    <option>Collaboration</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs tracking-[0.15em] uppercase text-obsidian font-medium mb-2 block">Message</label>
                  <textarea
                    rows={5}
                    className="w-full border border-cashmere bg-alabaster px-4 py-3 text-sm text-obsidian focus:outline-none focus:border-obsidian transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button type="submit" className="btn-primary w-full py-4 text-sm">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
