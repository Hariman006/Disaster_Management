import { Lightbulb } from "lucide-react";

interface SafetyTipProps {
  title?: string;
  tip: string;
}

export function SafetyTip({ title = "Quick Safety Tip", tip }: SafetyTipProps) {
  return (
    <div className="bg-[var(--accent)]/30 border-l-4 border-[var(--primary-light)] p-6 rounded-r-xl my-6 flex gap-4">
      <div className="bg-white p-2 rounded-full h-fit flex-shrink-0 shadow-sm">
        <Lightbulb className="w-6 h-6 text-[var(--primary-light)]" />
      </div>
      <div>
        <h4 className="font-bold text-gray-900 mb-1">{title}</h4>
        <p className="text-gray-700 leading-relaxed">{tip}</p>
      </div>
    </div>
  );
}
