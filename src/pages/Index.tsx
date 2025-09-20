import { useState, type CSSProperties } from "react";
import FloatingBrandLogo from "@/components/FloatingBrandLogo";
import RetroButton from "@/components/RetroButton";
import RetroPoster from "@/components/RetroPoster";
import { Archive, MessageCircle, Mic, PenTool } from "lucide-react";
import { toast } from "sonner";

import nikeRetro from "@/assets/nike-retro.jpg";
import adidasRetro from "@/assets/adidas-retro.jpg";
import ralphLaurenRetro from "@/assets/ralph-lauren-retro.jpg";
import stussyRetro from "@/assets/stussy-retro.jpg";
import NvidiaSymbol from "@/components/icons/NvidiaSymbol";

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
    { label: "Briefing to lookbook", value: "24h" },
    { label: "Partner houses", value: "18" },
    { label: "Client retention", value: "97%" },
  ];

  const professionalDeliverables = [
    {
      title: "Lookbook Dossier",
      description: "Editorial treatment with silhouettes, colour stories, and accessory maps ready for stakeholder review.",
    },
    {
      title: "Procurement Deck",
      description: "Verified sourcing links, stock checks, and tiered budgets to fast-track wardrobe approvals.",
    },
    {
      title: "Event Run Sheet",
      description: "Fittings schedule, contingency looks, and on-site styling checkpoints to keep the team aligned.",
    },
  ];

  return (
    <>
      <title>Vulture Droids — Occasion Engine</title>
      <meta
        name="description"
        content="Brief the Vulture Droids Occasion Engine and receive polished wardrobe stories grounded in your preferences and event goals."
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

        <div className="relative z-10 px-6 pb-24 pt-14 sm:px-10 lg:px-16">
          <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between lg:gap-10">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
                <svg
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  className="h-5 w-5 text-primary"
                  fill="none"
                >
                  <path
                    d="M16 11.5c0-1.2.7-2.3 1.8-2.8l.7-.3c1-.4 1.6-1.2 1.6-2.2 0-1.5-1.1-2.6-2.6-2.6s-2.6 1.1-2.6 2.6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 21.5 16 13l10 8.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.8 23.5h14.4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-xs uppercase tracking-[0.65em] text-primary">Scene</span>
                <span className="text-[10px] uppercase tracking-[0.45em] text-muted-foreground/70">Wardrobe Lab</span>
              </div>
            </div>

            <div className="flex flex-col items-end gap-3 text-[11px] uppercase tracking-[0.55em] text-muted-foreground/70 sm:items-end">
              <div className="flex items-center gap-2 text-primary">
                <NvidiaSymbol className="h-6 w-6" />
                <span className="text-[11px] uppercase tracking-[0.45em]">Powered by NVIDIA</span>
              </div>
              <span className="text-primary/70">Vulture Droids Studio</span>
              <div className="flex gap-6 text-muted-foreground/60">
                <span>Issue 002</span>
                <span>NYC ↔ LDN</span>
                <span>Analog Season</span>
              </div>
            </div>
          </header>

          <section className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-3 rounded-full border border-primary/40 bg-primary/10 px-6 py-2 text-[11px] uppercase tracking-[0.55em] text-primary">
                <span>Occasion Engine</span>
              </div>

              <h1 className="editorial-title text-[clamp(3.2rem,9vw,6.3rem)] leading-[0.82] text-primary drop-shadow-[0_28px_80px_rgba(249,115,22,0.35)]">
                WHAT IS THE
                <br />
                OCCASION?
              </h1>

              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Tell us the occasion and we’ll base your look on your preferences and inspirations — making sure you have
                everything you need to feel confident and complete.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-start lg:gap-5">
                <RetroButton
                  variant="primary"
                  size="lg"
                  onClick={handleVoiceMode}
                  className="w-full sm:w-auto sm:min-w-[220px]"
                >
                  <Mic className="mr-3 h-5 w-5" />
                  Talk to AI
                </RetroButton>

                <RetroButton
                  variant="outline"
                  size="lg"
                  onClick={handleTextMode}
                  className="w-full sm:w-auto sm:min-w-[220px] border-primary/40 text-primary hover:border-primary"
                >
                  <PenTool className="mr-3 h-5 w-5" />
                  Write a Prompt
                </RetroButton>

                <RetroButton
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto sm:min-w-[220px]"
                >
                  <Archive className="mr-3 h-5 w-5" />
                  Add to Wardrobe
                </RetroButton>

                <RetroButton
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto sm:min-w-[220px] border-primary/40 text-primary hover:border-primary"
                >
                  <MessageCircle className="mr-3 h-5 w-5" />
                  Voice Chat
                </RetroButton>

                <RetroButton
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto sm:min-w-[220px]"
                >
                  Style Generator
                </RetroButton>
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

              <div className="rounded-[32px] border border-primary/30 bg-primary/10 p-8 backdrop-blur-md">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-col gap-4 text-primary sm:flex-row sm:items-center sm:gap-5">
                    <span className="text-[11px] uppercase tracking-[0.45em] text-primary/80">Powered by</span>
                    <div className="flex items-center gap-4">
                      <span className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-primary/25 bg-white shadow-[0_18px_45px_rgba(21,122,58,0.25)]">
                        <NvidiaSymbol className="h-10 w-10" />
                      </span>
                      <span className="text-base font-semibold uppercase tracking-[0.6em] text-foreground">NVIDIA</span>
                    </div>
                  </div>
                  <p className="max-w-sm text-xs leading-relaxed text-muted-foreground/80">
                    Scene accelerates its Occasion Engine on NVIDIA hardware to simulate fabric flow, render lighting
                    passes, and tailor wardrobe recommendations in real time.
                  </p>
                </div>
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
            <h2 className="text-sm font-semibold uppercase tracking-[0.45em] text-muted-foreground/70">
              Delivery Suite
            </h2>
            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {professionalDeliverables.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.05] p-7 text-left backdrop-blur-md"
                >
                  <p className="text-xs uppercase tracking-[0.45em] text-primary/80">{item.title}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground/90">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <footer className="mt-20 flex flex-col gap-3 text-sm text-muted-foreground/80 sm:flex-row sm:items-center sm:justify-between">
            <span>© 2025 Vulture Droids Studio · Occasion Engine</span>
            <span>Client Services Desk · concierge@vulturedroids.ai</span>
            <span>Schedule a wardrobe review · Book a consult session</span>
          </footer>
        </div>
      </main>
    </>
  );
};

export default Index;
