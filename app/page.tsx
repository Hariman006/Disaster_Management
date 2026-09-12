import { HeroSection } from "@/components/HeroSection";
import { DisasterCard } from "@/components/DisasterCard";
import { EmergencyCenter } from "@/components/EmergencyCenter";
import { SafetyTimeline } from "@/components/SafetyTimeline";
import { QuizSection } from "@/components/QuizSection";
import { Phone } from "lucide-react";
import { disasters } from "@/data/disasters";

// Map icons to disasters
import { HeartPulse, Info, Clock, ShieldAlert, CloudRain, Flame, ThermometerSun, Zap, Mountain, Waves } from "lucide-react";

const getIconForDisaster = (id: string) => {
  switch (id) {
    case 'earthquake': return <HeartPulse className="w-6 h-6" />;
    case 'flood': return <CloudRain className="w-6 h-6" />;
    case 'cyclone': return <Clock className="w-6 h-6" />;
    case 'landslide': return <Mountain className="w-6 h-6" />;
    case 'tsunami': return <Waves className="w-6 h-6" />;
    case 'drought': return <ThermometerSun className="w-6 h-6" />;
    case 'wildfire': return <Flame className="w-6 h-6" />;
    case 'heatwave': return <ThermometerSun className="w-6 h-6" />;
    case 'thunderstorm': return <Zap className="w-6 h-6" />;
    case 'volcano': return <ShieldAlert className="w-6 h-6" />;
    default: return <Info className="w-6 h-6" />;
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HeroSection />

      <section id="disasters" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Understanding Disasters</h2>
            <p className="text-lg text-primary/70 max-w-2xl mx-auto">Select a disaster to learn specific safety guidelines, survival strategies, and what to include in your emergency kit.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {disasters.map((disaster) => (
              <DisasterCard
                key={disaster.id}
                title={disaster.title}
                description={disaster.description}
                href={`/disasters/${disaster.id}`}
                icon={getIconForDisaster(disaster.id)}
              />
            ))}
          </div>
        </div>
      </section>

      <EmergencyCenter />
      
      {/* Statistics Section */}
      <section className="py-16 bg-primary/5 border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">10+</p>
              <p className="text-sm font-medium text-primary/70 uppercase tracking-wider">Disaster Types</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">100%</p>
              <p className="text-sm font-medium text-primary/70 uppercase tracking-wider">Free Resources</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">24/7</p>
              <p className="text-sm font-medium text-primary/70 uppercase tracking-wider">Emergency Guides</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">50k+</p>
              <p className="text-sm font-medium text-primary/70 uppercase tracking-wider">Lives Protected</p>
            </div>
          </div>
        </div>
      </section>

      <SafetyTimeline />
      <QuizSection />

      {/* Emergency Call-to-Action */}
      <section id="emergency" className="py-24 px-4 sm:px-6 lg:px-8 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Know Your Emergency Contacts</h2>
          <p className="text-white/80 mb-12 text-lg max-w-2xl mx-auto">
            Keep these numbers saved in your phone and written down in your physical emergency kit.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl flex flex-col items-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                <Phone className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-white font-medium mb-2 text-lg">Police / General Emergency</h3>
              <p className="text-4xl font-bold text-white">911</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl flex flex-col items-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                <Phone className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-white font-medium mb-2 text-lg">Ambulance / Medical</h3>
              <p className="text-4xl font-bold text-white">102</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl flex flex-col items-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                <Phone className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-white font-medium mb-2 text-lg">Disaster Management</h3>
              <p className="text-4xl font-bold text-white">108</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
