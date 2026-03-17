export default function CaseResults() {
  const cases = [
    {
      number: "01",
      category: "Corporate Law",
      categoryColor: "#60a5fa",
      categoryBg: "rgba(59,130,246,0.12)",
      icon: <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />,
      title: "Corporate Contract Dispute",
      outcome: "Case resolved in favor of client",
      verdict: "Won",
      detail: "Represented a mid-size manufacturing firm in a multi-million dollar breach of contract dispute against a supplier. Secured full compensation and contractual damages after aggressive pre-trial negotiations.",
      year: "2024",
      duration: "8 Months",
    },
    {
      number: "02",
      category: "Criminal Defense",
      categoryColor: "#f87171",
      categoryBg: "rgba(239,68,68,0.12)",
      icon: <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />,
      title: "Criminal Defense Case",
      outcome: "Charges dismissed — lack of evidence",
      verdict: "Dismissed",
      detail: "Successfully defended a client facing serious felony charges by exposing procedural violations in the evidence collection process. All charges were dismissed before trial.",
      year: "2024",
      duration: "5 Months",
    },
    {
      number: "03",
      category: "Family Law",
      categoryColor: "#f472b6",
      categoryBg: "rgba(236,72,153,0.12)",
      icon: <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />,
      title: "Child Custody Arrangement",
      outcome: "Successful custody arrangement for client",
      verdict: "Won",
      detail: "Secured primary custody rights for a parent in a highly contested case, ensuring the child's best interests were upheld. Negotiated a fair visitation schedule accepted by both parties.",
      year: "2023",
      duration: "11 Months",
    },
    {
      number: "04",
      category: "Civil Litigation",
      categoryColor: "#c084fc",
      categoryBg: "rgba(168,85,247,0.12)",
      icon: <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />,
      title: "Property Boundary Dispute",
      outcome: "Full property rights restored to client",
      verdict: "Won",
      detail: "Litigated a complex property boundary dispute involving encroachment by a neighboring developer. Obtained a court order halting construction and fully restoring the client's land rights.",
      year: "2023",
      duration: "14 Months",
    },
    {
      number: "05",
      category: "Immigration Law",
      categoryColor: "#4ade80",
      categoryBg: "rgba(34,197,94,0.12)",
      icon: <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />,
      title: "Deportation Appeal Case",
      outcome: "Deportation order overturned on appeal",
      verdict: "Won",
      detail: "Successfully appealed a deportation order for a long-term resident by presenting compelling humanitarian grounds and procedural errors in the original hearing.",
      year: "2024",
      duration: "7 Months",
    },
    {
      number: "06",
      category: "Financial Law",
      categoryColor: "#fbbf24",
      categoryBg: "rgba(245,158,11,0.12)",
      icon: <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />,
      title: "Tax Fraud Defence",
      outcome: "Acquitted — all charges dropped",
      verdict: "Acquitted",
      detail: "Defended a business owner against allegations of tax fraud amounting to $2.4M. Demonstrated accounting errors rather than criminal intent, resulting in a full acquittal.",
      year: "2023",
      duration: "10 Months",
    },
  ];

  const verdictStyle = {
    "Won": { bg: "rgba(34,197,94,0.12)", text: "#4ade80", border: "rgba(34,197,94,0.25)" },
    "Dismissed": { bg: "rgba(59,130,246,0.12)", text: "#60a5fa", border: "rgba(59,130,246,0.25)" },
    "Acquitted": { bg: "rgba(245,158,11,0.12)", text: "#fbbf24", border: "rgba(245,158,11,0.25)" },
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');
        .fh{font-family:'Cormorant Garamond',Georgia,serif;}
        .fb{font-family:'DM Sans',sans-serif;}

        @keyframes fadeUp{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:translateY(0)}}
        @keyframes growX{from{width:0}to{width:3rem}}
        @keyframes countUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}

        .a1{animation:fadeUp .75s ease forwards;animation-delay:.10s;opacity:0}
        .a2{animation:fadeUp .75s ease forwards;animation-delay:.24s;opacity:0}
        .a3{animation:fadeUp .75s ease forwards;animation-delay:.38s;opacity:0}
        .a4{animation:fadeUp .75s ease forwards;animation-delay:.52s;opacity:0}
        .a5{animation:fadeUp .75s ease forwards;animation-delay:.66s;opacity:0}
        .aln{animation:growX .85s ease forwards;animation-delay:.28s;display:block;width:0}
        .anum{animation:countUp .8s ease forwards;animation-delay:.5s;opacity:0}

        /* Case card */
        .case-card{
          position:relative;overflow:hidden;
          transition:transform .38s ease,box-shadow .38s ease,border-color .38s ease;
        }
        .case-card::before{
          content:'';
          position:absolute;top:0;left:0;right:0;
          height:2px;
          background:linear-gradient(90deg,#B8860B,#F5C842,#B8860B);
          transform:scaleX(0);
          transform-origin:left;
          transition:transform .42s ease;
        }
        .case-card:hover::before{transform:scaleX(1);}
        .case-card:hover{
          transform:translateY(-6px);
          box-shadow:0 24px 60px rgba(0,0,0,.6),0 0 0 1px rgba(212,160,23,.18);
          border-color:rgba(212,160,23,.28);
        }
        .case-card:hover .case-num{color:rgba(212,160,23,.18);}
        .case-card:hover .case-icon-bg{background:rgba(212,160,23,.2);transform:scale(1.08);}
        .case-num{
          font-family:'Cormorant Garamond',Georgia,serif;
          font-size:5rem;font-weight:700;
          color:rgba(255,255,255,.04);
          line-height:1;
          transition:color .35s ease;
          user-select:none;pointer-events:none;
        }
        .case-icon-bg{transition:background .35s ease,transform .35s ease;}

        /* Expand toggle */
        .expand-body{
          max-height:0;overflow:hidden;opacity:0;
          transition:max-height .45s ease,opacity .35s ease,margin .35s ease;
        }
        .expand-body.open{max-height:200px;opacity:1;}
        .toggle-btn{transition:color .25s ease;}
        .toggle-btn:hover{color:#fbbf24;}
        .chevron{transition:transform .35s ease;}
        .chevron.open{transform:rotate(180deg);}

        /* CTA */
        .cta-btn{
          position:relative;overflow:hidden;
          transition:transform .3s ease,box-shadow .3s ease;
        }
        .cta-btn::before{
          content:'';position:absolute;inset:0;
          background:rgba(255,255,255,.13);
          transform:translateX(-101%);
          transition:transform .35s ease;
        }
        .cta-btn:hover::before{transform:translateX(0);}
        .cta-btn:hover{transform:translateY(-3px);box-shadow:0 14px 36px rgba(212,160,23,.4);}
      `}</style>

      <div className="fb bg-gray-950" id="case-results">
        <section className="relative py-24 md:py-32 overflow-hidden">

          {/* ── Background ── */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-950" />
            <div className="absolute inset-0 opacity-[0.025]"
              style={{ backgroundImage: `radial-gradient(circle,#D4A017 1px,transparent 1px)`, backgroundSize: '44px 44px' }} />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/25 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-600/4 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">

            {/* ── Header ── */}
            <div className="flex flex-col items-center text-center mb-16 md:mb-20">
              <div className="a1 flex items-center gap-3 mb-5">
                <div className="aln h-[2px] bg-amber-500" />
                <span className="fb text-amber-400 text-[11px] tracking-[0.38em] uppercase font-semibold">Track Record</span>
                <div className="aln h-[2px] bg-amber-500" />
              </div>

              <h2 className="a2 fh text-white font-bold leading-[1.1] mb-5"
                style={{ fontSize: 'clamp(2.2rem,4.5vw,3.6rem)' }}>
                Our Case <span className="italic text-amber-400">Results</span>
              </h2>

              <p className="a3 fb text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
                Our legal team has successfully represented clients across a variety of cases.
                Below are some highlights of our successful outcomes.
              </p>
            </div>

            {/* ── Stats row ── */}
            <div className="a3 grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {[
                { num: '1000+', label: 'Cases Handled' },
                { num: '95%', label: 'Success Rate' },
                { num: '25+', label: 'Years in Practice' },
                { num: '50+', label: 'Expert Attorneys' },
              ].map(({ num, label }) => (
                <div key={label}
                  className="flex flex-col items-center justify-center text-center py-6 px-4 border border-white/[0.07] bg-white/[0.025]">
                  <p className="anum fh text-amber-400 font-bold leading-none mb-2"
                    style={{ fontSize: 'clamp(1.7rem,3vw,2.4rem)' }}>{num}</p>
                  <div className="w-6 h-[2px] bg-amber-500/35 mb-2" />
                  <p className="fb text-gray-400 text-xs tracking-widest uppercase">{label}</p>
                </div>
              ))}
            </div>

            {/* ── Case Cards ── */}
          <div className="a4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
  {cases.map(({ number, category, categoryColor, categoryBg, icon, title, outcome, verdict, detail, year, duration }) => {
    const vs = verdictStyle[verdict] || verdictStyle["Won"];
    return (
      <div key={title} className="case-card border border-white/[0.07] bg-white/[0.025] flex flex-col p-4 sm:p-5 md:p-7 rounded-xl">

        {/* Top */}
        <div className="flex items-start justify-between mb-4 sm:mb-5">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: categoryBg }}>
            <svg className="w-4 h-4 sm:w-5 sm:h-5" style={{ fill: categoryColor }} viewBox="0 0 24 24">{icon}</svg>
          </div>
          <span className="case-num text-xs sm:text-sm">{number}</span>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          <span className="fb text-[9px] sm:text-[10px] font-semibold tracking-[0.18em] sm:tracking-[0.22em] uppercase px-2 py-0.5 sm:px-2.5 sm:py-1"
            style={{ background: categoryBg, color: categoryColor, border: `1px solid ${categoryColor}33` }}>
            {category}
          </span>

          <span className="fb text-[9px] sm:text-[10px] font-semibold tracking-[0.18em] sm:tracking-[0.22em] uppercase px-2 py-0.5 sm:px-2.5 sm:py-1 flex items-center gap-1"
            style={{ background: vs.bg, color: vs.text, border: `1px solid ${vs.border}` }}>
            <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5" style={{ fill: vs.text }} viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
            {verdict}
          </span>
        </div>

        {/* Title */}
        <h3 className="fh text-white font-bold text-[1.05rem] sm:text-[1.2rem] md:text-[1.3rem] leading-snug mb-2 sm:mb-3">
          {title}
        </h3>

        {/* Line */}
        <div className="w-6 sm:w-8 h-[2px] bg-amber-500/40 mb-3 sm:mb-4" />

        {/* Outcome */}
        <div className="flex items-start gap-2 mb-3 sm:mb-4 p-2.5 sm:p-3 bg-white/[0.03] border-l-2 border-amber-500/60">
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
          <p className="fb text-amber-200/90 text-xs sm:text-sm font-medium leading-snug">{outcome}</p>
        </div>

        {/* Detail */}
        <p className="fb text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 flex-grow">
          {detail}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 pt-3 sm:pt-4 border-t border-white/[0.07] mt-auto">

          <div className="flex items-center gap-1 text-gray-500 text-[10px] sm:text-xs fb">
            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-gray-500" viewBox="0 0 24 24">
              <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
            </svg>
            {year}
          </div>

          <div className="flex items-center gap-1 text-gray-500 text-[10px] sm:text-xs fb">
            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-gray-500" viewBox="0 0 24 24">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2z" />
            </svg>
            {duration}
          </div>

          <a href="#" className="ml-auto fb text-amber-400 text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase flex items-center gap-1 hover:gap-2 transition-all duration-300">
            Details
            <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-amber-400" viewBox="0 0 24 24">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </a>

        </div>

      </div>
    );
  })}
</div>

            {/* ── CTA ── */}
            <div className="a5 flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
              <a href="#" className="cta-btn inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 md:px-10 md:py-4 bg-amber-500 text-gray-900 fb font-semibold text-xs sm:text-sm md:text-base tracking-[0.14em] sm:tracking-[0.17em] md:tracking-[0.2em] uppercase rounded-lg transition-all duration-300 hover:bg-amber-400">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 fill-gray-900 flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                </svg>
                <span className="whitespace-nowrap">View All Case Results</span>
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 md:px-10 md:py-4 border border-white/20 text-white fb font-semibold text-xs sm:text-sm md:text-base tracking-[0.14em] sm:tracking-[0.17em] md:tracking-[0.2em] uppercase rounded-lg hover:border-amber-500/40 hover:bg-amber-500/5 transition-all duration-300">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 fill-white flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
                </svg>
                <span className="whitespace-nowrap">Book Consultation</span>
              </a>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}