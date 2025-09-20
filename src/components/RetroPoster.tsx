import { cn } from "@/lib/utils";

interface RetroPosterProps {
  image: string;
  label: string;
  headline: string;
  caption: string;
  accent?: "orange" | "violet" | "charcoal";
  align?: "left" | "right";
  className?: string;
  delay?: number;
}

const accentGradients: Record<NonNullable<RetroPosterProps["accent"]>, string> = {
  orange: "from-primary/60 via-primary/20 to-transparent border-primary/40",
  violet: "from-[#B388FF]/60 via-[#5125FF]/25 to-transparent border-[#8757FF]/40",
  charcoal: "from-foreground/40 via-foreground/10 to-transparent border-foreground/30",
};

const RetroPoster = ({
  image,
  label,
  headline,
  caption,
  accent = "orange",
  align = "left",
  className,
  delay = 0,
}: RetroPosterProps) => {
  return (
    <article
      className={cn(
        "group poster-floating",
        align === "right" ? "self-start" : "self-end"
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-[28px] border bg-white/[0.05] backdrop-blur-2xl shadow-[0_24px_70px_rgba(16,9,5,0.35)] transition-transform duration-500",
          "before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.55),transparent_65%)] before:opacity-60 before:mix-blend-screen",
          className
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-80 transition-opacity duration-500 group-hover:opacity-100",
            accentGradients[accent]
          )}
          aria-hidden="true"
        />
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={image}
            alt={headline}
            className="absolute inset-0 h-full w-full object-cover object-top brightness-[1.08] contrast-[1.18] saturate-[1.25] transition-transform duration-700 group-hover:scale-[1.05]"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_35%)] opacity-70 mix-blend-screen" />
          <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.08)_0,rgba(255,255,255,0.08)_1px,transparent_3px,transparent_6px)] opacity-30" />
        </div>
        <div className="relative px-7 pb-7 pt-6 text-left text-white">
          <p className="text-[11px] uppercase tracking-[0.6em] text-white/70">{label}</p>
          <h3 className="mt-3 text-3xl font-black leading-tight tracking-tight drop-shadow-[0_6px_20px_rgba(16,9,5,0.55)]">
            {headline}
          </h3>
          <p className="mt-4 max-w-[18rem] text-sm leading-relaxed text-white/80">
            {caption}
          </p>
        </div>
      </div>
    </article>
  );
};

export default RetroPoster;
