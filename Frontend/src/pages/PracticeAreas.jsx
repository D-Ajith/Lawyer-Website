import React from 'react'

export default function PracticeAreas() {
  const areas = [
    {
      icon: <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />,
      title: "Criminal Law",
      tag: "Defense & Rights",
      desc: "Defense for individuals facing criminal charges, ensuring fair representation and protection of legal rights throughout the judicial process.",
    },
    {
      icon: <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />,
      title: "Family Law",
      tag: "Divorce & Custody",
      desc: "Legal support for divorce, child custody, alimony, and family disputes with compassion, clarity, and a focus on your family's future.",
    },
    {
      icon: <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />,
      title: "Corporate Law",
      tag: "Business & Compliance",
      desc: "Legal advisory services for businesses, contracts, mergers, and regulatory compliance to help your enterprise grow with confidence.",
    },
    {
      icon: <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />,
      title: "Civil Litigation",
      tag: "Disputes & Property",
      desc: "Representation in civil disputes, property issues, and contractual matters with strategic advocacy to protect your interests in court.",
    },
    {
      icon: <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />,
      title: "Financial Law",
      tag: "Taxation & Assets",
      desc: "Expert guidance on financial disputes, asset protection, tax law, and investment compliance to safeguard your financial interests.",
    },
    {
      icon: <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />,
      title: "Immigration Law",
      tag: "Visas & Citizenship",
      desc: "Comprehensive immigration assistance including visas, residency applications, work permits, and citizenship proceedings for individuals and families.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=Lato:wght@300;400;600;700&display=swap');
        .font-display { font-family:'Playfair Display',Georgia,serif; }
        .font-body    { font-family:'Lato',sans-serif; }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(30px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes lineGrow { from{width:0} to{width:3.5rem} }

        .afu1 { animation:fadeUp 0.8s ease forwards; animation-delay:0.10s; opacity:0; }
        .afu2 { animation:fadeUp 0.8s ease forwards; animation-delay:0.25s; opacity:0; }
        .afu3 { animation:fadeUp 0.8s ease forwards; animation-delay:0.40s; opacity:0; }
        .afu4 { animation:fadeUp 0.8s ease forwards; animation-delay:0.55s; opacity:0; }
        .aln  { animation:lineGrow 0.9s ease forwards; animation-delay:0.3s; display:block; width:0; }

        .area-card {
          transition: border-color 0.35s ease, background 0.35s ease,
                      transform 0.35s ease, box-shadow 0.35s ease;
          position: relative;
          overflow: hidden;
        }
        .area-card::before {
          content:'';
          position:absolute;
          bottom:0; left:0; right:0;
          height:2px;
          background: linear-gradient(90deg, #D4A017, #F5C842);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
        .area-card:hover::before { transform:scaleX(1); }
        .area-card:hover {
          border-color:rgba(217,170,50,0.45);
          background:rgba(217,170,50,0.05);
          transform:translateY(-6px);
          box-shadow:0 20px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(217,170,50,0.12);
        }
        .area-card:hover .card-icon-wrap {
          background: rgba(217,170,50,0.25);
          transform: scale(1.08);
        }
        .card-icon-wrap {
          transition: background 0.35s ease, transform 0.35s ease;
        }
        .area-card:hover .arrow-icon {
          transform: translateX(5px);
          opacity: 1;
        }
        .arrow-icon {
          transition: transform 0.35s ease, opacity 0.35s ease;
          opacity: 0.35;
        }

        .btn-gold {
          position:relative; overflow:hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .btn-gold::before {
          content:''; position:absolute; inset:0;
          background:rgba(255,255,255,0.13);
          transform:translateX(-101%);
          transition:transform 0.35s ease;
        }
        .btn-gold:hover::before { transform:translateX(0); }
        .btn-gold:hover {
          transform:translateY(-3px);
          box-shadow:0 14px 36px rgba(217,170,50,0.4);
        }
      `}</style>

      <div className="bg-gray-950 font-body" id="practice-areas">
        <section className="relative py-24 md:py-32 overflow-hidden">

          {/* ── Background texture ── */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-950" />
            <div className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage: `radial-gradient(circle, #D4A017 1px, transparent 1px)`,
                backgroundSize: '48px 48px',
              }}
            />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/25 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/4 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">

            {/* ── Section header ── */}
            <div className="flex flex-col items-center text-center mb-16 md:mb-20">

              <div className="afu1 flex items-center gap-3 mb-5">
                <div className="aln h-[2px] bg-amber-500" />
                <span className="font-body text-amber-400 text-xs tracking-[0.35em] uppercase font-semibold">
                  Legal Expertise
                </span>
                <div className="aln h-[2px] bg-amber-500" />
              </div>

              <h2 className="afu2 font-display text-white font-bold leading-tight mb-5"
                style={{ fontSize: 'clamp(2rem,4.5vw,3.4rem)' }}>
                Our Practice <em className="text-amber-400 not-italic">Areas</em>
              </h2>

              <p className="afu3 font-body text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
                We offer comprehensive legal services across a wide range of disciplines,
                delivering expert counsel and steadfast representation for every client.
              </p>
            </div>

            {/* ── Cards grid ── */}
            <div className="afu4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {areas.map(({ icon, title, tag, desc }) => (
                <a href="#" key={title}
                  className="area-card flex flex-col gap-5 p-7 border border-white/8 bg-white/3 backdrop-blur-sm cursor-pointer no-underline">

                  {/* Top row: icon + tag */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="card-icon-wrap w-12 h-12 rounded-full bg-amber-500/12 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 fill-amber-400" viewBox="0 0 24 24">{icon}</svg>
                    </div>
                    <span className="font-body text-amber-500/70 text-[10px] tracking-[0.25em] uppercase font-semibold border border-amber-500/20 px-2.5 py-1 mt-1 flex-shrink-0">
                      {tag}
                    </span>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="font-display text-white font-bold text-xl mb-3 leading-tight">
                      {title}
                    </h3>
                    {/* Micro divider */}
                    <div className="w-8 h-[2px] bg-amber-500/40 mb-3" />
                    <p className="font-body text-gray-400 text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>

                  {/* Footer CTA */}
                  <div className="mt-auto flex items-center gap-2 text-amber-400 text-xs font-semibold tracking-widest uppercase font-body">
                    <span>Learn More</span>
                    <svg className="arrow-icon w-3.5 h-3.5 fill-amber-400" viewBox="0 0 24 24">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  </div>

                </a>
              ))}
            </div>

            {/* ── Bottom CTA ── */}
            <div className="flex justify-center mt-14">
              <a href="#" className="btn-gold inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 md:px-10 md:py-4 bg-amber-500 text-gray-900 font-body font-semibold text-xs sm:text-sm md:text-base tracking-[0.12em] sm:tracking-[0.15em] md:tracking-[0.18em] uppercase rounded-lg transition-all duration-300 hover:bg-amber-400">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 fill-gray-900 flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                </svg>
                <span className="whitespace-nowrap">View All Practice Areas</span>
              </a>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}
