import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Mining", href: "/mining" },
    { label: "Leadership", href: "/leadership" },
    { label: "Global Operations", href: "/global-operations" },
  ];

  const collectionLinks = [
    { label: "Raw Diamonds", href: "/raw-diamonds" },
    { label: "Cut Diamonds", href: "/cut-diamonds" },
    { label: "Jewelry", href: "/jewelry" },
  ];

  const navBackground = isScrolled 
    ? "bg-[#111111]/95 backdrop-blur-md border-b border-primary/20" 
    : "bg-transparent";

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${navBackground}`}>
        <div className="container mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/">
            <div className="flex flex-col items-center cursor-pointer group">
              <span className="font-serif text-3xl font-semibold tracking-[0.2em] text-primary group-hover:text-white transition-colors duration-500">
                EDWARD
              </span>
              <span className="font-sans text-[0.6rem] font-light tracking-[0.4em] text-white/80 group-hover:text-primary transition-colors duration-500">
                DIAMONDS
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 2).map((link) => (
              <Link key={link.href} href={link.href}>
                <span className={`text-sm tracking-wider uppercase transition-all duration-300 hover:text-primary cursor-pointer relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${location === link.href ? 'text-primary after:w-full' : 'text-white/80'}`}>
                  {link.label}
                </span>
              </Link>
            ))}

            <div className="relative" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
              <span className={`flex items-center gap-1 text-sm tracking-wider uppercase transition-all duration-300 hover:text-primary cursor-pointer ${collectionLinks.some(l => l.href === location) ? 'text-primary' : 'text-white/80'}`}>
                Collections <ChevronDown className="w-4 h-4" />
              </span>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full -left-4 mt-4 w-48 bg-[#111111] border border-primary/20 shadow-2xl rounded-sm overflow-hidden"
                  >
                    {collectionLinks.map((link) => (
                      <Link key={link.href} href={link.href}>
                        <span className="block px-6 py-4 text-sm text-white/70 hover:text-primary hover:bg-white/5 transition-colors cursor-pointer">
                          {link.label}
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(2).map((link) => (
              <Link key={link.href} href={link.href}>
                <span className={`text-sm tracking-wider uppercase transition-all duration-300 hover:text-primary cursor-pointer relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${location === link.href ? 'text-primary after:w-full' : 'text-white/80'}`}>
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link href="/contact">
              <span className="px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-black transition-all duration-500 uppercase text-xs tracking-[0.2em] cursor-pointer">
                Inquire
              </span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white/80 hover:text-primary p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "tween", duration: 0.5 }}
            className="fixed inset-0 z-[60] bg-[#0a0a0a] flex flex-col"
          >
            <div className="container mx-auto px-6 h-24 flex items-center justify-between border-b border-white/10">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="flex flex-col items-center cursor-pointer">
                  <span className="font-serif text-3xl font-semibold tracking-[0.2em] text-primary">
                    EDWARD
                  </span>
                  <span className="font-sans text-[0.6rem] font-light tracking-[0.4em] text-white/80">
                    DIAMONDS
                  </span>
                </div>
              </Link>
              <button 
                className="text-white/80 hover:text-primary p-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center gap-8 overflow-y-auto py-12">
              {[...navLinks.slice(0, 2), ...collectionLinks, ...navLinks.slice(2)].map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="text-xl uppercase tracking-[0.2em] text-white/80 hover:text-primary transition-colors cursor-pointer">
                    {link.label}
                  </span>
                </Link>
              ))}
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="mt-8 px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-black transition-all duration-500 uppercase tracking-[0.2em] cursor-pointer">
                  Inquire
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
