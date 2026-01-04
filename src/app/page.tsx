"use client";

import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';

const CafeHome = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navigation />

            {/* --- Hero Section --- */}
            <header className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-32">
                {/* Warm Candlelight Atmosphere */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-1/3 left-1/4 w-[800px] h-[800px] bg-accent opacity-[0.03] blur-[200px] rounded-full"></div>
                    <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-secondary opacity-[0.04] blur-[150px] rounded-full"></div>
                </div>

                <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center">

                    {/* Ornamental Top */}
                    <div className="mb-16 animate-fade-in">
                        <div className="text-accent/30 text-3xl mb-6">☙ ✦ ❧</div>
                        <span className="text-sm tracking-[0.6em] text-accent/60 uppercase">The Mission District · San Francisco</span>
                    </div>

                    {/* Main Title - Old Print Style */}
                    <div className="relative mb-16 animate-fade-in">
                        <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif text-foreground tracking-tight leading-[0.85]">
                            Café
                        </h1>
                        <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif italic text-accent tracking-tight leading-[0.85] -mt-4">
                            La Bohème
                        </h1>
                    </div>

                    {/* Decorative Line */}
                    <div className="flex items-center gap-6 mb-16 animate-fade-in">
                        <div className="h-px w-24 bg-accent/20"></div>
                        <span className="text-accent/40 text-xl">✦</span>
                        <div className="h-px w-24 bg-accent/20"></div>
                    </div>

                    <p className="text-xl md:text-2xl text-foreground/50 max-w-2xl mx-auto font-serif italic leading-relaxed mb-20 animate-fade-in">
                        A gathering place for artists, poets, and dreamers in the heart of San Francisco since 1973.
                        Where the aroma of fresh-roasted coffee mingles with revolutionary ideas.
                    </p>

                    {/* Established Badge */}
                    <div className="vintage-border px-12 py-6 animate-fade-in">
                        <span className="text-[10px] tracking-[0.5em] text-accent uppercase block mb-2">Established</span>
                        <span className="text-4xl font-serif text-foreground">1973</span>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-10 justify-center items-center mt-20 animate-fade-in">
                        <Link href="/menu" className="group relative px-12 py-5 border-2 border-accent/30 text-accent hover:bg-accent hover:text-background transition-all duration-700">
                            <span className="text-xs tracking-[0.3em] uppercase">View the Menu</span>
                        </Link>
                        <a href="#visit" className="flex items-center gap-4 text-foreground/40 hover:text-accent transition-colors duration-500 text-sm tracking-widest uppercase">
                            <MapPin size={14} />
                            Find Us
                        </a>
                    </div>
                </div>
            </header>

            {/* --- Coffee & Tea Section --- */}
            <section className="py-40 px-6 md:px-12 bg-paper relative overflow-hidden border-y-2 border-accent/10">
                <div className="max-w-[1300px] mx-auto">

                    {/* Section Header */}
                    <div className="text-center mb-32 animate-fade-in">
                        <div className="text-accent/30 text-2xl mb-8">❧</div>
                        <h2 className="text-5xl md:text-7xl font-serif text-foreground leading-tight mb-6">
                            The Art of the Brew
                        </h2>
                        <p className="text-foreground/40 text-xl font-serif italic max-w-xl mx-auto">
                            From the ancient spiced rituals of Turkish coffee to the precision of our hand-roasted espresso.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                        {/* Large Feature */}
                        <div className="space-y-10">
                            <div className="vintage-border p-3">
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img
                                        src="/Espresso.png"
                                        alt="Turkish Coffee & Espresso"
                                        className="w-full h-full object-cover vintage-photo"
                                    />
                                </div>
                            </div>
                            <div className="text-center px-8">
                                <h3 className="text-3xl font-serif italic text-foreground mb-4">The Ritual</h3>
                                <p className="text-foreground/40 font-serif italic">Turkish Coffee & Hand-Roasted Espresso</p>
                            </div>
                        </div>

                        {/* Side Grid */}
                        <div className="grid grid-cols-2 gap-10">
                            {/* Tea */}
                            <div className="col-span-2 space-y-8">
                                <div className="vintage-border p-2">
                                    <div className="aspect-[21/9] overflow-hidden">
                                        <img
                                            src="/Tea.png"
                                            alt="Aromatic Teas"
                                            className="w-full h-full object-cover vintage-photo"
                                        />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h4 className="text-2xl font-serif italic text-foreground">Steeped in Silence</h4>
                                    <p className="text-foreground/40 text-sm font-serif italic mt-2">Traditional aromatic infusions</p>
                                </div>
                            </div>

                            {/* Latte */}
                            <div className="space-y-6">
                                <div className="vintage-border p-2">
                                    <div className="aspect-square overflow-hidden">
                                        <img
                                            src="/Carmal Latte.png"
                                            alt="Caramel Latte"
                                            className="w-full h-full object-cover vintage-photo"
                                        />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h4 className="text-xl font-serif italic text-foreground">Sweet Twist</h4>
                                    <p className="text-foreground/40 text-xs uppercase tracking-widest mt-1">Caramel Latte</p>
                                </div>
                            </div>

                            {/* Smoothie */}
                            <div className="space-y-6">
                                <div className="vintage-border p-2">
                                    <div className="aspect-square overflow-hidden">
                                        <img
                                            src="/GardenKaleSmoothie.png"
                                            alt="Kale Smoothie"
                                            className="w-full h-full object-cover vintage-photo"
                                        />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h4 className="text-xl font-serif italic text-accent">The Garden</h4>
                                    <p className="text-foreground/40 text-xs uppercase tracking-widest mt-1">Kale Smoothie</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Seasonal Sips --- */}
            <section className="py-40 px-6 md:px-12 bg-background relative overflow-hidden">
                <div className="max-w-[1300px] mx-auto">

                    {/* Section Header */}
                    <div className="text-center mb-32 animate-fade-in">
                        <div className="text-accent/30 text-2xl mb-8">✦</div>
                        <span className="text-secondary/60 text-[10px] uppercase tracking-[0.5em] block mb-6">Limited Time</span>
                        <h2 className="text-5xl md:text-7xl font-serif text-foreground leading-tight mb-6">
                            Seasonal <span className="italic text-accent">Sips</span>
                        </h2>
                        <p className="text-foreground/40 text-xl font-serif italic max-w-xl mx-auto">
                            A rotating collection of handcrafted lattes, inspired by the changing seasons and the spice markets of the world.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
                        {[
                            {
                                name: "Turmeric Latte",
                                desc: "Golden milk with warming spices and a hint of honey.",
                                image: "/Tumeric Latte.png"
                            },
                            {
                                name: "Pistachio Latte",
                                desc: "Silky espresso with house-made pistachio cream.",
                                image: "/Pistachio.png"
                            },
                            {
                                name: "Cardamom Latte",
                                desc: "Aromatic cardamom infused into velvety steamed milk.",
                                image: "/Cardamom.png"
                            },
                            {
                                name: "Lavender Latte",
                                desc: "Delicate lavender blossoms meet bold espresso.",
                                image: "/Lavender.png"
                            }
                        ].map((item, i) => (
                            <div key={i} className="group text-center">
                                <div className="vintage-border p-2 mb-8">
                                    <div className="aspect-square overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover vintage-photo group-hover:scale-105 transition-transform duration-1000"
                                        />
                                    </div>
                                </div>
                                <h4 className="text-xl md:text-2xl font-serif italic text-foreground mb-3 group-hover:text-accent transition-colors duration-500">{item.name}</h4>
                                <p className="text-foreground/40 text-sm font-serif italic px-2">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Ornament */}
                    <div className="text-center mt-24">
                        <div className="flex items-center justify-center gap-6">
                            <div className="h-px w-16 bg-accent/20"></div>
                            <span className="text-accent/30 text-lg">❧</span>
                            <div className="h-px w-16 bg-accent/20"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Hours & Location --- */}
            <section id="visit" className="py-40 px-6 md:px-12 bg-background relative">
                <div className="max-w-[1100px] mx-auto">

                    {/* Section Header */}
                    <div className="text-center mb-32 animate-fade-in">
                        <div className="text-accent/30 text-2xl mb-8">☙</div>
                        <h2 className="text-5xl md:text-7xl font-serif text-foreground leading-tight mb-6">
                            Find the <span className="italic text-accent">Bohème</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">

                        {/* Info */}
                        <div className="vintage-border p-12 space-y-12">
                            <div className="space-y-4">
                                <span className="text-accent/50 text-[10px] uppercase tracking-[0.4em]">Location</span>
                                <p className="text-2xl font-serif text-foreground leading-relaxed">
                                    3318 24th Street<br />
                                    Mission District<br />
                                    San Francisco, CA
                                </p>
                            </div>

                            <div className="h-px bg-accent/10"></div>

                            <div className="space-y-6">
                                <span className="text-accent/50 text-[10px] uppercase tracking-[0.4em] flex items-center gap-3">
                                    <Clock size={12} />
                                    Hours of Operation
                                </span>
                                <div className="space-y-3 text-lg font-serif">
                                    <div className="flex justify-between">
                                        <span className="text-foreground/50">Monday — Friday</span>
                                        <span className="text-foreground">6am — 5pm</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-foreground/50">Saturday</span>
                                        <span className="text-foreground">7am — 5pm</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-foreground/50">Sunday</span>
                                        <span className="text-foreground">8am — 5pm</span>
                                    </div>
                                </div>
                                <p className="text-xs text-secondary/60 italic">*Hours may vary on holidays</p>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="vintage-border p-3">
                            <div className="h-[450px] w-full relative overflow-hidden">
                                <iframe
                                    src="https://maps.google.com/maps?q=3318+24th+Street,+San+Francisco,+CA+94110&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, filter: 'sepia(0.5) contrast(1.1) brightness(0.85)' }}
                                    allowFullScreen
                                    loading="lazy"
                                    title="Cafe La Boheme Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Culinary Philosophy --- */}
            <section className="py-40 px-6 md:px-12 bg-paper relative border-t-2 border-accent/10">

                {/* Section Header */}
                <div className="max-w-[900px] mx-auto text-center mb-32 animate-fade-in">
                    <div className="text-accent/30 text-2xl mb-8">✦</div>
                    <h2 className="text-5xl md:text-7xl font-serif text-foreground leading-tight mb-8">
                        Culinary Philosophy
                    </h2>
                    <p className="text-foreground/40 text-xl font-serif italic max-w-2xl mx-auto">
                        Comfort, creativity, and the preservation of flavor. From the heart of the Mission to the traditions of Home.
                    </p>
                </div>

                <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
                    {[
                        {
                            cat: "Signature Dessert",
                            title: "The Honey Cake",
                            desc: "Traditional house-made Palestinian cake with semolina, soaked in aromatic syrup.",
                            image: "/HoneyCake.png"
                        },
                        {
                            cat: "Local Favorite",
                            title: "Mexican Mocha",
                            desc: "Rich chocolate and espresso spiced with cinnamon and nutmeg.",
                            image: "/mexican-mocha.png"
                        },
                        {
                            cat: "Taste of Home",
                            title: "The Mezza",
                            desc: "Hummus, baba ghanoush, tabouli, falafel & warm pita.",
                            image: "/Mezza%20Cafe%20La%20Boheme.png"
                        }
                    ].map((item, i) => (
                        <div key={i} className="group text-center">
                            <div className="vintage-border p-3 mb-10">
                                <div className="aspect-[4/5] overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover vintage-photo group-hover:scale-105 transition-transform duration-1000"
                                    />
                                </div>
                            </div>
                            <span className="text-secondary/60 text-[10px] uppercase tracking-[0.3em] block mb-4">{item.cat}</span>
                            <h3 className="text-3xl font-serif text-foreground mb-4 group-hover:text-accent transition-colors duration-500">{item.title}</h3>
                            <p className="text-foreground/40 font-serif italic px-4">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom Ornament */}
                <div className="text-center mt-32">
                    <div className="text-accent/20 text-3xl">☙ ✦ ❧</div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CafeHome;
