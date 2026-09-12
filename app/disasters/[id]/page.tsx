import { notFound } from "next/navigation";
import { disasters } from "@/data/disasters";
import { Timeline } from "@/components/Timeline";
import { DosAndDonts } from "@/components/DosAndDonts";
import { EmergencyChecklist } from "@/components/EmergencyChecklist";
import { ArrowLeft, ShieldAlert, Info, AlertTriangle } from "lucide-react";
import Link from "next/link";

export const dynamicParams = false;

export async function generateStaticParams() {
  return disasters.map((disaster) => ({
    id: disaster.id,
  }));
}

export default async function DisasterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const disaster = disasters.find((d) => d.id === id);

  if (!disaster) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="bg-primary pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/#disasters" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Disasters
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)] text-[var(--primary-dark)] font-bold text-sm mb-6 uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4" /> Disaster Profile
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">{disaster.title}</h1>
          <p className="text-xl text-white/80 max-w-2xl">{disaster.description}</p>
        </div>
      </section>

      {/* Immediate Actions & What is it */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white relative -mt-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-primary flex items-center gap-2 mb-4">
                <Info className="w-6 h-6 text-secondary" /> What is it?
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">{disaster.whatIsIt}</p>
            </div>
            <div className="flex-1 bg-warning/10 p-6 rounded-2xl border-2 border-warning/20">
              <h2 className="text-xl font-bold text-warning flex items-center gap-2 mb-4">
                <AlertTriangle className="w-6 h-6" /> Immediate Actions
              </h2>
              <ul className="space-y-3">
                {disaster.immediateActions.map((action, i) => (
                  <li key={i} className="flex items-start gap-3 text-warning-800 font-semibold">
                    <span className="bg-warning text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm mt-0.5">{i + 1}</span>
                    {action}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary mb-4">Survival Timeline</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Critical steps to take before, during, and after a {disaster.title.toLowerCase()}.</p>
          </div>
          <Timeline 
            before={{ title: "Preparation", description: disaster.before.join(" • ") }}
            during={{ title: "Survival", description: disaster.during.join(" • ") }}
            after={{ title: "Recovery", description: disaster.after.join(" • ") }}
          />
        </div>
      </section>

      {/* Dos and Donts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-2">
            <h2 className="text-3xl font-bold text-primary">Rules of Survival</h2>
            <p className="text-gray-600 mt-2">What you absolutely must do, and what you must avoid.</p>
          </div>
          <DosAndDonts dos={disaster.dos} donts={disaster.donts} />
        </div>
      </section>

      {/* Emergency Kit */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5 border-t border-primary/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary mb-4">{disaster.title} Emergency Kit</h2>
            <p className="text-gray-600">Ensure you have these specific items packed and ready to go.</p>
          </div>
          <EmergencyChecklist />
        </div>
      </section>
    </div>
  );
}
