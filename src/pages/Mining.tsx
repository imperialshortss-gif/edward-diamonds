import { Layout } from "@/components/Layout";
import mineAerialImg from "@/assets/mine-aerial.jpg";
import tl1 from "@/assets/timeline-1.jpg";

export default function Mining() {
  return (
    <Layout>
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src={mineAerialImg} alt="Diamond Mining" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center pt-20">
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">Mining Operations</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg font-light tracking-wide">
            The foundation of our empire. Responsible, technologically advanced, and ethically absolute.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <img src={tl1} alt="Underground Mining" className="w-full h-[500px] object-cover border border-primary/20" />
            <div>
              <span className="text-primary uppercase tracking-[0.2em] text-sm mb-4 block">The Source</span>
              <h2 className="font-serif text-4xl text-white mb-6">Extraction with Precision</h2>
              <p className="text-white/60 font-light leading-relaxed mb-6">
                Our active operations in South Africa, Botswana, and Canada represent some of the most technologically advanced mining sites in the world. We utilize micro-seismic monitoring and automated sorting facilities to ensure maximum yield with minimal environmental impact.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-white/80">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Deep underground pipe mining
                </li>
                <li className="flex items-center gap-4 text-white/80">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Alluvial surface operations
                </li>
                <li className="flex items-center gap-4 text-white/80">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  X-Ray transmission sorting technology
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { region: "Southern Africa", desc: "Our oldest and most prolific sites, yielding large, high-clarity rough stones." },
              { region: "Canada", desc: "Pristine operations producing exceptional white diamonds under strict environmental regulations." },
              { region: "Australia", desc: "Specialized extraction facilities focusing on rare fancy colored diamonds." },
            ].map((loc, i) => (
              <div key={i} className="p-10 bg-[#111] border border-white/5 hover:border-primary/30 transition-colors duration-500">
                <h4 className="font-serif text-2xl text-white mb-4">{loc.region}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{loc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
