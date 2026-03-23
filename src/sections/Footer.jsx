import { mySocials } from "../constants/Index";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-black/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          
          {/* Brand/Identity Section */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <h3 className="text-xl font-bold bg-gradient-to-r from-white 
            to-neutral-500 bg-clip-text text-transparent">
              <span className="text-indigo-500">Michael</span> Yilak
            </h3>
            <p className="text-sm text-neutral-500 max-w-[250px] text-center 
            md:text-left leading-relaxed">
              Building digital experiences with precision and purpose. 
              Based in Addis Ababa, Ethiopia.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-widest 
            text-neutral-600">
              Connect on
            </span>
            <div className="flex gap-5">
              {mySocials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -4 }}
                  className="p-2 rounded-xl bg-white/5 border border-white/5
                   hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-colors 
                   group"
                  aria-label={social.name}
                >
                  <img
                    src={social.icon}
                    className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity 
                    invert group-hover:invert-0"
                    alt=""
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-center md:items-end gap-2 text-sm 
          text-neutral-500">
            <p className="font-light">
              &copy; {currentYear} Michael Yilak. All rights reserved.
            </p>
          </div>
        </div>
        
        {/* Subtle bottom accent line */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent 
        via-indigo-500/20 to-transparent" />
      </div>
    </footer>
  );
};

export default Footer;