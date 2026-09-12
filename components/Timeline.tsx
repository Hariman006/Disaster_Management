import React from "react";

interface TimelineStep {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface TimelineProps {
  before: TimelineStep;
  during: TimelineStep;
  after: TimelineStep;
}

export function Timeline({ before, during, after }: TimelineProps) {
  return (
    <div className="py-8">
      <div className="flex flex-col md:flex-row gap-8 relative">
        
        {/* Connecting line for desktop */}
        <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-1 bg-gray-200 -z-10"></div>
        
        {/* BEFORE */}
        <div className="flex-1 flex flex-col items-center text-center group">
          <div className="w-24 h-24 bg-white rounded-full border-4 border-gray-100 shadow-md flex items-center justify-center text-secondary mb-4 relative z-10 group-hover:border-secondary transition-colors">
            {before.icon || <span className="font-black text-2xl">1</span>}
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-full h-full">
            <h3 className="text-xl font-bold text-primary mb-2">BEFORE</h3>
            <h4 className="font-semibold text-gray-700 mb-3">{before.title}</h4>
            <p className="text-gray-600 text-sm">{before.description}</p>
          </div>
        </div>

        {/* DURING */}
        <div className="flex-1 flex flex-col items-center text-center group">
          <div className="w-24 h-24 bg-white rounded-full border-4 border-warning shadow-md flex items-center justify-center text-warning mb-4 relative z-10 group-hover:scale-110 transition-transform">
            {during.icon || <span className="font-black text-2xl">2</span>}
          </div>
          <div className="bg-warning/5 p-6 rounded-2xl shadow-sm border border-warning/20 w-full h-full">
            <h3 className="text-xl font-bold text-warning mb-2">DURING</h3>
            <h4 className="font-semibold text-gray-700 mb-3">{during.title}</h4>
            <p className="text-gray-600 text-sm">{during.description}</p>
          </div>
        </div>

        {/* AFTER */}
        <div className="flex-1 flex flex-col items-center text-center group">
          <div className="w-24 h-24 bg-white rounded-full border-4 border-gray-100 shadow-md flex items-center justify-center text-success mb-4 relative z-10 group-hover:border-success transition-colors">
            {after.icon || <span className="font-black text-2xl">3</span>}
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-full h-full">
            <h3 className="text-xl font-bold text-primary mb-2">AFTER</h3>
            <h4 className="font-semibold text-gray-700 mb-3">{after.title}</h4>
            <p className="text-gray-600 text-sm">{after.description}</p>
          </div>
        </div>

      </div>
    </div>
  );
}
