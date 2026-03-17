import React from 'react'

import { useState } from "react";

const faqs = [
  {
    category: "Getting Started",
    color: "#60a5fa",
    bg: "rgba(59,130,246,0.10)",
    items: [
      {
        q: "How do I schedule a consultation?",
        a: "You can schedule an appointment through our website using the 'Book Consultation' button, or contact our office directly by phone or email. We typically respond within 24 hours and offer flexible scheduling including evenings and weekends.",
      },
      {
        q: "What documents should I bring for my consultation?",
        a: "Bring any relevant documents related to your legal issue — such as contracts, court notices, correspondence, identification, and any case papers you have received. The more context you provide, the better we can assess your situation during the initial meeting.",
      },
      {
        q: "Do you provide online consultations?",
        a: "Yes, we offer both in-person and online consultations via secure video call. Our virtual consultations are just as thorough as face-to-face meetings and are available to clients across all locations.",
      },
      {
        q: "Is my initial consultation free?",
        a: "We offer a complimentary 30-minute initial consultation for most practice areas. This allows us to understand your legal needs and determine how best to assist you before any commitment is made.",
      },
    ],
  },
  {
    category: "Legal Fees & Billing",
    color: "#fbbf24",
    bg: "rgba(245,158,11,0.10)",
    items: [
      {
        q: "How are legal fees structured?",
        a: "Our fees vary depending on the nature and complexity of your case. We offer hourly billing, flat-fee arrangements for straightforward matters, and contingency fee options for certain civil cases. We will always explain our fee structure clearly before any engagement.",
      },
      {
        q: "Do you offer payment plans?",
        a: "Yes, we understand that legal expenses can be a burden. We offer flexible payment plans tailored to your financial situation. Our team will work with you to find an arrangement that allows you to access the legal support you need.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit and debit cards, bank transfers, and cash payments. For ongoing matters, we also offer direct debit arrangements to simplify billing.",
      },
    ],
  },
  {
    category: "Practice Areas",
    color: "#f472b6",
    bg: "rgba(236,72,153,0.10)",
    items: [
      {
        q: "What areas of law do you practise?",
        a: "Our firm covers Criminal Defense, Family Law, Corporate Law, Civil Litigation, Immigration Law, and Financial Law. Each practice area is led by a specialist attorney with deep expertise in that field.",
      },
      {
        q: "Can you handle cases outside your home state?",
        a: "Yes. Many of our attorneys are licensed in multiple states, and we regularly handle federal matters. We can also refer you to trusted partner firms if your case requires local representation in a jurisdiction where we do not practise.",
      },
      {
        q: "Do you handle emergency legal situations?",
        a: "Absolutely. We provide 24/7 emergency legal assistance for urgent matters such as arrests, emergency injunctions, and time-sensitive filings. Call our emergency line and a qualified attorney will respond promptly.",
      },
    ],
  },
  {
    category: "Confidentiality & Process",
    color: "#4ade80",
    bg: "rgba(34,197,94,0.10)",
    items: [
      {
        q: "How is my information kept confidential?",
        a: "Attorney-client privilege applies to all communications between you and our firm. All information shared during consultations and throughout your case is strictly confidential and protected by law. We also employ industry-standard data security protocols.",
      },
      {
        q: "How long will my case take?",
        a: "Case timelines vary significantly depending on complexity, the opposing party, and court schedules. During your consultation we will give you a realistic timeline based on the specific details of your matter and keep you updated at every stage.",
      },
      {
        q: "How will you keep me informed about my case?",
        a: "We assign a dedicated point of contact to every client. You will receive regular written updates, and we are available by phone, email, and our secure client portal. You will never be left wondering about the status of your case.",
      },
    ],
  },
];

function AccordionItem({ q, a, isOpen, onToggle, accentColor }) {
  return (
    <div
      className={`faq-item border-b border-white/[0.07] ${isOpen ? "open" : ""}`}
      style={{ "--accent": accentColor }}
    >
      <button
        onClick={onToggle}
        className="faq-btn w-full flex items-start justify-between gap-4 py-5 text-left"
      >
        <span className="faq-q fb font-medium text-sm sm:text-base leading-snug text-gray-200 pr-2 transition-colors duration-300">
          {q}
        </span>
        <span
          className="faq-icon flex-shrink-0 w-7 h-7 rounded-full border border-white/10 flex items-center justify-center mt-0.5 transition-all duration-400"
          style={isOpen ? { background: accentColor + "22", borderColor: accentColor + "66" } : {}}
        >
          <svg
            className="w-3.5 h-3.5 transition-transform duration-400"
            style={{ fill: isOpen ? accentColor : "rgba(255,255,255,0.4)", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
            viewBox="0 0 24 24"
          >
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
        </span>
      </button>
      <div
        className="faq-body overflow-hidden transition-all duration-500"
        style={{ maxHeight: isOpen ? "320px" : "0px", opacity: isOpen ? 1 : 0 }}
      >
        <p className="fb text-gray-400 text-sm leading-relaxed pb-6 pr-10">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openMap, setOpenMap] = useState({ "0-0": true });

  const toggle = (key) =>
    setOpenMap((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');
        .fh { font-family: 'Cormorant Garamond', Georgia, serif; }
        .fb { font-family: 'DM Sans', sans-serif; }

        @keyframes fadeUp  { from{opacity:0;transform:translateY(26px)} to{opacity:1;transform:translateY(0)} }
        @keyframes growX   { from{width:0} to{width:3rem} }

        .a1{animation:fadeUp .75s ease forwards;animation-delay:.10s;opacity:0}
        .a2{animation:fadeUp .75s ease forwards;animation-delay:.24s;opacity:0}
        .a3{animation:fadeUp .75s ease forwards;animation-delay:.36s;opacity:0}
        .a4{animation:fadeUp .75s ease forwards;animation-delay:.48s;opacity:0}
        .a5{animation:fadeUp .75s ease forwards;animation-delay:.60s;opacity:0}
        .aln{animation:growX .85s ease forwards;animation-delay:.28s;display:block;width:0}

        .faq-btn:hover .faq-q { color: #fff; }

        .cat-tab {
          transition: border-color .25s ease, background .25s ease, color .25s ease, transform .25s ease;
        }
        .cat-tab:hover { transform: translateY(-2px); }
        .cat-tab.active-tab {
          transform: translateY(-2px);
        }

        .contact-card {
          transition: border-color .3s ease, background .3s ease, transform .3s ease, box-shadow .3s ease;
        }
        .contact-card:hover {
          border-color: rgba(212,160,23,.4);
          background: rgba(212,160,23,.06);
          transform: translateY(-4px);
          box-shadow: 0 18px 44px rgba(0,0,0,.5);
        }
        .contact-card:hover .contact-icon { background: rgba(212,160,23,.22); transform: scale(1.08); }
        .contact-icon { transition: background .3s ease, transform .3s ease; }

        .cta-btn {
          position: relative; overflow: hidden;
          transition: transform .3s ease, box-shadow .3s ease;
        }
        .cta-btn::before {
          content: ''; position: absolute; inset: 0;
          background: rgba(255,255,255,.13);
          transform: translateX(-101%);
          transition: transform .35s ease;
        }
        .cta-btn:hover::before { transform: translateX(0); }
        .cta-btn:hover { transform: translateY(-3px); box-shadow: 0 14px 36px rgba(212,160,23,.4); }
      `}</style>

      <div className="fb bg-gray-950" id="faq">
        <section className="relative py-24 md:py-32 overflow-hidden">

          {/* ── Background ── */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-950" />
            <div className="absolute inset-0 opacity-[0.025]"
              style={{ backgroundImage: `radial-gradient(circle,#D4A017 1px,transparent 1px)`, backgroundSize: "44px 44px" }} />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/25 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-600/4 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">

            {/* ── Header ── */}
            <div className="flex flex-col items-center text-center mb-14 md:mb-16">
              <div className="a1 flex items-center gap-3 mb-5">
                <div className="aln h-[2px] bg-amber-500" />
                <span className="fb text-amber-400 text-[11px] tracking-[0.38em] uppercase font-semibold">Support</span>
                <div className="aln h-[2px] bg-amber-500" />
              </div>
              <h2 className="a2 fh text-white font-bold leading-[1.1] mb-5"
                style={{ fontSize: "clamp(2.2rem,4.5vw,3.6rem)" }}>
                Frequently Asked <span className="italic text-amber-400">Questions</span>
              </h2>
              <p className="a3 fb text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
                Find answers to the most common questions about our legal services, processes, and fees. Can't find what you're looking for? Contact us directly.
              </p>
            </div>

            {/* ── Category tabs ── */}
            <div className="a3 flex flex-wrap justify-center gap-2 mb-12">
              {faqs.map(({ category, color, bg }, ci) => (
                <button key={category}
                  onClick={() => {
                    const el = document.getElementById(`cat-${ci}`);
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="cat-tab fb text-xs font-semibold tracking-wider uppercase px-4 py-2 border"
                  style={{ borderColor: color + "40", color, background: bg }}>
                  {category}
                </button>
              ))}
            </div>

            {/* ── FAQ Groups ── */}
            <div className="a4 flex flex-col gap-8 mb-16">
              {faqs.map(({ category, color, bg, items }, ci) => (
                <div key={category} id={`cat-${ci}`}
                  className="border border-white/[0.07] bg-white/[0.025] overflow-hidden">

                  {/* Category header */}
                  <div className="flex items-center gap-3 px-6 py-4 border-b border-white/[0.07]"
                    style={{ background: bg }}>
                    <div className="w-1.5 h-5 rounded-full flex-shrink-0"
                      style={{ background: color }} />
                    <span className="fb text-xs font-bold tracking-[0.28em] uppercase"
                      style={{ color }}>
                      {category}
                    </span>
                    <span className="ml-auto fb text-gray-500 text-xs">
                      {items.length} questions
                    </span>
                  </div>

                  {/* Accordion items */}
                  <div className="px-6">
                    {items.map((item, ii) => {
                      const key = `${ci}-${ii}`;
                      return (
                        <AccordionItem
                          key={key}
                          q={item.q}
                          a={item.a}
                          isOpen={!!openMap[key]}
                          onToggle={() => toggle(key)}
                          accentColor={color}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* ── Still have questions? ── */}
            <div className="a5 mb-16 border border-amber-500/15 bg-amber-500/4 p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: `radial-gradient(circle,#D4A017 1px,transparent 1px)`, backgroundSize: "28px 28px" }} />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-amber-500/12 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-6 h-6 fill-amber-400" viewBox="0 0 24 24">
                    <path d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-4h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z" />
                  </svg>
                </div>
                <h3 className="fh text-white font-bold mb-3" style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)" }}>
                  Still Have Questions?
                </h3>
                <p className="fb text-gray-400 text-sm leading-relaxed max-w-md mx-auto mb-7">
                  Our legal team is available to answer any specific questions about your situation. Reach out and we'll respond promptly.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="#" className="cta-btn inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3.5 bg-amber-500 text-gray-900 fb font-semibold text-xs sm:text-sm md:text-base tracking-[0.14em] sm:tracking-[0.17em] md:tracking-[0.2em] uppercase rounded-lg transition-all duration-300 hover:bg-amber-400">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 fill-gray-900 flex-shrink-0" viewBox="0 0 24 24">
                      <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
                    </svg>
                    <span className="whitespace-nowrap">Book a Consultation</span>
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3.5 border border-white/20 text-white fb font-semibold text-xs sm:text-sm md:text-base tracking-[0.14em] sm:tracking-[0.17em] md:tracking-[0.2em] uppercase rounded-lg hover:border-amber-500/40 hover:bg-amber-500/5 transition-all duration-300">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 fill-white flex-shrink-0" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                    <span className="whitespace-nowrap">Call Us Now</span>
                  </a>
                </div>
              </div>
            </div>

            {/* ── Contact cards ── */}
            <div className="a5 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                {
                  icon: <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />,
                  label: "Call Us",
                  value: "+1 (800) 555-0199",
                  sub: "Mon – Fri, 9am – 6pm",
                },
                {
                  icon: <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />,
                  label: "Email Us",
                  value: "info@lexfirma.com",
                  sub: "Reply within 24 hours",
                },
                {
                  icon: <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />,
                  label: "Visit Us",
                  value: "123 Legal Avenue, NY",
                  sub: "By appointment only",
                },
              ].map(({ icon, label, value, sub }) => (
                <div key={label} className="contact-card flex flex-col items-center text-center gap-3 p-6 border border-white/[0.07] bg-white/[0.025]">
                  <div className="contact-icon w-12 h-12 rounded-full bg-amber-500/12 flex items-center justify-center">
                    <svg className="w-5 h-5 fill-amber-400" viewBox="0 0 24 24">{icon}</svg>
                  </div>
                  <div>
                    <p className="fb text-amber-400/70 text-[10px] tracking-[0.3em] uppercase font-semibold mb-1">{label}</p>
                    <p className="fh text-white font-bold text-base">{value}</p>
                    <p className="fb text-gray-500 text-xs mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </div>
    </>
  );
}
