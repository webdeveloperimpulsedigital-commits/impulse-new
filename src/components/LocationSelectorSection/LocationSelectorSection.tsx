import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

type LocationSelectorSectionProps = {
  currentLocation: string;
};

const locations = [
  { name: "Mumbai", path: "/services/search-engine-optimization/mumbai" },
  { name: "Airoli", path: "/services/search-engine-optimization/airoli" },
  { name: "Navi Mumbai", path: "/services/search-engine-optimization/navimumbai" },
  { name: "Vashi", path: "/services/search-engine-optimization/vashi" },
  { name: "Turbhe", path: "/services/search-engine-optimization/turbhe" },
  { name: "Sanpada", path: "/services/search-engine-optimization/sanpada" },
  { name: "Panvel", path: "/services/search-engine-optimization/panvel" },
  { name: "Nerul", path: "/services/search-engine-optimization/nerul" },
  { name: "Mulund", path: "/services/search-engine-optimization/mulund" },
  { name: "Mira Road", path: "/services/search-engine-optimization/mira-road" },
  { name: "Mansarovar", path: "/services/search-engine-optimization/mansarovar" },
  { name: "Malad", path: "/services/search-engine-optimization/malad" },
  { name: "Koparkhairane", path: "/services/search-engine-optimization/koparkhairane" },
  { name: "Kharghar", path: "/services/search-engine-optimization/kharghar" },
  { name: "Kandivali", path: "/services/search-engine-optimization/kandivali" },
  { name: "Jogeshwari", path: "/services/search-engine-optimization/jogeshwari" },
  { name: "Goregaon", path: "/services/search-engine-optimization/goregaon" },
  { name: "Ghatkopar", path: "/services/search-engine-optimization/ghatkopar" },
  { name: "Ghansoli", path: "/services/search-engine-optimization/ghansoli" },
  { name: "Dadar", path: "/services/search-engine-optimization/dadar" },
  { name: "Borivali", path: "/services/search-engine-optimization/borivali" },
  { name: "Bandra", path: "/services/search-engine-optimization/bandra" },
  { name: "Andheri", path: "/services/search-engine-optimization/andheri" },
];

export const LocationSelectorSection = ({ currentLocation }: LocationSelectorSectionProps) => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  const handleLocationChange = (path: string) => {
    if (path) {
      navigate(path);
      window.scrollTo(0, 0);
    }
  };

  const filteredLocations = locations.filter(loc => loc.name !== currentLocation);

  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#050505] overflow-hidden rounded-[2rem] lg:rounded-[4rem]">
      {/* Premium Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#543d98] rounded-full mix-blend-screen filter blur-[150px] opacity-30 animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#8660e8] rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-pulse" style={{ animationDuration: '10s' }}></div>
      
      {/* Subtle dotted grid pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 lg:mb-24 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h2 className="text-white font-['DM_Sans',Helvetica] font-light text-[40px] md:text-[56px] lg:text-[72px] leading-[1.05] tracking-tight">
              Explore SEO Services In <br />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#a385ff] via-[#8660e8] to-[#543d98]">Other Locations</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:mb-4"
          >
            <p className="text-gray-400 text-lg md:text-xl max-w-md font-light leading-relaxed">
              Dominate local search results. Discover tailored digital marketing strategies designed specifically for your local market.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-x-20 gap-y-0 border-t border-white/10">
          {filteredLocations.map((loc, index) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 10) * 0.05 }}
              onClick={() => handleLocationChange(loc.path)}
              className={`group justify-between items-center py-6 md:py-8 border-b border-white/10 hover:border-[#8660e8] cursor-pointer transition-all duration-500 ${!showAll && index >= 5 ? 'hidden md:flex' : 'flex'}`}
            >
              <span className="text-xl md:text-2xl font-light text-gray-400 group-hover:text-white group-hover:translate-x-2 transition-all duration-500 tracking-wide">
                {loc.name}
              </span>
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#8660e8] group-hover:shadow-[0_0_25px_rgba(134,96,232,0.6)] transition-all duration-500">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400 group-hover:text-white transition-transform duration-500 group-hover:rotate-45">
                  <path d="M5.08323 0.964253C3.49186 1.08865 0.798825 1.33748 0.798826 2.70596C0.798826 4.44767 4.22635 3.95004 5.8177 3.95004C7.40905 3.95004 12.3055 3.95004 14.1417 6.31379C15.9779 8.67754 15.733 13.7783 15.6106 16.6396C15.4882 19.501 17.6916 19.3766 18.1813 17.3861C19.1605 13.7783 19.1015 5.032 17.0796 2.83037C15.3658 0.964251 12.3055 0.839846 10.3469 0.839846C8.26591 0.839846 6.5529 0.849368 5.08323 0.964253Z" fill="currentColor"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredLocations.length > 5 && (
          <div className="mt-10 flex justify-center md:hidden">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors duration-300 font-light text-sm"
            >
              {showAll ? "View Less Locations" : "View All Locations"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
