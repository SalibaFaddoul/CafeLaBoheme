"use client";

import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function MenuPage() {
    return (
        <div className="min-h-screen bg-[#0F0A0A] text-[#E6DCCD] selection:bg-[#C89F65] selection:text-[#0F0A0A]">
            <Navigation />

            {/* Background Texture (Subtle) */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#C89F65 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            {/* Spacer for fixed nav */}
            <div className="h-32"></div>

            {/* --- Menu Section --- */}
            <section id="menu" className="py-24 px-6 md:px-12 relative z-10">
                <div className="max-w-[900px] mx-auto">
                    {/* Header */}
                    <div className="text-center mb-24 animate-fade-in-up">
                        <span className="text-[#9C5C5E] font-bold text-xs uppercase tracking-[0.4em] block mb-6">Est. 1973</span>
                        <h1 className="text-6xl md:text-8xl font-serif text-[#E6DCCD] tracking-tight">
                            Table <span className="italic text-[#C89F65]">Fare</span>
                        </h1>
                    </div>

                    {/* Menu Content */}
                    <div className="grid grid-cols-1 gap-24">
                        {/* Breakfast */}
                        <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                            <div className="flex items-center gap-6 mb-12">
                                <h3 className="font-serif text-3xl md:text-4xl text-[#C89F65] italic">Breakfast</h3>
                                <div className="h-[1px] flex-grow bg-[#2A2422]"></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                                {[
                                    { name: "Steel Cut Oatmeal", desc: "Served with fresh seasonal fruit." },
                                    { name: "Bacon, Egg & Cheese", desc: "Served on a toasted bagel." },
                                    { name: "Smoked Alaskan Salmon", desc: "On a bagel with cream cheese & veggies." },
                                    { name: "Granola Breakfast Bowl", desc: "Crunchy granola with fresh fruit." },
                                    { name: "Croissant Sandwich", desc: "Black Forest ham, egg & cheese." },
                                    { name: "Greek Omelette", desc: "3 eggs with feta, spinach & olives." },
                                    { name: "Denver Omelette", desc: "3 eggs with ham, onions & peppers." },
                                    { name: "Acai Berry Bowl", desc: "Blended acai topped with granola & fruit." }
                                ].map((item, i) => (
                                    <div key={i} className="group cursor-default">
                                        <div className="flex justify-between items-baseline border-b border-[#2A2422] pb-2 mb-2 group-hover:border-[#C89F65] transition-colors duration-500">
                                            <h4 className="text-xl font-sans font-bold text-[#E6DCCD] tracking-wide">{item.name}</h4>
                                        </div>
                                        <p className="font-sans text-sm text-[#908680] leading-relaxed group-hover:text-[#E6DCCD] transition-colors duration-300">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Salads, Soups & Sandwiches */}
                        <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                            <div className="flex items-center gap-6 mb-12">
                                <h3 className="font-serif text-3xl md:text-4xl text-[#C89F65] italic">Lunch</h3>
                                <div className="h-[1px] flex-grow bg-[#2A2422]"></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                                {[
                                    { name: "The Last Salad", desc: "A house favorite with mixed greens & special dressing." },
                                    { name: "Quinoa Beet Bowl", desc: "Healthy grains with roasted beets." },
                                    { name: "Chicken Caesar Salad", desc: "Classic romaine, parmesan & croutons." },
                                    { name: "Jerusalem Falafel Sandwich", desc: "Crispy falafel with tahini in pita." },
                                    { name: "Turkey Melt", desc: "Hot turkey with melted cheese on sourdough." },
                                    { name: "Baked Chicken Panini", desc: "With pepper jack cheese." },
                                    { name: "Homemade Lentil Soup", desc: "Hearty and warming (Vegan)." },
                                    { name: "Soup & Half Sandwich", desc: "Daily soup with your choice of sandwich." }
                                ].map((item, i) => (
                                    <div key={i} className="group cursor-default">
                                        <div className="flex justify-between items-baseline border-b border-[#2A2422] pb-2 mb-2 group-hover:border-[#C89F65] transition-colors duration-500">
                                            <h4 className="text-xl font-sans font-bold text-[#E6DCCD] tracking-wide">{item.name}</h4>
                                        </div>
                                        <p className="font-sans text-sm text-[#908680] leading-relaxed group-hover:text-[#E6DCCD] transition-colors duration-300">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Plates */}
                        <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                            <div className="flex items-center gap-6 mb-12">
                                <h3 className="font-serif text-3xl md:text-4xl text-[#C89F65] italic">Plates</h3>
                                <div className="h-[1px] flex-grow bg-[#2A2422]"></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                                {[
                                    { name: "Middle Eastern Plate", desc: "Hummus, baba ghanoush, tabouli, falafel & pita." },
                                    { name: "Hummus Plate", desc: "Creamy hummus served with warm pita." },
                                    { name: "Gyros Plate", desc: "Seasoned meat with tzatziki and salad." },
                                ].map((item, i) => (
                                    <div key={i} className="group cursor-default">
                                        <div className="flex justify-between items-baseline border-b border-[#2A2422] pb-2 mb-2 group-hover:border-[#C89F65] transition-colors duration-500">
                                            <h4 className="text-xl font-sans font-bold text-[#E6DCCD] tracking-wide">{item.name}</h4>
                                        </div>
                                        <p className="font-sans text-sm text-[#908680] leading-relaxed group-hover:text-[#E6DCCD] transition-colors duration-300">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Drinks */}
                        <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                            <div className="flex items-center gap-6 mb-12">
                                <h3 className="font-serif text-3xl md:text-4xl text-[#C89F65] italic">Sips</h3>
                                <div className="h-[1px] flex-grow bg-[#2A2422]"></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                                {[
                                    { name: "Mexican Mocha", desc: "Spiced chocolate espresso." },
                                    { name: "Kale Smoothie", desc: "Green power blend." },
                                    { name: "Mango Mania", desc: "Tropical fruit smoothie." },
                                    { name: "Cappuccino", desc: "Espresso with microfoam." },
                                    { name: "Spicy Chia Drink", desc: "Energizing signature blend." },
                                ].map((item, i) => (
                                    <div key={i} className="group cursor-default">
                                        <div className="flex justify-between items-baseline border-b border-[#2A2422] pb-2 mb-2 group-hover:border-[#C89F65] transition-colors duration-500">
                                            <h4 className="text-xl font-sans font-bold text-[#E6DCCD] tracking-wide">{item.name}</h4>
                                        </div>
                                        <p className="font-sans text-sm text-[#908680] leading-relaxed group-hover:text-[#E6DCCD] transition-colors duration-300">
                                            {item.desc}
                                        </p>
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
