import { useState } from "react";

const practiceAreas = [
  "Criminal Defense",
  "Family Law",
  "Corporate Law",
  "Civil Litigation",
  "Immigration Law",
  "Financial Law",
  "General Inquiry",
];

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "02:00 PM",
  "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM",
  "04:30 PM", "05:00 PM",
];

const steps = ["Personal Info", "Case Details", "Schedule"];

export default function BookAppointment() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    area: "", date: "", time: "", message: "",
  });
  const [focused, setFocused] = useState("");

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const next = (e) => { e.preventDefault(); setStep((s) => Math.min(s + 1, 2)); };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const today = new Date().toISOString().split("T")[0];

  // field helper
  const Field = ({ name, type = "text", label, required, span }) => (
    <div className={`field-wrap ${span ? "sm:col-span-2" : ""}`}>
      <input
        type={type} name={name} value={form[name]} onChange={handle}
        onFocus={() => setFocused(name)} onBlur={() => setFocused("")}
        required={required} placeholder=" " autoComplete="off"
        className="cf-field px-4 py-4 text-sm fb"
        min={type === "date" ? today : undefined}
      />
      <label className={`cf-label ${focused === name || form[name] ? "active" : ""}`}>
        {label}{required ? " *" : ""}
      </label>
    </div>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');
        .fh{font-family:'Cormorant Garamond',Georgia,serif;}
        .fb{font-family:'DM Sans',sans-serif;}

        @keyframes fadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
        @keyframes growX{from{width:0}to{width:3rem}}
        @keyframes popIn{from{opacity:0;transform:scale(.88)}to{opacity:1;transform:scale(1)}}
        @keyframes checkDraw{from{stroke-dashoffset:50}to{stroke-dashoffset:0}}
        @keyframes slideIn{from{opacity:0;transform:translateX(24px)}to{opacity:1;transform:translateX(0)}}
        @keyframes progressGrow{from{width:0}to{width:var(--pw)}}

        .a1{animation:fadeUp .75s ease forwards;animation-delay:.10s;opacity:0}
        .a2{animation:fadeUp .75s ease forwards;animation-delay:.22s;opacity:0}
        .a3{animation:fadeUp .75s ease forwards;animation-delay:.34s;opacity:0}
        .a4{animation:fadeUp .75s ease forwards;animation-delay:.46s;opacity:0}
        .aln{animation:growX .85s ease forwards;animation-delay:.28s;display:block;width:0}
        .slide-in{animation:slideIn .45s ease forwards;}
        .pop-in{animation:popIn .5s cubic-bezier(.34,1.56,.64,1) forwards;}
        .check-path{stroke-dasharray:50;stroke-dashoffset:50;animation:checkDraw .7s ease forwards .25s;}

        /* field */
        .cf-field{
          background:rgba(255,255,255,.03);
          border:1px solid rgba(255,255,255,.09);
          color:#fff;width:100%;
          transition:border-color .25s ease,box-shadow .25s ease,background .25s ease;
          outline:none;
        }
        .cf-field:hover{border-color:rgba(255,255,255,.18);}
        .cf-field:focus{
          border-color:rgba(212,160,23,.55);
          box-shadow:0 0 0 3px rgba(212,160,23,.10);
          background:rgba(212,160,23,.04);
        }
        .cf-field::placeholder{color:rgba(156,163,175,0);}
        .cf-field option{background:#111827;color:#fff;}
        .cf-field::-webkit-calendar-picker-indicator{filter:invert(1) brightness(.6);}

        /* label float */
        .field-wrap{position:relative;}
        .cf-label{
          position:absolute;top:50%;left:14px;
          transform:translateY(-50%);
          font-size:.8rem;color:rgba(156,163,175,.7);
          pointer-events:none;
          transition:all .22s ease;
          font-family:'DM Sans',sans-serif;
          white-space:nowrap;
        }
        .cf-label.textarea-lbl{top:16px;transform:none;}
        .cf-label.active{
          top:-9px;transform:none;font-size:.68rem;
          background:#0f1117;padding:0 5px;
          color:#fbbf24;left:10px;
        }

        /* time slot */
        .time-slot{
          transition:border-color .2s ease,background .2s ease,transform .2s ease;
          cursor:pointer;
        }
        .time-slot:hover{border-color:rgba(212,160,23,.45);background:rgba(212,160,23,.08);transform:translateY(-2px);}
        .time-slot.selected{
          border-color:#fbbf24 !important;
          background:rgba(212,160,23,.15) !important;
          color:#fbbf24 !important;
        }

        /* area card */
        .area-card{
          transition:border-color .2s ease,background .2s ease,transform .2s ease;
          cursor:pointer;
        }
        .area-card:hover{border-color:rgba(212,160,23,.4);background:rgba(212,160,23,.07);transform:translateY(-2px);}
        .area-card.selected{
          border-color:#fbbf24 !important;
          background:rgba(212,160,23,.12) !important;
        }

        /* step indicators */
        .step-dot{transition:background .35s ease,border-color .35s ease,transform .35s ease;}
        .step-line{transition:width .6s ease;}

        /* btn */
        .btn-gold{
          position:relative;overflow:hidden;
          transition:transform .3s ease,box-shadow .3s ease;
        }
        .btn-gold::before{
          content:'';position:absolute;inset:0;
          background:rgba(255,255,255,.14);
          transform:translateX(-101%);
          transition:transform .35s ease;
        }
        .btn-gold:hover::before{transform:translateX(0);}
        .btn-gold:hover{transform:translateY(-3px);box-shadow:0 14px 36px rgba(212,160,23,.42);}
        .btn-ghost{
          transition:border-color .25s ease,background .25s ease,transform .25s ease;
        }
        .btn-ghost:hover{border-color:rgba(255,255,255,.35);background:rgba(255,255,255,.05);transform:translateY(-2px);}

        /* sidebar info */
        .info-row{transition:border-color .25s ease,background .25s ease;}
        .info-row:hover{border-color:rgba(212,160,23,.35);background:rgba(212,160,23,.05);}
      `}</style>

      <div className="fb bg-gray-950">
        <section className="relative py-24 md:py-32 overflow-hidden">

          {/* Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-950"/>
            <div className="absolute inset-0 opacity-[0.025]"
              style={{backgroundImage:`radial-gradient(circle,#D4A017 1px,transparent 1px)`,backgroundSize:"44px 44px"}}/>
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/25 to-transparent"/>
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"/>
            <div className="absolute top-1/3 left-1/3 w-[700px] h-[500px] bg-amber-600/4 rounded-full blur-3xl"/>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">

            {/* Header */}
            <div className="flex flex-col items-center text-center mb-14">
              <div className="a1 flex items-center gap-3 mb-5">
                <div className="aln h-[2px] bg-amber-500"/>
                <span className="fb text-amber-400 text-[11px] tracking-[0.38em] uppercase font-semibold">Schedule a Meeting</span>
                <div className="aln h-[2px] bg-amber-500"/>
              </div>
              <h2 className="a2 fh text-white font-bold leading-[1.1] mb-4"
                style={{fontSize:"clamp(2.2rem,4.5vw,3.6rem)"}}>
                Book a <span className="italic text-amber-400">Consultation</span>
              </h2>
              <p className="a3 fb text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl font-light">
                Complete the form below to schedule your confidential legal consultation with one of our expert attorneys.
              </p>
            </div>

            {/* Two-column layout */}
            <div className="a4 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

              {/* ── Sidebar ── */}
              <div className="flex flex-col gap-6 lg:sticky lg:top-8">

                {/* Why consult card */}
                <div className="border border-white/[0.07] bg-white/[0.025] p-7 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-500/0 via-amber-500 to-amber-500/0"/>
                  <h3 className="fh text-white font-bold text-xl mb-5">Why Choose Us?</h3>
                  <div className="flex flex-col gap-3">
                    {[
                      {icon:<path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>, text:"Attorney-client confidentiality guaranteed"},
                      {icon:<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>, text:"Response within 24 hours"},
                      {icon:<path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>, text:"Expert attorneys across all practice areas"},
                      {icon:<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>, text:"1000+ satisfied clients served"},
                    ].map(({icon,text}) => (
                      <div key={text} className="info-row flex items-start gap-3 p-3 border border-white/[0.05] bg-white/[0.02]">
                        <svg className="w-4 h-4 fill-amber-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24">{icon}</svg>
                        <p className="fb text-gray-300 text-sm leading-snug">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact quick-links */}
                <div className="border border-white/[0.07] bg-white/[0.025] p-6">
                  <p className="fb text-amber-400/70 text-[10px] tracking-[0.3em] uppercase font-semibold mb-4">Need Urgent Help?</p>
                  <div className="flex flex-col gap-3">
                    <a href="tel:+919876543210"
                      className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm fb">
                      <svg className="w-4 h-4 fill-amber-400 flex-shrink-0" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                      +91 98765 43210
                    </a>
                    <a href="mailto:info@lawfirm.com"
                      className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm fb">
                      <svg className="w-4 h-4 fill-amber-400 flex-shrink-0" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                      info@lawfirm.com
                    </a>
                  </div>
                </div>
              </div>

              {/* ── Main Form Panel ── */}
              <div className="lg:col-span-2 border border-white/[0.07] bg-white/[0.025] relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-500/0 via-amber-500 to-amber-500/0"/>

                {/* Success screen */}
                {submitted ? (
                  <div className="pop-in flex flex-col items-center justify-center text-center py-20 px-8">
                    <div className="w-20 h-20 rounded-full bg-amber-500/12 border border-amber-500/30 flex items-center justify-center mb-6">
                      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path className="check-path" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <h3 className="fh text-white font-bold mb-3" style={{fontSize:"clamp(1.6rem,3vw,2.2rem)"}}>
                      Appointment <span className="italic text-amber-400">Confirmed!</span>
                    </h3>
                    <p className="fb text-gray-400 text-sm leading-relaxed max-w-sm mb-2">
                      Thank you, <span className="text-white font-medium">{form.name || "there"}</span>. Your consultation request has been received.
                    </p>
                    <p className="fb text-gray-500 text-xs mb-8">We'll confirm your appointment via email within 24 hours.</p>
                    {form.date && form.time && (
                      <div className="flex items-center gap-6 p-4 border border-amber-500/20 bg-amber-500/5 mb-8 text-sm">
                        <div className="text-center">
                          <p className="fb text-gray-500 text-xs uppercase tracking-wider mb-1">Date</p>
                          <p className="fh text-amber-400 font-bold">{form.date}</p>
                        </div>
                        <div className="w-px h-10 bg-white/10"/>
                        <div className="text-center">
                          <p className="fb text-gray-500 text-xs uppercase tracking-wider mb-1">Time</p>
                          <p className="fh text-amber-400 font-bold">{form.time}</p>
                        </div>
                        <div className="w-px h-10 bg-white/10"/>
                        <div className="text-center">
                          <p className="fb text-gray-500 text-xs uppercase tracking-wider mb-1">Practice Area</p>
                          <p className="fh text-amber-400 font-bold text-sm">{form.area}</p>
                        </div>
                      </div>
                    )}
                    <button onClick={() => { setSubmitted(false); setStep(0); setForm({name:"",email:"",phone:"",area:"",date:"",time:"",message:""}); }}
                      className="btn-gold inline-flex items-center gap-2 px-8 py-3.5 bg-amber-500 text-gray-900 fb font-bold text-sm tracking-[0.2em] uppercase">
                      Book Another
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Step progress */}
                    <div className="px-8 pt-8 pb-6 border-b border-white/[0.07]">
                      <div className="flex items-center gap-0">
                        {steps.map((label, i) => (
                          <div key={label} className="flex items-center flex-1 last:flex-none">
                            <div className="flex flex-col items-center gap-1.5">
                              <div className={`step-dot w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold fb
                                ${i < step ? "bg-amber-500 border-amber-500 text-gray-900"
                                  : i === step ? "border-amber-500 text-amber-400 bg-amber-500/10"
                                  : "border-white/15 text-gray-600"}`}>
                                {i < step
                                  ? <svg className="w-4 h-4 fill-gray-900" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                                  : i + 1}
                              </div>
                              <span className={`fb text-[10px] tracking-wider uppercase hidden sm:block
                                ${i === step ? "text-amber-400" : i < step ? "text-amber-500/60" : "text-gray-600"}`}>
                                {label}
                              </span>
                            </div>
                            {i < steps.length - 1 && (
                              <div className="flex-1 h-px mx-2 bg-white/[0.07] relative overflow-hidden">
                                <div className="h-full bg-amber-500 transition-all duration-600"
                                  style={{width: i < step ? "100%" : "0%"}}/>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Form steps */}
                    <div className="p-8">

                      {/* Step 0: Personal Info */}
                      {step === 0 && (
                        <form onSubmit={next} className="slide-in flex flex-col gap-6">
                          <div>
                            <h3 className="fh text-white font-bold text-xl mb-1">Personal Information</h3>
                            <p className="fb text-gray-500 text-sm">Tell us a little about yourself.</p>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <Field name="name" label="Full Name" required />
                            <Field name="email" type="email" label="Email Address" required />
                            <Field name="phone" type="tel" label="Phone Number" required />
                          </div>
                          <div className="flex justify-end pt-2">
                            <button type="submit"
                              className="btn-gold inline-flex items-center gap-2.5 px-8 py-4 bg-amber-500 text-gray-900 fb font-bold text-sm tracking-[0.2em] uppercase">
                              Next Step
                              <svg className="w-4 h-4 fill-gray-900" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                            </button>
                          </div>
                        </form>
                      )}

                      {/* Step 1: Case Details */}
                      {step === 1 && (
                        <form onSubmit={next} className="slide-in flex flex-col gap-6">
                          <div>
                            <h3 className="fh text-white font-bold text-xl mb-1">Case Details</h3>
                            <p className="fb text-gray-500 text-sm">Select your practice area and describe your matter.</p>
                          </div>

                          {/* Practice area cards */}
                          <div>
                            <p className="fb text-gray-400 text-xs tracking-widest uppercase mb-3">Practice Area *</p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                              {practiceAreas.map((area) => (
                                <button type="button" key={area}
                                  onClick={() => setForm({ ...form, area })}
                                  className={`area-card border px-3 py-3 text-left ${form.area === area ? "selected border-amber-500" : "border-white/[0.08] bg-white/[0.02]"}`}>
                                  <p className={`fb text-xs font-medium leading-snug ${form.area === area ? "text-amber-400" : "text-gray-300"}`}>{area}</p>
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Message */}
                          <div className="field-wrap">
                            <textarea
                              name="message" value={form.message} onChange={handle}
                              onFocus={() => setFocused("message")} onBlur={() => setFocused("")}
                              rows={4} placeholder=" "
                              className="cf-field px-4 py-4 text-sm fb resize-none"
                            />
                            <label className={`cf-label textarea-lbl ${focused === "message" || form.message ? "active" : ""}`}>
                              Brief description of your matter
                            </label>
                          </div>

                          <div className="flex items-center justify-between pt-2">
                            <button type="button" onClick={back}
                              className="btn-ghost inline-flex items-center gap-2 px-6 py-3.5 border border-white/15 text-gray-300 fb font-semibold text-sm tracking-wider uppercase">
                              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
                              Back
                            </button>
                            <button type="submit" disabled={!form.area}
                              className="btn-gold inline-flex items-center gap-2.5 px-8 py-4 bg-amber-500 text-gray-900 fb font-bold text-sm tracking-[0.2em] uppercase disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none">
                              Next Step
                              <svg className="w-4 h-4 fill-gray-900" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                            </button>
                          </div>
                        </form>
                      )}

                      {/* Step 2: Schedule */}
                      {step === 2 && (
                        <form onSubmit={submit} className="slide-in flex flex-col gap-6">
                          <div>
                            <h3 className="fh text-white font-bold text-xl mb-1">Choose Your Schedule</h3>
                            <p className="fb text-gray-500 text-sm">Pick a date and a preferred time slot.</p>
                          </div>

                          {/* Date picker */}
                          <div className="field-wrap">
                            <input
                              type="date" name="date" value={form.date} onChange={handle}
                              onFocus={() => setFocused("date")} onBlur={() => setFocused("")}
                              required min={today}
                              className="cf-field px-4 py-4 text-sm fb cursor-pointer"
                              style={{colorScheme:"dark"}}
                            />
                            <label className={`cf-label ${focused === "date" || form.date ? "active" : ""}`}>Preferred Date *</label>
                          </div>

                          {/* Time slots */}
                          <div>
                            <p className="fb text-gray-400 text-xs tracking-widest uppercase mb-3">Preferred Time *</p>
                            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                              {timeSlots.map((t) => (
                                <button type="button" key={t}
                                  onClick={() => setForm({ ...form, time: t })}
                                  className={`time-slot border py-2.5 text-center fb text-xs font-medium
                                    ${form.time === t ? "selected" : "border-white/[0.08] text-gray-400 bg-white/[0.02]"}`}>
                                  {t}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Summary preview */}
                          {form.date && form.time && (
                            <div className="flex flex-wrap items-center gap-4 p-4 border border-amber-500/15 bg-amber-500/4 text-sm">
                              <div className="flex items-center gap-2 text-gray-300 fb">
                                <svg className="w-4 h-4 fill-amber-400" viewBox="0 0 24 24"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg>
                                <span className="text-amber-300 font-medium">{form.date}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-300 fb">
                                <svg className="w-4 h-4 fill-amber-400" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>
                                <span className="text-amber-300 font-medium">{form.time}</span>
                              </div>
                              {form.area && (
                                <span className="fb text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 bg-amber-500/12 text-amber-400 border border-amber-500/20">
                                  {form.area}
                                </span>
                              )}
                            </div>
                          )}

                          <div className="flex items-center justify-between pt-2">
                            <button type="button" onClick={back}
                              className="btn-ghost inline-flex items-center gap-2 px-6 py-3.5 border border-white/15 text-gray-300 fb font-semibold text-sm tracking-wider uppercase">
                              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
                              Back
                            </button>
                            <button type="submit" disabled={!form.date || !form.time}
                              className="btn-gold inline-flex items-center gap-2.5 px-8 py-4 bg-amber-500 text-gray-900 fb font-bold text-sm tracking-[0.2em] uppercase disabled:opacity-50 disabled:cursor-not-allowed">
                              <svg className="w-4 h-4 fill-gray-900 flex-shrink-0" viewBox="0 0 24 24"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg>
                              Book Consultation
                            </button>
                          </div>
                        </form>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}