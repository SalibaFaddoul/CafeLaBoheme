"use client";

import React from 'react';
import { MapPin, Coffee, Music, Star, ArrowRight, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';

const CafeHome = () => {
    return (
        <div className="min-h-screen bg-[#0F0A0A] text-[#E6DCCD] selection:bg-[#C89F65] selection:text-[#0F0A0A] overflow-x-hidden">

            {/* Global Grain Texture (Reduced for clearer look) */}
            <div className="fixed inset-0 grain-overlay z-50 pointer-events-none mix-blend-soft-light opacity-50"></div>

            <Navigation />

            {/* --- Hero Section --- */}
            <header className="relative min-h-[90vh] flex items-center justify-center px-6 pt-32 pb-24 border-b border-[#2A2422]">
                {/* Background Atmosphere */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#C89F65] opacity-[0.03] blur-[150px] rounded-full"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#9C5C5E] opacity-[0.03] blur-[150px] rounded-full"></div>
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto text-center flex flex-col items-center">
                    <div className="mb-12 opacity-80 animate-fade-in-up">
                        <span className="text-xs font-sans uppercase tracking-[0.4em] text-[#C89F65] font-bold">The San Francisco Mission</span>
                    </div>

                    {/* Single Line Title */}
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-[#E6DCCD] tracking-tight leading-none mb-12 mix-blend-screen animate-fade-in-up delay-100 whitespace-nowrap">
                        Café <span className="italic text-[#C89F65]">La Bohème</span>
                    </h1>

                    <p className="text-lg md:text-xl text-[#908680] max-w-3xl mx-auto font-sans leading-relaxed mb-16 font-light animate-fade-in-up delay-200">
                        A gathering place for politically engaged artists in the Mission District for decades.
                        Embodying a culinary philosophy that celebrates local ingredients and community.
                        <br />
                        <span className="text-[#C89F65] mt-6 block text-sm uppercase tracking-widest font-bold">Since 1973</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center font-sans uppercase tracking-[0.2em] text-xs font-bold animate-fade-in-up delay-300">
                        <Link href="/menu" className="group relative px-10 py-5 overflow-hidden rounded-full border border-[#C89F65] text-[#C89F65] hover:text-[#0F0A0A] transition-colors duration-500">
                            <span className="relative z-10 flex items-center gap-3">Browse Menu</span>
                            <div className="absolute inset-0 bg-[#C89F65] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        </Link>
                        <a href="#visit" className="flex items-center gap-3 text-[#908680] hover:text-[#E6DCCD] transition-colors duration-300">
                            <MapPin size={16} />
                            Visit Us
                        </a>
                    </div>
                </div>
            </header>

            {/* --- Coffee & Tea Section (New) --- */}
            <section className="py-32 px-6 md:px-12 bg-[#0F0A0A] border-b border-[#2A2422] relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                        {/* Title & Large Feature (Turkish Coffee / Espresso) */}
                        <div className="lg:col-span-7 space-y-12">
                            <div className="space-y-6">
                                <span className="text-[#C89F65] text-xs uppercase tracking-[0.4em] font-bold block">Sip & Savor</span>
                                <h2 className="text-5xl md:text-7xl font-serif text-[#E6DCCD] leading-tight">
                                    The Art of <br />
                                    <span className="text-[#C89F65] italic">the Brew</span>
                                </h2>
                                <p className="text-[#908680] text-lg font-sans max-w-xl leading-relaxed">
                                    Experience the heartbeat of our heritage. From the intense, spiced ritual of traditional Turkish Coffee to the modern precision of our roasted espresso.
                                </p>
                            </div>

                            <div className="relative group">
                                {/* Ambient Glow behind the container */}
                                <div className="absolute -inset-4 bg-[#C89F65] opacity-0 group-hover:opacity-10 blur-3xl rounded-full transition-opacity duration-1000"></div>

                                <div className="relative overflow-hidden rounded-2xl border border-[#2A2422] aspect-[16/9]">
                                    <img
                                        src="/Espresso.png"
                                        alt="Traditional Turkish Coffee and Espresso"
                                        className="w-full h-full object-cover transition-all duration-1000 scale-100 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-[#0F0A0A] to-transparent w-full">
                                        <h4 className="text-[#E6DCCD] font-serif text-2xl">Turkish Coffee & Espresso</h4>
                                        <p className="text-[#C89F65] text-xs uppercase tracking-widest mt-2">Strong · Spiced · Sacred</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Side Stack (Tea, Latte, & Smoothie) */}
                        <div className="lg:col-span-5 space-y-12">

                            {/* Tea Feature (Full Width) */}
                            <div className="space-y-6 group relative">
                                {/* Ambient Glow */}
                                <div className="absolute -inset-4 bg-[#C89F65] opacity-0 group-hover:opacity-10 blur-3xl rounded-full transition-opacity duration-1000"></div>

                                <div className="relative aspect-[4/3] border border-[#2A2422] overflow-hidden rounded-2xl">
                                    <img
                                        src="/Tea.png"
                                        alt="Traditional Aromatic Tea"
                                        className="w-full h-full object-cover transition-transform duration-1000 scale-100 group-hover:scale-105"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-[#E6DCCD] font-serif text-2xl italic">Aromatic Teas</h4>
                                    <p className="text-[#908680] text-sm font-sans leading-relaxed">
                                        Steeped in tradition, our teas whisper of the old country.
                                    </p>
                                </div>
                            </div>

                            {/* Sub-grid for Latte and Smoothie */}
                            <div className="grid grid-cols-2 gap-8">
                                {/* Latte Feature */}
                                <div className="space-y-4 group relative">
                                    {/* Ambient Glow */}
                                    <div className="absolute -inset-4 bg-[#C89F65] opacity-0 group-hover:opacity-10 blur-3xl rounded-full transition-opacity duration-1000"></div>

                                    <div className="relative aspect-square border border-[#2A2422] overflow-hidden rounded-2xl">
                                        <img
                                            src="/Carmal Latte.png"
                                            alt="Velvety Caramel Latte"
                                            className="w-full h-full object-cover transition-transform duration-1000 scale-100 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-[#E6DCCD] font-serif text-xl italic">Sweet Twist</h4>
                                        <p className="text-[#908680] text-xs font-sans leading-relaxed">
                                            Caramel Latte.
                                        </p>
                                    </div>
                                </div>

                                {/* Kale Smoothie Feature */}
                                <div className="space-y-4 group relative">
                                    {/* Ambient Glow */}
                                    <div className="absolute -inset-4 bg-[#C89F65] opacity-0 group-hover:opacity-10 blur-3xl rounded-full transition-opacity duration-1000"></div>

                                    <div className="relative aspect-square border border-[#2A2422] overflow-hidden rounded-2xl">
                                        <img
                                            src="/GardenKaleSmoothie.png"
                                            alt="Fresh Garden Kale Smoothie"
                                            className="w-full h-full object-cover transition-transform duration-1000 scale-100 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-[#C89F65] font-serif text-xl italic">The Garden</h4>
                                        <p className="text-[#908680] text-xs font-sans leading-relaxed">
                                            Kale Smoothie.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* --- Hours & Location (New Section) --- */}
            <section id="visit" className="py-24 px-6 md:px-12 bg-[#120C0B] border-b border-[#2A2422]">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-4xl text-[#E6DCCD] font-serif mb-8 flex items-center justify-center md:justify-start gap-4">
                            <Clock className="text-[#C89F65]" size={32} />
                            Hours & Location
                        </h2>
                        <div className="space-y-6 font-sans text-[#908680] text-lg leading-relaxed">
                            <div className="flex flex-col gap-2">
                                <span className="text-[#C89F65] text-xs uppercase tracking-widest font-bold">Address</span>
                                <p className="text-[#E6DCCD]">3318 24th Street & Mission<br />San Francisco, CA 94110</p>
                            </div>
                            <div className="h-[1px] w-12 bg-[#2A2422] mx-auto md:mx-0"></div>
                            <div className="flex flex-col gap-2">
                                <span className="text-[#C89F65] text-xs uppercase tracking-widest font-bold">Hours</span>
                                <div className="space-y-1">
                                    <div className="flex justify-between md:justify-start gap-8">
                                        <span className="w-24">Mon - Fri</span>
                                        <span className="text-[#E6DCCD]">6:00 AM — 5:00 PM</span>
                                    </div>
                                    <div className="flex justify-between md:justify-start gap-8">
                                        <span className="w-24">Saturday</span>
                                        <span className="text-[#E6DCCD]">7:00 AM — 5:00 PM</span>
                                    </div>
                                    <div className="flex justify-between md:justify-start gap-8">
                                        <span className="w-24">Sunday</span>
                                        <span className="text-[#E6DCCD]">8:00 AM — 5:00 PM</span>
                                    </div>
                                </div>
                                <p className="text-xs text-[#9C5C5E] mt-2 italic">*Hours may vary at times and holidays.</p>
                            </div>
                        </div>
                    </div>
                    {/* Visual Map Placeholder or Authentic Image */}
                    <div className="h-[400px] w-full border border-[#2A2422] relative group overflow-hidden">
                        <iframe
                            src="https://maps.google.com/maps?q=3318+24th+Street,+San+Francisco,+CA+94110&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(1) invert(1)' }}
                            allowFullScreen
                            loading="lazy"
                            title="Cafe La Boheme Location"
                        ></iframe>
                        <div className="absolute inset-0 border-[0.5px] border-[#C89F65] m-4 opacity-20 pointer-events-none"></div>
                    </div>
                </div>
            </section>


            {/* --- Chef Recommendations --- */}
            <section className="py-40 px-6 md:px-12 bg-[#0F0A0A] relative">
                <div className="max-w-[1200px] mx-auto text-center mb-24">
                    <h2 className="text-4xl md:text-5xl text-[#E6DCCD] font-serif mb-6 leading-tight">
                        Culinary <span className="text-[#C89F65] italic">Philosophy</span>
                    </h2>
                    <p className="text-[#908680] max-w-2xl mx-auto font-sans text-lg font-light leading-relaxed">
                        With a focus on fresh salads, hearty soups, and delightful sandwiches, Café La Bohème offers a menu that reflects both comfort and creativity.
                        A beloved spot where locals start their day and friends gather for community.
                    </p>
                </div>

                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-[#2A2422] divide-y md:divide-y-0 md:divide-x divide-[#2A2422]">
                    {[
                        {
                            cat: "Signature Dessert",
                            title: "The Honey Cake",
                            desc: "A traditional house-made Palestinian cake made with semolina and sugar, soaked in aromatic syrup.",
                            price: "Signature",
                            image: "/HoneyCake.png"
                        },
                        {
                            cat: "Local Favorite",
                            title: "The Mexican Mocha",
                            desc: "A soul-warming twist on the classic. Rich chocolate and espresso spiced with cinnamon, nutmeg, and pure deliciousness.",
                            price: "Spiced",
                            image: "/mexican-mocha.png"
                        },
                        {
                            cat: "Taste of Home",
                            title: "The Mezza",
                            desc: "A generous selection of our finest appetizers. Hummus, baba ghanoush, tabouli, falafel & pita. Perfect for sharing.",
                            price: "Shareable",
                            image: "/Mezza%20Cafe%20La%20Boheme.png"
                        }
                    ].map((item, i) => (
                        <div key={i} className="p-12 md:p-16 hover:bg-[#120C0B] transition-colors duration-500 group cursor-default text-center flex flex-col items-center">
                            <span className="text-[#9C5C5E] font-bold text-xs uppercase tracking-[0.2em] block mb-8">{item.cat}</span>

                            {/* Image Slot */}
                            <div className="w-full aspect-square md:aspect-[4/3] relative mb-8 group-hover:scale-[1.02] transition-transform duration-700">
                                {/* Glow Effect */}
                                <div className="absolute -inset-4 bg-[#C89F65] opacity-0 group-hover:opacity-10 blur-3xl rounded-full transition-opacity duration-700"></div>

                                <div className="relative h-full w-full overflow-hidden border border-[#2A2422] bg-[#0F0A0A] rounded-2xl">
                                    <div className="absolute inset-0 bg-[#C89F65] opacity-5"></div>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 scale-100 group-hover:scale-105 transform"
                                    />
                                </div>
                            </div>

                            <span className="text-[#9C5C5E] font-bold text-xs uppercase tracking-[0.2em] block mb-4"></span>
                            <h3 className="text-3xl font-serif text-[#E6DCCD] mb-6">{item.title}</h3>
                            <p className="text-[#908680] font-sans leading-relaxed mb-6">{item.desc}</p>
                            <span className="font-sans text-xs font-bold text-[#C89F65] uppercase tracking-widest">{item.price}</span>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />

        </div>
    );
};

export default CafeHome;
