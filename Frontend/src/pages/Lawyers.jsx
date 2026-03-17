export default function Lawyers() {
  const attorneys = [
    {
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=85&auto=format&fit=crop&crop=face",
      name: "John Smith",
      role: "Senior Attorney",
      specialization: "Criminal Law",
      experience: "15+ Years",
      bio: "John has over 15 years of experience handling complex criminal cases and defending clients in high-profile legal matters across state and federal courts.",
      socials: { linkedin: "#", email: "#" },
    },
    {
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=85&auto=format&fit=crop&crop=face",
      name: "Sarah Johnson",
      role: "Corporate Law Specialist",
      specialization: "Corporate Law",
      experience: "12+ Years",
      bio: "Sarah specializes in business law, contracts, and corporate compliance, advising Fortune 500 companies and emerging startups with equal dedication.",
      socials: { linkedin: "#", email: "#" },
    },
    {
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=85&auto=format&fit=crop&crop=face",
      name: "Michael Carter",
      role: "Lead Litigator",
      specialization: "Civil Litigation",
      experience: "18+ Years",
      bio: "Michael has built a reputation as a tenacious civil litigator, winning landmark property and contract disputes for individuals and corporations alike.",
      socials: { linkedin: "#", email: "#" },
    },
    {
      photo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=85&auto=format&fit=crop&crop=face",
      name: "Emily Rodriguez",
      role: "Family Law Attorney",
      specialization: "Family Law",
      experience: "10+ Years",
      bio: "Emily brings empathy and precision to every family law case, guiding clients through divorce, custody arrangements, and adoption with compassionate counsel.",
      socials: { linkedin: "#", email: "#" },
    },
    {
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=85&auto=format&fit=crop&crop=face",
      name: "David Lee",
      role: "Immigration Counsel",
      specialization: "Immigration Law",
      experience: "9+ Years",
      bio: "David has successfully handled hundreds of visa, residency, and citizenship cases, providing clear pathways for families and professionals seeking new opportunities.",
      socials: { linkedin: "#", email: "#" },
    },
    {
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=85&auto=format&fit=crop&crop=face",
      name: "Amanda Foster",
      role: "Financial Law Expert",
      specialization: "Financial Law",
      experience: "14+ Years",
      bio: "Amanda advises high-net-worth individuals and institutions on asset protection, tax law, and regulatory compliance with meticulous attention to detail.",
      socials: { linkedin: "#", email: "#" },
    },
  ];

  const specializationColor = {
    "Criminal Law": "rgba(239,68,68,0.15)",
    "Corporate Law": "rgba(59,130,246,0.15)",
    "Civil Litigation": "rgba(168,85,247,0.15)",
    "Family Law": "rgba(236,72,153,0.15)",
    "Immigration Law": "rgba(34,197,94,0.15)",
    "Financial Law": "rgba(245,158,11,0.15)",
  };
  const specializationText = {
    "Criminal Law": "#f87171",
    "Corporate Law": "#60a5fa",
    "Civil Litigation": "#c084fc",
    "Family Law": "#f472b6",
    "Immigration Law": "#4ade80",
    "Financial Law": "#fbbf24",
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');
        .fh{font-family:'Cormorant Garamond',Georgia,serif;}
        .fb{font-family:'DM Sans',sans-serif;}

        @keyframes fadeUp{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:translateY(0)}}
        @keyframes growX{from{width:0}to{width:3rem}}

        .a1{animation:fadeUp .75s ease forwards;animation-delay:.10s;opacity:0}
        .a2{animation:fadeUp .75s ease forwards;animation-delay:.24s;opacity:0}
        .a3{animation:fadeUp .75s ease forwards;animation-delay:.38s;opacity:0}
        .a4{animation:fadeUp .75s ease forwards;animation-delay:.50s;opacity:0}
        .a5{animation:fadeUp .75s ease forwards;animation-delay:.62s;opacity:0}
        .aln{animation:growX .85s ease forwards;animation-delay:.3s;display:block;width:0}

        /* Card */
        .atty-card{
          position:relative;
          overflow:hidden;
          transition:transform .38s ease, box-shadow .38s ease, border-color .38s ease;
        }
        .atty-card:hover{
          transform:translateY(-8px);
          box-shadow:0 28px 64px rgba(0,0,0,.6), 0 0 0 1px rgba(212,160,23,.2);
          border-color:rgba(212,160,23,.3);
        }

        /* Photo zoom on hover */
        .atty-img{transition:transform .55s ease, filter .55s ease;}
        .atty-card:hover .atty-img{transform:scale(1.07);filter:brightness(1.05);}

        /* Overlay slide up */
        .atty-overlay{
          position:absolute;
          bottom:0;left:0;right:0;
          background:linear-gradient(to top, rgba(2,6,14,.97) 0%, rgba(2,6,14,.65) 60%, transparent 100%);
          transform:translateY(0);
          transition:transform .38s ease;
        }
        .atty-bio{
          max-height:0;
          overflow:hidden;
          opacity:0;
          transition:max-height .4s ease, opacity .4s ease;
        }
        .atty-card:hover .atty-bio{
          max-height:120px;
          opacity:1;
        }

        /* Social icons */
        .social-btn{
          transition:background .25s ease, transform .25s ease;
        }
        .social-btn:hover{
          background:rgba(212,160,23,.25);
          transform:translateY(-2px);
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
        .cta-btn:hover{
          transform:translateY(-3px);
          box-shadow:0 14px 36px rgba(212,160,23,.4);
        }
      `}</style>

      <div className="fb bg-gray-950" id="attorneys">
        <section className="relative py-24 md:py-32 overflow-hidden">

          {/* ── Backgrounds ── */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-950" />
            <div className="absolute inset-0 opacity-[0.025]"
              style={{ backgroundImage: `radial-gradient(circle,#D4A017 1px,transparent 1px)`, backgroundSize: '44px 44px' }} />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/25 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-amber-600/4 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">

            {/* ── Section Header ── */}
            <div className="flex flex-col items-center text-center mb-16 md:mb-20">
              <div className="a1 flex items-center gap-3 mb-5">
                <div className="aln h-[2px] bg-amber-500" />
                <span className="fb text-amber-400 text-[11px] tracking-[0.38em] uppercase font-semibold">
                  Our Team
                </span>
                <div className="aln h-[2px] bg-amber-500" />
              </div>

              <h2 className="a2 fh text-white font-bold leading-[1.1] mb-5"
                style={{ fontSize: 'clamp(2.2rem,4.5vw,3.6rem)' }}>
                Meet Our{' '}
                <span className="italic text-amber-400">Legal Experts</span>
              </h2>

              <p className="a3 fb text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
                Our attorneys bring decades of combined experience, deep legal knowledge,
                and an unwavering commitment to achieving the best outcomes for every client.
              </p>
            </div>

            {/* ── Cards ── */}
            <div className="a4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {attorneys.map(({ photo, name, role, specialization, experience, bio, socials }) => (
                <div key={name} className="atty-card border border-white/[0.07] bg-gray-900/60 flex flex-col">

                  {/* Photo block */}
                  <div className="relative overflow-hidden" style={{ height: '280px' }}>
                    <img
                      src={photo}
                      alt={name}
                      className="atty-img w-full h-full object-cover object-top"
                    />
                    {/* Gradient overlay always present */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent" />

                    {/* Specialization badge */}
                    <div className="absolute top-4 left-4">
                      <span className="fb text-[10px] font-semibold tracking-[0.22em] uppercase px-3 py-1.5"
                        style={{
                          background: specializationColor[specialization] || 'rgba(212,160,23,0.15)',
                          color: specializationText[specialization] || '#fbbf24',
                          border: `1px solid ${specializationText[specialization] || '#fbbf24'}33`,
                        }}>
                        {specialization}
                      </span>
                    </div>

                    {/* Experience badge */}
                    <div className="absolute top-4 right-4">
                      <span className="fb text-[10px] font-semibold tracking-wider uppercase px-3 py-1.5 bg-amber-500/15 text-amber-400 border border-amber-500/20">
                        {experience}
                      </span>
                    </div>

                    {/* Hover bio overlay */}
                    <div className="atty-overlay px-5 pb-5 pt-12">
                      <div className="atty-bio fb text-gray-300 text-xs leading-relaxed">
                        {bio}
                      </div>
                    </div>
                  </div>

                  {/* Info block */}
                  <div className="flex flex-col flex-grow p-5 pt-4">
                    {/* Name & role */}
                    <div className="mb-3">
                      <h3 className="fh text-white font-bold text-xl leading-tight mb-0.5">{name}</h3>
                      <p className="fb text-amber-400/80 text-xs tracking-wide font-medium">{role}</p>
                    </div>

                    {/* Divider */}
                    <div className="w-8 h-[2px] bg-amber-500/40 mb-4" />

                    {/* Bio visible on desktop, hidden on card – shown always on mobile */}
                    <p className="fb text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">{bio}</p>

                    {/* Spacer */}
                    <div className="flex-grow" />

                    {/* Social + CTA row */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/[0.07]">
                      <div className="flex items-center gap-2">
                        {/* LinkedIn */}
                        <a href={socials.linkedin}
                          className="social-btn w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
                          <svg className="w-3.5 h-3.5 fill-gray-400" viewBox="0 0 24 24">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                          </svg>
                        </a>
                        {/* Email */}
                        <a href={socials.email}
                          className="social-btn w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
                          <svg className="w-3.5 h-3.5 fill-gray-400" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                          </svg>
                        </a>
                      </div>
                      <a href="#"
                        className="fb text-amber-400 text-[11px] font-semibold tracking-[0.2em] uppercase flex items-center gap-1.5 hover:gap-2.5 transition-all duration-300">
                        View Profile
                        <svg className="w-3 h-3 fill-amber-400" viewBox="0 0 24 24">
                          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                        </svg>
                      </a>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* ── Stats bar ── */}
            <div className="mt-20 pt-12 border-t border-white/[0.07]">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { num: '50+', label: 'Expert Attorneys' },
                  { num: '25+', label: 'Years Combined Exp.' },
                  { num: '1000+', label: 'Cases Won' },
                  { num: '98%', label: 'Client Satisfaction' },
                ].map(({ num, label }) => (
                  <div key={label} className="group flex flex-col items-center gap-2">
                    <p className="fh text-amber-400 font-bold leading-none"
                      style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)' }}>
                      {num}
                    </p>
                    <div className="h-[2px] w-8 bg-amber-500/35 group-hover:w-14 transition-all duration-500" />
                    <p className="fb text-gray-400 text-xs tracking-widest uppercase">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── CTA ── */}
            <div className="a5 flex justify-center mt-14">
              <a href="#" className="cta-btn inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 md:px-10 md:py-4 bg-amber-500 text-gray-900 fb font-semibold text-xs sm:text-sm md:text-base tracking-[0.14em] sm:tracking-[0.17em] md:tracking-[0.2em] uppercase rounded-lg transition-all duration-300 hover:bg-amber-400">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 fill-gray-900 flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
                <span className="whitespace-nowrap">Meet All Attorneys</span>
              </a>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}