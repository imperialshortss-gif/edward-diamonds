import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-primary/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 mb-16">
          
          <div className="flex flex-col items-start">
            <Link href="/">
              <div className="flex flex-col items-start cursor-pointer group mb-6">
                <span className="font-serif text-3xl font-semibold tracking-[0.2em] text-primary group-hover:text-white transition-colors duration-500">
                  EDWARD
                </span>
                <span className="font-sans text-[0.6rem] font-light tracking-[0.4em] text-white/80 group-hover:text-primary transition-colors duration-500">
                  DIAMONDS
                </span>
              </div>
            </Link>
            <p className="text-white/50 font-serif italic text-lg max-w-xs">
              "Unearthing Nature's Rarest Treasures Since 1987"
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-primary uppercase tracking-[0.2em] text-sm mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <Link href="/about"><span className="text-white/60 hover:text-primary transition-colors cursor-pointer text-sm tracking-wide">Our Heritage</span></Link>
              <Link href="/raw-diamonds"><span className="text-white/60 hover:text-primary transition-colors cursor-pointer text-sm tracking-wide">Raw Stones</span></Link>
              <Link href="/mining"><span className="text-white/60 hover:text-primary transition-colors cursor-pointer text-sm tracking-wide">Mining Operations</span></Link>
              <Link href="/cut-diamonds"><span className="text-white/60 hover:text-primary transition-colors cursor-pointer text-sm tracking-wide">Master Cuts</span></Link>
              <Link href="/leadership"><span className="text-white/60 hover:text-primary transition-colors cursor-pointer text-sm tracking-wide">Leadership</span></Link>
              <Link href="/jewelry"><span className="text-white/60 hover:text-primary transition-colors cursor-pointer text-sm tracking-wide">High Jewelry</span></Link>
              <Link href="/global-operations"><span className="text-white/60 hover:text-primary transition-colors cursor-pointer text-sm tracking-wide">Global Presence</span></Link>
              <Link href="/contact"><span className="text-white/60 hover:text-primary transition-colors cursor-pointer text-sm tracking-wide">Private Inquiry</span></Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-primary uppercase tracking-[0.2em] text-sm mb-4">Contact Info</h4>
            <p className="text-white/60 text-sm tracking-wide leading-relaxed">
              Edward Tower, 5th Avenue<br />
              New York, NY 10022<br />
              United States
            </p>
            <p className="text-white/60 text-sm tracking-wide mt-2">
              <span className="text-white/40">T.</span> +1 (212) 555-0187<br />
              <span className="text-white/40">E.</span> inquiries@edwarddiamonds.com
            </p>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
          <p className="text-white/40 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Edward Diamonds Corporation. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-white/40 text-xs tracking-wider uppercase">
            <span>GIA Certified</span>
            <span className="w-1 h-1 rounded-full bg-primary/40"></span>
            <span>RJC Member</span>
            <span className="w-1 h-1 rounded-full bg-primary/40"></span>
            <span>Kimberley Process Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
