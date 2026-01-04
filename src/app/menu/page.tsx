"use client";

import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function MenuPage() {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-background">
            <Navigation />

            {/* Background Texture (Hand-crafted vibe) */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(var(--accent) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            {/* Spacer for fixed nav */}
            <div className="h-32"></div>

            {/* --- Menu Section --- */}
            <section id="menu" className="py-24 px-6 md:px-12 relative z-10 overflow-hidden">
                <div className="max-w-[1100px] mx-auto">
                    {/* Header */}
                    <div className="text-center mb-32 animate-fade-in">
                        <span className="text-accent font-bold text-[10px] uppercase tracking-[0.8em] block mb-6">Established 1973</span>
                        <h1 className="text-6xl md:text-[8rem] font-serif text-foreground tracking-tighter leading-none group">
                            Table <span className="italic text-accent group-hover:underline decoration-accent/10 transition-all duration-700">Fare</span>
                        </h1>
                        <div className="h-[1px] w-24 bg-accent/20 mx-auto mt-12"></div>
                    </div>

                    {/* Menu Content */}
                    <div className="grid grid-cols-1 gap-40">

                        {/* Breakfast */}
                        <div className="animate-fade-in">
                            <div className="flex flex-col items-center gap-4 mb-20 text-center">
                                <h3 className="font-serif text-5xl md:text-7xl text-accent italic">Breakfast</h3>
                                <p className="text-foreground/40 font-serif italic text-lg">Served daily to the early risers of the Mission.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24">
                                {[
                                    { name: "Steel Cut Oatmeal", desc: "Served with fresh seasonal fruit.", image: "/Oatmeal Bowl.png" },
                                    { name: "Bacon, Egg & Cheese", desc: "Served on a toasted bagel.", image: "/Ham and Cheese Sandwhich.png" },
                                    { name: "Smoked Alaskan Salmon", desc: "On a bagel with cream cheese & veggies.", image: "/SmokedSalmonBagel.png" },
                                    { name: "Granola Breakfast Bowl", desc: "Crunchy granola with fresh fruit.", image: "/GranolaBowl.png" },
                                    { name: "Croissant Sandwich", desc: "Black Forest ham, egg & cheese.", image: "/Crossiant.png" },
                                    { name: "Greek Omelette", desc: "3 eggs with feta, spinach & olives.", image: "/Greek Salad.png" },
                                    { name: "Denver Omelette", desc: "3 eggs with ham, onions & peppers.", image: "/DenverOmlette.png" },
                                    { name: "Acai Berry Bowl", desc: "Blended acai topped with granola & fruit." }
                                ].map((item, i) => (
                                    <div key={i} className="group cursor-default flex flex-col gap-8">
                                        {item.image && (
                                            <div className="relative p-1 vintage-border aspect-[4/3] overflow-hidden">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover grayscale-[0.1] sepia-[0.2] transition-transform duration-1000 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-background/10 mix-blend-overlay"></div>
                                            </div>
                                        )}
                                        <div className="space-y-4 px-2">
                                            <div className="flex justify-between items-baseline border-b border-accent/10 pb-3 group-hover:border-accent/40 transition-colors duration-500">
                                                <h4 className="text-2xl font-serif italic text-foreground tracking-wide">{item.name}</h4>
                                            </div>
                                            <p className="font-serif italic text-lg text-foreground/50 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Lunch */}
                        <div className="animate-fade-in">
                            <div className="flex flex-col items-center gap-4 mb-20 text-center">
                                <h3 className="font-serif text-5xl md:text-7xl text-accent italic">Lunch</h3>
                                <p className="text-foreground/40 font-serif italic text-lg">A hearty selection for the afternoon gathering.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24">
                                {[
                                    { name: "The Last Salad", desc: "A house favorite with mixed greens & special dressing.", image: "/SaladsBoth.png" },
                                    { name: "Quinoa Beet Bowl", desc: "Healthy grains with roasted beets.", image: "/QuinoaBowl.png" },
                                    { name: "Beet Salad", desc: "Fresh roasted beets on vibrant greens.", image: "/BeetSalad.png" },
                                    { name: "Chicken Caesar Salad", desc: "Classic romaine, parmesan & croutons.", image: "/Chicken Salad.png" },
                                    { name: "Jerusalem Falafel Sandwich", desc: "Crispy falafel with tahini in pita.", image: "/Falaffel Sandwhich.png" },
                                    { name: "California Sandwich", desc: "Fresh flavors from the coast.", image: "/CalfironiaSanwhich.png" },
                                    { name: "Turkey Melt", desc: "Hot turkey with melted cheese on sourdough.", image: "/CalfironiaSanwhich.png" },
                                    { name: "Baked Chicken Panini", desc: "With pepper jack cheese.", image: "/Panini Press.png" },
                                    { name: "Homemade Lentil Soup", desc: "Hearty and warming (Vegan).", image: "/LentilSoup.png" },
                                    { name: "Soup & Half Sandwich", desc: "Daily soup with your choice of sandwich.", image: "/Tortilla Soup.png" }
                                ].map((item, i) => (
                                    <div key={i} className="group cursor-default flex flex-col gap-8">
                                        {item.image && (
                                            <div className="relative p-1 vintage-border aspect-[4/3] overflow-hidden">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover grayscale-[0.1] sepia-[0.2] transition-transform duration-1000 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-background/10 mix-blend-overlay"></div>
                                            </div>
                                        )}
                                        <div className="space-y-4 px-2">
                                            <div className="flex justify-between items-baseline border-b border-accent/10 pb-3 group-hover:border-accent/40 transition-colors duration-500">
                                                <h4 className="text-2xl font-serif italic text-foreground tracking-wide">{item.name}</h4>
                                            </div>
                                            <p className="font-serif italic text-lg text-foreground/50 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Plates */}
                        <div className="animate-fade-in">
                            <div className="flex flex-col items-center gap-4 mb-20 text-center">
                                <h3 className="font-serif text-5xl md:text-7xl text-accent italic">Plates</h3>
                                <p className="text-foreground/40 font-serif italic text-lg">Shared traditions from our home to yours.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24">
                                {[
                                    { name: "Middle Eastern Plate", desc: "Hummus, baba ghanoush, tabouli, falafel & pita.", image: "/Mezza Cafe La Boheme.png" },
                                    { name: "Hummus Plate", desc: "Creamy hummus served with warm pita.", image: "/Hummus Plate.png" },
                                    { name: "Gyros Plate", desc: "Seasoned meat with tzatziki and salad.", image: "/Gyros Plate.png" },
                                ].map((item, i) => (
                                    <div key={i} className="group cursor-default flex flex-col gap-8">
                                        {item.image && (
                                            <div className="relative p-1 vintage-border aspect-[4/3] overflow-hidden">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover grayscale-[0.1] sepia-[0.2] transition-transform duration-1000 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-background/10 mix-blend-overlay"></div>
                                            </div>
                                        )}
                                        <div className="space-y-4 px-2">
                                            <div className="flex justify-between items-baseline border-b border-accent/10 pb-3 group-hover:border-accent/40 transition-colors duration-500">
                                                <h4 className="text-2xl font-serif italic text-foreground tracking-wide">{item.name}</h4>
                                            </div>
                                            <p className="font-serif italic text-lg text-foreground/50 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sips */}
                        <div className="animate-fade-in">
                            <div className="flex flex-col items-center gap-4 mb-20 text-center">
                                <h3 className="font-serif text-5xl md:text-7xl text-accent italic">Sips</h3>
                                <p className="text-foreground/40 font-serif italic text-lg">The soul of Café La Bohème, poured with care.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24">
                                {[
                                    { name: "Mexican Mocha", desc: "Spiced chocolate espresso.", image: "/mexican-mocha.png" },
                                    { name: "Kale Smoothie", desc: "Green power blend.", image: "/GardenKaleSmoothie.png" },
                                    { name: "Mango Mania", desc: "Tropical fruit smoothie.", image: "/Mexican Blended Drink.png" },
                                    { name: "Cappuccino", desc: "Espresso with microfoam.", image: "/Cappacuino .png" },
                                    { name: "Spicy Chia Drink", desc: "Energizing signature blend.", image: "/Tea.png" },
                                    { name: "Caramel Latte", desc: "Velvety caramel and espresso.", image: "/Carmal Latte.png" },
                                    { name: "Iced Coffee", desc: "Cold brewed to perfection.", image: "/Iced Coffee.png" }
                                ].map((item, i) => (
                                    <div key={i} className="group cursor-default flex flex-col gap-8">
                                        {item.image && (
                                            <div className="relative p-1 vintage-border aspect-square overflow-hidden">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover grayscale-[0.1] sepia-[0.1] transition-transform duration-1000 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-background/10 mix-blend-overlay"></div>
                                            </div>
                                        )}
                                        <div className="space-y-4 px-2">
                                            <div className="flex justify-between items-baseline border-b border-accent/10 pb-3 group-hover:border-accent/40 transition-colors duration-500">
                                                <h4 className="text-2xl font-serif italic text-foreground tracking-wide">{item.name}</h4>
                                            </div>
                                            <p className="font-serif italic text-lg text-foreground/50 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
