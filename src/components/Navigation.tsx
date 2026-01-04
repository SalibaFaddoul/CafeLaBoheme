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
        { name: 'Heritage', href: '/#history' },
        { name: 'Table Fare', href: '/menu' },
        { name: 'Visit', href: '/#visit' },
    ];

    const ORDER_LINK = "https://www.doordash.com/store/cafe-la-boheme-san-francisco-297487/490625/";

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled
                ? 'bg-[#120E0D]/95 backdrop-blur-md border-b border-[#B28F5A]/20 py-4 shadow-2xl'
                : 'bg-transparent border-transparent py-8'
                }`}
        >
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="group flex flex-col">
                    <span className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-[#D4C5B9] group-hover:text-[#B28F5A] transition-colors duration-500">
                        Café La <span className="text-[#824D4F] italic">Bohème</span>
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.5em] text-[#B28F5A]/60 font-bold ml-1 -mt-1">San Francisco</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-12 font-sans text-[11px] tracking-[0.25em] uppercase font-bold text-[#D4C5B9]">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="hover:text-[#B28F5A] transition-colors duration-300 relative group">
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#B28F5A] transition-all duration-500 group-hover:w-full"></span>
                        </Link>
                    ))}
                    <a
                        href={ORDER_LINK}
                        target="_blank"
                        rel="noreferrer"
                        className="relative overflow-hidden px-8 py-3 border border-[#B28F5A] text-[#B28F5A] hover:text-[#120E0D] transition-all duration-500 group"
                    >
                        <span className="relative z-10">Order Delivery</span>
                        <div className="absolute inset-0 bg-[#B28F5A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right group-hover:origin-left"></div>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-[#D4C5B9]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-0 left-0 w-full h-screen bg-[#120E0D] p-8 flex flex-col items-center justify-center space-y-8 z-40">
                    {/* Texture background for mobile menu */}
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#B28F5A 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-4xl font-serif italic text-[#D4C5B9] hover:text-[#B28F5A] transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href={ORDER_LINK}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#B28F5A] text-xl font-serif italic pt-8 border-b border-[#B28F5A]/30"
                    >
                        The Daily Roast &rarr;
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
