"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

interface DisasterCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export function DisasterCard({ title, description, href, icon }: DisasterCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="glass-panel rounded-3xl p-6 shadow-sm hover:shadow-2xl transition-shadow duration-300 flex flex-col group h-full relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-[var(--primary-light)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
      
      <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-2xl flex items-center justify-center text-[var(--primary)] mb-6 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors duration-300 relative z-10">
        {icon}
      </div>
      
      <h3 className="text-2xl font-extrabold text-[var(--primary-dark)] mb-3 relative z-10 tracking-tight">{title}</h3>
      <p className="text-gray-600 mb-8 flex-grow relative z-10 leading-relaxed">{description}</p>
      
      <Link 
        href={href}
        className="inline-flex items-center text-[var(--primary-dark)] font-bold group-hover:text-[var(--primary)] transition-colors mt-auto relative z-10 bg-[var(--accent)] hover:bg-[var(--secondary)] px-4 py-2 rounded-full self-start"
      >
        Learn More 
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}
