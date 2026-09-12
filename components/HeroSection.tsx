"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldAlert, HeartPulse, Zap, CloudLightning } from "lucide-react";

export function HeroSection() {
  const floatingAnimation = {
    y: ["-10px", "10px", "-10px"],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-[var(--accent)] to-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--secondary)] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-[var(--primary-light)] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-[var(--primary)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] font-bold text-sm mb-6 border border-[var(--primary)]/20">
                <ShieldAlert className="w-4 h-4" /> Official Safety Guide
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-[var(--primary-dark)] tracking-tight mb-6 leading-tight">
                Prepared Today. <br />
                <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] bg-clip-text text-transparent">Protected Tomorrow.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                Learn how to stay safe before, during, and after natural disasters. Your awareness is your best defense against the unexpected.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="#disasters"
                  className="w-full sm:w-auto bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-[var(--primary)]/30 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 text-lg"
                >
                  Explore Disasters <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="#emergency-center"
                  className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[var(--primary-dark)] border-2 border-[var(--secondary)] px-8 py-4 rounded-full font-bold shadow-sm hover:shadow-md transition-all text-lg"
                >
                  Emergency Guide
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Hero Illustration */}
          <div className="flex-1 w-full max-w-lg relative h-[500px]">
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Central Shield */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[var(--primary-dark)] rounded-full shadow-2xl flex items-center justify-center z-20 border-8 border-white">
                <ShieldAlert className="w-24 h-24 text-white" />
              </div>

              {/* Orbiting Elements */}
              <motion.div animate={floatingAnimation} className="absolute top-[10%] left-[20%] glass-panel p-4 rounded-2xl shadow-xl z-30">
                <HeartPulse className="w-8 h-8 text-[var(--warning)]" />
              </motion.div>
              
              <motion.div 
                animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }} 
                className="absolute top-[20%] right-[10%] glass-panel p-4 rounded-2xl shadow-xl z-10"
              >
                <CloudLightning className="w-10 h-10 text-[var(--primary-light)]" />
              </motion.div>

              <motion.div 
                animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }} 
                className="absolute bottom-[20%] left-[10%] glass-panel p-5 rounded-2xl shadow-xl z-10"
              >
                <div className="text-[var(--primary-dark)] font-bold">Safe Zones</div>
              </motion.div>

              <motion.div 
                animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1.5 } }} 
                className="absolute bottom-[15%] right-[20%] glass-panel p-4 rounded-2xl shadow-xl z-30 bg-white"
              >
                <Zap className="w-8 h-8 text-[var(--success)]" />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
