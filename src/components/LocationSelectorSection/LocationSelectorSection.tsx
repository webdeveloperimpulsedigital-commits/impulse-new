import { useNavigate } from "react-router-dom";

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

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const path = e.target.value;
    if (path) {
      navigate(path);
      window.scrollTo(0, 0);
    }
  };

  const filteredLocations = locations.filter(loc => loc.name !== currentLocation);

  return (
    <section className="max-w-[1280px] mx-auto px-4 lg:px-8 py-10 lg:py-16 text-center">

      <h2 className="text-center [font-family:'DM_Sans',Helvetica] font-normal text-[20px] md:text-[34px] leading-tight mx-auto">
        <span className="text-[#000000] lg:text-[34px] sm:text-[16px]">
          Explore Our SEO Services in
        </span>
        <br />
        <span className="font-bold text-[#543d98] lg:text-[49px] md:text-[52px] sm:text-[20px]">
          Other Locations
        </span>
      </h2><br></br>
      <div className="flex justify-center">
        <select
          onChange={handleLocationChange}
          className="w-full max-w-md p-4 text-lg border-2 border-[#543d98] rounded-xl outline-none focus:ring-2 focus:ring-[#543d98] cursor-pointer bg-white"
          defaultValue=""
        >
          <option value="" disabled>Select a location</option>
          {filteredLocations.map((loc) => (
            <option key={loc.name} value={loc.path}>{loc.name}</option>
          ))}
        </select>
      </div>
    </section>
  );
};
