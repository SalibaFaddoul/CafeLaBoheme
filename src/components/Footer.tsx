import React from 'react';
import { MapPin, Phone, Instagram, Coffee, Clock } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    const ORDER_LINK = "https://www.doordash.com/store/cafe-la-boheme-san-francisco-297487/490625/";

    return (
        <footer id="visit" className="bg-[#0A0707] text-[#908680] py-24 px-6 md:px-12 relative overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_bottom,rgba(200,159,101,0.05),transparent_70%)] pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 relative z-10">

                <div className="md:col-span-2">
                    <h4 className="text-4xl text-[#E6DCCD] mb-8 font-serif tracking-tight">Café La Bohème</h4>
                    <p className="font-sans text-base leading-relaxed max-w-sm opacity-80 mb-6">
                        A cultural landmark in the Mission District since 1973.
                        Where the espresso is rich, the opera is loud, and the soul of the city comes to rest.
                    </p>
                </div>

                <div>
                    <h5 className="font-sans text-xs uppercase tracking-[0.2em] text-[#C89F65] font-bold mb-8">Visit Us</h5>
                    <ul className="space-y-6 font-sans text-sm">
                        <li className="flex items-start gap-4">
                            <MapPin size={20} className="mt-1 text-[#9C5C5E]" strokeWidth={1.5} />
                            <span>3318 24th Street & Mission<br />San Francisco, CA 94110</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <Clock size={20} className="mt-1 text-[#9C5C5E]" strokeWidth={1.5} />
                            <div>
                                <p><span className="text-[#C89F65]">M-F:</span> 6am - 5pm</p>
                                <p><span className="text-[#C89F65]">Sat:</span> 7am - 5pm</p>
                                <p><span className="text-[#C89F65]">Sun:</span> 8am - 5pm</p>
                                <p className="text-[10px] opacity-60 mt-2">*Hours may vary</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div>
                    <h5 className="font-sans text-xs uppercase tracking-[0.2em] text-[#C89F65] font-bold mb-8">Connect</h5>
                    <ul className="space-y-6 font-sans text-sm">
                        <li>
                            <a href="#" className="flex items-center gap-4 hover:text-[#C89F65] transition-colors group">
                                <Instagram size={20} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
                                <span>@cafelaboheme</span>
                            </a>
                        </li>
                        <li>
                            <a href={ORDER_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:text-[#C89F65] transition-colors group">
                                <Coffee size={20} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
                                <span>Order Online</span>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="max-w-[1400px] mx-auto mt-24 pt-10 border-t border-[#2A2422] flex flex-col md:flex-row justify-between items-center text-xs font-sans uppercase tracking-widest opacity-60">
                <p>© {new Date().getFullYear()} Café La Bohème</p>
                <p className="mt-4 md:mt-0 text-[#C89F65]">Legacy Business · Since 1973</p>
            </div>
        </footer>
    );
};

export default Footer;
