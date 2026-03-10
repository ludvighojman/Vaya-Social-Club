import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Users, UserPlus, MapPin, Calendar } from "lucide-react";

function useCountUp(target: number, duration = 1500) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    function tick(now: number) {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * target));
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return { value, ref };
}

const stats = [
  { icon: Users,    target: 70,   suffix: "",  label: "Strava Members",  delay: 0 },
  { icon: UserPlus, target: 235,  suffix: "+", label: "Event Attendees", delay: 0.1 },
  { icon: MapPin,   target: 1645, suffix: "+", label: "Kilometers Run",  delay: 0.2 },
  { icon: Calendar, target: 6,    suffix: "",  label: "Events Hosted",   delay: 0.3 },
];

function StatCard({
  icon: Icon,
  target,
  suffix,
  label,
  delay,
}: (typeof stats)[number]) {
  const { value, ref } = useCountUp(target);

  return (
    <motion.div
      className="flex flex-col items-center text-center p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/40 shadow-sm hover:shadow-md transition-shadow duration-300"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center mb-5">
        <Icon className="w-7 h-7 text-primary" strokeWidth={1.8} />
      </div>

      <p className="text-4xl md:text-5xl font-black uppercase italic leading-none text-primary mb-2">
        <span ref={ref}>{target >= 1000 ? value.toLocaleString("en-US") : value}</span>{suffix}
      </p>

      <p className="text-sm font-bold uppercase tracking-widest text-slate-300">
        {label}
      </p>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="py-20 px-6 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
