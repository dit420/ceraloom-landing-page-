"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle blur after scrolling past a small threshold
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-item').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="bg-black text-white py-2 overflow-hidden relative z-[110] border-b border-white/10">
        <div className="flex whitespace-nowrap animate-marquee will-change-transform pause-on-hover hover:cursor-default w-full">
          <div className="flex gap-12 sm:gap-20 items-center px-4 font-headline uppercase tracking-[0.3em] text-[10px] shrink-0 min-w-full justify-around">
            <span>Free shipping on all domestic orders</span>
            <span>Free shipping on all domestic orders</span>
            <span>Free shipping on all domestic orders</span>
            <span>Free shipping on all domestic orders</span>
          </div>
          <div aria-hidden="true" className="flex gap-12 sm:gap-20 items-center px-4 font-headline uppercase tracking-[0.3em] text-[10px] shrink-0 min-w-full justify-around">
            <span>Free shipping on all domestic orders</span>
            <span>Free shipping on all domestic orders</span>
            <span>Free shipping on all domestic orders</span>
            <span>Free shipping on all domestic orders</span>
          </div>
        </div>
      </div>

      {/* Editorial TopNavBar */}
      <nav className={`fixed w-full z-[100] transition-all duration-500 bg-transparent hover:bg-white/90 group top-[28px] ${isScrolled ? "" : ""}`}>
        <div className="flex justify-between items-center px-8 md:px-16 py-8 w-full">
          <div className="text-3xl font-headline italic tracking-tighter group-hover:text-on-surface transition-colors text-on-surface">Ceraloom</div>
          <div className="hidden lg:flex items-center gap-4 font-label font-bold uppercase tracking-[0.1em] text-[10px]">
            <div className="flex items-center gap-3">
              <a className="px-5 py-2 bg-white border border-on-surface/20 rounded-full text-on-surface hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm" href="#">Collections</a>
              <a className="px-5 py-2 bg-white border border-on-surface/20 rounded-full text-on-surface hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm" href="#">Mugs</a>
              <a className="px-5 py-2 bg-white border border-on-surface/20 rounded-full text-on-surface hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm" href="#">Vases</a>
              <a className="px-5 py-2 bg-white border border-on-surface/20 rounded-full text-on-surface hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm" href="#">Utensils</a>
              <a className="px-5 py-2 bg-white border border-on-surface/20 rounded-full text-on-surface hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm" href="#">About</a>
            </div>
          </div>
          <div className="flex items-center gap-8 group-hover:text-on-surface transition-colors text-on-surface">
            <button className="hover:scale-110 transition-transform"><span className="material-symbols-outlined">shopping_bag</span></button>
            <button className="hover:scale-110 transition-transform"><span className="material-symbols-outlined">person</span></button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero: Editorial Full Bleed */}
        <section className="section-full flex items-center justify-center">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              src="/images/hero.png"
              alt="Handmade ceramic detail"
              fill
              className="object-cover scale-105 animate-subtle-zoom"
            />
            <div className="absolute inset-0 bg-white/10"></div>
          </div>
          <div className="relative z-10 text-center w-full flex flex-col items-center">
            <div className="w-full overflow-hidden mb-12">
              <div className="flex whitespace-nowrap animate-marquee-reverse will-change-transform pause-on-hover hover:cursor-default">
                <h1 className="flex-shrink-0 min-w-full flex justify-around items-center font-pacifico text-7xl md:text-[8vw] text-white leading-none tracking-normal pr-16 gap-16">
                  <span>Ceraloom</span>
                  <span>Ceraloom</span>
                  <span>Ceraloom</span>
                  <span>Ceraloom</span>
                </h1>
                <h1 aria-hidden="true" className="flex-shrink-0 min-w-full flex justify-around items-center font-pacifico text-7xl md:text-[8vw] text-white leading-none tracking-normal pr-16 gap-16">
                  <span>Ceraloom</span>
                  <span>Ceraloom</span>
                  <span>Ceraloom</span>
                  <span>Ceraloom</span>
                </h1>
              </div>
            </div>
            <div className="inline-block p-4 rounded-full bg-white/10  border border-white/20">
              <button className="px-12 py-5 bg-white text-on-surface font-label uppercase tracking-widest text-xs font-bold hover:bg-primary hover:text-white transition-all duration-500 rounded-full">
                Explore the Edition
              </button>
            </div>
          </div>
          <div className="absolute bottom-12 left-12 md:left-24 text-on-surface/60 font-label text-[10px] uppercase tracking-[0.4em] flex items-center gap-6">
            <span>Vol. 01</span>
            <div className="w-24 h-px bg-on-surface/20"></div>
            <span>Earth &amp; Water</span>
          </div>
        </section>

        {/* Infinite Scrolling Ticker (Marquee) */}
        <section className="relative h-24 bg-surface flex items-center overflow-hidden border-y border-outline-variant/20">
          <div className="animate-marquee will-change-transform pause-on-hover hover:cursor-default whitespace-nowrap flex items-center w-full">
            {/* First Set */}
            <div className="flex flex-shrink-0 min-w-full justify-around items-center px-10 md:px-16 gap-12 font-headline italic text-lg md:text-xl text-on-surface/40">
              <span>Architectural Digest</span>
              <span>Wallpaper*</span>
              <span>Kinfolk</span>
              <span>Elle Decor</span>
              <span>Milk Decoration</span>
            </div>
            {/* Duplicate Set for Seamless Loop */}
            <div aria-hidden="true" className="flex flex-shrink-0 min-w-full justify-around items-center px-10 md:px-16 gap-12 font-headline italic text-lg md:text-xl text-on-surface/40">
              <span>Architectural Digest</span>
              <span>Wallpaper*</span>
              <span>Kinfolk</span>
              <span>Elle Decor</span>
              <span>Milk Decoration</span>
            </div>
          </div>
        </section>

        {/* The Curated Edit: Product Section */}
        <section className="py-32 bg-surface-container-low px-8 md:px-16">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center mb-24 reveal-item">
              <p className="font-label text-primary uppercase tracking-[0.5em] text-[10px] mb-4">Seasonal Selects</p>
              <h2 className="font-headline text-4xl md:text-5xl text-on-surface italic">The Curated Edit</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Product Card 1 */}
              <div className="group relative reveal-item" style={{transitionDelay: '100ms'}}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-surface-dim mb-6 cursor-pointer">
                  <Image
                    src="/images/mug.png"
                    alt="Fungi Friends Mug"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10  opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <button className="bg-white text-on-surface px-8 py-4 rounded-full font-label uppercase tracking-widest text-[10px] font-bold hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500 shadow-lg">
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-headline text-xl text-on-surface mb-1">Fungi Friends Mug</h3>
                    <p className="font-label text-[10px] uppercase tracking-widest text-secondary">Collection No. 12</p>
                  </div>
                  <span className="font-body text-lg text-primary">$48.00</span>
                </div>
              </div>
              {/* Product Card 2 */}
              <div className="group relative reveal-item" style={{transitionDelay: '300ms'}}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-surface-dim mb-6 cursor-pointer">
                  <Image
                    src="/images/vases.png"
                    alt="Twin Soul Vases"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10  opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <button className="bg-white text-on-surface px-8 py-4 rounded-full font-label uppercase tracking-widest text-[10px] font-bold hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500 shadow-lg">
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-headline text-xl text-on-surface mb-1">Twin Soul Vases</h3>
                    <p className="font-label text-[10px] uppercase tracking-widest text-secondary">Artisan Series</p>
                  </div>
                  <span className="font-body text-lg text-primary">$185.00</span>
                </div>
              </div>
              {/* Product Card 3 */}
              <div className="group relative reveal-item" style={{transitionDelay: '500ms'}}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-surface-dim mb-6 cursor-pointer">
                  <Image
                    src="/images/utensils.png"
                    alt="Hand-carved Utensils"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10  opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <button className="bg-white text-on-surface px-8 py-4 rounded-full font-label uppercase tracking-widest text-[10px] font-bold hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500 shadow-lg">
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-headline text-xl text-on-surface mb-1">Coastal Stirring Spoon</h3>
                    <p className="font-label text-[10px] uppercase tracking-widest text-secondary">Natural Finish</p>
                  </div>
                  <span className="font-body text-lg text-primary">$34.00</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category 1: Mugs (Editorial Overlay) */}
        <section className="section-full flex items-center justify-start">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/mug.png"
              alt="Artisan ceramic mugs"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 px-8 md:px-24 max-w-4xl reveal-item">
            <p className="font-label text-white/70 uppercase tracking-[0.5em] text-[10px] mb-6">Object Selection</p>
            <h2 className="font-headline text-5xl md:text-7xl text-white italic mb-8">Earthen Mornings.</h2>
            <p className="text-white/80 text-lg md:text-xl max-w-md leading-relaxed mb-10 font-light">
              Tactile vessels for the first light. Hand-carved surfaces that speak to the fingers as much as the eyes.
            </p>
            <div className="inline-block p-4 rounded-full bg-white/10  border border-white/20">
              <a className="inline-block text-white font-label uppercase tracking-widest text-xs border-b border-white/40 pb-2 hover:border-white transition-all" href="#">Shop Mugs &amp; Cups</a>
            </div>
          </div>
        </section>

        {/* Category 2: Vases */}
        <section className="section-full flex items-center justify-end">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/vases.png"
              alt="Sculptural vases"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 px-8 md:px-24 text-right reveal-item">
            <p className="font-label text-white/70 uppercase tracking-[0.5em] text-[10px] mb-6">Curated Form</p>
            <h2 className="font-headline text-5xl md:text-7xl text-white italic mb-8">The Solitude Series.</h2>
            <p className="text-white/80 text-lg md:text-xl max-w-md ml-auto leading-relaxed mb-10 font-light">
              A study in negative space and raw minerals. Pieces that command the silence of a room.
            </p>
            <div className="inline-block p-4 rounded-full bg-white/10  border border-white/20">
              <a className="inline-block text-white font-label uppercase tracking-widest text-xs border-b border-white/40 pb-2 hover:border-white transition-all" href="#">View All Vases</a>
            </div>
          </div>
        </section>

        {/* Category 3: Utensils */}
        <section className="section-full flex items-center justify-center">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/utensils.png"
              alt="Hand-carved utensils"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          <div className="relative z-10 text-center px-6 max-w-3xl reveal-item">
            <p className="font-label text-white/70 uppercase tracking-[0.5em] text-[10px] mb-6">Living Heritage</p>
            <h2 className="font-headline text-5xl md:text-7xl text-white italic mb-8">Heirloom Tools.</h2>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-12 font-light">
              Instruments for the slow table. Each piece bears the unique signature of the artisan's touch.
            </p>
            <div className="inline-block p-4 rounded-full bg-white/10  border border-white/20">
              <button className="bg-white text-on-surface px-10 py-4 rounded-full font-label uppercase tracking-widest text-[10px] font-bold hover:bg-primary hover:text-white transition-all shadow-md">Explore Utensils</button>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-40 bg-surface-container-highest px-8 md:px-24 flex flex-col items-center justify-center text-center">
          <div className="max-w-4xl reveal-item">
            <span className="material-symbols-outlined text-primary text-4xl mb-12 opacity-50">format_quote</span>
            <blockquote className="font-headline text-3xl md:text-5xl text-on-surface italic leading-tight mb-16 tracking-tight">
              &quot;There is a soul in these objects that you simply cannot find in mass-produced ceramics. My morning coffee has become a ritual I cherish because of the weight and warmth.&quot;
            </blockquote>
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-px bg-outline-variant"></div>
              <cite className="not-italic font-label uppercase tracking-[0.3em] text-[10px] text-secondary">Eleanor Vance, Collector</cite>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="section-full flex items-end pb-32">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/hero.png"
              alt="Artisan studio"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b18] via-black/20 to-transparent"></div>
          </div>
          <div className="relative z-10 w-full px-8 md:px-24 flex flex-col md:flex-row items-end justify-between gap-12 reveal-item">
            <div className="max-w-xl text-white">
              <h2 className="font-headline text-5xl md:text-6xl mb-6 italic tracking-tight">Join the Circle.</h2>
              <p className="text-white/70 text-lg font-light leading-relaxed">
                Early access to limited kiln openings and stories from the coastal atelier.
              </p>
            </div>
            <form className="w-full md:w-auto flex flex-col sm:flex-row gap-0 overflow-hidden rounded-full border border-white/20 bg-white/5  p-2" onSubmit={(e) => e.preventDefault()}>
              <input className="bg-transparent border-none outline-none focus:ring-0 text-white px-8 py-5 w-full md:w-80 placeholder:text-white/40 font-label text-sm" placeholder="Your email address" type="email" />
              <button className="bg-white text-on-surface px-12 py-5 font-label uppercase tracking-widest text-[10px] font-bold hover:bg-primary hover:text-white transition-all whitespace-nowrap rounded-full">Subscribe</button>
            </form>
          </div>
        </section>
      </main>

      {/* Editorial Footer */}
      <footer className="bg-[#1e1b18] text-white py-24 px-8 md:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-20 max-w-[1920px] mx-auto">
          <div className="space-y-12 max-w-md">
            <div className="font-headline text-4xl italic">Ceraloom</div>
            <p className="font-body text-sm leading-relaxed text-white/50 font-light">
              Crafting timeless vessels that celebrate the harmony between earth and home. Hand-finished with intention in our seaside workshop.
            </p>
            <div className="flex gap-10 text-white/40">
              <span className="material-symbols-outlined cursor-pointer hover:text-white transition-colors">public</span>
              <span className="material-symbols-outlined cursor-pointer hover:text-white transition-colors">mail</span>
              <span className="material-symbols-outlined cursor-pointer hover:text-white transition-colors">share</span>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-16 lg:gap-24 font-label uppercase tracking-[0.2em] text-[10px]">
            <div className="flex flex-col gap-6">
              <h5 className="text-white/30">Shop</h5>
              <a className="hover:text-primary transition-colors" href="#">Collections</a>
              <a className="hover:text-primary transition-colors" href="#">Mugs</a>
              <a className="hover:text-primary transition-colors" href="#">Vases</a>
            </div>
            <div className="flex flex-col gap-6">
              <h5 className="text-white/30">Atelier</h5>
              <a className="hover:text-primary transition-colors" href="#">Our Story</a>
              <a className="hover:text-primary transition-colors" href="#">Process</a>
              <a className="hover:text-primary transition-colors" href="#">Philosophy</a>
            </div>
            <div className="flex flex-col gap-6">
              <h5 className="text-white/30">Service</h5>
              <a className="hover:text-primary transition-colors" href="#">Shipping</a>
              <a className="hover:text-primary transition-colors" href="#">Returns</a>
              <a className="hover:text-primary transition-colors" href="#">Care</a>
            </div>
            <div className="flex flex-col gap-6">
              <h5 className="text-white/30">Liaison</h5>
              <a className="hover:text-primary transition-colors" href="#">Press</a>
              <a className="hover:text-primary transition-colors" href="#">Contact</a>
              <a className="hover:text-primary transition-colors" href="#">Wholesale</a>
            </div>
          </div>
        </div>
        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-label uppercase tracking-widest text-white/30">
          <p>© 2024 Ceraloom Artisanal Ceramics.</p>
          <div className="flex gap-12">
            <a className="hover:text-white transition-colors" href="#">Privacy</a>
            <a className="hover:text-white transition-colors" href="#">Terms</a>
          </div>
        </div>
      </footer>
    </>
  );
}
