import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "wouter";
import { useRef } from "react";
import { ArrowDown, Globe2, Diamond, Gem, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import chairmanImg from "@/assets/chairman.jpg";
import mineAerialImg from "@/assets/mine-aerial.jpg";
import tl1 from "@/assets/timeline-1.jpg";
import tl2 from "@/assets/timeline-2.jpg";
import tl3 from "@/assets/timeline-3.jpg";
import tl4 from "@/assets/timeline-4.jpg";
import rawPreview from "@/assets/raw-preview.jpg";
import cutPreview from "@/assets/cut-preview.jpg";
import jewelryPreview from "@/assets/jewelry-preview.jpg";
import sustainabilityImg from "@/assets/sustainability.jpg";
import gal1 from "@/assets/gallery-1.jpg";
import gal2 from "@/assets/gallery-2.jpg";
import gal3 from "@/assets/gallery-3.jpg";
import gal4 from "@/assets/gallery-4.jpg";
import gal5 from "@/assets/gallery-5.jpg";
import gal6 from "@/assets/gallery-6.jpg";

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 200]);
  const heroOpacity = useTransform(scrollY, [0, 800], [1, 0]);

  return (
    <>
      <SEO
        title="Edward Diamonds | Global Diamond Company"
        description="Edward Diamonds is a global diamond company specializing in exceptional rough and polished diamonds, fine diamond jewelry, and the international diamond trade."
      />
      <Layout>
      {/* 1. HERO */}
      <section className="relative h-screen min-h-[800px] w-full overflow-hidden flex flex-col items-center justify-center pt-20">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-transparent to-[#0a0a0a] z-10" />
          <div className="absolute inset-0 bg-black/30 z-10" />
          <img 
            src={heroImg} 
            alt="Brilliant Cut Diamond" 
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
        
        <div className="container relative z-20 mx-auto px-6 text-center max-w-5xl mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1
  className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-4 font-medium text-white drop-shadow-2xl"
  style={{ WebkitTextStroke: "1px rgba(163, 163, 117, 0.65)" }}
>
  Edward Diamonds
</h1>

<h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6 italic tracking-tight text-white/90 drop-shadow-2xl">
  Unearthing Nature's Rarest Treasures
</h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-sans text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12 font-light tracking-wide leading-relaxed"
          >
           A global diamond company transforming exceptional stones from the depths of the earth into timeless symbols of beauty and legacy.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link href="/raw-diamonds">
              <span className="px-8 py-4 bg-primary text-black hover:bg-white transition-colors duration-500 uppercase tracking-[0.2em] text-sm font-medium cursor-pointer min-w-[240px] text-center">
                Explore Diamonds
              </span>
            </Link>
            <Link href="/about">
              <span className="px-8 py-4 border border-primary text-primary hover:bg-primary/10 transition-colors duration-500 uppercase tracking-[0.2em] text-sm font-medium cursor-pointer min-w-[240px] text-center">
                Discover Our Legacy
              </span>
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4 text-primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* 2. STATS BAR */}
      <section className="relative z-30 bg-[#0a0a0a] border-y border-primary/20 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-primary/20">
            {[
              { num: "37+", label: "Years of Excellence" },
              { num: "48", label: "Countries Served" },
              { num: "2.4M+", label: "Carats Traded" },
              { num: "A+", label: "GIA Certification Rate" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center px-4">
                <span className="text-4xl md:text-5xl font-serif text-primary mb-2">{stat.num}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-white/60">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CHAIRMAN */}
      <section className="py-32 bg-[#111111]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group p-4 border border-primary/20">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-700" />
              <img src={chairmanImg} alt="Andrew Conwell, Chairman and Owner of Edward Diamonds" className="w-full h-auto grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 relative z-10" />
            </div>
            <div className="flex flex-col">
  <span className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
    Leadership & Vision
  </span>

  <h2 className="font-serif text-5xl mb-2 text-white">
    Andrew Conwell
  </h2>

  <h3 className="font-sans text-sm tracking-[0.1em] text-white/50 mb-10 pb-10 border-b border-primary/20">
    Chairman & Owner, Edward Diamonds
  </h3>

              
              <div className="space-y-6 text-white/70 font-light leading-relaxed">
                <p>
                  For over three decades, Edward Diamonds has been driven by a singular obsession: unearthing the most extraordinary natural treasures the earth has to offer, while honoring the communities and environments from which they emerge.
                </p>
                <p>
                  What began as a specialized trading operation in Antwerp has evolved into a global powerhouse spanning 48 countries. We oversee every facet of a diamond's journey, from responsible mining deep within the earth to the masterful polishing that unlocks a stone's inner fire.
                </p>
                <p>
                  Our commitment remains unyielding. We do not compromise on ethics, we do not settle for standard craftsmanship, and we recognize that our reputation is as rare and fragile as the stones we curate. 
                </p>
                <p>
                  True luxury is trust. And trust is forged over decades of flawless execution.
                </p>
              </div>
              <div className="mt-12 font-serif text-4xl italic text-primary/80">
                A. Conwell
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 flex flex-col">
              <h2 className="font-serif text-5xl mb-10 text-white leading-tight">The Edward Diamonds Legacy</h2>
              
              <div className="space-y-6 text-white/70 font-light leading-relaxed mb-12">
                <p>We stand at the intersection of scale and absolute precision. By controlling our own mines, working directly with master cutters, and operating a strictly monitored global supply chain, we eliminate uncertainty.</p>
                <p>Every stone carrying the Edward Diamonds mark is a testament to nature's brilliance and human exceptionalism.</p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6 border-t border-primary/20 pt-6">
                  <Globe2 className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h4 className="font-serif text-2xl text-white mb-2">Global Operations</h4>
                    <p className="text-white/60 text-sm leading-relaxed">Active mining and trading operations across six continents, establishing a truly global footprint.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 border-t border-primary/20 pt-6">
                  <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h4 className="font-serif text-2xl text-white mb-2">Ethical Sourcing</h4>
                    <p className="text-white/60 text-sm leading-relaxed">Strict adherence to the Kimberley Process and our own elevated standards for community welfare.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 border-t border-primary/20 pt-6">
                  <Diamond className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h4 className="font-serif text-2xl text-white mb-2">Master Craftsmen</h4>
                    <p className="text-white/60 text-sm leading-relaxed">Multi-generational artisans who understand how to awaken the unique character of every rough stone.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img src={mineAerialImg} alt="Edward Diamonds Mining" className="w-full h-auto object-cover border border-white/5" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. TIMELINE */}
      <section className="py-32 bg-[#111111] overflow-hidden relative">
        <div className="container mx-auto px-6 mb-20 text-center">
          <span className="text-primary uppercase tracking-[0.3em] text-sm mb-4 block">The Process</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white">The Diamond Journey</h2>
        </div>

        <div className="container mx-auto px-6 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[150px] left-0 w-full h-[1px] bg-primary/20 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {[
              { num: "01", title: "Diamond Mining", desc: "Discovering exceptional stones from the world's richest sources.", img: tl1 },
              { num: "02", title: "Selection & Sourcing", desc: "Careful evaluation and responsible handling of raw materials.", img: tl2 },
              { num: "03", title: "Master Cutting", desc: "Precision craftsmanship transforming rough stones into brilliance.", img: tl3 },
              { num: "04", title: "Luxury Creation", desc: "Forging timeless bespoke masterpieces for our discerning clients.", img: tl4 },
            ].map((stage, i) => (
              <div key={i} className="flex flex-col group">
                <div className="h-[300px] mb-8 overflow-hidden border border-white/10 relative">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img src={stage.img} alt={stage.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <span className="text-primary font-serif text-4xl mb-4 italic">{stage.num}.</span>
                <h3 className="font-serif text-2xl text-white mb-3">{stage.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. COLLECTIONS */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-primary uppercase tracking-[0.3em] text-sm mb-4 block">Excellence</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white">Our Collections</h2>
          </div>
          <Link href="/cut-diamonds">
            <span className="text-white/60 hover:text-primary uppercase tracking-[0.2em] text-xs cursor-pointer pb-2 border-b border-primary/30 hover:border-primary transition-all duration-300 inline-block">
              View All Inventories
            </span>
          </Link>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Raw Diamonds", img: rawPreview, link: "/raw-diamonds" },
              { title: "Cut Diamonds", img: cutPreview, link: "/cut-diamonds" },
              { title: "Luxury Jewelry", img: jewelryPreview, link: "/jewelry" },
            ].map((col, i) => (
              <Link key={i} href={col.link}>
                <div className="group relative h-[500px] overflow-hidden cursor-pointer">
                  <img src={col.img} alt={col.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10">
                    <h3 className="font-serif text-3xl text-white mb-4 group-hover:-translate-y-2 transition-transform duration-500">{col.title}</h3>
                    <span className="text-primary uppercase tracking-[0.2em] text-xs opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500 delay-100">
                      Explore Collection
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SUSTAINABILITY */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={sustainabilityImg} alt="Sustainability" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <span className="text-[#a3a375] uppercase tracking-[0.3em] text-sm mb-4 block">The Future</span>
            <h2 className="font-serif text-5xl mb-12 text-white">Ethics & Environment</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {[
                { title: "Responsible Mining", desc: "Minimizing ecological footprint through advanced land rehabilitation programs." },
                { title: "Ethical Sourcing", desc: "Conflict-free guarantee on 100% of our supply chain." },
                { title: "Community Support", desc: "Investing heavily in healthcare and education in mining regions." },
                { title: "Traceability", desc: "Blockchain-verified origin tracking from mine to masterpiece." }
              ].map((item, i) => (
                <div key={i}>
                  <div className="w-12 h-[1px] bg-[#a3a375] mb-4" />
                  <h4 className="font-serif text-xl text-white mb-2">{item.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 inline-flex items-center gap-4 px-6 py-3 border border-[#a3a375]/30 bg-black/40 backdrop-blur-sm">
              <ShieldCheck className="w-6 h-6 text-[#a3a375]" />
              <span className="uppercase tracking-[0.1em] text-sm text-white/80">Kimberley Process Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. GALLERY GRID */}
      <section className="py-2">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {[gal1, gal2, gal3, gal4, gal5, gal6].map((img, i) => (
            <div key={i} className="relative group aspect-square overflow-hidden bg-[#111]">
              <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <Gem className="w-8 h-8 text-primary opacity-50" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. CTA */}
      <section className="py-32 bg-[#111111] text-center">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-5xl mb-6 text-white">Begin Your Diamond Journey</h2>
          <p className="text-white/60 max-w-xl mx-auto mb-12 font-light tracking-wide">
            Whether for investment, wholesale supply, or bespoke commissions, our specialists are at your disposal.
          </p>
          <Link href="/contact">
            <span className="inline-block px-10 py-5 bg-primary text-black hover:bg-white transition-colors duration-500 uppercase tracking-[0.2em] text-sm font-medium cursor-pointer">
              Contact Us
            </span>
          </Link>
        </div>
      </section>
      </Layout>
    </>
  );
}
