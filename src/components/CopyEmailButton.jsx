import { useState } from "react";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "m12theomoros@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-4 sm:p-6 
    overflow-hidden group">
      
      {/* Header */}
      <div className="z-10 flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full 
            bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <p className="text-[9px] font-bold text-green-500 uppercase tracking-widest">
            Available for new opportunities
          </p>
        </div>
        
        <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
          Let’s Build Something <span className="text-blue-500">Impactful</span>
        </h3>
        <p className="text-[12px] md:text-[12.5px] mb-4 text-gray-400 leading-relaxed 
        max-w-[440px]">
            Open to building secure, scalable products that solve real-world problems.        
        </p>
      </div>

      {/* Copy Email Button */}
      <div className="z-10">
        <button
          onClick={handleCopy}
          className={`w-full group/btn relative flex items-center 
            justify-center gap-2 py-2.5 sm:py-3 rounded-lg border 
            transition-all duration-300
            ${copied 
              ? "bg-green-500/10 border-green-500/50" 
              : "bg-white/5 border-white/10 hover:border-blue-500/50 hover:bg-white/10"
            }`}
        >
          <div className="relative z-10 flex items-center gap-2 md:w-[68%]">
            {copied ? (
              <>
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[12px] font-bold text-green-500 
                uppercase">Email Copied!</span>
              </>
            ) : (
              <>
                <img 
                  src="/assets/copy.svg" 
                  alt="copy" 
                  className="w-4 h-4 invert opacity-70" 
                />
                <span className="text-[12px] font-bold text-gray-200 
                uppercase tracking-wider">Copy Email Address</span>
              </>
            )}
          </div>
        </button>
      </div>

      {/* Socials */}
      <div className="z-10 flex flex-col items-center gap-2 pt-3 border-t 
      border-white/10">
        <div className="flex items-center justify-center gap-5 sm:gap-7">
          <a 
            href="https://github.com/M12Theomoros" 
            target="_blank" 
            rel="noreferrer" 
            className="transition-all hover:scale-125"
          >
            <img 
              src="/assets/socials/github.svg" 
              alt="GitHub" 
              className="w-5 h-5 invert opacity-60 hover:opacity-100" 
            />
          </a>
          <a 
            href="https://www.linkedin.com/in/michael-yilak-2ab282321" 
            target="_blank" 
            rel="noreferrer" 
            className="transition-all hover:scale-125"
          >
            <img 
              src="/assets/socials/linkedin.svg" 
              alt="LinkedIn" 
              className="w-5 h-5 invert opacity-60 hover:opacity-100" 
            />
          </a>
          <a 
            href="https://wa.me/251979109166" 
            target="_blank" 
            rel="noreferrer" 
            className="transition-all hover:scale-125"
          >
            <img 
              src="/assets/socials/whatsapp.svg" 
              alt="WhatsApp" 
              className="w-5 h-5 invert opacity-60 hover:opacity-100" 
            />
          </a>
        </div>
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 
      blur-[50px] pointer-events-none" />
    </div>
  );
};

export default CopyEmailButton;