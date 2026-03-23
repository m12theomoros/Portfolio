import { SERVICES } from '../constants/Index';

const Services = () => {
  return (
    <section className="c-space section-spacing scroll-mt-24">
      
      <div className="flex flex-col gap-4 mb-12">
        <h2 className="text-heading">What I Build</h2>
        <p className="subtext max-w-3xl leading-relaxed text-gray-400">
          I build production-ready applications across the stack — from responsive, 
          high-performance interfaces to scalable backend systems, with a focus on clean 
          architecture, security, and real-world impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service) => {
          const IconComponent = service.icon;

          return (
            <div 
              key={service.id}
              className="relative flex flex-col rounded-2xl grid-default-color 
                         border border-white/5 bg-black/20 backdrop-blur-sm overflow-hidden
                         transition-all duration-500 ease-out
                         hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-indigo-500/10 group cursor-default"
            >
              <div className="relative flex items-center justify-center w-full h-40 bg-white/[0.02] border-b border-white/5 overflow-hidden transition-colors duration-500 group-hover:bg-indigo-500/[0.02]">
                
                <div className="absolute -right-10 -top-10 opacity-[0.02] group-hover:opacity-[0.06] group-hover:rotate-12 transition-all duration-700 pointer-events-none">
                  <IconComponent size={200} strokeWidth={1} />
                </div>
                
                <div className="z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-black/40 border border-white/10 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-all duration-500 shadow-xl group-hover:shadow-indigo-500/20">
                  <IconComponent size={32} strokeWidth={1.5} className="text-gray-300 group-hover:text-indigo-400 group-hover:scale-110 transition-all duration-500" />
                </div>

                <div className="absolute top-0 inset-x-0 h-[2px] w-full bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="relative p-6 z-10 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-white mb-3 tracking-wide font-sans group-hover:text-indigo-100 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;