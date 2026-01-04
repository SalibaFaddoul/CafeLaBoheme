import React from 'react';
import { MapPin, Instagram, Coffee, Clock } from 'lucide-react';

const Footer = () => {
    const ORDER_LINK = "https://www.doordash.com/store/cafe-la-boheme-san-francisco-297487/490625/";

    return (
        <footer id="visit" className="bg-[#0A0707] text-[#D4C5B9]/60 py-32 px-6 md:px-12 relative overflow-hidden border-t border-[#B28F5A]/10">
            {/* Candlelight Glow at the bottom */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_bottom,rgba(178,143,90,0.06),transparent_70%)] pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 relative z-10">

                <div className="md:col-span-2 space-y-8">
                    <h4 className="text-5xl text-[#D4C5B9] font-serif italic tracking-tight translate-x-[-2px]">Café La Bohème</h4>
                    <p className="font-serif italic text-lg leading-relaxed max-w-sm opacity-60">
                        A historical sanctuary for the artists and revolutionaries of the Mission District.
                        Where the espresso is rich, the opera is loud, and the soul of San Francisco lives on.
                    </p>
                </div>

                <div className="space-y-10">
                    <h5 className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#B28F5A] font-bold">The Mission</h5>
                    <ul className="space-y-8 font-serif italic text-base">
                        <li className="flex items-start gap-4">
                            <MapPin size={18} className="mt-1 text-[#B28F5A]/40" strokeWidth={1} />
                            <span>3318 24th Street<br />San Francisco, CA 94110</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <Clock size={18} className="mt-1 text-[#B28F5A]/40" strokeWidth={1} />
                            <div className="space-y-2 text-sm not-italic font-sans font-bold uppercase tracking-widest">
                                <p><span className="text-[#B28F5A]/60">M - F:</span> 06:00 — 17:00</p>
                                <p><span className="text-[#B28F5A]/60">SAT:</span> 07:00 — 17:00</p>
                                <p><span className="text-[#B28F5A]/60">SUN:</span> 08:00 — 17:00</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="space-y-10">
                    <h5 className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#B28F5A] font-bold">The Daily Roast</h5>
                    <ul className="space-y-6 font-serif italic text-base">
                        <li>
                            <a href="#" className="flex items-center gap-4 hover:text-[#B28F5A] transition-colors group">
                                <Instagram size={18} strokeWidth={1} className="text-[#B28F5A]/40 group-hover:text-[#B28F5A] transition-colors" />
                                <span>The Visual Archive</span>
                            </a>
                        </li>
                        <li>
                            <a href={ORDER_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:text-[#B28F5A] transition-colors group border-b border-[#B28F5A]/10 pb-1">
                                <Coffee size={18} strokeWidth={1} className="text-[#B28F5A]/40 group-hover:text-[#B28F5A] transition-colors" />
                                <span>Order for Delivery</span>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="max-w-[1400px] mx-auto mt-32 pt-12 border-t border-[#B28F5A]/5 flex flex-col md:flex-row justify-between items-center text-[9px] font-sans uppercase tracking-[0.5em] font-bold opacity-40">
                <p>&copy; {new Date().getFullYear()} Café La Bohème</p>
                <div className="flex gap-8 mt-6 md:mt-0 italic">
                    <span className="text-[#B28F5A]">Established 1973</span>
                    <span>San Francisco Heritage</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
