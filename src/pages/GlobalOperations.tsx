import { Layout } from "@/components/Layout";
import { Globe2, MapPin } from "lucide-react";

export default function GlobalOperations() {
  const regions = [
    {
      name: "North America",
      offices: [
        { city: "New York", desc: "Global Headquarters & Bespoke Atelier" },
        { city: "Toronto", desc: "North American Mining Operations Center" }
      ]
    },
    {
      name: "Europe",
      offices: [
        { city: "London", desc: "European Trading Hub" },
        { city: "Antwerp", desc: "Master Cutting Facility" }
      ]
    },
    {
      name: "Middle East & Asia",
      offices: [
        { city: "Dubai", desc: "Regional Wholesale Center" },
        { city: "Hong Kong", desc: "Asia Pacific High Jewelry Boutique" },
        { city: "Mumbai", desc: "Secondary Processing Facility" }
      ]
    },
    {
      name: "Africa",
      offices: [
        { city: "Johannesburg", desc: "African Mining Headquarters" },
        { city: "Gaborone", desc: "Sorting & Valuation Center" }
      ]
    }
  ];

  return (
    <Layout>
      <section className="pt-40 pb-20 bg-[#111111] border-b border-primary/10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <Globe2 className="w-12 h-12 text-primary mx-auto mb-8 opacity-50" />
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">Global Presence</h1>
          <p className="text-white/60 text-lg font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            Operating in 48 countries across 6 continents, ensuring seamless delivery and absolute control over our supply chain.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {regions.map((region, i) => (
              <div key={i} className="bg-[#111] p-10 border border-white/5">
                <h2 className="font-serif text-3xl text-primary mb-8 border-b border-primary/20 pb-4">{region.name}</h2>
                <div className="space-y-8">
                  {region.offices.map((office, j) => (
                    <div key={j} className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-white/40 shrink-0 mt-1" />
                      <div>
                        <h4 className="font-serif text-xl text-white mb-2">{office.city}</h4>
                        <p className="text-white/50 text-sm">{office.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
