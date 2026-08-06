import { Layout } from "@/components/Layout";
import { Link } from "wouter";
import cutPreview from "@/assets/cut-preview.jpg";
import gal1 from "@/assets/gallery-1.jpg";

export default function CutDiamonds() {
  const products = [
    { name: "Round Brilliant", color: "D", clarity: "FL", weight: "5.20 ct", img: cutPreview },
    { name: "Emerald Cut", color: "E", clarity: "VVS1", weight: "8.50 ct", img: gal1 },
    { name: "Oval Cut", color: "D", clarity: "IF", weight: "4.15 ct", img: cutPreview },
    { name: "Pear Shape", color: "F", clarity: "VVS2", weight: "6.00 ct", img: gal1 },
    { name: "Princess Cut", color: "D", clarity: "VVS1", weight: "3.80 ct", img: cutPreview },
    { name: "Cushion Cut", color: "E", clarity: "IF", weight: "7.25 ct", img: gal1 },
  ];

  return (
    <Layout>
      <section className="pt-40 pb-20 bg-[#111111] border-b border-primary/10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <span className="text-primary uppercase tracking-[0.2em] text-sm mb-4 block">Master Craftsmanship</span>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">Polished Collection</h1>
          <p className="text-white/60 text-lg font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            Flawlessly executed cuts that maximize light return, crafted by our master artisans in Antwerp.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((prod, i) => (
              <div key={i} className="group bg-[#111] border border-white/5 hover:border-primary/50 transition-all duration-500">
                <div className="aspect-square overflow-hidden bg-black p-8 relative">
                  <div className="absolute top-4 right-4 text-[10px] text-white/40 tracking-widest uppercase border border-white/10 px-2 py-1">GIA Certified</div>
                  <img src={prod.img} alt={prod.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100 mix-blend-screen" />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl text-white mb-4">{prod.name}</h3>
                  <div className="grid grid-cols-3 gap-4 mb-8 border-t border-b border-white/5 py-4">
                    <div className="text-center">
                      <span className="block text-white/40 text-[10px] uppercase mb-1">Color</span>
                      <span className="text-white font-serif">{prod.color}</span>
                    </div>
                    <div className="text-center border-l border-r border-white/5">
                      <span className="block text-white/40 text-[10px] uppercase mb-1">Clarity</span>
                      <span className="text-white font-serif">{prod.clarity}</span>
                    </div>
                    <div className="text-center">
                      <span className="block text-white/40 text-[10px] uppercase mb-1">Carat</span>
                      <span className="text-white font-serif">{prod.weight}</span>
                    </div>
                  </div>
                  <Link href="/contact">
                    <button className="w-full py-4 border border-primary/30 text-primary hover:bg-primary hover:text-black transition-all duration-300 uppercase text-xs tracking-widest">
                      Inquire
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
