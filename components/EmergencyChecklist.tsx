"use client";

import { useState } from "react";
import { Check, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

interface EmergencyChecklistProps {
  items?: string[];
}

const defaultItems = [
  "Water (1 gallon per person/day)",
  "Non-perishable Food",
  "Flashlight & Batteries",
  "First Aid Kit",
  "Emergency Documents",
  "Battery-powered Radio",
  "Power Bank & Cables",
  "Whistle",
  "Essential Medicines"
];

export function EmergencyChecklist({ items = defaultItems }: EmergencyChecklistProps) {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setCheckedItems(newChecked);
  };

  const progress = Math.round((checkedItems.size / items.length) * 100);

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden" id="emergency-kit">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)] rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="bg-[var(--primary)] p-3 rounded-xl">
              <ShieldAlert className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[var(--primary-dark)]">Emergency Kit Tracker</h3>
              <p className="text-gray-500 text-sm">Prepare your essential supplies</p>
            </div>
          </div>
          
          <div className="bg-[var(--accent)] px-6 py-3 rounded-2xl border border-[var(--primary-light)]/30 text-center">
            <span className="block text-3xl font-extrabold text-[var(--primary-dark)]">{progress}%</span>
            <span className="text-xs font-bold text-[var(--primary)] uppercase tracking-wider">Ready</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-100 rounded-full h-3 mb-8 overflow-hidden">
          <motion.div 
            className="bg-[var(--primary)] h-3 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, index) => {
            const isChecked = checkedItems.has(index);
            return (
              <button 
                key={index} 
                onClick={() => toggleItem(index)}
                className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
                  isChecked 
                    ? "bg-[var(--primary-light)]/10 border-[var(--primary-light)] text-[var(--primary-dark)] shadow-sm" 
                    : "bg-gray-50 border-gray-200 text-gray-600 hover:border-[var(--secondary)] hover:bg-white"
                }`}
              >
                <div className={`w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center transition-colors ${
                  isChecked ? "bg-[var(--primary)] text-white" : "bg-white border-2 border-gray-300"
                }`}>
                  {isChecked && <Check className="w-5 h-5" />}
                </div>
                <span className={`font-semibold ${isChecked ? "" : ""}`}>{item}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
