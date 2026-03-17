// import React from "react";
// function Home() {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white font-serif overflow-x-hidden">

import About from "./About";
import Blog from "./Blog";
import CaseResults from "./Caseresults";
import Contact from "./Contact";
import FAQ from "./FAQ";
import Lawyers from "./Lawyers";
import PracticeAreas from "./PracticeAreas";
import Testimonials from "./Testimonials";

//       {/* ── Hero Section ── */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

//         {/* Background layers */}
//         <div className="absolute inset-0 z-0">
//           {/* Gradient base */}
//           <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800" />

//           {/* SVG courthouse silhouette */}
//           <svg
//             className="absolute bottom-0 left-0 right-0 w-full opacity-10"
//             viewBox="0 0 1440 400"
//             preserveAspectRatio="xMidYMax slice"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             {/* Columns */}
//             {[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300].map((x, i) => (
//               <rect key={i} x={x} y={120} width={28} height={280} fill="white" />
//             ))}
//             {/* Pediment triangle */}
//             <polygon points="60,120 720,20 1380,120" fill="white" />
//             {/* Entablature */}
//             <rect x={60} y={110} width={1320} height={20} fill="white" />
//             {/* Steps */}
//             <rect x={40} y={390} width={1360} height={15} fill="white" />
//             <rect x={20} y={405} width={1400} height={15} fill="white" />
//           </svg>

//           {/* Subtle gold ray overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 via-transparent to-transparent" />

//           {/* Noise texture */}
//           <div
//             className="absolute inset-0 opacity-5"
//             style={{
//               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
//               backgroundRepeat: "repeat",
//               backgroundSize: "128px 128px",
//             }}
//           />
//         </div>

//         {/* Decorative vertical lines */}
//         <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
//           <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-400/10 to-transparent" />
//           <div className="absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-400/10 to-transparent" />
//         </div>

//         {/* Hero content */}
//         <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">

//           {/* Eyebrow badge */}
//           <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 border border-amber-400/30 bg-amber-400/5 rounded-none">
//             <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
//             <span className="text-amber-400 text-xs tracking-[0.25em] uppercase font-medium">
//               Established 1998 · Trusted by 10,000+ Clients
//             </span>
//           </div>

//           {/* Main heading */}
//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
//             <span className="block text-white">Trusted Legal Experts</span>
//             <span className="block mt-2">
//               <span className="text-amber-400 italic">Protecting</span>
//               <span className="text-white"> Your Rights</span>
//             </span>
//           </h1>

//           {/* Divider */}
//           <div className="flex items-center justify-center gap-4 mb-8">
//             <div className="h-px w-16 bg-amber-400/40" />
//             <svg viewBox="0 0 24 24" className="w-4 h-4 fill-amber-400 opacity-60">
//               <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
//             </svg>
//             <div className="h-px w-16 bg-amber-400/40" />
//           </div>

//           {/* Subheading */}
//           <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 font-sans font-light">
//             Professional legal representation with years of experience in{" "}
//             <span className="text-amber-300 font-medium">civil</span>,{" "}
//             <span className="text-amber-300 font-medium">criminal</span>,{" "}
//             <span className="text-amber-300 font-medium">corporate</span> and{" "}
//             <span className="text-amber-300 font-medium">family law</span>.
//           </p>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//             <a
//               href="#"
//               className="group relative inline-flex items-center gap-3 px-8 py-4 bg-amber-400 text-gray-900 font-bold text-sm tracking-widest uppercase overflow-hidden transition-all duration-300 hover:bg-amber-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-400/20"
//             >
//               <svg viewBox="0 0 24 24" className="w-4 h-4 fill-gray-900 flex-shrink-0">
//                 <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
//               </svg>
//               Book Consultation
//             </a>

//             <a
//               href="#"
//               className="group inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:border-white hover:bg-white/5 hover:scale-105"
//             >
//               <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white flex-shrink-0">
//                 <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
//               </svg>
//               Contact Us
//             </a>
//           </div>

//           {/* Trust indicators */}
//           <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-gray-400 text-xs tracking-widest uppercase font-sans">
//             {[
//               { value: "25+", label: "Years Experience" },
//               { value: "10K+", label: "Cases Won" },
//               { value: "98%", label: "Client Satisfaction" },
//             ].map(({ value, label }) => (
//               <div key={label} className="flex flex-col items-center gap-1">
//                 <span className="text-2xl font-bold text-amber-400 font-serif tracking-tight">{value}</span>
//                 <span>{label}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Scroll cue */}
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gray-500 text-xs tracking-widest uppercase font-sans animate-bounce">
//           <span>Scroll</span>
//           <svg viewBox="0 0 24 24" className="w-4 h-4 fill-gray-500">
//             <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
//           </svg>
//         </div>
//       </section>

//       {/* ── Practice Areas strip ── */}
//       <section className="bg-gray-800/60 border-t border-b border-gray-700/50 py-10">
//         <div className="max-w-6xl mx-auto px-6 lg:px-12">
//           <p className="text-center text-xs tracking-[0.3em] uppercase text-amber-400 mb-8 font-sans">
//             Our Practice Areas
//           </p>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {[
//               {
//                 icon: (
//                   <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
//                 ),
//                 title: "Civil Law",
//                 desc: "Disputes, contracts & property rights",
//               },
//               {
//                 icon: (
//                   <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
//                 ),
//                 title: "Criminal Law",
//                 desc: "Defense & prosecution expertise",
//               },
//               {
//                 icon: (
//                   <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
//                 ),
//                 title: "Corporate Law",
//                 desc: "Business, M&A & compliance",
//               },
//               {
//                 icon: (
//                   <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
//                 ),
//                 title: "Family Law",
//                 desc: "Divorce, custody & adoption",
//               },
//             ].map(({ icon, title, desc }) => (
//               <div
//                 key={title}
//                 className="group flex flex-col items-center text-center p-6 border border-gray-700/50 hover:border-amber-400/40 bg-gray-900/40 hover:bg-gray-900/70 transition-all duration-300 cursor-pointer"
//               >
//                 <div className="w-12 h-12 rounded-full bg-amber-400/10 group-hover:bg-amber-400/20 flex items-center justify-center mb-4 transition-all duration-300">
//                   <svg viewBox="0 0 24 24" className="w-5 h-5 fill-amber-400">
//                     {icon}
//                   </svg>
//                 </div>
//                 <h3 className="text-white font-semibold text-sm tracking-wide mb-1">{title}</h3>
//                 <p className="text-gray-400 text-xs leading-relaxed font-sans">{desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }
// export default Home


export default function Home() {
  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=Lato:wght@300;400;600;700&display=swap');

        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-body    { font-family: 'Lato', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes lineGrow {
          from { width: 0; }
          to   { width: 4rem; }
        }
        @keyframes pulseSlow {
          0%,100% { opacity:1; }
          50%      { opacity:0.35; }
        }
        @keyframes scrollBounce {
          0%,100% { transform:translateY(0); }
          50%     { transform:translateY(8px); }
        }

        .afu1 { animation: fadeUp 0.85s ease forwards; animation-delay:0.10s; opacity:0; }
        .afu2 { animation: fadeUp 0.85s ease forwards; animation-delay:0.30s; opacity:0; }
        .afu3 { animation: fadeUp 0.85s ease forwards; animation-delay:0.50s; opacity:0; }
        .afu4 { animation: fadeUp 0.85s ease forwards; animation-delay:0.70s; opacity:0; }
        .afu5 { animation: fadeUp 0.85s ease forwards; animation-delay:0.90s; opacity:0; }
        .afin { animation: fadeIn 1.4s ease forwards; animation-delay:0s; opacity:0; }
        .aln  { animation: lineGrow 0.9s ease forwards; animation-delay:0.4s; }
        .aps  { animation: pulseSlow 2.8s ease-in-out infinite; }
        .asb  { animation: scrollBounce 1.8s ease-in-out infinite; }

        .btn-gold {
          position:relative; overflow:hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
        }
        .btn-gold::before {
          content:''; position:absolute; inset:0;
          background:rgba(255,255,255,0.12);
          transform:translateX(-101%);
          transition:transform 0.35s ease;
        }
        .btn-gold:hover::before { transform:translateX(0); }
        .btn-gold:hover {
          transform:translateY(-3px);
          box-shadow:0 16px 40px rgba(217,170,50,0.40);
        }

        .btn-outline {
          transition: all 0.3s ease;
        }
        .btn-outline:hover {
          background:rgba(255,255,255,0.07);
          border-color:rgba(255,255,255,0.7);
          transform:translateY(-3px);
        }

        .stat-pill {
          transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease;
        }
        .stat-pill:hover {
          border-color:rgba(217,170,50,0.55);
          background:rgba(217,170,50,0.09);
          transform:translateY(-2px);
        }
      `}</style>

      <div className="bg-gray-950 font-body" id="home">
        {/* ═══════════════════════════════
            HERO SECTION
        ═══════════════════════════════ */}
        <section className="relative min-h-screen flex items-center overflow-hidden">

          {/* ── Background image ── */}
          <div className="afin absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1555374018-13a8994ab246?w=1920&q=85&auto=format&fit=crop&crop=center"
              alt="Professional lawyer office"
              className="w-full h-full object-cover object-center"
            />
            {/* Multi-layer overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/97 via-gray-950/82 to-gray-900/45" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-gray-950/30" />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-950/20 via-transparent to-transparent" />
          </div>

          {/* ── Left gold accent bar ── */}
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-amber-500/50 to-transparent z-10 hidden lg:block" />

          {/* ── Decorative corner geometry ── */}
          <div className="absolute top-8 right-8 z-10 hidden md:block opacity-20">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <rect x="1" y="1" width="35" height="35" stroke="#D4A017" strokeWidth="1" />
              <rect x="43" y="43" width="35" height="35" stroke="#D4A017" strokeWidth="1" />
              <line x1="36" y1="18" x2="43" y2="18" stroke="#D4A017" strokeWidth="1" />
              <line x1="61" y1="36" x2="61" y2="43" stroke="#D4A017" strokeWidth="1" />
            </svg>
          </div>

          {/* ── Main content ── */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-28 md:py-36">
            <div className="max-w-2xl xl:max-w-3xl">

              {/* Eyebrow tag */}
              <div className="afu1 flex items-center gap-3 mb-7">
                <span className="aps inline-block w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="font-body text-amber-400 text-xs sm:text-sm tracking-[0.35em] uppercase font-semibold">
                  Premier Legal Services
                </span>
                <div className="h-px w-10 bg-amber-400/40" />
              </div>

              {/* Headline */}
              <div className="afu2 mb-7">
                <h1 className="font-display text-white font-bold leading-[1.08]"
                  style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)' }}>
                  Experienced Legal
                </h1>
                <h1 className="font-display font-bold leading-[1.08]"
                  style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)' }}>
                  <em className="text-amber-400 not-italic">Representation</em>
                  <span className="text-white"> You</span>
                </h1>
                <h1 className="font-display text-white font-bold leading-[1.08]"
                  style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)' }}>
                  Can Trust
                </h1>
              </div>

              {/* Gold rule */}
              <div className="flex items-center gap-3 mb-7">
                <div className="aln h-[2px] bg-amber-500 block" style={{ width: 0 }} />
                <svg className="afu2 w-3.5 h-3.5 fill-amber-400 flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
              </div>

              {/* Subheading */}
              <p className="afu3 font-body text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mb-10 font-light">
                Dedicated legal professionals providing strategic solutions in{' '}
                <span className="text-amber-300 font-semibold">criminal defense</span>,{' '}
                <span className="text-amber-300 font-semibold">civil litigation</span>,{' '}
                <span className="text-amber-300 font-semibold">corporate law</span>, and{' '}
                <span className="text-amber-300 font-semibold">family matters</span>.
              </p>

              {/* CTA Buttons */}
              <div className="afu4 flex flex-col sm:flex-row gap-4 mb-14">
                <a href="#"
                  className="btn-gold inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-amber-500 text-gray-900  font-body font-semibold  text-xs sm:text-sm md:text-base tracking-[0.12em] sm:tracking-[0.15em] md:tracking-[0.18em] uppercase rounded-lg 
    transition-all duration-300 hover:bg-amber-400"
                >
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 fill-gray-900 flex-shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
                  </svg>

                  <span className="whitespace-nowrap">
                    Book Consultation
                  </span>
                </a>
                <a href="#" className="btn-outline inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 border border-white/25 text-white font-body font-semibold text-xs sm:text-sm md:text-base tracking-[0.12em] sm:tracking-[0.15em] md:tracking-[0.18em] uppercase rounded-lg transition-all duration-300 hover:bg-white hover:text-gray-900">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 fill-white flex-shrink-0" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <span className="whitespace-nowrap">Contact Us</span>
                </a>
              </div>

              {/* Hero Points */}
              <div className="afu5 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl">
                {[
                  {
                    svg: <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />,
                    stat: '10+',
                    label: 'Years Experience',
                  },
                  {
                    svg: <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />,
                    stat: '1000+',
                    label: 'Successful Cases',
                  },
                  {
                    svg: <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />,
                    stat: '★★★★★',
                    label: 'Trusted Legal Advisors',
                  },
                ].map(({ svg, stat, label }) => (
                  <div key={label}
                    className="stat-pill flex items-center gap-3 px-4 py-3.5 border border-white/10 bg-white/5 backdrop-blur-sm cursor-default">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500/15 flex items-center justify-center">
                      <svg className="w-5 h-5 fill-amber-400" viewBox="0 0 24 24">{svg}</svg>
                    </div>
                    <div>
                      <p className="font-display text-amber-400 font-bold text-base leading-none tracking-tight">{stat}</p>
                      <p className="font-body text-gray-400 text-xs mt-1 leading-tight">{label}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* ── Scroll cue ── */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
            <span className="font-body text-gray-400 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
            <div className="asb w-px h-10 bg-gradient-to-b from-amber-400/70 to-transparent" />
          </div>

        </section>
        <About id="about" />
        <PracticeAreas />
        <Lawyers />
        <CaseResults />
        <Blog />
        <Testimonials />
        <FAQ />
        <Contact />
      </div>
    </>
  );
}