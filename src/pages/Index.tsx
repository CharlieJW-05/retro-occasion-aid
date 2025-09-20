import { useState } from "react";
import FloatingBrandLogo from "@/components/FloatingBrandLogo";
import RetroButton from "@/components/RetroButton";
import { Mic, PenTool } from "lucide-react";
import { toast } from "sonner";

// Import brand logos
import nikeRetro from "@/assets/nike-retro.jpg";
import adidasRetro from "@/assets/adidas-retro.jpg";
import ralphLaurenRetro from "@/assets/ralph-lauren-retro.jpg";
import stussyRetro from "@/assets/stussy-retro.jpg";

const Index = () => {
  const [activeMode, setActiveMode] = useState<'voice' | 'text' | null>(null);

  const handleVoiceMode = () => {
    setActiveMode('voice');
    toast.success("Voice mode activated! Tell me about the occasion and I'll help you choose the perfect outfit.");
  };

  const handleTextMode = () => {
    setActiveMode('text');
    toast.success("Text mode activated! Describe the occasion and I'll suggest the ideal outfit.");
  };

  // Brand logo positions and styles
  const brandLogos = [
    {
      src: nikeRetro,
      alt: "Nike Retro Logo",
      style: {
        top: '15%',
        left: '8%',
        transform: 'rotate(-12deg)',
      },
      size: 'lg' as const,
      color: 'orange' as const,
    },
    {
      src: adidasRetro,
      alt: "Adidas Retro Logo", 
      style: {
        top: '25%',
        right: '12%',
        transform: 'rotate(8deg)',
      },
      size: 'md' as const,
      color: 'dark' as const,
    },
    {
      src: ralphLaurenRetro,
      alt: "Ralph Lauren Retro Logo",
      style: {
        bottom: '30%',
        left: '10%',
        transform: 'rotate(15deg)',
      },
      size: 'md' as const,
      color: 'cream' as const,
    },
    {
      src: stussyRetro,
      alt: "Stussy Retro Logo",
      style: {
        bottom: '20%',
        right: '15%',
        transform: 'rotate(-10deg)',
      },
      size: 'lg' as const,
      color: 'orange' as const,
    },
  ];

  return (
    <>
      <title>What Is The Occasion - 80s Fashion AI</title>
      <meta name="description" content="Get personalized 80s-inspired outfit recommendations from our AI fashion assistant. Discover the perfect look for any occasion with vintage style." />
      
      <main className="min-h-screen bg-background relative overflow-hidden">
        {/* Floating Brand Logos */}
        {brandLogos.map((logo, index) => (
          <FloatingBrandLogo
            key={index}
            src={logo.src}
            alt={logo.alt}
            style={logo.style}
            size={logo.size}
            color={logo.color}
          />
        ))}

        {/* Main Content */}
        <section className="flex flex-col items-center justify-center min-h-screen px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Hero Title */}
            <h1 className="editorial-title text-6xl md:text-8xl lg:text-9xl text-primary retro-glow animate-retro-glow mb-8">
              WHAT IS THE
              <br />
              OCCASION?
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-medium">
              Tell our AI fashion assistant about your event and get personalized 80s-inspired outfit recommendations
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <RetroButton
                variant="primary"
                size="lg"
                onClick={handleVoiceMode}
                className="w-full sm:w-auto min-w-[200px]"
              >
                <Mic className="mr-3 h-5 w-5" />
                Talk to AI
              </RetroButton>

              <RetroButton
                variant="outline"
                size="lg"
                onClick={handleTextMode}
                className="w-full sm:w-auto min-w-[200px]"
              >
                <PenTool className="mr-3 h-5 w-5" />
                Write a Prompt
              </RetroButton>
            </div>

            {/* Active Mode Indicator */}
            {activeMode && (
              <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-lg backdrop-blur-sm">
                <p className="text-primary font-semibold text-lg">
                  {activeMode === 'voice' 
                    ? "🎤 Voice Mode Active - Start speaking about your occasion!"
                    : "✍️ Text Mode Active - Describe your event and style preferences!"
                  }
                </p>
                <p className="text-muted-foreground mt-2">
                  Whether it's a disco party, business meeting, or casual hangout, 
                  I'll help you nail that perfect 80s-inspired look!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Bottom Brand Strip */}
        <footer className="absolute bottom-6 left-0 right-0 text-center">
          <p className="text-muted-foreground text-sm">
            Powered by vintage fashion expertise and modern AI
          </p>
        </footer>
      </main>
    </>
  );
};

export default Index;