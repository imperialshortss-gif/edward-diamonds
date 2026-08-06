import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { ReactNode } from "react";
import { motion } from "framer-motion";

export function Layout({ children }: { children: ReactNode }) {
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
