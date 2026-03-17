// import { useState } from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navLinks = [
//     // { name: "Home", path: "/" },
//     // { name: "About Us", path: "/about" },
//     // { name: "Practice Areas", path: "/practice-areas" },
//     // { name: "Attorneys / Lawyers", path: "/attorneys" },
//     // { name: "Case Results", path: "/case-results" },
//     // { name: "Blog / Legal Insights", path: "/blog" },
//     // { name: "Testimonials", path: "/testimonials" },
//     // { name: "FAQ", path: "/faq" },
//     // { name: "Contact Us", path: "/contact" },
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "#about" },
//     { name: "Practice Areas", path: "#practice-areas" },
//     { name: "Attorneys / Lawyers", path: "#attorneys" },
//     { name: "Case Results", path: "#case-results" },
//     { name: "Blog / Legal Insights", path: "#blog" },
//     { name: "Testimonials", path: "#testimonials" },
//     { name: "FAQ", path: "#faq" },
//     { name: "Contact Us", path: "#contact" },
//     {nmae:"Bookappointment",path:"#bookappointment"}
//   ];

//   return (
//     <header className="bg-black text-white sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

//         {/* Logo */}
//         <NavLink to="/" className="text-2xl font-bold text-yellow-500">
//           LawFirm
//         </NavLink>

//         {/* Desktop Menu */}
//         <nav className="hidden lg:flex items-center space-x-6 text-sm">
//           {navLinks.map((link, index) => (
//             <NavLink
//               key={index}
//               to={link.path}
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-yellow-500"
//                   : "hover:text-yellow-400 transition"
//               }
//             >
//               {link.name}
//             </NavLink>
//           ))}

//           {/* CTA Button */}
//           <NavLink
//             id="consultation"
//             className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition"
//           >
//             Book Appointment
//           </NavLink>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           className="lg:hidden text-2xl"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="lg:hidden bg-black border-t border-gray-700">
//           <nav className="flex flex-col px-6 py-4 space-y-4">
//             {navLinks.map((link, index) => (
//               <NavLink
//                 key={index}
//                 to={link.path}
//                 onClick={() => setMenuOpen(false)}
//                 className="hover:text-yellow-400"
//               >
//                 {link.name}
//               </NavLink>
//             ))}

//             <NavLink
//               to="/consultation"
//               onClick={() => setMenuOpen(false)}
//               className="bg-yellow-500 text-black px-4 py-2 rounded text-center"
//             >
//               Book Appointment
//             </NavLink>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;



// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", path: "#home" },
//     { name: "About Us", path: "#about" },
//     { name: "Practice Areas", path: "#practice-areas" },
//     { name: "Attorneys / Lawyers", path: "#attorneys" },
//     { name: "Case Results", path: "#case-results" },
//     { name: "Blog / Legal Insights", path: "#blog" },
//     { name: "Testimonials", path: "#testimonials" },
//     { name: "FAQ", path: "#faq" },
//     { name: "Contact Us", path: "#contact" },
   
//   ];

//   return (
//     <header className="bg-black text-white sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

//         {/* Logo */}
//         <NavLink to="/" className="text-2xl font-bold text-yellow-500">
//           LawFirm
//         </NavLink>

//         {/* Desktop Menu */}
//         <nav className="hidden lg:flex items-center space-x-6 text-sm">
//           {navLinks.map((link, index) => (
//             link.path.startsWith("#") ? (
//               <HashLink
//                 key={index}
//                 smooth
//                 to={`/${link.path}`}
//                 className="hover:text-yellow-400 transition"
//               >
//                 {link.name}
//               </HashLink>
//             ) : (
//               <NavLink
//                 key={index}
//                 to={link.path}
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-yellow-500"
//                     : "hover:text-yellow-400 transition"
//                 }
//               >
//                 {link.name}
//               </NavLink>
//             )
//           ))}

//           <NavLink
//             to="/consultation"
//             className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition"
//           >
//             Book Appointment
//           </NavLink>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           className="lg:hidden text-2xl"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="lg:hidden bg-black border-t border-gray-700">
//           <nav className="flex flex-col px-6 py-4 space-y-4">
//             {navLinks.map((link, index) => (
//               link.path.startsWith("#") ? (
//                 <HashLink
//                   key={index}
//                   smooth
//                   to={`/${link.path}`}
//                   onClick={() => setMenuOpen(false)}
//                   className="hover:text-yellow-400"
//                 >
//                   {link.name}
//                 </HashLink>
//               ) : (
//                 <NavLink
//                   key={index}
//                   to={link.path}
//                   onClick={() => setMenuOpen(false)}
//                   className="hover:text-yellow-400"
//                 >
//                   {link.name}
//                 </NavLink>
//               )
//             ))}

//             <NavLink
//               to="/consultation"
//               onClick={() => setMenuOpen(false)}
//               className="bg-yellow-500 text-black px-4 py-2 rounded text-center"
//             >
//               Book Appointment
//             </NavLink>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;




// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", path: "#home" },
//     { name: "About Us", path: "#about" },
//     { name: "Practice Areas", path: "#practice-areas" },
//     { name: "Attorneys / Lawyers", path: "#attorneys" },
//     { name: "Case Results", path: "#case-results" },
//     { name: "Blog / Legal Insights", path: "#blog" },
//     { name: "Testimonials", path: "#testimonials" },
//     { name: "FAQ", path: "#faq" },
//     { name: "Contact Us", path: "#contact" },
//   ];

//   return (
//     <header className="bg-black text-white sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

//         {/* Logo */}
//         <NavLink to="/" className="text-2xl font-bold text-yellow-500">
//           LawFirm
//         </NavLink>

//         {/* Desktop Menu */}
//         <nav className="hidden lg:flex items-center space-x-6 text-sm">
//           {navLinks.map((link, index) => (
//             <HashLink
//               key={index}
//               smooth
//               to={`/${link.path}`}
//               className="hover:text-yellow-400 transition"
//             >
//               {link.name}
//             </HashLink>
//           ))}

//           <NavLink
//             to="/consultation"
//             className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition"
//           >
//             Book Appointment
//           </NavLink>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           className="lg:hidden text-3xl"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? "✕" : "☰"}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="lg:hidden bg-black border-t border-gray-700">
//           <nav className="flex flex-col px-6 py-4 space-y-4">
//             {navLinks.map((link, index) => (
//               <HashLink
//                 key={index}
//                 smooth
//                 to={`/${link.path}`}
//                 onClick={() => setMenuOpen(false)}
//                 className="hover:text-yellow-400"
//               >
//                 {link.name}
//               </HashLink>
//             ))}

//             <NavLink
//               to="/consultation"
//               onClick={() => setMenuOpen(false)}
//               className="bg-yellow-500 text-black px-4 py-2 rounded text-center"
//             >
//               Book Appointment
//             </NavLink>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;






import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Practice Areas", path: "#practice-areas" },
    { name: "Attorneys", path: "#attorneys" },
    { name: "Case Results", path: "#case-results" },
    { name: "Blog", path: "#blog" },
    { name: "Testimonials", path: "#testimonials" },
    { name: "FAQ", path: "#faq" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-neutral-950/95 backdrop-blur-md border-b border-yellow-600/10 py-2"
            : "bg-black/30 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2 group"
          >
            <span className="w-8 h-8 border border-yellow-500/70 rounded flex items-center justify-center text-yellow-500 text-sm font-bold group-hover:bg-yellow-500/10 transition-colors duration-200">
              ⚖
            </span>
            <span className="font-serif text-xl font-bold text-yellow-500 tracking-wide">
              LawFirm
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <HashLink
                key={i}
                smooth
                to={`/${link.path}`}
                className="relative text-white/70 hover:text-white text-[11px] uppercase tracking-widest font-medium px-3 py-2 transition-colors duration-200 group"
              >
                {link.name}
                <span className="absolute bottom-1 left-3 right-3 h-px bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </HashLink>
            ))}
            <NavLink
              to="/consultation"
              className="ml-3 bg-yellow-500 hover:bg-yellow-400 text-black text-[11px] uppercase tracking-widest font-bold px-5 py-2.5 rounded-sm transition-all duration-200 hover:shadow-lg hover:shadow-yellow-500/25"
            >
              Book Now
            </NavLink>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5 border border-yellow-500/30 rounded hover:border-yellow-500/60 transition-colors duration-200 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-[18px] h-[1.5px] bg-yellow-500 rounded transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
            />
            <span
              className={`block w-[18px] h-[1.5px] bg-yellow-500 rounded transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-[18px] h-[1.5px] bg-yellow-500 rounded transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Side Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-neutral-950 border-l border-yellow-600/10 flex flex-col px-7 pt-20 pb-8 transition-transform duration-400 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button inside drawer */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-white/50 hover:text-yellow-500 transition-colors text-lg"
        >
          ✕
        </button>

        <p className="text-[10px] uppercase tracking-[0.2em] text-yellow-500/40 font-medium mb-5">
          Navigation
        </p>

        <nav className="flex flex-col">
          {navLinks.map((link, i) => (
            <HashLink
              key={i}
              smooth
              to={`/${link.path}`}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2.5 text-white/60 hover:text-yellow-400 text-[12px] uppercase tracking-[0.08em] font-medium py-3 border-b border-white/5 last:border-none hover:pl-1.5 transition-all duration-200 group"
            >
              <span className="w-1 h-1 rounded-full bg-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0" />
              {link.name}
            </HashLink>
          ))}
        </nav>

        <NavLink
          to="/consultation"
          onClick={() => setMenuOpen(false)}
          className="mt-8 bg-yellow-500 hover:bg-yellow-400 text-black text-[11px] uppercase tracking-widest font-bold py-3.5 rounded-sm text-center transition-all duration-200 hover:shadow-lg hover:shadow-yellow-500/25"
        >
          Book Appointment
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;