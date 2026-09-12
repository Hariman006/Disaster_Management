"use client";

import { motion } from "framer-motion";
import { Clock, ShieldAlert, HeartPulse } from "lucide-react";

export function SafetyTimeline() {
  const steps = [
    {
      phase: "BEFORE",
      title: "Preparation",
      description: "Build an emergency kit, make a family plan, and stay informed about local risks.",
      icon: <Clock className="w-6 h-6 text-[var(--primary)]" />,
      color: "bg-[var(--accent)]",
      borderColor: "border-[var(--primary)]"
    },
    {
      phase: "DURING",
      title: "Survival",
      description: "Execute your plan, follow immediate safety protocols, and listen to official warnings.",
      icon: <ShieldAlert className="w-6 h-6 text-white" />,
      color: "bg-[var(--warning)]",
      borderColor: "border-[var(--warning)]"
    },
    {
      phase: "AFTER",
      title: "Recovery",
      description: "Check for injuries, avoid damaged areas, and contact loved ones when safe.",
      icon: <HeartPulse className="w-6 h-6 text-[var(--primary)]" />,
      color: "bg-[var(--secondary)]",
      borderColor: "border-[var(--secondary)]"
    }
  ];

  return (
    <div className="py-12 relative">
      {/* Connecting Line */}
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 hidden md:block z-0 rounded-full"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="flex flex-col items-center text-center relative"
          >
            {/* Phase Tag */}
            <div className={`mb-6 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-white shadow-md ${step.phase === 'DURING' ? 'bg-[var(--warning)]' : 'bg-[var(--primary-dark)]'}`}>
              {step.phase}
            </div>

            {/* Icon Circle */}
            <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-xl border-4 border-white ${step.color} ${step.phase === 'DURING' ? 'animate-pulse' : ''}`}>
              {step.icon}
            </div>

            {/* Content Card */}
            <div className={`bg-white p-6 rounded-3xl shadow-lg border-t-4 w-full h-full ${step.borderColor}`}>
              <h3 className="text-xl font-extrabold text-[var(--primary-dark)] mb-3">{step.title}</h3>
              <p className="text-gray-600 font-medium leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
