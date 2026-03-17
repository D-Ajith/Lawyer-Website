import React from 'react'

export default function Blog() {
  const featured = {
    category: "Criminal Law",
    categoryColor: "#f87171",
    categoryBg: "rgba(239,68,68,0.12)",
    tag: "Must Read",
    title: "Understanding Your Legal Rights in Criminal Cases",
    excerpt:
      "When facing criminal charges, knowing your rights can make the difference between conviction and freedom. From the right to remain silent to the right to legal counsel, this comprehensive guide walks you through every protection afforded to you under the law.",
    author: "John Smith",
    authorRole: "Senior Attorney – Criminal Law",
    authorPhoto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&q=80&auto=format&fit=crop&crop=face",
    date: "March 10, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1200&q=85&auto=format&fit=crop",
  };

  const articles = [
    {
      category: "Family Law",
      categoryColor: "#f472b6",
      categoryBg: "rgba(236,72,153,0.12)",
      title: "How Divorce Laws Work: A Complete Guide",
      excerpt:
        "Divorce is a complex legal process involving asset division, custody, and alimony. Learn the key stages of divorce proceedings and how to protect your interests throughout.",
      author: "Emily Rodriguez",
      authorPhoto: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=80&q=80&auto=format&fit=crop&crop=face",
      date: "Feb 28, 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80&auto=format&fit=crop",
    },
    {
      category: "Corporate Law",
      categoryColor: "#60a5fa",
      categoryBg: "rgba(59,130,246,0.12)",
      title: "Key Legal Tips for Business Owners",
      excerpt:
        "Running a business without sound legal advice is a risk few can afford. Discover the contracts, compliance requirements, and liability protections every business owner must know.",
      author: "Sarah Johnson",
      authorPhoto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&q=80&auto=format&fit=crop&crop=face",
      date: "Feb 14, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80&auto=format&fit=crop",
    },
    {
      category: "Civil Law",
      categoryColor: "#c084fc",
      categoryBg: "rgba(168,85,247,0.12)",
      title: "Property Law: What You Need to Know",
      excerpt:
        "Property disputes rank among the most common civil litigation matters. This article outlines your rights as a property owner, how boundary disputes are resolved, and when to seek legal counsel.",
      author: "Michael Carter",
      authorPhoto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80&auto=format&fit=crop&crop=face",
      date: "Jan 30, 2026",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80&auto=format&fit=crop",
    },
    {
      category: "Immigration Law",
      categoryColor: "#4ade80",
      categoryBg: "rgba(34,197,94,0.12)",
      title: "Navigating the Visa Application Process",
      excerpt:
        "A successful visa application requires careful preparation, accurate documentation, and an understanding of immigration timelines. Our attorneys break down the process step by step.",
      author: "David Lee",
      authorPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80&auto=format&fit=crop&crop=face",
      date: "Jan 18, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80&auto=format&fit=crop",
    },
    {
      category: "Financial Law",
      categoryColor: "#fbbf24",
      categoryBg: "rgba(245,158,11,0.12)",
      title: "Protecting Your Assets: A Legal Framework",
      excerpt:
        "Asset protection is not just for the ultra-wealthy. Learn how trusts, LLCs, and legal structures can shield your wealth from creditors, lawsuits, and unexpected liabilities.",
      author: "Amanda Foster",
      authorPhoto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80&auto=format&fit=crop&crop=face",
      date: "Jan 5, 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&q=80&auto=format&fit=crop",
    },
    {
      category: "Criminal Law",
      categoryColor: "#f87171",
      categoryBg: "rgba(239,68,68,0.12)",
      title: "What to Do If You Are Arrested",
      excerpt:
        "An arrest can be terrifying, but your actions in the first hours are critical. This guide outlines the immediate steps to take, rights to invoke, and mistakes to avoid when detained.",
      author: "John Smith",
      authorPhoto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&q=80&auto=format&fit=crop&crop=face",
      date: "Dec 20, 2025",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop",
    },
  ];

  const categories = ["All", "Criminal Law", "Family Law", "Corporate Law", "Civil Law", "Immigration Law", "Financial Law"];

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
        .a3{animation:fadeUp .75s ease forwards;animation-delay:.36s;opacity:0}
        .a4{animation:fadeUp .75s ease forwards;animation-delay:.48s;opacity:0}
        .a5{animation:fadeUp .75s ease forwards;animation-delay:.60s;opacity:0}
        .aln{animation:growX .85s ease forwards;animation-delay:.28s;display:block;width:0}

        /* Featured card */
        .feat-card{transition:box-shadow .35s ease,border-color .35s ease;}
        .feat-card:hover{
          box-shadow:0 28px 64px rgba(0,0,0,.55),0 0 0 1px rgba(212,160,23,.2);
          border-color:rgba(212,160,23,.3);
        }
        .feat-img{transition:transform .55s ease;}
        .feat-card:hover .feat-img{transform:scale(1.04);}

        /* Article card */
        .art-card{
          position:relative;overflow:hidden;
          transition:transform .35s ease,box-shadow .35s ease,border-color .35s ease;
        }
        .art-card::after{
          content:'';
          position:absolute;bottom:0;left:0;right:0;
          height:2px;
          background:linear-gradient(90deg,#B8860B,#F5C842,#B8860B);
          transform:scaleX(0);transform-origin:left;
          transition:transform .4s ease;
        }
        .art-card:hover::after{transform:scaleX(1);}
        .art-card:hover{
          transform:translateY(-6px);
          box-shadow:0 22px 56px rgba(0,0,0,.55),0 0 0 1px rgba(212,160,23,.15);
          border-color:rgba(212,160,23,.25);
        }
        .art-img{transition:transform .5s ease;}
        .art-card:hover .art-img{transform:scale(1.07);}
        .art-card:hover .read-arrow{transform:translateX(5px);opacity:1;}
        .read-arrow{transition:transform .3s ease,opacity .3s ease;opacity:.35;}

        /* Filter pill */
        .filter-pill{
          transition:background .25s ease,border-color .25s ease,color .25s ease;
          cursor:pointer;
        }
        .filter-pill:hover,.filter-pill.active{
          background:rgba(212,160,23,0.15);
          border-color:rgba(212,160,23,0.5);
          color:#fbbf24;
        }

        /* Newsletter */
        .nl-input{
          transition:border-color .25s ease,box-shadow .25s ease;
        }
        .nl-input:focus{
          outline:none;
          border-color:rgba(212,160,23,0.5);
          box-shadow:0 0 0 3px rgba(212,160,23,0.1);
        }
        .nl-btn{
          position:relative;overflow:hidden;
          transition:transform .3s ease,box-shadow .3s ease;
        }
        .nl-btn::before{
          content:'';position:absolute;inset:0;
          background:rgba(255,255,255,.13);
          transform:translateX(-101%);
          transition:transform .35s ease;
        }
        .nl-btn:hover::before{transform:translateX(0);}
        .nl-btn:hover{transform:translateY(-2px);box-shadow:0 10px 28px rgba(212,160,23,.38);}

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

      <div className="fb bg-gray-950" id="blog">
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

            {/* ── Section Header ── */}
            <div className="flex flex-col items-center text-center mb-14 md:mb-16">
              <div className="a1 flex items-center gap-3 mb-5">
                <div className="aln h-[2px] bg-amber-500" />
                <span className="fb text-amber-400 text-[11px] tracking-[0.38em] uppercase font-semibold">Legal Insights</span>
                <div className="aln h-[2px] bg-amber-500" />
              </div>
              <h2 className="a2 fh text-white font-bold leading-[1.1] mb-5"
                style={{ fontSize: 'clamp(2.2rem,4.5vw,3.6rem)' }}>
                Blog &amp;{' '}<span className="italic text-amber-400">Legal Insights</span>
              </h2>
              <p className="a3 fb text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
                Stay informed with the latest legal updates, insights, and advice from our experienced attorneys.
              </p>
            </div>

            {/* ── Filter pills ── */}
            <div className="a3 flex sm:flex-wrap overflow-x-auto sm:overflow-visible justify-start sm:justify-center gap-2 mb-8 sm:mb-12 px-2 scrollbar-hide">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  className={`filter-pill whitespace-nowrap fb text-[10px] sm:text-xs font-medium tracking-[0.12em] sm:tracking-wider uppercase px-3 py-1.5 sm:px-4 sm:py-2 border rounded-full transition-all duration-300 
      ${i === 0
                      ? 'bg-amber-500 text-gray-900 border-amber-500'
                      : 'border-white/10 text-gray-400 hover:border-amber-500/40 hover:text-white'}`
                  }
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* ── Featured Article ── */}
            <div className="a4 mb-12">
              <a href="#" className="feat-card group block border border-white/[0.07] bg-white/[0.025] overflow-hidden no-underline">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ height: '320px' }}>
                    <img src={featured.image} alt={featured.title}
                      className="feat-img w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-950/60 hidden lg:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent lg:hidden" />
                    {/* Tag */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="fb text-[10px] font-bold tracking-[0.25em] uppercase px-3 py-1.5 bg-amber-500 text-gray-900">
                        {featured.tag}
                      </span>
                      <span className="fb text-[10px] font-semibold tracking-[0.22em] uppercase px-3 py-1.5"
                        style={{ background: featured.categoryBg, color: featured.categoryColor, border: `1px solid ${featured.categoryColor}33` }}>
                        {featured.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center p-8 lg:p-10">
                    <div className="flex items-center gap-2 mb-4">
                      <svg className="w-3.5 h-3.5 fill-amber-500/60" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                      </svg>
                      <span className="fb text-amber-500/70 text-xs tracking-widest uppercase font-semibold">Featured</span>
                    </div>
                    <h3 className="fh text-white font-bold leading-snug mb-4"
                      style={{ fontSize: 'clamp(1.5rem,2.5vw,2rem)' }}>
                      {featured.title}
                    </h3>
                    <div className="w-8 h-[2px] bg-amber-500/40 mb-4" />
                    <p className="fb text-gray-400 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                    {/* Author */}
                    <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/[0.07]">
                      <div className="flex items-center gap-3">
                        <img src={featured.authorPhoto} alt={featured.author}
                          className="w-9 h-9 rounded-full object-cover border border-amber-500/20" />
                        <div>
                          <p className="fb text-white text-xs font-semibold">{featured.author}</p>
                          <p className="fb text-gray-500 text-[11px]">{featured.authorRole}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-gray-500 text-[11px] fb">
                        <span>{featured.date}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-600" />
                        <span>{featured.readTime}</span>
                      </div>
                    </div>
                    {/* Read more */}
                    <div className="mt-5 flex items-center gap-2 text-amber-400 text-xs font-semibold tracking-[0.22em] uppercase fb">
                      Read Full Article
                      <svg className="read-arrow w-3.5 h-3.5 fill-amber-400" viewBox="0 0 24 24">
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* ── Article Grid ── */}
            <div className="a5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-14">
              {articles.map(({ category, categoryColor, categoryBg, title, excerpt, author, authorPhoto, date, readTime, image }) => (
                <a key={title} href="#"
                  className="art-card border border-white/[0.07] bg-white/[0.025] flex flex-col no-underline">
                  {/* Thumbnail */}
                  <div className="relative overflow-hidden" style={{ height: '200px' }}>
                    <img src={image} alt={title}
                      className="art-img w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 to-transparent" />
                    <span className="absolute top-3 left-3 fb text-[10px] font-semibold tracking-[0.22em] uppercase px-2.5 py-1"
                      style={{ background: categoryBg, color: categoryColor, border: `1px solid ${categoryColor}33` }}>
                      {category}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="flex flex-col flex-grow p-6">
                    <h3 className="fh text-white font-bold text-[1.15rem] leading-snug mb-3">{title}</h3>
                    <div className="w-6 h-[2px] bg-amber-500/35 mb-3" />
                    <p className="fb text-gray-400 text-sm leading-relaxed mb-5 flex-grow line-clamp-3">{excerpt}</p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/[0.07] mt-auto">
                      <div className="flex items-center gap-2">
                        <img src={authorPhoto} alt={author}
                          className="w-7 h-7 rounded-full object-cover border border-white/10" />
                        <div>
                          <p className="fb text-gray-300 text-[11px] font-medium leading-none">{author}</p>
                          <p className="fb text-gray-500 text-[10px] mt-0.5">{date} · {readTime}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 fb text-amber-400 text-[11px] font-semibold tracking-wider uppercase">
                        Read
                        <svg className="read-arrow w-3 h-3 fill-amber-400" viewBox="0 0 24 24">
                          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* ── Newsletter ── */}
            <div className="border border-amber-500/15 bg-amber-500/4 p-8 md:p-12 mb-14 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: `radial-gradient(circle,#D4A017 1px,transparent 1px)`, backgroundSize: '28px 28px' }} />
              <div className="relative z-10">
                <span className="fb text-amber-400 text-[11px] tracking-[0.35em] uppercase font-semibold block mb-3">Stay Updated</span>
                <h3 className="fh text-white font-bold mb-3" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)' }}>
                  Get Legal Insights in Your Inbox
                </h3>
                <p className="fb text-gray-400 text-sm leading-relaxed max-w-md mx-auto mb-7">
                  Subscribe to our newsletter and receive the latest legal updates, case highlights, and expert advice — delivered weekly.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input type="email" placeholder="Enter your email address"
                    className="nl-input flex-grow bg-gray-900 border border-white/10 text-white placeholder-gray-500 px-4 py-3 text-sm fb focus:outline-none" />
                  <button className="nl-btn px-7 py-3 bg-amber-500 text-gray-900 fb font-bold text-sm tracking-[0.18em] uppercase whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* ── CTA ── */}
            <div className="flex justify-center">
              <a href="#" className="cta-btn inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 md:px-10 md:py-4 bg-amber-500 text-gray-900 fb font-semibold text-xs sm:text-sm md:text-base tracking-[0.14em] sm:tracking-[0.17em] md:tracking-[0.2em] uppercase rounded-lg transition-all duration-300 hover:bg-amber-400">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 fill-gray-900 flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                </svg>
                <span className="whitespace-nowrap">View All Articles</span>
              </a>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}