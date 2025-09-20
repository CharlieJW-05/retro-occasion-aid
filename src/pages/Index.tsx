import { useState, type CSSProperties } from "react";
import FloatingBrandLogo from "@/components/FloatingBrandLogo";
import RetroButton from "@/components/RetroButton";
import RetroPoster from "@/components/RetroPoster";
import { Mic, PenTool, Sparkles, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

import nikeRetro from "@/assets/nike-retro.jpg";
import adidasRetro from "@/assets/adidas-retro.jpg";
import ralphLaurenRetro from "@/assets/ralph-lauren-retro.jpg";
import stussyRetro from "@/assets/stussy-retro.jpg";

const Index = () => {
  const [activeMode, setActiveMode] = useState<"voice" | "text" | null>(null);

  const handleVoiceMode = () => {
    setActiveMode("voice");
    toast.success("Voice mode activated! Tell me about the occasion and I'll help you choose the perfect outfit.");
  };

  const handleTextMode = () => {
    setActiveMode("text");
    toast.success("Text mode activated! Describe the occasion and I'll suggest the ideal outfit.");
  };

  const brandLogos = [
    {
      src: nikeRetro,
      alt: "Nike Archive Logo",
      style: {
        top: "8%",
        left: "6%",
        animationDelay: "0s",
      } as CSSProperties,
      size: "lg" as const,
      color: "orange" as const,
      className: "-rotate-[14deg]",
    },
    {
      src: adidasRetro,
      alt: "Adidas 1986 Logo",
      style: {
        top: "28%",
        right: "9%",
        animationDelay: "1.2s",
      } as CSSProperties,
      size: "md" as const,
      color: "cream" as const,
      className: "rotate-[9deg]",
    },
    {
      src: ralphLaurenRetro,
      alt: "Ralph Lauren Promo",
      style: {
        bottom: "32%",
        left: "12%",
        animationDelay: "2.4s",
      } as CSSProperties,
      size: "md" as const,
      color: "dark" as const,
      className: "rotate-[6deg]",
    },
    {
      src: stussyRetro,
      alt: "Stussy Capsule",
      style: {
        bottom: "18%",
        right: "14%",
        animationDelay: "3.2s",
      } as CSSProperties,
      size: "lg" as const,
      color: "orange" as const,
      className: "-rotate-[10deg]",
    },
  ];

  const brandPosters = [
    {
      image: nikeRetro,
      label: "Nike Archive '84",
      headline: "AIR WAVE RUNNER",
      caption: "Gradient mesh with neon piping engineered for midnight city runs and studio decks alike.",
      accent: "orange" as const,
      align: "left" as const,
      className: "-rotate-2",
      delay: 0,
    },
    {
      image: adidasRetro,
      label: "Adidas Studio Drop",
      headline: "SYNTH-MOD TRACKSUIT",
      caption: "Sculpted shoulders, reflective stripes, and vinyl sheen to catch every strobe.",
      accent: "violet" as const,
      align: "right" as const,
      className: "translate-x-12 rotate-3",
      delay: 1.2,
    },
    {
      image: ralphLaurenRetro,
      label: "Lauren Society",
      headline: "MIDNIGHT LOFT BLAZER",
      caption: "Velvet lapels, champagne lining, and analog pinstripes tailored for rooftop affairs.",
      accent: "charcoal" as const,
      align: "left" as const,
      className: "-translate-x-6 rotate-1",
      delay: 2.4,
    },
  ];

  const tickerItems = [
    "Nike Archives",
    "Adidas Originals",
    "Lauren Studio",
    "Stussy Capsule",
    "Occasion Engine",
  ];

  const occasionScenes = [
    {
      title: "Neon Nights",
      description: "Synthwave clubs, laser lit floors, velvet rope energy.",
    },
    {
      title: "Editorial Launch",
      description: "Art gallery reveals with champagne flutes and flashbulbs.",
    },
    {
      title: "Runway Rehearsal",
      description: "Backstage calls, rapid changes, high-contrast looks.",
    },
  ];

  const aiHighlights = [
    { label: "Prompt to wardrobe", value: "< 30s" },
    { label: "Curated brand sets", value: "12" },
    { label: "Styling accuracy", value: "98%" },
  ];

  return (
    <>
      <title>Vulture Droids — Occasion Engine</title>
      <meta
        name="description"
        content="Discover 80s editorial looks with the Vulture Droids Occasion Engine. Describe the vibe and get motion-packed, brand-ready outfit stories."
      />

      <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(120% 120% at 10% -10%, rgba(255, 160, 103, 0.35), transparent 60%), radial-gradient(90% 90% at 85% 10%, rgba(255, 200, 150, 0.15), transparent 70%), linear-gradient(160deg, rgba(255, 255, 255, 0.05), transparent)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 mix-blend-soft-light opacity-50"
          aria-hidden="true"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noise)' opacity='0.35'/%3E%3C/svg%3E\")",
            backgroundSize: "280px 280px",
          }}
        />
        <div className="pointer-events-none absolute -top-32 left-[-10%] h-[520px] w-[520px] rounded-full bg-primary/20 blur-[140px] mix-blend-screen lg:left-[-4%]" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-[-30%] right-[-8%] h-[680px] w-[680px] rounded-full bg-[#FFB17A]/20 blur-[160px] mix-blend-screen" aria-hidden="true" />

        {brandLogos.map((logo, index) => (
          <FloatingBrandLogo
            key={index}
            src={logo.src}
            alt={logo.alt}
            style={logo.style}
            size={logo.size}
            color={logo.color}
            className={logo.className}
          />
        ))}

        <div className="pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 rotate-[-90deg] transform whitespace-nowrap text-[11px] uppercase tracking-[0.65em] text-muted-foreground/70 lg:block">
          80s fashion intelligence · modern ai styling · curated brand drops
        </div>

        <div className="relative z-10 px-6 pb-24 pt-14 sm:px-10 lg:px-16">
          <header className="flex flex-col gap-4 text-[11px] uppercase tracking-[0.55em] text-muted-foreground/70 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-primary">Vulture Droids Studio</span>
            <div className="flex gap-6 text-muted-foreground/60">
              <span>Issue 002</span>
              <span>NYC ↔ LDN</span>
              <span>Analog Season</span>
            </div>
          </header>

          <section className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-3 rounded-full border border-primary/40 bg-primary/10 px-6 py-2 text-[11px] uppercase tracking-[0.55em] text-primary">
                <span>Occasion Engine</span>
                <span className="h-1 w-1 rounded-full bg-primary" />
                <span>80s Editorial</span>
              </div>

              <h1 className="editorial-title text-[clamp(3.2rem,9vw,6.3rem)] leading-[0.82] text-primary drop-shadow-[0_28px_80px_rgba(249,115,22,0.35)]">
                WHAT IS YOUR
                <br />
                OCCASION STORY?
              </h1>

              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Feed the engine with your scene, mood, and soundtrack. We spin up brand-forward looks inspired by 80s
                editorial covers, primed with motion, glow, and AI precision.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <RetroButton
                  variant="primary"
                  size="lg"
                  onClick={handleVoiceMode}
                  className="w-full sm:w-auto sm:min-w-[220px]"
                >
                  <Mic className="mr-3 h-5 w-5" />
                  Vocal Brief
                </RetroButton>

                <RetroButton
                  variant="outline"
                  size="lg"
                  onClick={handleTextMode}
                  className="w-full sm:w-auto sm:min-w-[220px] border-primary/40 text-primary hover:border-primary"
                >
                  <PenTool className="mr-3 h-5 w-5" />
                  Typed Prompt
                </RetroButton>

                <button className="group inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.35em] text-muted-foreground transition hover:text-primary">
                  <Sparkles className="h-4 w-4 text-primary" />
                  Demo a Scene
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>

              {activeMode && (
                <div className="max-w-xl rounded-3xl border border-primary/30 bg-primary/10 p-7 backdrop-blur-md">
                  <p className="text-sm font-semibold uppercase tracking-[0.45em] text-primary">
                    {activeMode === "voice" ? "Voice Mode Active" : "Text Mode Active"}
                  </p>
                  <p className="mt-3 text-base text-primary-foreground/90">
                    {activeMode === "voice"
                      ? "Start speaking — the engine is listening for venue energy, dress codes, and sonic cues."
                      : "Describe your event vibe, dress codes, and colors. We'll translate it into brand-ready lookbooks."}
                  </p>
                </div>
              )}

              <div className="grid gap-6 sm:grid-cols-3">
                {occasionScenes.map((scene) => (
                  <div
                    key={scene.title}
                    className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left backdrop-blur-md transition hover:border-primary/50 hover:bg-primary/10"
                  >
                    <p className="text-xs uppercase tracking-[0.45em] text-muted-foreground/70 group-hover:text-primary">
                      {scene.title}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground/90 group-hover:text-foreground">
                      {scene.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid gap-6 sm:grid-cols-3">
                {aiHighlights.map((highlight) => (
                  <div key={highlight.label} className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 text-left">
                    <p className="text-[11px] uppercase tracking-[0.45em] text-muted-foreground/60">{highlight.label}</p>
                    <p className="mt-4 text-3xl font-black text-foreground">{highlight.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex flex-col gap-8">
              <div className="pointer-events-none absolute -inset-10 hidden rounded-[36px] border border-primary/20 mix-blend-soft-light lg:block" aria-hidden="true" />
              {brandPosters.map((poster) => (
                <RetroPoster key={poster.label} {...poster} />
              ))}
            </div>
          </section>

          <section className="mt-24">
            <div className="marquee rounded-full border border-primary/30 bg-primary/10 py-4">
              <div className="marquee__inner">
                {[...tickerItems, ...tickerItems].map((item, index) => (
                  <span
                    key={`${item}-${index}`}
                    className="mx-10 text-xs uppercase tracking-[0.65em] text-primary/90"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <footer className="mt-20 flex flex-col gap-4 text-xs uppercase tracking-[0.45em] text-muted-foreground/70 sm:flex-row sm:items-center sm:justify-between">
            <span>Powered by analog archives & modern AI</span>
            <span>All looks calibrated in under 30 seconds</span>
          </footer>
        </div>
      </main>
    </>
  );
};

export default Index;
