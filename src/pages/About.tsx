import { Layout } from "@/components/Layout";
import { Link } from "wouter";

export default function About() {
  return (
    <Layout>
      <section className="pt-40 pb-20 bg-[#111111] border-b border-primary/10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">Our Heritage</h1>
          <p className="text-white/60 text-lg font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            Since 1987, Edward Diamonds has set the uncompromising standard for rarity, integrity, and masterful craftsmanship.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="space-y-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-primary font-serif text-4xl mb-4 block italic">1987</span>
                <h3 className="font-serif text-3xl mb-4 text-white">The Foundation</h3>
                <p className="text-white/60 leading-relaxed font-light">
                  Founded in Antwerp by a consortium of master cutters and gemologists, Edward Diamonds began as a highly specialized trading house focusing strictly on D-Flawless stones.
                </p>
              </div>
              <div className="aspect-video bg-[#111] border border-primary/10 flex items-center justify-center p-8 text-center text-white/40 italic font-serif">
                Historical Trading Floor (Archival)
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 aspect-video bg-[#111] border border-primary/10 flex items-center justify-center p-8 text-center text-white/40 italic font-serif">
                First Mine Acquisition
              </div>
              <div className="order-1 md:order-2">
                <span className="text-primary font-serif text-4xl mb-4 block italic">2003</span>
                <h3 className="font-serif text-3xl mb-4 text-white">Vertical Integration</h3>
                <p className="text-white/60 leading-relaxed font-light">
                  To ensure absolute control over ethical standards and supply continuity, Edward Diamonds acquired its first major mining operation in South Africa, securing direct access to the world's finest rough diamonds.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-primary font-serif text-4xl mb-4 block italic">2015</span>
                <h3 className="font-serif text-3xl mb-4 text-white">Global Expansion</h3>
                <p className="text-white/60 leading-relaxed font-light">
                  The corporation expanded its footprint to 48 countries, opening flagship trading floors and bespoke jewelry ateliers in New York, Dubai, Hong Kong, and London.
                </p>
              </div>
              <div className="aspect-video bg-[#111] border border-primary/10 flex items-center justify-center p-8 text-center text-white/40 italic font-serif">
                Global Network Map
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#111] border-t border-primary/10">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="font-serif text-4xl text-white mb-16">Our Core Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-serif text-2xl text-primary mb-4">Excellence</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                We accept only the top 1% of gem-quality diamonds. Our standards eclipse industry norms.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-2xl text-primary mb-4">Integrity</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Absolute transparency in sourcing. We trace every major stone from the earth to the final polish.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-2xl text-primary mb-4">Innovation</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Merging centuries-old cutting traditions with state-of-the-art laser mapping technology.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
