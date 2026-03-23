import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
import { Send, Sparkles } from "lucide-react"; 
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const now = new Date().toLocaleString("en-US", {
        weekday: "long", year: "numeric", month: "long", day: "numeric",
        hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true      
      });

      await emailjs.send(
        "service_3174xgz",
        "template_5coap3d",
        {
          from_name: formData.name,
          to_name: "Michael",
          from_email: formData.email,
          message: formData.message,
          time: now,
        },
        "azDoahTsNttMxegve"
      );

      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("Success", "Your message has been sent!");
    } catch (error) {
      setIsLoading(false);
      showAlertMessage("Failed", "Something went wrong!");
    }
  };

  return (
    <section id="contact" className="relative flex items-center min-h-screen 
    c-space section-spacing scroll-mt-24 overflow-hidden pb-33">
      
      <Particles 
        className="absolute inset-0 -z-10" 
        quantity={120} 
        staticity={30}
        ease={80} 
        color={"#6366f1"} 
        refresh 
      />
      
      {showAlert && <Alert type={alertType} text={alertMessage} />}

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center justify-center max-w-xl p-10 mx-auto border 
        border-white/10 rounded-[2.5rem] bg-black/12 backdrop-blur-xl 
        shadow-[0_0_50px_-12px_rgba(99,102,241,0.2)]"
      >
        <div className="flex flex-col items-start w-full gap-4 mb-10 text-left">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full 
          bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs 
          font-medium uppercase tracking-wider">
            <Sparkles size={14} />
            Available for new opportunities
          </div>
          <h2 className="text-5xl font-bold tracking-tight text-white">
            Let's <span className="text-indigo-500 italic">Connect</span>
          </h2>
          <p className="text-lg font-light text-neutral-400 max-w-sm">
            Whether you're building a new product, scaling an existing platform, or 
            bringing a unique idea to life, I’m here to help make it happen.
          </p>
        </div>

        <form className="w-full space-y-8" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="relative group">
            <label htmlFor="name" className="field-label transition-colors
            group-focus-within:text-indigo-400">Full Name</label>
            <input
              id="name" 
              name="name" 
              type="text" 
              required
              className="field-input field-input-focus bg-white/5
              border-white/5 hover:border-white/20 transition-all duration-300"
              placeholder="John Doe"
              value={formData.name} onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="relative group">
            <label 
            htmlFor="email" 
            className="field-label transition-colors
            group-focus-within:text-indigo-400">
              Email Address
              </label>
            <input
              id="email" 
              name="email" 
              type="email" 
              required
              className="field-input field-input-focus bg-white/5
              border-white/5 hover:border-white/20 transition-all duration-300"
              placeholder="JohnDoe@email.com"
              value={formData.email} onChange={handleChange}
            />
          </div>

          {/* Message */}
          <div className="relative group">
            <label 
            htmlFor="message" 
            className="field-label transition-colors
             group-focus-within:text-indigo-400">
              Your Message
              </label>
            <textarea
              id="message" 
              name="message" 
              rows="5" 
              required
              className="field-input field-input-focus bg-white/5 border-white/5
              hover:border-white/20 transition-all duration-300 resize-none"
              placeholder="Tell me about your project, idea, or questions.."
              value={formData.message} onChange={handleChange}
            />
          </div>

          {/*  Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgb(79 70 229 / 0.4)" }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
            className="group relative w-full py-4 flex items-center justify-center 
            gap-3 overflow-hidden rounded-2xl bg-indigo-600 text-white font-bold 
            transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent 
            via-white/10 to-transparent -translate-x-full group-hover:translate-x-full 
            transition-transform duration-1000" />
            
            {isLoading ? (
              <span className="flex items-center gap-3">
                <div className="w-5 h-5 border-2 border-white/20 border-t-white 
                rounded-full animate-spin" />
                Sending...
              </span>
            ) : (
              <>
                <span>Send Message</span>
                <Send size={18} className="group-hover:translate-x-1 
                group-hover:-translate-y-1 transition-transform duration-300" />
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;