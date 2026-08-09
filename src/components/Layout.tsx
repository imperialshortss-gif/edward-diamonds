import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { ReactNode, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  useEffect(() => {
    const canonicalUrl = `https://edward-diamonds.vercel.app${location}`;

    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", canonicalUrl);
  }, [location]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col text-white font-sans selection:bg-primary selection:text-black">
      <Navigation />

      <motion.main
        className="flex-1 w-full flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>

      <Footer />
    </div>
  );
}
