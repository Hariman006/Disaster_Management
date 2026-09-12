import Link from "next/link";
import { ShieldAlert, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 sm:px-6 lg:px-8 text-center bg-background">
      <div className="bg-[var(--primary)]/10 p-6 rounded-3xl mb-8 border border-[var(--primary)]/20 shadow-sm">
        <ShieldAlert className="w-16 h-16 text-[var(--primary)]" />
      </div>

      <h1 className="text-5xl md:text-7xl font-black text-[var(--primary-dark)] tracking-tight mb-4">
        404
      </h1>

      <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--primary-dark)] mb-4">
        Page Not Found
      </h2>

      <p className="text-lg text-gray-600 max-w-md mb-8 leading-relaxed">
        The emergency guide or resource you were looking for doesn&apos;t exist or has moved. Stay calm and return home.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-6 py-3 rounded-full font-bold shadow-md transition-all text-base"
        >
          <Home className="w-5 h-5" /> Return Home
        </Link>
        <Link
          href="/#disasters"
          className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[var(--primary-dark)] border-2 border-[var(--secondary)] px-6 py-3 rounded-full font-bold shadow-sm transition-all text-base"
        >
          <ArrowLeft className="w-5 h-5" /> View Disasters
        </Link>
      </div>
    </div>
  );
}
