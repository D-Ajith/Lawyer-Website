import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Robert Harrington",
    role: "Criminal Defense Client",
    location: "New York, NY",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80&auto=format&fit=crop&crop=face",
    text: "Professional, knowledgeable, and supportive throughout my case. From the first consultation to the final verdict, the team never stopped fighting for me. Highly recommended.",
    case: "Criminal Defense",
    caseColor: "#f87171",
    caseBg: "rgba(239,68,68,0.12)",
    year: "2024",
  },
  {
    id: 2,
    name: "Patricia Williams",
    role: "Family Law Client",
    location: "Los Angeles, CA",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&q=80&auto=format&fit=crop&crop=face",
    text: "They explained every legal step clearly and handled my custody case with great care and empathy. I felt genuinely supported through one of the hardest times of my life.",
    case: "Family Law",
    caseColor: "#f472b6",
    caseBg: "rgba(236,72,153,0.12)",
    year: "2024",
  },
  {
    id: 3,
    name: "James Okafor",
    role: "Corporate Law Client",
    location: "Chicago, IL",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&q=80&auto=format&fit=crop&crop=face",
    text: "Our business faced a serious contract dispute that could have cost us millions. The corporate team resolved it swiftly and professionally. Exceptional service from start to finish.",
    case: "Corporate Law",
    caseColor: "#60a5fa",
    caseBg: "rgba(59,130,246,0.12)",
    year: "2023",
  },
  {
    id: 4,
    name: "Linda Chen",
    role: "Civil Litigation Client",
    location: "San Francisco, CA",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=120&q=80&auto=format&fit=crop&crop=face",
    text: "I had a complex property boundary dispute that seemed impossible to win. The litigation team built a watertight case and restored my property rights fully. Outstanding results.",
    case: "Civil Litigation",
    caseColor: "#c084fc",
    caseBg: "rgba(168,85,247,0.12)",
    year: "2024",
  },
  {
    id: 5,
    name: "Marcus Thompson",
    role: "Immigration Law Client",
    location: "Houston, TX",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=120&q=80&auto=format&fit=crop&crop=face",
    text: "My deportation case looked hopeless when other firms turned me away. This team took my case, worked tirelessly, and won on appeal. They gave my family our lives back.",
    case: "Immigration Law",
    caseColor: "#4ade80",
    caseBg: "rgba(34,197,94,0.12)",
    year: "2023",
  },
  {
    id: 6,
    name: "Susan Park",
    role: "Financial Law Client",
    location: "Boston, MA",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80&auto=format&fit=crop&crop=face",
    text: "Amanda handled my tax dispute with precision and calm confidence. What seemed like an overwhelming ordeal was resolved efficiently. Worth every penny — a truly world-class firm.",
    case: "Financial Law",
    caseColor: "#fbbf24",
    caseBg: "rgba(245,158,11,0.12)",
    year: "2024",
  },
  {
    id: 7,
    name: "David Nkosi",
    role: "Criminal Defense Client",
    location: "Miami, FL",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=120&q=80&auto=format&fit=crop&crop=face",
    text: "John Smith's command of criminal law is unmatched. He spotted procedural errors that led to all charges being dismissed. Calm under pressure, brilliant in court.",
    case: "Criminal Defense",
    caseColor: "#f87171",
    caseBg: "rgba(239,68,68,0.12)",
    year: "2024",
  },
  {
    id: 8,
    name: "Natalie Brooks",
    role: "Family Law Client",
    location: "Seattle, WA",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=120&q=80&auto=format&fit=crop&crop=face",
    text: "Emily guided me through every step of my divorce with compassion and expertise. I walked away with a fair settlement and peace of mind. I cannot recommend her highly enough.",
    case: "Family Law",
    caseColor: "#f472b6",
    caseBg: "rgba(236,72,153,0.12)",
    year: "2023",
  },
];

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-amber-400" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const featured = testimonials[active];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');
        .fh{font-family:'Cormorant Garamond',Georgia,serif;}
        .fb{font-family:'DM Sans',sans-serif;}

        @keyframes fadeUp{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes growX{from{width:0}to{width:3rem}}
        @keyframes quoteIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}

        .a1{animation:fadeUp .75s ease forwards;animation-delay:.10s;opacity:0}
        .a2{animation:fadeUp .75s ease forwards;animation-delay:.24s;opacity:0}
        .a3{animation:fadeUp .75s ease forwards;animation-delay:.36s;opacity:0}
        .a4{animation:fadeUp .75s ease forwards;animation-delay:.48s;opacity:0}
        .a5{animation:fadeUp .75s ease forwards;animation-delay:.60s;opacity:0}
        .aln{animation:growX .85s ease forwards;animation-delay:.28s;display:block;width:0}
        .quote-anim{animation:quoteIn .5s ease forwards;opacity:0;}

        /* Testimonial card grid */
        .t-card{
          transition:border-color .32s ease,background .32s ease,transform .32s ease,box-shadow .32s ease;
          cursor:pointer;
        }
        .t-card:hover{
          border-color:rgba(212,160,23,.35);
          background:rgba(212,160,23,.05);
          transform:translateY(-4px);
          box-shadow:0 18px 48px rgba(0,0,0,.5);
        }
        .t-card.selected{
          border-color:rgba(212,160,23,.55) !important;
          background:rgba(212,160,23,.08) !important;
          box-shadow:0 0 0 1px rgba(212,160,23,.3), 0 20px 48px rgba(0,0,0,.45) !important;
        }

        /* Avatar ring on selected */
        .t-card.selected .t-avatar{
          border-color:rgba(212,160,23,.7);
          box-shadow:0 0 0 3px rgba(212,160,23,.15);
        }
        .t-avatar{
          transition:border-color .3s ease,box-shadow .3s ease;
          border:2px solid rgba(255,255,255,.12);
        }

        /* Featured spotlight */
        .spotlight{
          transition:opacity .35s ease;
        }

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

        /* Stat hover */
        .stat-tile{transition:border-color .3s ease,background .3s ease,transform .3s ease;}
        .stat-tile:hover{border-color:rgba(212,160,23,.4);background:rgba(212,160,23,.07);transform:translateY(-3px);}
      `}</style>

      <div className="fb bg-gray-950" id="testimonials">
        <section className="relative py-24 md:py-32 overflow-hidden">

          {/* ── Background ── */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-950" />
            <div className="absolute inset-0 opacity-[0.025]"
              style={{ backgroundImage: `radial-gradient(circle,#D4A017 1px,transparent 1px)`, backgroundSize: '44px 44px' }} />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/25 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-amber-600/4 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">

            {/* ── Header ── */}
            <div className="flex flex-col items-center text-center mb-16">
              <div className="a1 flex items-center gap-3 mb-5">
                <div className="aln h-[2px] bg-amber-500" />
                <span className="fb text-amber-400 text-[11px] tracking-[0.38em] uppercase font-semibold">Testimonials</span>
                <div className="aln h-[2px] bg-amber-500" />
              </div>
              <h2 className="a2 fh text-white font-bold leading-[1.1] mb-5"
                style={{ fontSize: 'clamp(2.2rem,4.5vw,3.6rem)' }}>
                Client <span className="italic text-amber-400">Success Stories</span>
              </h2>
              <p className="a3 fb text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
                Don't just take our word for it. Here's what our clients have to say about their experience working with our legal team.
              </p>
            </div>

            {/* ── Featured Spotlight ── */}
            <div className="a4 mb-14">
              <div className="spotlight border border-amber-500/20 bg-gradient-to-br from-amber-500/5 via-white/[0.02] to-transparent p-8 md:p-12 relative overflow-hidden">
                {/* Decorative quote mark */}
                <div className="absolute top-6 right-8 fh text-amber-500/10 font-bold select-none pointer-events-none"
                  style={{ fontSize: '10rem', lineHeight: 1 }}>
                  "
                </div>

                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                  {/* Left: avatar + info */}
                  <div className="flex flex-row md:flex-col items-center md:items-center gap-4 md:gap-3 flex-shrink-0">
                    <img key={featured.id} src={featured.photo} alt={featured.name}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-amber-500/40" />
                    <div className="md:text-center">
                      <p className="fh text-white font-bold text-lg md:text-xl leading-tight">{featured.name}</p>
                      <p className="fb text-amber-400/80 text-xs font-medium mt-0.5">{featured.role}</p>
                      <p className="fb text-gray-500 text-[11px] mt-0.5">{featured.location}</p>
                      <div className="flex items-center gap-0.5 mt-2 md:justify-center">
                        <Stars count={featured.rating} />
                      </div>
                    </div>
                  </div>

                  {/* Right: quote */}
                  <div className="flex flex-col justify-center flex-grow">
                    <div key={featured.id} className="quote-anim">
                      <p className="fh text-white/90 italic leading-relaxed mb-5"
                        style={{ fontSize: 'clamp(1.15rem,2vw,1.5rem)' }}>
                        "{featured.text}"
                      </p>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="fb text-[10px] font-semibold tracking-[0.22em] uppercase px-3 py-1.5"
                          style={{ background: featured.caseBg, color: featured.caseColor, border: `1px solid ${featured.caseColor}33` }}>
                          {featured.case}
                        </span>
                        <span className="fb text-gray-500 text-xs">{featured.year}</span>
                        <div className="flex items-center gap-1 ml-auto">
                          {testimonials.map((_, i) => (
                            <button key={i} onClick={() => setActive(i)}
                              className="transition-all duration-300"
                              style={{
                                width: i === active ? '20px' : '6px',
                                height: '6px',
                                borderRadius: '3px',
                                background: i === active ? '#F5C842' : 'rgba(255,255,255,0.15)',
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nav arrows */}
                <div className="absolute bottom-6 right-6 flex items-center gap-2">
                  <button onClick={() => setActive(a => (a - 1 + testimonials.length) % testimonials.length)}
                    className="w-9 h-9 border border-white/10 flex items-center justify-center text-gray-400 hover:border-amber-500/40 hover:text-amber-400 transition-all duration-300">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                    </svg>
                  </button>
                  <button onClick={() => setActive(a => (a + 1) % testimonials.length)}
                    className="w-9 h-9 border border-white/10 flex items-center justify-center text-gray-400 hover:border-amber-500/40 hover:text-amber-400 transition-all duration-300">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* ── Card Grid ── */}
            <div className="a5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
              {testimonials.map((t, i) => (
                <div key={t.id} onClick={() => setActive(i)}
                  className={`t-card border border-white/[0.07] bg-white/[0.025] p-5 flex flex-col gap-4 ${i === active ? 'selected' : ''}`}>
                  {/* Stars */}
                  <Stars count={t.rating} />
                  {/* Quote */}
                  <p className="fb text-gray-300 text-sm leading-relaxed flex-grow line-clamp-4 italic">
                    "{t.text}"
                  </p>
                  {/* Case badge */}
                  <span className="fb text-[10px] font-semibold tracking-[0.2em] uppercase px-2.5 py-1 self-start"
                    style={{ background: t.caseBg, color: t.caseColor, border: `1px solid ${t.caseColor}30` }}>
                    {t.case}
                  </span>
                  {/* Author row */}
                  <div className="flex items-center gap-3 pt-3 border-t border-white/[0.07]">
                    <img src={t.photo} alt={t.name}
                      className="t-avatar w-9 h-9 rounded-full object-cover flex-shrink-0" />
                    <div>
                      <p className="fb text-white text-xs font-semibold leading-tight">{t.name}</p>
                      <p className="fb text-gray-500 text-[10px] mt-0.5">{t.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Stats row ── */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 pt-12 border-t border-white/[0.07]">
              {[
                { num: '500+', label: '5-Star Reviews' },
                { num: '98%', label: 'Client Satisfaction' },
                { num: '1000+', label: 'Cases Won' },
                { num: '25+', label: 'Years of Trust' },
              ].map(({ num, label }) => (
                <div key={label}
                  className="stat-tile flex flex-col items-center justify-center text-center py-6 border border-white/[0.07] bg-white/[0.02]">
                  <p className="fh text-amber-400 font-bold leading-none mb-2"
                    style={{ fontSize: 'clamp(1.7rem,3vw,2.4rem)' }}>{num}</p>
                  <div className="w-6 h-[2px] bg-amber-500/35 mb-2" />
                  <p className="fb text-gray-400 text-xs tracking-widest uppercase">{label}</p>
                </div>
              ))}
            </div>

            {/* ── CTA ── */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#" className="cta-btn inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 md:px-10 md:py-4 bg-amber-500 text-gray-900 fb font-semibold text-xs sm:text-sm md:text-base tracking-[0.14em] sm:tracking-[0.17em] md:tracking-[0.2em] uppercase rounded-lg transition-all duration-300 hover:bg-amber-400">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 fill-gray-900 flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
                </svg>
                <span className="whitespace-nowrap">Book a Free Consultation</span>
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 md:px-10 md:py-4 border border-white/20 text-white fb font-semibold text-xs sm:text-sm md:text-base tracking-[0.14em] sm:tracking-[0.17em] md:tracking-[0.2em] uppercase rounded-lg hover:border-amber-500/40 hover:bg-amber-500/5 transition-all duration-300">
                <span className="whitespace-nowrap">Read All Reviews</span>
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-white flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                </svg>
              </a>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}