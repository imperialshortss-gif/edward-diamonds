import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import rawPreview from "@/assets/raw-preview.jpg";
import gal5 from "@/assets/gallery-5.jpg";
export default function RawDiamonds() {
  const products = [
    { name: "The Cullinan Variant", type: "Investment Grade", weight: "142.50 ct", img: rawPreview },
    { name: "Botswana Rough", type: "Natural Rough", weight: "84.20 ct", img: gal5 },
    { name: "Arctic White Crystal", type: "Rare Uncut", weight: "62.10 ct", img: rawPreview },
    { name: "Kimberlite Octahedron", type: "Natural Rough", weight: "45.00 ct", img: gal5 },
    { name: "Fancy Yellow Rough", type: "Rare Uncut", weight: "112.80 ct", img: rawPreview },
    { name: "Museum Grade Clear", type: "Investment Grade", weight: "210.00 ct", img: gal5 },
  ];
  return (
    <>
      <SEO
        title="Raw Diamonds | Edward Diamonds"
        description="Exclusive wholesale access to world-class rough diamonds from Edward Diamonds' global mining network, including investment-grade and rare uncut stones, all Kimberley Process certified."
      />
      <Layout>
      <section className="pt-40 pb-20 bg-[#111111] border-b border-primary/10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <span className="text-primary uppercase tracking-[0.2em] text-sm mb-4 block">Wholesale & Trade</span>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">Raw Diamonds</h1>
          <p className="text-white/60 text-lg font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            Exclusive access to world-class rough diamonds, sourced directly from our global mining network.
          </p>
        </div>
      </section>
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((prod, i) => (
              <div key={i} className="group bg-[#111] border border-white/5 hover:border-primary/50 transition-all duration-500">
                <div className="aspect-square overflow-hidden bg-black p-8">
                  <img src={prod.img} alt={prod.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-white/40 text-xs uppercase tracking-wider block mb-1">{prod.type}</span>
                      <h3 className="font-serif text-2xl text-white">{prod.name}</h3>
                    </div>
                    <span className="text-primary font-serif text-xl">{prod.weight}</span>
                  </div>
                  <Link href="/contact">
                    <button className="w-full py-4 border border-primary/30 text-primary hover:bg-primary hover:text-black transition-all duration-300 uppercase text-xs tracking-widest mt-4">
                      Request Quote
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center border-t border-white/10 pt-12">
            <p className="text-white/40 text-sm">Prices available upon verified institutional inquiry. All stones Kimberly Process certified.</p>
          </div>
        </div>
      </section>
      </Layout>
    </>
  );
}
