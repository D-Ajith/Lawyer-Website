import React from 'react'

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState("");

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const subjects = [
    "Criminal Defense",
    "Family Law",
    "Corporate Law",
    "Civil Litigation",
    "Immigration Law",
    "Financial Law",
    "General Inquiry",
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');
        .fh { font-family: 'Cormorant Garamond', Georgia, serif; }
        .fb { font-family: 'DM Sans', sans-serif; }

        @keyframes fadeUp  { from{opacity:0;transform:translateY(26px)} to{opacity:1;transform:translateY(0)} }
        @keyframes growX   { from{width:0} to{width:3rem} }
        @keyframes popIn   { from{opacity:0;transform:scale(.88)} to{opacity:1;transform:scale(1)} }
        @keyframes checkDraw { from{stroke-dashoffset:40} to{stroke-dashoffset:0} }

        .a1{animation:fadeUp .75s ease forwards;animation-delay:.10s;opacity:0}
        .a2{animation:fadeUp .75s ease forwards;animation-delay:.24s;opacity:0}
        .a3{animation:fadeUp .75s ease forwards;animation-delay:.36s;opacity:0}
        .a4{animation:fadeUp .75s ease forwards;animation-delay:.48s;opacity:0}
        .a5{animation:fadeUp .75s ease forwards;animation-delay:.60s;opacity:0}
        .aln{animation:growX .85s ease forwards;animation-delay:.28s;display:block;width:0}
        .pop-in{animation:popIn .45s cubic-bezier(.34,1.56,.64,1) forwards;}

        /* Form field */
        .cf-field {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.09);
          color: #fff;
          transition: border-color .25s ease, box-shadow .25s ease, background .25s ease;
          outline: none;
          width: 100%;
        }
        .cf-field:hover { border-color: rgba(255,255,255,0.18); }
        .cf-field:focus {
          border-color: rgba(212,160,23,0.55);
          box-shadow: 0 0 0 3px rgba(212,160,23,0.10);
          background: rgba(212,160,23,0.04);
        }
        .cf-field::placeholder { color: rgba(156,163,175,0.6); }
        .cf-field option { background: #111827; color: #fff; }

        /* Label float */
        .field-wrap { position: relative; }
        .cf-label {
          position: absolute;
          top: 50%;
          left: 14px;
          transform: translateY(-50%);
          font-size: .8rem;
          color: rgba(156,163,175,0.7);
          pointer-events: none;
          transition: all .22s ease;
          font-family: 'DM Sans', sans-serif;
        }
        .cf-label.textarea-lbl { top: 16px; transform: none; }
        .cf-label.active {
          top: -9px;
          transform: none;
          font-size: .68rem;
          background: #0f1117;
          padding: 0 5px;
          color: #fbbf24;
          left: 10px;
        }

        /* Info card */
        .info-card {
          transition: border-color .3s ease, background .3s ease, transform .3s ease, box-shadow .3s ease;
        }
        .info-card:hover {
          border-color: rgba(212,160,23,.45);
          background: rgba(212,160,23,.07);
          transform: translateY(-4px);
          box-shadow: 0 18px 44px rgba(0,0,0,.5);
        }
        .info-card:hover .info-icon { background: rgba(212,160,23,.22); transform: scale(1.08); }
        .info-icon { transition: background .3s ease, transform .3s ease; }

        /* Send button */
        .send-btn {
          position: relative; overflow: hidden;
          transition: transform .3s ease, box-shadow .3s ease;
        }
        .send-btn::before {
          content: ''; position: absolute; inset: 0;
          background: rgba(255,255,255,.14);
          transform: translateX(-101%);
          transition: transform .35s ease;
        }
        .send-btn:hover::before { transform: translateX(0); }
        .send-btn:hover { transform: translateY(-3px); box-shadow: 0 14px 36px rgba(212,160,23,.42); }
        .send-btn:disabled { opacity: .6; cursor: not-allowed; transform: none; box-shadow: none; }

        /* Success toast */
        .success-toast { animation: popIn .45s cubic-bezier(.34,1.56,.64,1) forwards; }
        .check-path { stroke-dasharray: 40; stroke-dashoffset: 40; animation: checkDraw .6s ease forwards .2s; }

        /* Map iframe */
        .map-frame { filter: grayscale(1) invert(1) brightness(0.6) sepia(0.2); transition: filter .3s ease; }
        .map-frame:hover { filter: grayscale(0.7) invert(1) brightness(0.7) sepia(0.1); }

        /* Social hover */
        .soc-btn { transition: background .25s ease, border-color .25s ease, transform .25s ease; }
        .soc-btn:hover { background: rgba(212,160,23,.18); border-color: rgba(212,160,23,.5); transform: translateY(-2px); }
      `}</style>

      <div className="fb bg-gray-950" id="contact">
        <section className="relative py-24 md:py-32 overflow-hidden">

          {/* ── Background ── */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-950" />
            <div className="absolute inset-0 opacity-[0.025]"
              style={{ backgroundImage: `radial-gradient(circle,#D4A017 1px,transparent 1px)`, backgroundSize: "44px 44px" }} />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/25 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            <div className="absolute top-1/3 left-1/4 w-[600px] h-[500px] bg-amber-600/4 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/3 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">

            {/* ── Header ── */}
            <div className="flex flex-col items-center text-center mb-16 md:mb-20">
              <div className="a1 flex items-center gap-3 mb-5">
                <div className="aln h-[2px] bg-amber-500" />
                <span className="fb text-amber-400 text-[11px] tracking-[0.38em] uppercase font-semibold">Get In Touch</span>
                <div className="aln h-[2px] bg-amber-500" />
              </div>
              <h2 className="a2 fh text-white font-bold leading-[1.1] mb-5"
                style={{ fontSize: "clamp(2.2rem,4.5vw,3.6rem)" }}>
                Contact <span className="italic text-amber-400">Our Firm</span>
              </h2>
              <p className="a3 fb text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
                Reach out to our legal team for a consultation, enquiry, or any assistance you need. We're here to help — every step of the way.
              </p>
            </div>

            {/* ── Info Cards Row ── */}
            <div className="a3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
              {[
                {
                  icon: <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />,
                  label: "Office Address",
                  value: "123 Legal Street",
                  sub: "Business District, City – 500001",
                },
                {
                  icon: <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />,
                  label: "Phone",
                  value: "+91 98765 43210",
                  sub: "Mon – Sat, 9am – 6pm",
                },
                {
                  icon: <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />,
                  label: "Email",
                  value: "info@lawfirm.com",
                  sub: "Reply within 24 hours",
                },
                {
                  icon: <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />,
                  label: "Working Hours",
                  value: "Mon – Fri: 9am – 6pm",
                  sub: "Saturday: 10am – 2pm",
                },
              ].map(({ icon, label, value, sub }) => (
                <div key={label}
                  className="info-card flex flex-col items-center text-center gap-3 p-6 border border-white/[0.07] bg-white/[0.025]">
                  <div className="info-icon w-12 h-12 rounded-full bg-amber-500/12 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 fill-amber-400" viewBox="0 0 24 24">{icon}</svg>
                  </div>
                  <div>
                    <p className="fb text-amber-400/70 text-[10px] tracking-[0.3em] uppercase font-semibold mb-1">{label}</p>
                    <p className="fh text-white font-bold text-base leading-snug">{value}</p>
                    <p className="fb text-gray-500 text-xs mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Two-column: Form + Map ── */}
            <div className="a4 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">

              {/* ── Contact Form ── */}
              <div className="border border-white/[0.07] bg-white/[0.025] p-8 md:p-10 relative">
                {/* Top gold strip */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-500/0 via-amber-500 to-amber-500/0" />

                <h3 className="fh text-white font-bold mb-1" style={{ fontSize: "clamp(1.4rem,2.5vw,1.9rem)" }}>
                  Send Us a <span className="italic text-amber-400">Message</span>
                </h3>
                <p className="fb text-gray-500 text-sm mb-8">Fill out the form and our team will get back to you shortly.</p>

                {/* Success state */}
                {submitted && (
                  <div className="success-toast absolute inset-0 z-20 flex flex-col items-center justify-center bg-gray-950/95 backdrop-blur-sm">
                    <div className="w-16 h-16 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center mb-4">
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round">
                        <path className="check-path" d="M5 12l5 5L20 7" />
                      </svg>
                    </div>
                    <p className="fh text-white font-bold text-xl mb-1">Message Sent!</p>
                    <p className="fb text-gray-400 text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                )}

                <form onSubmit={submit} className="flex flex-col gap-5">
                  {/* Row 1: Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="field-wrap">
                      <input
                        name="name" value={form.name} onChange={handle}
                        onFocus={() => setFocused("name")} onBlur={() => setFocused("")}
                        required placeholder=" "
                        className="cf-field px-4 py-3.5 text-sm fb"
                      />
                      <label className={`cf-label ${focused === "name" || form.name ? "active" : ""}`}>Full Name *</label>
                    </div>
                    {/* Email */}
                    <div className="field-wrap">
                      <input
                        type="email" name="email" value={form.email} onChange={handle}
                        onFocus={() => setFocused("email")} onBlur={() => setFocused("")}
                        required placeholder=" "
                        className="cf-field px-4 py-3.5 text-sm fb"
                      />
                      <label className={`cf-label ${focused === "email" || form.email ? "active" : ""}`}>Email Address *</label>
                    </div>
                  </div>

                  {/* Row 2: Phone + Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div className="field-wrap">
                      <input
                        type="tel" name="phone" value={form.phone} onChange={handle}
                        onFocus={() => setFocused("phone")} onBlur={() => setFocused("")}
                        placeholder=" "
                        className="cf-field px-4 py-3.5 text-sm fb"
                      />
                      <label className={`cf-label ${focused === "phone" || form.phone ? "active" : ""}`}>Phone Number</label>
                    </div>
                    {/* Subject */}
                    <div className="field-wrap">
                      <select
                        name="subject" value={form.subject} onChange={handle}
                        onFocus={() => setFocused("subject")} onBlur={() => setFocused("")}
                        required
                        className="cf-field px-4 py-3.5 text-sm fb appearance-none cursor-pointer"
                        style={{ color: form.subject ? "#fff" : "rgba(156,163,175,0.6)" }}
                      >
                        <option value="" disabled hidden>Select Subject *</option>
                        {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                      <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 fill-gray-400 pointer-events-none"
                        viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z" /></svg>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="field-wrap">
                    <textarea
                      name="message" value={form.message} onChange={handle}
                      onFocus={() => setFocused("message")} onBlur={() => setFocused("")}
                      required rows={5} placeholder=" "
                      className="cf-field px-4 py-3.5 text-sm fb resize-none"
                    />
                    <label className={`cf-label textarea-lbl ${focused === "message" || form.message ? "active" : ""}`}>
                      Your Message *
                    </label>
                  </div>

                  {/* Privacy note */}
                  <p className="fb text-gray-600 text-xs leading-relaxed">
                    By submitting this form, you agree to our privacy policy. All information is kept strictly confidential under attorney-client privilege.
                  </p>

                  {/* Submit */}
                  <button type="submit" className="send-btn inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-amber-500 text-gray-900 fb font-semibold text-xs sm:text-sm md:text-base tracking-[0.14em] sm:tracking-[0.17em] md:tracking-[0.2em] uppercase rounded-lg mt-1 transition-all duration-300 hover:bg-amber-400">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 fill-gray-900 flex-shrink-0" viewBox="0 0 24 24">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                    <span className="whitespace-nowrap">Send Message</span>
                  </button>
                </form>
              </div>

              {/* ── Map + Socials ── */}
              <div className="flex flex-col gap-6">
                {/* Google Map embed */}
                <div className="flex-grow border border-white/[0.07] overflow-hidden relative" style={{ minHeight: "340px" }}>
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-500/0 via-amber-500 to-amber-500/0 z-10" />
                  <iframe
                    title="Office Location"
                    className="map-frame w-full h-full"
                    style={{ minHeight: "340px", border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019560195744!2d-122.41941548468211!3d37.77492997975956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1622000000000!5m2!1sen!2sus"
                  />
                  {/* Map label overlay */}
                  <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 bg-gray-950/90 backdrop-blur-sm px-3 py-2 border border-amber-500/20">
                    <svg className="w-3.5 h-3.5 fill-amber-400 flex-shrink-0" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span className="fb text-white text-xs">123 Legal Street, Business District</span>
                  </div>
                </div>

                {/* Social links */}
                <div className="border border-white/[0.07] bg-white/[0.025] p-6">
                  <p className="fb text-amber-400/70 text-[10px] tracking-[0.3em] uppercase font-semibold mb-4">Follow Us</p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      {
                        name: "LinkedIn",
                        icon: <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />,
                      },
                      {
                        name: "Twitter / X",
                        icon: <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />,
                      },
                      {
                        name: "Facebook",
                        icon: <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" />,
                      },
                      {
                        name: "Instagram",
                        icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />,
                      },
                    ].map(({ name, icon }) => (
                      <a key={name} href="#"
                        className="soc-btn flex items-center gap-2 px-4 py-2.5 border border-white/10 text-gray-300 text-xs fb font-medium tracking-wide">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">{icon}</svg>
                        {name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Emergency banner ── */}
            <div className="a5 flex flex-col sm:flex-row items-center justify-between gap-5 border border-red-500/20 bg-red-500/5 px-8 py-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-500/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 fill-red-400" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm1 14h-2v-2h2v2zm0-4h-2V7h2v4z" />
                  </svg>
                </div>
                <div>
                  <p className="fb text-red-300 font-semibold text-sm">24/7 Emergency Legal Assistance</p>
                  <p className="fb text-gray-400 text-xs mt-0.5">Arrested or facing an urgent legal matter? Call our emergency line immediately.</p>
                </div>
              </div>
              <a href="tel:+919876543210" className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 md:px-6 md:py-3 bg-red-500/15 border border-red-500/30 text-red-300 fb font-semibold text-xs sm:text-sm tracking-[0.12em] sm:tracking-wider uppercase rounded-lg shadow-sm hover:bg-red-500/25 hover:shadow-red-500/20 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-red-300 flex-shrink-0 animate-pulse" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span className="whitespace-nowrap">Call Emergency Line</span>
              </a>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}
