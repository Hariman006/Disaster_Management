"use client";

import { CheckCircle2, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

interface DosAndDontsProps {
  dos: string[];
  donts: string[];
}

export function DosAndDonts({ dos, donts }: DosAndDontsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
      {/* DOs Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[var(--primary-light)]/20 border-2 border-[var(--primary-light)]/50 rounded-3xl p-8 shadow-sm"
      >
        <div className="inline-flex items-center gap-2 bg-[var(--primary-light)] text-white px-4 py-2 rounded-xl mb-6">
          <CheckCircle2 className="w-6 h-6" /> 
          <h3 className="text-xl font-bold">DOs</h3>
        </div>
        <ul className="space-y-4">
          {dos.map((item, index) => (
            <motion.li 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              key={index} 
              className="flex items-start gap-3 bg-white p-4 rounded-2xl shadow-sm"
            >
              <div className="mt-0.5">
                <CheckCircle2 className="w-5 h-5 text-[var(--success)] flex-shrink-0" />
              </div>
              <span className="text-[var(--primary-dark)] font-medium leading-relaxed">{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* DON'Ts Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="bg-[var(--accent)] border-2 border-[var(--primary)]/20 rounded-3xl p-8 shadow-sm"
      >
        <div className="inline-flex items-center gap-2 bg-[var(--warning)] text-white px-4 py-2 rounded-xl mb-6 shadow-sm">
          <AlertTriangle className="w-6 h-6" /> 
          <h3 className="text-xl font-bold">DON&apos;Ts</h3>
        </div>
        <ul className="space-y-4">
          {donts.map((item, index) => (
            <motion.li 
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              key={index} 
              className="flex items-start gap-3 bg-white p-4 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="mt-0.5">
                <AlertTriangle className="w-5 h-5 text-[var(--warning)] flex-shrink-0" />
              </div>
              <span className="text-gray-700 font-medium leading-relaxed">{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
