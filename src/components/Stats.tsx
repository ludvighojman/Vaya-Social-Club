import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

const statsData = [
  { target: 70,  suffix: "",  label: "Strava Members" },
  { target: 235, suffix: "+", label: "Event Attendees" },
  { target: 6,   suffix: "",  label: "Events Hosted" },
];

function useCountUp(target: number, triggered: boolean, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    const start = performance.now();
    function tick(now: number) {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * target));
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [triggered, target, duration]);

  return value;
}

const TRIGGER_POINTS = [0.18, 0.50, 0.76];

function StatItem({
  target,
  suffix,
  label,
  opacity,
  triggered,
}: {
  target: number;
  suffix: string;
  label: string;
  opacity: MotionValue<number>;
  triggered: boolean;
}) {
  const value = useCountUp(target, triggered);

  return (
    <motion.div
      className="flex flex-col pt-8 border-t border-black/10 dark:border-white/10"
      style={{ opacity }}
    >
      <p className="text-5xl md:text-6xl font-black leading-none text-primary mb-4">
        {value}{suffix}
      </p>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
        {label}
      </p>
    </motion.div>
  );
}

export function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const runnerRef = useRef<SVGGElement>(null);
  const [triggered, setTriggered] = useState<[boolean, boolean, boolean]>([false, false, false]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const runnerX = useTransform(scrollYProgress, [0, 1], [10, 950]);

  const op0 = useTransform(scrollYProgress, [0.18, 0.32], [0, 1]);
  const op1 = useTransform(scrollYProgress, [0.50, 0.64], [0, 1]);
  const op2 = useTransform(scrollYProgress, [0.76, 0.90], [0, 1]);
  const opacities = [op0, op1, op2];

  // Runner position via direct SVG attribute manipulation
  useEffect(() => {
    return runnerX.on("change", (v) => {
      runnerRef.current?.setAttribute("transform", `translate(${v}, 213)`);
    });
  }, [runnerX]);

  // Trigger count-ups when scroll passes checkpoints
  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      setTriggered((prev) => {
        const next = [...prev] as [boolean, boolean, boolean];
        let changed = false;
        TRIGGER_POINTS.forEach((point, i) => {
          if (!prev[i] && v >= point) {
            next[i] = true;
            changed = true;
          }
        });
        return changed ? next : prev;
      });
    });
  }, [scrollYProgress]);

  return (
    <section ref={containerRef} className="h-[300vh] relative">
      <div className="sticky top-0 h-screen bg-background-light dark:bg-background-dark px-8 md:px-20 pt-28 pb-16 flex flex-col justify-between">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-16">
          <StatItem target={statsData[0].target} suffix={statsData[0].suffix} label={statsData[0].label} opacity={op0} triggered={triggered[0]} />
          <StatItem target={statsData[1].target} suffix={statsData[1].suffix} label={statsData[1].label} opacity={op1} triggered={triggered[1]} />
          <StatItem target={statsData[2].target} suffix={statsData[2].suffix} label={statsData[2].label} opacity={op2} triggered={triggered[2]} />
        </div>

        {/* Bridge */}
        <div>
          <svg
            viewBox="0 0 1000 280"
            className="w-full text-slate-900 dark:text-white"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Deck */}
            <line x1="20" y1="240" x2="980" y2="240" stroke="currentColor" strokeWidth="4" />

            {/* Tower 1 posts */}
            <line x1="293" y1="28" x2="293" y2="240" stroke="currentColor" strokeWidth="5" />
            <line x1="307" y1="28" x2="307" y2="240" stroke="currentColor" strokeWidth="5" />

            {/* Tower 2 posts */}
            <line x1="693" y1="28" x2="693" y2="240" stroke="currentColor" strokeWidth="5" />
            <line x1="707" y1="28" x2="707" y2="240" stroke="currentColor" strokeWidth="5" />

            {/* Tower cross-beams */}
            <line x1="285" y1="200" x2="315" y2="200" stroke="currentColor" strokeWidth="3" />
            <line x1="285" y1="155" x2="315" y2="155" stroke="currentColor" strokeWidth="3" />
            <line x1="285" y1="110" x2="315" y2="110" stroke="currentColor" strokeWidth="3" />
            <line x1="285" y1="65"  x2="315" y2="65"  stroke="currentColor" strokeWidth="3" />
            <line x1="285" y1="28"  x2="315" y2="28"  stroke="currentColor" strokeWidth="4" />

            <line x1="685" y1="200" x2="715" y2="200" stroke="currentColor" strokeWidth="3" />
            <line x1="685" y1="155" x2="715" y2="155" stroke="currentColor" strokeWidth="3" />
            <line x1="685" y1="110" x2="715" y2="110" stroke="currentColor" strokeWidth="3" />
            <line x1="685" y1="65"  x2="715" y2="65"  stroke="currentColor" strokeWidth="3" />
            <line x1="685" y1="28"  x2="715" y2="28"  stroke="currentColor" strokeWidth="4" />

            {/* Main cable between towers */}
            <path d="M300,32 Q500,78 700,32" stroke="currentColor" strokeWidth="3" />

            {/* Left backstay */}
            <path d="M20,185 Q160,95 300,32" stroke="currentColor" strokeWidth="3" />

            {/* Right backstay */}
            <path d="M700,32 Q840,95 980,185" stroke="currentColor" strokeWidth="3" />

            {/* Main span suspenders */}
            <line x1="333" y1="46"  x2="333" y2="240" stroke="currentColor" strokeWidth="1.5" />
            <line x1="366" y1="57"  x2="366" y2="240" stroke="currentColor" strokeWidth="1.5" />
            <line x1="400" y1="67"  x2="400" y2="240" stroke="currentColor" strokeWidth="1.5" />
            <line x1="433" y1="73"  x2="433" y2="240" stroke="currentColor" strokeWidth="1.5" />
            <line x1="466" y1="77"  x2="466" y2="240" stroke="currentColor" strokeWidth="1.5" />
            <line x1="500" y1="78"  x2="500" y2="240" stroke="currentColor" strokeWidth="1.5" />
            <line x1="534" y1="77"  x2="534" y2="240" stroke="currentColor" strokeWidth="1.5" />
            <line x1="566" y1="73"  x2="566" y2="240" stroke="currentColor" strokeWidth="1.5" />
            <line x1="600" y1="67"  x2="600" y2="240" stroke="currentColor" strokeWidth="1.5" />
            <line x1="633" y1="58"  x2="633" y2="240" stroke="currentColor" strokeWidth="1.5" />
            <line x1="666" y1="46"  x2="666" y2="240" stroke="currentColor" strokeWidth="1.5" />

            {/* Left approach suspenders */}
            <line x1="80"  y1="152" x2="80"  y2="240" stroke="currentColor" strokeWidth="1.5" />
            <line x1="150" y1="114" x2="150" y2="240" stroke="currentColor" strokeWidth="1.5" />
            <line x1="220" y1="76"  x2="220" y2="240" stroke="currentColor" strokeWidth="1.5" />

            {/* Right approach suspenders */}
            <line x1="780" y1="76"  x2="780" y2="240" stroke="currentColor" strokeWidth="1.5" />
            <line x1="850" y1="114" x2="850" y2="240" stroke="currentColor" strokeWidth="1.5" />
            <line x1="920" y1="152" x2="920" y2="240" stroke="currentColor" strokeWidth="1.5" />

            {/* Runner silhouette — positioned via JS */}
            <g ref={runnerRef} transform="translate(10, 213)" fill="#ff6600" stroke="#ff6600">
              <circle cx="14" cy="3" r="4.5" />
              <line x1="12" y1="7"  x2="8"  y2="18" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="11" y1="11" x2="18" y2="15" strokeWidth="3"   strokeLinecap="round" />
              <line x1="11" y1="11" x2="4"  y2="7"  strokeWidth="3"   strokeLinecap="round" />
              <line x1="8"  y1="18" x2="2"  y2="27" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="8"  y1="18" x2="15" y2="25" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="15" y1="25" x2="19" y2="23" strokeWidth="2.5" strokeLinecap="round" />
            </g>
          </svg>
          <p className="text-center text-[10px] tracking-[0.25em] uppercase text-slate-400 dark:text-slate-500 mt-2">
            Ponte 25 de Abril — Lisbon
          </p>
        </div>
      </div>
    </section>
  );
}
