import { Layout } from "@/components/Layout";
import { Link } from "wouter";
import { useState } from "react";
import { motion } from "framer-motion";
import jewelryPreview from "@/assets/jewelry-preview.jpg";
import gal4 from "@/assets/gallery-4.jpg";
import gal6 from "@/assets/gallery-6.jpg";
import pinkRing from "@/assets/pink-diamond-ring.jpg";
import blueNecklace from "@/assets/blue-diamond-necklace.jpg";
import yellowRing from "@/assets/yellow-canary-ring.jpg";
import greenEarrings from "@/assets/green-diamond-earrings.jpg";
import redPendant from "@/assets/red-diamond-pendant.jpg";
import purpleBracelet from "@/assets/purple-diamond-bracelet.jpg";
import tiara from "@/assets/diamond-tiara.jpg";
import coloredCollection from "@/assets/colored-diamond-collection.jpg";
import orangeRing from "@/assets/orange-diamond-ring.jpg";
import bracelet from "@/assets/diamond-bracelet.jpg";

const collections = [
  // Rare Colored Diamonds
  { name: "Vivid Pink Solitaire", category: "Rare Colored", tag: "Fancy Vivid Pink", img: pinkRing },
  { name: "Ocean Blue Pendant", category: "Rare Colored", tag: "Fancy Vivid Blue", img: blueNecklace },
  { name: "Canary Radiant Ring", category: "Rare Colored", tag: "Fancy Vivid Yellow", img: yellowRing },
  { name: "Forest Green Drops", category: "Rare Colored", tag: "Natural Fancy Green", img: greenEarrings },
  { name: "The Crimson Flame", category: "Rare Colored", tag: "Fancy Red — Ultra Rare", img: redPendant },
  { name: "Violet Cascade Bracelet", category: "Rare Colored", tag: "Fancy Vivid Purple", img: purpleBracelet },
  { name: "Soleil Pear Ring", category: "Rare Colored", tag: "Fancy Vivid Orange", img: orangeRing },
  { name: "Spectrum Collection", category: "Rare Colored", tag: "Multi-Color Display", img: coloredCollection },

  // High Jewelry & Classic
  { name: "The Empress Necklace", category: "High Jewelry", tag: "Bespoke Creation", img: jewelryPreview },
  { name: "Solitaire Promise", category: "Engagement", tag: "Round Brilliant", img: gal4 },
  { name: "Midnight Cascade", category: "High Jewelry", tag: "Signature Collection", img: gal6 },
  { name: "Royal Tiara", category: "High Jewelry", tag: "Private Reserve", img: tiara },
  { name: "Eternity Band", category: "Wedding", tag: "Classic Collection", img: bracelet },
];

const categories = ["All", "Rare Colored", "High Jewelry", "Engagement", "Wedding"];

export default function Jewelry() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? collections
    : collections.filter(c => c.category === activeFilter);

  return (
    <Layout>
      {/* Header */}
      <section className="pt-40 pb-20 bg-[#111111] border-b border-primary/10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <span className="text-primary uppercase tracking-[0.2em] text-sm mb-4 block">Bespoke Creations</span>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">High Jewelry</h1>
          <p className="text-white/60 text-lg font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            The culmination of our journey. Extraordinary stones — including the world's rarest colored diamonds — set into timeless designs for the most discerning collectors.
          </p>
        </div>
      </section>

      {/* Rare Colored Diamonds Banner */}
      <section className="py-8 bg-black border-b border-primary/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-primary/70 uppercase tracking-[0.3em] text-xs">
            ✦ &nbsp; Fancy Vivid Pink &nbsp; · &nbsp; Fancy Vivid Blue &nbsp; · &nbsp; Fancy Vivid Yellow &nbsp; · &nbsp; Natural Green &nbsp; · &nbsp; Fancy Red &nbsp; · &nbsp; Fancy Vivid Orange &nbsp; · &nbsp; Fancy Vivid Purple &nbsp; ✦
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-10 bg-[#0a0a0a] border-b border-white/5">
        <div className="container mx-auto px-6 flex flex-wrap gap-4 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 text-xs uppercase tracking-[0.2em] border transition-all duration-300 cursor-pointer ${
                activeFilter === cat
                  ? "bg-primary text-black border-primary"
                  : "border-white/20 text-white/50 hover:border-primary/50 hover:text-primary/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filtered.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden bg-[#111] mb-5 relative">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  {item.category === "Rare Colored" && (
                    <div className="absolute top-3 left-3 bg-black/70 border border-primary/40 px-2 py-1">
                      <span className="text-primary text-[10px] uppercase tracking-widest">Rare</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                    <span className="text-white text-xs uppercase tracking-[0.2em] border border-white/40 px-4 py-2">View Details</span>
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-primary/60 text-[10px] uppercase tracking-widest block mb-1">{item.tag}</span>
                  <h3 className="font-serif text-xl text-white group-hover:text-primary transition-colors duration-300">{item.name}</h3>
                  <span className="text-white/30 text-[10px] uppercase tracking-wider">{item.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Colored Diamond Spotlight */}
      <section className="py-24 bg-[#0d0d0d] border-t border-primary/10">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <span className="text-primary uppercase tracking-[0.2em] text-xs mb-4 block">Collector's Corner</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">The World's Rarest Diamonds</h2>
          <p className="text-white/55 font-light leading-relaxed max-w-3xl mx-auto mb-16">
            Colored diamonds are among nature's most extraordinary achievements — formed over billions of years under extreme conditions that produce their remarkable hues. Fewer than 1 in 10,000 diamonds qualify as fancy colored. Edward Diamonds maintains exclusive access to investment-grade specimens in pink, blue, red, green, orange, and violet — each certified by the Gemological Institute of America.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { color: "Pink", rarity: "1 in 100,000", note: "Most sought-after" },
              { color: "Blue", rarity: "1 in 200,000", note: "Boron inclusions" },
              { color: "Red", rarity: "1 in 1,000,000+", note: "Rarest of all" },
              { color: "Green", rarity: "1 in 500,000", note: "Natural radiation" },
            ].map(d => (
              <div key={d.color} className="border border-primary/20 p-6 text-center">
                <div className="text-primary font-serif text-3xl mb-2">{d.color}</div>
                <div className="text-white/40 text-[10px] uppercase tracking-widest mb-1">{d.rarity}</div>
                <div className="text-white/60 text-xs italic">{d.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Commission */}
      <section className="py-24 bg-[#0a0a0a] border-t border-primary/10">
        <div className="container mx-auto px-6">
          <div className="p-16 bg-[#111] border border-primary/20 text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl text-white mb-6">Custom Commissions</h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              For those seeking something entirely unique, our master jewelers are available for private consultations to design and fabricate bespoke pieces utilizing colored diamonds and stones from our private reserves.
            </p>
            <Link href="/contact">
              <span className="inline-block px-8 py-4 bg-primary text-black hover:bg-white transition-colors duration-500 uppercase tracking-[0.2em] text-sm font-medium cursor-pointer">
                Request Appointment
              </span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
