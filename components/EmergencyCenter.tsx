"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, ArrowRight, ShieldAlert } from "lucide-react";
import { disasters } from "@/data/disasters";
import Link from "next/link";

export function EmergencyCenter() {
  const [selectedDisasterId, setSelectedDisasterId] = useState<string | null>(null);

  const selectedDisaster = disasters.find(d => d.id === selectedDisasterId);

  return (
    <section id="emergency-center" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--primary-dark)] relative overflow-hidden">
      {/* Background styling */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary)] rounded-full mix-blend-overlay filter blur-[100px] opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--primary-light)] rounded-full mix-blend-overlay filter blur-[100px] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 text-red-300 font-bold text-sm mb-6 border border-red-500/30"
          >
            <AlertTriangle className="w-4 h-4" /> Critical Response
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight"
          >
            What Should I Do Right Now?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[var(--secondary)] max-w-2xl mx-auto"
          >
            Select a disaster below to see the top 3 immediate survival actions you must take to stay safe.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Disaster Selection Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {disasters.map((disaster) => (
              <button
                key={disaster.id}
                onClick={() => setSelectedDisasterId(disaster.id)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 border-2 ${
                  selectedDisasterId === disaster.id 
                    ? "bg-[var(--primary)] border-[var(--accent)] shadow-[0_0_20px_rgba(203,239,235,0.3)] transform scale-[1.02]" 
                    : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                <h3 className={`font-bold text-lg ${selectedDisasterId === disaster.id ? "text-[var(--accent)]" : "text-white"}`}>
                  {disaster.title}
                </h3>
              </button>
            ))}
          </div>

          {/* Action Display Area */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              {selectedDisaster ? (
                <motion.div
                  key={selectedDisaster.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-[var(--accent)] rounded-3xl p-8 shadow-2xl h-full border border-white"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <ShieldAlert className="w-8 h-8 text-[var(--warning)]" />
                    <h3 className="text-2xl font-bold text-[var(--primary-dark)]">
                      {selectedDisaster.title} Emergency
                    </h3>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {selectedDisaster.immediateActions.map((action, index) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        key={index} 
                        className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-sm"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--primary)] text-white font-bold flex items-center justify-center">
                          {index + 1}
                        </div>
                        <p className="font-bold text-[var(--primary-dark)] text-lg leading-tight pt-1">
                          {action}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <Link 
                    href={`/disasters/${selectedDisaster.id}`}
                    className="w-full bg-[var(--primary-dark)] hover:bg-[var(--primary)] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-md text-lg"
                  >
                    View Full Guide <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full min-h-[300px] border-2 border-dashed border-white/20 rounded-3xl flex flex-col items-center justify-center p-8 text-center"
                >
                  <ShieldAlert className="w-16 h-16 text-white/20 mb-4" />
                  <p className="text-[var(--secondary)] text-lg font-medium">
                    Select a disaster to view immediate survival actions.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
