import React from 'react'

export default function About() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=Lato:wght@300;400;600;700&display=swap');

        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-body    { font-family: 'Lato', sans-serif; }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes fadeLeft {
          from { opacity:0; transform:translateX(-32px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes fadeRight {
          from { opacity:0; transform:translateX(32px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes lineGrow {
          from { width:0; }
          to   { width:3.5rem; }
        }
        @keyframes countUp {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0); }
        }

        .afl  { animation: fadeLeft  0.9s ease forwards; animation-delay:0.15s; opacity:0; }
        .afr  { animation: fadeRight 0.9s ease forwards; animation-delay:0.25s; opacity:0; }
        .afu1 { animation: fadeUp    0.8s ease forwards; animation-delay:0.10s; opacity:0; }
        .afu2 { animation: fadeUp    0.8s ease forwards; animation-delay:0.28s; opacity:0; }
        .afu3 { animation: fadeUp    0.8s ease forwards; animation-delay:0.44s; opacity:0; }
        .afu4 { animation: fadeUp    0.8s ease forwards; animation-delay:0.60s; opacity:0; }
        .afu5 { animation: fadeUp    0.8s ease forwards; animation-delay:0.76s; opacity:0; }
        .aln  { animation: lineGrow  0.9s ease forwards; animation-delay:0.3s; width:0; display:block; }

        .highlight-card {
          transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        .highlight-card:hover {
          border-color: rgba(217,170,50,0.55);
          background: rgba(217,170,50,0.07);
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.35);
        }

        .btn-gold {
          position:relative; overflow:hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .btn-gold::before {
          content:''; position:absolute; inset:0;
          background:rgba(255,255,255,0.14);
          transform:translateX(-101%);
          transition:transform 0.35s ease;
        }
        .btn-gold:hover::before { transform:translateX(0); }
        .btn-gold:hover {
          transform:translateY(-3px);
          box-shadow:0 14px 36px rgba(217,170,50,0.38);
        }

        .img-frame::before {
          content:'';
          position:absolute;
          inset:-10px;
          border:1px solid rgba(217,170,50,0.25);
          pointer-events:none;
          z-index:0;
        }
        .img-frame::after {
          content:'';
          position:absolute;
          bottom:-14px; right:-14px;
          width:55%; height:55%;
          border:2px solid rgba(217,170,50,0.45);
          pointer-events:none;
          z-index:0;
        }

        .stat-num {
          font-family: 'Playfair Display', Georgia, serif;
          animation: countUp 0.8s ease forwards;
          animation-delay: 0.5s;
          opacity:0;
        }
      `}</style>

      <div className="bg-gray-950 font-body" id="about">
        <section className="relative py-24 md:py-32 overflow-hidden">

          {/* ── Background texture ── */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gray-950" />
            <div className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `radial-gradient(circle, #D4A017 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }}
            />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
          </div>

          {/* ── Ambient glow ── */}
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">

            {/* ── Two-column layout ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

              {/* ── LEFT: Image ── */}
              <div className="afr relative flex justify-center lg:justify-start">
                <div className="img-frame relative w-full max-w-sm sm:max-w-md lg:max-w-full">
                  <img
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=85&auto=format&fit=crop&crop=center"
                    alt="Law firm attorneys"
                    className="relative z-10 w-full h-72 sm:h-96 lg:h-[500px] object-cover object-center grayscale-[15%]"
                    style={{ filter: 'contrast(1.05) brightness(0.92)' }}
                  />
                  {/* Gold overlay strip */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-500 z-20" />

                  {/* Floating badge */}
                  <div className="absolute -bottom-5 -right-5 sm:-bottom-6 sm:-right-6 z-20 bg-amber-500 px-5 py-4 shadow-2xl">
                    <p className="font-display text-gray-900 font-bold text-2xl leading-none">25+</p>
                    <p className="font-body text-gray-900 text-xs font-semibold tracking-widest uppercase mt-0.5">Years of Trust</p>
                  </div>
                </div>
              </div>

              {/* ── RIGHT: Content ── */}
              <div className="afl flex flex-col">

                {/* Section label */}
                <div className="afu1 flex items-center gap-3 mb-5">
                  <div className="aln h-[2px] bg-amber-500" />
                  <span className="font-body text-amber-400 text-xs tracking-[0.35em] uppercase font-semibold">
                    Who We Are
                  </span>
                </div>

                {/* Title */}
                <h2 className="afu2 font-display text-white font-bold mb-6 leading-tight"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
                  About <em className="text-amber-400 not-italic">Our Firm</em>
                </h2>

                {/* Body text */}
                <p className="afu3 font-body text-gray-300 text-base sm:text-lg leading-relaxed mb-10 font-light">
                  Our law firm is committed to providing exceptional legal services with{' '}
                  <span className="text-white font-medium">integrity</span>,{' '}
                  <span className="text-white font-medium">professionalism</span>, and{' '}
                  <span className="text-white font-medium">dedication</span>. We work closely
                  with our clients to understand their legal challenges and deliver effective
                  strategies tailored to their needs.
                </p>

                {/* Highlights */}
                <div className="afu4 grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                  {[
                    {
                      svg: <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />,
                      title: 'Experienced Attorneys',
                      desc: 'Decades of combined courtroom expertise',
                    },
                    {
                      svg: <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />,
                      title: 'Client-Focused Approach',
                      desc: 'Your goals guide every decision we make',
                    },
                    {
                      svg: <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />,
                      title: 'Proven Case Success',
                      desc: '1000+ cases resolved in our clients\' favor',
                    },
                  ].map(({ svg, title, desc }) => (
                    <div key={title}
                      className="highlight-card flex flex-col gap-3 p-5 border border-white/10 bg-white/4 cursor-default">
                      <div className="w-10 h-10 rounded-full bg-amber-500/15 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 fill-amber-400" viewBox="0 0 24 24">{svg}</svg>
                      </div>
                      <div>
                        <p className="font-body text-white font-semibold text-sm tracking-wide mb-1">{title}</p>
                        <p className="font-body text-gray-400 text-xs leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Learn More button */}
                <div className="afu5">
                  <a href="#" className="btn-gold inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-amber-500 text-gray-900 font-body font-semibold text-xs sm:text-sm md:text-base tracking-[0.12em] sm:tracking-[0.15em] md:tracking-[0.18em] uppercase rounded-lg transition-all duration-300 hover:bg-amber-400">
                    <span className="whitespace-nowrap">Learn More</span>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 fill-gray-900 flex-shrink-0" viewBox="0 0 24 24">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  </a>
                </div>

              </div>
            </div>

            {/* ── Stats bar ── */}
            <div className="mt-20 pt-12 border-t border-white/8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
                {[
                  { num: '25+', label: 'Years of Experience' },
                  { num: '1000+', label: 'Cases Won' },
                  { num: '50+', label: 'Expert Attorneys' },
                  { num: '98%', label: 'Client Satisfaction' },
                ].map(({ num, label }) => (
                  <div key={label} className="flex flex-col items-center gap-2 group">
                    <p className="stat-num text-amber-400 font-bold"
                      style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)' }}>
                      {num}
                    </p>
                    <div className="h-px w-8 bg-amber-500/40 group-hover:w-14 transition-all duration-500" />
                    <p className="font-body text-gray-400 text-xs tracking-widest uppercase">{label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}
