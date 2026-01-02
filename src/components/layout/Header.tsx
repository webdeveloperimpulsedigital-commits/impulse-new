// src/components/layout/Header.tsx
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown as ChevronDownIcon,
  Menu as MenuIcon,
  X as XIcon,
} from "lucide-react";
import { Button } from "../../components/ui/button";

/* ================= TYPES ================= */

type DropdownItem = {
  label: string;
  href: string;
  hasSubDropdown?: boolean;
  subItems?: DropdownItem[];
};

type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
  active?: boolean;
  external?: boolean; // 👈 IMPORTANT
};

type HeaderProps = {
  overlay?: boolean;
  items?: NavItem[];
};

/* ================= NAV ITEMS ================= */

const DEFAULT_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },

  {
    label: "Services",
    href: "/services",
    hasDropdown: true,
    dropdownItems: [
      { label: "Agentic AI", href: "/services/agentic-ai" },
      {
        label: "Search Engine Optimization",
        href: "/services/search-engine-optimization",
        hasSubDropdown: true,
        subItems: [
          { label: "AI SEO", href: "/services/search-engine-optimization/ai-seo-agency" },
          { label: "Enterprise SEO", href: "/services/search-engine-optimization/enterprise-seo-services" },
          { label: "eCommerce SEO", href: "/services/search-engine-optimization/ecommerce-seo-services" },
          { label: "B2B SEO", href: "/services/search-engine-optimization/b2b-seo-services" },
          { label: "Local SEO", href: "/services/search-engine-optimization/local-seo-services" },
        ],
      },
      { label: "Social Media Video Production", href: "/services/social-media-video-production" },
      { label: "Content Writing", href: "/services/content-writing-services" },
      { label: "Performance Marketing (PPC)", href: "/services/performance-marketing" },
      { label: "Social Media Marketing", href: "/services/social-media-marketing" },
      { label: "Website Development", href: "/services/website-development" },
      { label: "Branding", href: "/services/branding-creative-services" },
      { label: "Employer Branding", href: "/services/employer-branding-agency" },
    ],
  },

  { label: "Case Studies", href: "/casestudies" },

  // ✅ FIXED BLOG LINK
  {
    label: "Blogs1",
    href: "https://www.theimpulsedigital.com/blog",
    external: true,
  },

  {
    label: "Resources",
    href: "",
    hasDropdown: true,
    dropdownItems: [
      { label: "EBooks", href: "/resources/ebooks" },
      { label: "Videos", href: "/resources/videos" },
      { label: "Slideshare PPT", href: "/resources/slideshare-ppt" },
    ],
  },

  { label: "Careers", href: "/careers" },
];

/* ================= COMPONENT ================= */

const Header: React.FC<HeaderProps> = ({ overlay = false, items }) => {
  const navigationItems = items ?? DEFAULT_ITEMS;
  const location = useLocation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  const navRef = useRef<HTMLDivElement | null>(null);
  const [headerH, setHeaderH] = useState(0);

  /* ================= HELPERS ================= */

  const isActive = (href: string) => {
    if (!href || href.startsWith("http")) return false;
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const renderLink = (item: NavItem, className: string) => {
    if (item.external) {
      return (
        <a href={item.href} className={className}>
          {item.label}
        </a>
      );
    }

    return (
      <Link to={item.href} className={className}>
        {item.label}
      </Link>
    );
  };

  /* ================= EFFECTS ================= */

  useEffect(() => {
    const update = () => setHeaderH(navRef.current?.offsetHeight || 0);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setOpenMobileDropdown(null);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  /* ================= STYLES ================= */

  const positionClasses = overlay ? "fixed top-4" : "fixed top-0";
  const headerBg = overlay
    ? "bg-[#020018]"
    : "bg-[#16132A] backdrop-blur-sm border-b border-white/10 shadow-md";

  /* ================= JSX ================= */

  return (
    <>
      <nav
        ref={navRef}
        className={`${positionClasses} left-0 right-0 z-[1000] px-4 py-4 ${headerBg}`}
      >
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Link to="/">
            <img
              src="/header-logo.png"
              alt="Impulse Digital"
              className="w-[140px]"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => {
                  setOpenDropdown(null);
                  setOpenSubDropdown(null);
                }}
              >
                <div className="flex items-center gap-1">
                  {renderLink(
                    item,
                    `text-white text-sm hover:text-gray-300 ${
                      isActive(item.href) ? "font-bold" : ""
                    }`
                  )}

                  {item.hasDropdown && (
                    <ChevronDownIcon className="w-4 h-4 text-white" />
                  )}
                </div>

                {item.hasDropdown && openDropdown === item.label && (
                  <div className="absolute top-full left-0 w-56 bg-white rounded-lg shadow-lg py-2">
                    {item.dropdownItems?.map((dd) => (
                      <Link
                        key={dd.label}
                        to={dd.href}
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        {dd.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CONTACT BUTTON */}
          <Button className="hidden lg:flex bg-white text-[#543d98]">
            <Link to="/contact-us">Contact Us</Link>
          </Button>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-[#543d98] rounded-lg p-4 space-y-4">
            {navigationItems.map((item) => (
              <div key={item.label}>
                {renderLink(
                  item,
                  "block text-white text-base py-2"
                )}
              </div>
            ))}
          </div>
        )}
      </nav>

      {!overlay && <div style={{ height: headerH }} />}
    </>
  );
};

export default Header;
