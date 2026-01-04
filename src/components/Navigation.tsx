"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Menu', href: '/menu' },
        { name: 'Shop', href: '/#shop' },
    ];

    const ORDER_LINK = "https://www.doordash.com/store/cafe-la-boheme-san-francisco-297487/490625/";

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-700 border-b ${scrolled
                ? 'bg-[#0F0A0A]/80 backdrop-blur-lg border-[#2A2422] py-4'
                : 'bg-transparent border-transparent py-8'
                }`}
        >
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-[#E6DCCD] hover:text-[#C89F65] transition-colors duration-500">
                    Café La <span className="text-[#9C5C5E] italic">Bohème</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-12 font-sans text-xs tracking-[0.2em] uppercase font-bold text-[#E6DCCD]">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="hover:text-[#C89F65] transition-colors duration-300">
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href={ORDER_LINK}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-[#C89F65] text-[#0F0A0A] px-8 py-3 hover:bg-[#E6DCCD] transition-all duration-500 rounded-full font-bold shadow-[0_0_20px_rgba(200,159,101,0.2)] hover:shadow-[0_0_30px_rgba(200,159,101,0.4)]"
                    >
                        Order Now
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-[#E6DCCD]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-0 left-0 w-full h-screen bg-[#0F0A0A] p-8 flex flex-col items-center justify-center space-y-8 z-40">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#C89F65 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-5xl font-serif italic text-[#E6DCCD] hover:text-[#C89F65] transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href={ORDER_LINK}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#C89F65] text-lg font-sans uppercase tracking-widest font-bold pt-8 border-b-2 border-[#C89F65]"
                    >
                        Order Online &rarr;
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
