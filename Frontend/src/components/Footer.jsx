import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGlobe,
} from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-500 mb-4">
            LawFirm
          </h2>

          <p className="text-sm leading-relaxed text-gray-400">
            We provide trusted legal services with years of experience in
            handling complex legal matters. Our team of professional
            attorneys is committed to protecting your rights.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[FaGlobe, FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 hover:border-yellow-500 hover:text-yellow-500 transition-all duration-300"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Practice Areas */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Practice Areas
          </h3>

          <ul className="space-y-2 text-sm">
            {[
              "Criminal Law",
              "Family Law",
              "Property Law",
              "Corporate Law",
              "Civil Litigation",
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to={`/practice/${item.toLowerCase().replace(/\s/g, "-")}`}
                  className="hover:text-yellow-500 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>

         <ul className="space-y-2 text-sm">
  {[
    { name: "Home", path: "/#home" },
    { name: "About Us", path: "/#about" },
    { name: "Attorneys", path: "/#attorneys" },
    { name: "Legal Blog", path: "/#blog" },
    { name: "Contact Us", path: "/#contact" },
  ].map((link, i) => (
    <li key={i}>
      <HashLink
        smooth
        to={link.path}
        className="hover:text-yellow-500 transition-colors"
      >
        {link.name}
      </HashLink>
    </li>
  ))}
</ul>
        </div>

        {/* Contact + Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h3>

          <div className="space-y-3 text-sm text-gray-400">
            <p className="flex items-center gap-2">
              <FiMapPin /> Visakhapatnam, Andhra Pradesh
            </p>
            <p className="flex items-center gap-2">
              <FiPhone /> +91 9876543210
            </p>
            <p className="flex items-center gap-2">
              <FiMail /> info@lawfirm.com
            </p>
          </div>

          {/* Newsletter */}
          <h4 className="text-white font-semibold mt-5 mb-2">
            Newsletter
          </h4>

          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 text-sm rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-500"
            />

            <button className="bg-yellow-500 text-black px-4 py-2 text-sm rounded hover:bg-yellow-400 transition-all">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">

          <p className="text-center md:text-left">
            © {new Date().getFullYear()} LawFirm. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/privacy-policy" className="hover:text-yellow-500">
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-yellow-500">
              Terms & Conditions
            </Link>

            <Link to="/disclaimer" className="hover:text-yellow-500">
              Disclaimer
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;