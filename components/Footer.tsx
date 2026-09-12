import Link from "next/link";
import { ShieldAlert } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--primary-dark)] text-[var(--accent)] pt-16 pb-8 border-t-4 border-[var(--primary-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group inline-flex">
              <div className="bg-[var(--accent)] p-2.5 rounded-xl">
                <ShieldAlert className="w-7 h-7 text-[var(--primary-dark)]" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">DisasterAware</span>
            </Link>
            <p className="text-[var(--secondary)] text-base mb-6 max-w-sm leading-relaxed">
              Prepared Today. Protected Tomorrow. Learn how to stay safe before, during, and after natural disasters.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6 text-white tracking-wide uppercase text-sm">Disaster Awareness</h3>
            <ul className="space-y-3 text-[var(--secondary)]">
              <li><Link href="/disasters/earthquake" className="hover:text-white transition-colors">Earthquake Safety</Link></li>
              <li><Link href="/disasters/flood" className="hover:text-white transition-colors">Flood Preparation</Link></li>
              <li><Link href="/disasters/cyclone" className="hover:text-white transition-colors">Cyclone Alerts</Link></li>
              <li><Link href="/disasters/wildfire" className="hover:text-white transition-colors">Wildfire Evacuation</Link></li>
              <li><Link href="/#disasters" className="hover:text-white transition-colors text-[var(--primary-light)]">View All Disasters →</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6 text-white tracking-wide uppercase text-sm">Safety Guides</h3>
            <ul className="space-y-3 text-[var(--secondary)]">
              <li><Link href="/#emergency-center" className="hover:text-white transition-colors">Emergency Center</Link></li>
              <li><Link href="/#emergency-kit" className="hover:text-white transition-colors">Emergency Kit Checklist</Link></li>
              <li><Link href="/#timeline" className="hover:text-white transition-colors">Safety Timeline</Link></li>
              <li><Link href="/#quiz" className="hover:text-white transition-colors">Preparedness Quiz</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6 text-white tracking-wide uppercase text-sm">About & Contact</h3>
            <ul className="space-y-3 text-[var(--secondary)]">
              <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contact Support</Link></li>
              <li><Link href="#resources" className="hover:text-white transition-colors">Emergency Resources</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--primary)]/50 flex flex-col items-center text-center gap-6">
          <div className="bg-[var(--primary)]/30 border border-[var(--primary-light)]/30 text-[var(--secondary)] px-6 py-4 rounded-xl text-sm max-w-3xl leading-relaxed">
            <span className="font-semibold text-white">Disclaimer: </span>
            Information should always be verified through official disaster-management authorities and emergency services.
          </div>
          <p className="text-[var(--secondary)] text-sm">
            © {new Date().getFullYear()} DisasterAware. All rights reserved. Built for public safety.
          </p>
        </div>
      </div>
    </footer>
  );
}
