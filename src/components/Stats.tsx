import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView } from "motion/react";

// ─── Count-up hook ───────────────────────────────────────────────────────────

function useCountUp(target: number, duration = 1500) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    function tick(now: number) {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      setValue(Math.round(eased * target));
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return { value, ref };
}

// ─── Card wrapper ────────────────────────────────────────────────────────────

const cardClass =
  "p-5 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-200/60 dark:border-slate-700/40 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col";

// ─── 1. Nationalities Card ──────────────────────────────────────────────────

const regions = [
  { name: "Europe", pct: 45, color: "#ff6600" },
  { name: "Americas", pct: 25, color: "#ff8533" },
  { name: "Asia", pct: 20, color: "#ffa366" },
  { name: "Oceania", pct: 10, color: "#ffc299" },
];

function NationalitiesCard() {
  const { value, ref } = useCountUp(25);
  const [hovered, setHovered] = useState<number | null>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const barsInView = useInView(barRef, { once: true, margin: "-30px" });

  return (
    <motion.div
      className={cardClass}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: 0 }}
    >
      <p className="text-[11px] uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">
        Global Community
      </p>
      <h3 className="text-2xl md:text-3xl font-black uppercase italic leading-tight mb-0.5">
        <span ref={ref}>{value}</span>+
      </h3>
      <p className="text-sm font-bold uppercase tracking-wide text-slate-800 dark:text-slate-200 mb-3">
        Nationalities
      </p>

      {/* Bar chart */}
      <div ref={barRef} className="flex-1 flex flex-col justify-end gap-2 min-h-[100px]">
        {regions.map((r, i) => (
          <div
            key={r.name}
            className="relative flex items-center gap-2 cursor-pointer"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="text-[10px] w-16 text-right text-slate-500 dark:text-slate-400 uppercase tracking-wide shrink-0">
              {r.name}
            </span>
            <div className="flex-1 h-4 bg-slate-100 dark:bg-slate-700/50 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: r.color }}
                initial={{ width: 0 }}
                animate={barsInView ? { width: `${r.pct}%` } : { width: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ scaleX: 1.03 }}
              />
            </div>
            {hovered === i && (
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute -top-6 left-20 text-[10px] bg-slate-800 dark:bg-slate-100 text-white dark:text-slate-800 px-2 py-0.5 rounded-md whitespace-nowrap z-10"
              >
                {r.pct}% of members
              </motion.span>
            )}
          </div>
        ))}
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 leading-snug">
        Runners from all corners of the globe calling Lisbon home.
      </p>
    </motion.div>
  );
}

// ─── 2. Pace Progression Card ───────────────────────────────────────────────

const paceData = [
  { month: "Jan", seconds: 1560 },
  { month: "Mar", seconds: 1500 },
  { month: "May", seconds: 1470 },
  { month: "Jul", seconds: 1440 },
  { month: "Sep", seconds: 1420 },
  { month: "Nov", seconds: 1410 },
];

function formatPace(s: number) {
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

function PaceProgressionCard() {
  const { value, ref } = useCountUp(2330);
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);
  const chartRef = useRef<SVGSVGElement>(null);
  const chartInView = useInView(chartRef, { once: true, margin: "-30px" });

  const w = 220;
  const h = 90;
  const pad = { top: 10, right: 10, bottom: 20, left: 10 };
  const plotW = w - pad.left - pad.right;
  const plotH = h - pad.top - pad.bottom;

  const minS = Math.min(...paceData.map((d) => d.seconds)) - 20;
  const maxS = Math.max(...paceData.map((d) => d.seconds)) + 20;

  const points = paceData.map((d, i) => ({
    x: pad.left + (i / (paceData.length - 1)) * plotW,
    y: pad.top + ((d.seconds - minS) / (maxS - minS)) * plotH,
    ...d,
  }));

  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");

  const displayPace = `${Math.floor(value / 100)}:${String(value % 100).padStart(2, "0")}`;

  return (
    <motion.div
      className={cardClass}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: 0.15 }}
    >
      <p className="text-[11px] uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">
        Pace Progression
      </p>
      <h3 className="text-2xl md:text-3xl font-black uppercase italic leading-tight mb-0.5">
        <span ref={ref}>{displayPace}</span> min
      </h3>
      <p className="text-sm font-bold uppercase tracking-wide text-slate-800 dark:text-slate-200 mb-3">
        Avg 5K
      </p>

      {/* Sparkline */}
      <div className="flex-1 flex flex-col justify-end min-h-[100px]">
        <svg
          ref={chartRef}
          viewBox={`0 0 ${w} ${h}`}
          className="w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Grid lines */}
          {[0, 0.5, 1].map((t) => (
            <line
              key={t}
              x1={pad.left}
              x2={w - pad.right}
              y1={pad.top + t * plotH}
              y2={pad.top + t * plotH}
              className="stroke-slate-200 dark:stroke-slate-700"
              strokeWidth={0.5}
            />
          ))}

          {/* Animated line */}
          <motion.path
            d={linePath}
            fill="none"
            stroke="#ff6600"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={chartInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {/* Dots */}
          {points.map((p, i) => (
            <g key={i}>
              <motion.circle
                cx={p.x}
                cy={p.y}
                r={hoveredDot === i ? 5 : 3.5}
                fill="#ff6600"
                stroke="white"
                strokeWidth={1.5}
                initial={{ opacity: 0, scale: 0 }}
                animate={chartInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.8 + i * 0.08 }}
                style={{ cursor: "pointer" }}
                onMouseEnter={() => setHoveredDot(i)}
                onMouseLeave={() => setHoveredDot(null)}
              />
              {hoveredDot === i && (
                <g>
                  <rect
                    x={p.x - 18}
                    y={p.y - 20}
                    width={36}
                    height={14}
                    rx={3}
                    className="fill-slate-800 dark:fill-slate-100"
                  />
                  <text
                    x={p.x}
                    y={p.y - 10.5}
                    textAnchor="middle"
                    className="fill-white dark:fill-slate-800"
                    fontSize={8}
                    fontWeight={600}
                  >
                    {formatPace(p.seconds)}
                  </text>
                </g>
              )}
            </g>
          ))}

          {/* Month labels */}
          {points.map((p, i) =>
            i % 2 === 0 ? (
              <text
                key={i}
                x={p.x}
                y={h - 4}
                textAnchor="middle"
                className="fill-slate-400 dark:fill-slate-500"
                fontSize={7}
              >
                {p.month}
              </text>
            ) : null
          )}
        </svg>

        {/* Fastest Growth badge */}
        <motion.div
          className="self-end mt-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-[9px] uppercase tracking-wider font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
            Fastest Growth
          </span>
        </motion.div>
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-snug">
        A supportive pace for everyone, from sprinters to strollers. We're getting faster together.
      </p>
    </motion.div>
  );
}

// ─── 3. Coffees Card ────────────────────────────────────────────────────────

function CoffeesCard() {
  const { value, ref } = useCountUp(5200);
  const [isHovered, setIsHovered] = useState(false);
  const mugRef = useRef<SVGSVGElement>(null);
  const mugInView = useInView(mugRef, { once: true, margin: "-30px" });

  const formatNumber = useCallback(
    (n: number) => n.toLocaleString("en-US"),
    []
  );

  return (
    <motion.div
      className={cardClass}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <p className="text-[11px] uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">
        Post-Run Fuel
      </p>
      <h3 className="text-2xl md:text-3xl font-black uppercase italic leading-tight mb-0.5">
        <span ref={ref}>{formatNumber(value)}</span>+
      </h3>
      <p className="text-sm font-bold uppercase tracking-wide text-slate-800 dark:text-slate-200 mb-3">
        Coffees
      </p>

      {/* Coffee mug illustration */}
      <div
        className="flex-1 flex items-end justify-center min-h-[100px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <svg
          ref={mugRef}
          viewBox="0 0 120 100"
          className="w-28 h-auto"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <clipPath id="mug-clip">
              <rect x="20" y="20" width="60" height="60" rx="6" />
            </clipPath>
          </defs>

          {/* Mug body outline */}
          <rect
            x="20"
            y="20"
            width="60"
            height="60"
            rx="6"
            fill="none"
            className="stroke-slate-300 dark:stroke-slate-600"
            strokeWidth={2.5}
          />

          {/* Coffee fill */}
          <motion.rect
            x="20"
            y="80"
            width="60"
            rx="6"
            clipPath="url(#mug-clip)"
            fill="#ff6600"
            fillOpacity={0.85}
            initial={{ height: 0, y: 80 }}
            animate={
              mugInView
                ? { height: 48, y: 32 }
                : { height: 0, y: 80 }
            }
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            whileHover={{ fillOpacity: 1 }}
          />

          {/* Mug handle */}
          <path
            d="M 80 35 Q 98 35 98 50 Q 98 65 80 65"
            fill="none"
            className="stroke-slate-300 dark:stroke-slate-600"
            strokeWidth={2.5}
            strokeLinecap="round"
          />

          {/* Steam wisps */}
          {[0, 1, 2].map((i) => (
            <motion.path
              key={i}
              d={`M ${38 + i * 12} 18 Q ${42 + i * 12} 8 ${38 + i * 12} 0`}
              fill="none"
              className="stroke-slate-300 dark:stroke-slate-500"
              strokeWidth={1.5}
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={
                mugInView
                  ? {
                      opacity: isHovered ? [0.3, 0.7, 0.3] : [0.15, 0.4, 0.15],
                      y: [0, -3, 0],
                    }
                  : { opacity: 0 }
              }
              transition={{
                duration: 2,
                delay: 1 + i * 0.3,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
          ))}

          {/* Mug body fill overlay (for hover pulse) */}
          <motion.rect
            x="20"
            y="32"
            width="60"
            height="48"
            rx="6"
            clipPath="url(#mug-clip)"
            fill="white"
            initial={{ opacity: 0 }}
            animate={isHovered ? { opacity: [0, 0.15, 0] } : { opacity: 0 }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </svg>
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 leading-snug">
        The best part of Saturday morning? The debrief at Mila Santos with the crew.
      </p>
    </motion.div>
  );
}

// ─── Main Stats component ────────────────────────────────────────────────────

export function Stats() {
  return (
    <section className="py-20 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <NationalitiesCard />
        <PaceProgressionCard />
        <CoffeesCard />
      </div>
    </section>
  );
}
