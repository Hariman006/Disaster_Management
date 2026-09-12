"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShieldAlert } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-4 left-4 right-4 z-50 rounded-2xl transition-all duration-300 ${
        isScrolled 
          ? "bg-white/70 backdrop-blur-md shadow-lg border border-white/20 py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-[var(--primary)] p-2 rounded-xl group-hover:bg-[var(--primary-light)] transition-colors">
                <ShieldAlert className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl text-[var(--primary-dark)] tracking-tight">DisasterAware</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-[var(--primary-dark)] hover:text-[var(--primary-light)] font-medium transition-colors">
              Home
            </Link>
            <Link href="/#disasters" className="text-[var(--primary-dark)] hover:text-[var(--primary-light)] font-medium transition-colors">
              Disasters
            </Link>
            <Link href="/#emergency-center" className="text-[var(--primary-dark)] hover:text-[var(--primary-light)] font-medium transition-colors">
              Emergency Center
            </Link>
            <Link href="/#safety-guide" className="text-[var(--primary-dark)] hover:text-[var(--primary-light)] font-medium transition-colors">
              Safety Guide
            </Link>
            <Link href="/#quiz" className="text-[var(--primary-dark)] hover:text-[var(--primary-light)] font-medium transition-colors">
              Preparedness Quiz
            </Link>
            <Link href="/#contact" className="text-[var(--primary-dark)] hover:text-[var(--primary-light)] font-medium transition-colors">
              Contact
            </Link>
            
            <Link
              href="/#emergency-center"
              className="bg-[var(--warning)] hover:bg-red-700 text-white px-5 py-2.5 rounded-full font-bold shadow-md hover:shadow-lg transition-all"
            >
              SOS
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden gap-4">
            <Link
              href="/#emergency-center"
              className="bg-[var(--warning)] hover:bg-red-700 text-white px-3 py-1.5 text-sm rounded-full font-bold shadow-sm"
            >
              SOS
            </Link>
            <button
              onClick={toggleMenu}
              className="text-[var(--primary-dark)] hover:text-[var(--primary-light)] focus:outline-none"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/90 backdrop-blur-xl border-t border-gray-100 rounded-b-2xl overflow-hidden mt-2"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              <Link
                href="/"
                onClick={toggleMenu}
                className="block px-3 py-2 rounded-xl text-base font-medium text-[var(--primary-dark)] hover:bg-[var(--accent)] hover:text-[var(--primary)]"
              >
                Home
              </Link>
              <Link
                href="/#disasters"
                onClick={toggleMenu}
                className="block px-3 py-2 rounded-xl text-base font-medium text-[var(--primary-dark)] hover:bg-[var(--accent)] hover:text-[var(--primary)]"
              >
                Disasters
              </Link>
              <Link
                href="/#emergency-center"
                onClick={toggleMenu}
                className="block px-3 py-2 rounded-xl text-base font-medium text-[var(--primary-dark)] hover:bg-[var(--accent)] hover:text-[var(--primary)]"
              >
                Emergency Center
              </Link>
              <Link
                href="/#safety-guide"
                onClick={toggleMenu}
                className="block px-3 py-2 rounded-xl text-base font-medium text-[var(--primary-dark)] hover:bg-[var(--accent)] hover:text-[var(--primary)]"
              >
                Safety Guide
              </Link>
              <Link
                href="/#quiz"
                onClick={toggleMenu}
                className="block px-3 py-2 rounded-xl text-base font-medium text-[var(--primary-dark)] hover:bg-[var(--accent)] hover:text-[var(--primary)]"
              >
                Preparedness Quiz
              </Link>
              <Link
                href="/#contact"
                onClick={toggleMenu}
                className="block px-3 py-2 rounded-xl text-base font-medium text-[var(--primary-dark)] hover:bg-[var(--accent)] hover:text-[var(--primary)]"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
