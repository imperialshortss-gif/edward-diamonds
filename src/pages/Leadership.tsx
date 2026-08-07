import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import chairmanImg from "@/assets/chairman.jpg";
import ceoImg from "@/assets/ceo.jpg";
import vpImg from "@/assets/vp.jpg";

export default function Leadership() {
  const team = [
    { name: "Sarah Mitchell", title: "Chief Executive Officer", img: ceoImg },
    { name: "David Chen", title: "VP International Trading", img: vpImg },
    { name: "Elena Vasquez", title: "Chief Gemologist", img: null },
    { name: "James Harrington", title: "Head of Mining Operations", img: null },
  ];

  return (
    <Layout>
      <section className="pt-40 pb-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">Leadership</h1>
          <p className="text-white/60 text-lg font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            The stewards of our legacy. A team defined by decades of industry experience and uncompromising standards.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#111] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <img src={chairmanImg} alt="Andrew Conwell" className="w-full h-auto object-cover grayscale-[20%]" />
            <div>
              <span className="text-primary uppercase tracking-[0.2em] text-sm mb-4 block">Founder</span>
              <h2 className="font-serif text-4xl text-white mb-2">Andrew Conwell</h2>
              <h3 className="font-sans text-sm tracking-[0.1em] text-white/50 mb-8 pb-8 border-b border-primary/20">Chairman & Owner, Edward Diamonds</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Andrew Conwell established Edward Diamonds with a simple philosophy: never compromise. Under his guidance, the company has grown from a specialized Antwerp trading desk into a global powerhouse, all without taking outside capital that might dilute the brand's uncompromising standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl text-white mb-16 text-center">Executive Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((exec, i) => (
              <div key={i} className="group">
                <div className="aspect-[3/4] bg-[#111] border border-white/5 mb-6 overflow-hidden flex items-center justify-center">
                  {exec.img ? (
                    <img src={exec.img} alt={exec.name} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500" />
                  ) : (
                    <span className="font-serif italic text-white/20">Portrait Unavailable</span>
                  )}
                </div>
                <h3 className="font-serif text-2xl text-white mb-1">{exec.name}</h3>
                <span className="text-primary text-xs uppercase tracking-widest">{exec.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#111] border-t border-primary/20">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="font-serif text-3xl text-white mb-12">Board of Advisors</h2>
          <div className="grid grid-cols-2 gap-8 text-white/60 font-serif text-xl">
            <p>Sir Richard Kensington</p>
            <p>Dr. Amelia Vance</p>
            <p>Marcus Sterling</p>
            <p>Jonathan Rhys-Davies</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
