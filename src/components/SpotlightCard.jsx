import { useState } from "react";

const SpotlightCard = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="group relative w-full overflow-hidden rounded-xl border border-neutral-700 bg-neutral-900/80 backdrop-blur-sm p-6 transition-transform duration-500 hover:-translate-y-2 hover:scale-105"
    >
      {/* Glow Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(450px circle at ${position.x}px ${position.y}px, rgba(99,102,241,0.45), transparent 50%)`
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SpotlightCard;