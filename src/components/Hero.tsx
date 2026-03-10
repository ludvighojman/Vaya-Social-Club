const COL_SEEDS = [
  [10, 20, 30, 40],
  [91, 82, 73, 64],
  [15, 25, 35, 45],
  [101, 102, 103, 104],
  [201, 202, 203, 204],
];

const COL_CONFIG = [
  { direction: 'up', duration: 40 },
  { direction: 'down', duration: 35 },
  { direction: 'up', duration: 45 },
  { direction: 'down', duration: 38 },
  { direction: 'up', duration: 42 },
];

export function Hero() {
  return (
    <section className="relative h-[90vh] w-full flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Rolling image columns */}
        <div className="absolute inset-0 flex flex-row gap-5 p-5">
          {COL_SEEDS.map((seeds, colIdx) => {
            const { direction, duration } = COL_CONFIG[colIdx];
            const images = seeds.map(seed => `https://picsum.photos/seed/${seed}/400/600`);
            const strip = [...images, ...images];
            return (
              <div key={colIdx} className="flex-1 overflow-hidden">
                <div
                  className="flex flex-col gap-5 w-full"
                  style={{
                    height: 'max-content',
                    animation: `scroll-${direction} ${duration}s linear infinite`,
                  }}
                >
                  {strip.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className="w-full aspect-[2/3] object-cover rounded-2xl flex-shrink-0"
                      draggable={false}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/60 to-background-dark/30 opacity-90" />
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
      </div>

      {/* Text content */}
      <div className="relative z-10 px-6 pb-20 md:px-20 max-w-5xl">
        <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase italic mb-4 drop-shadow-2xl brush-script-distressed" style={{color: 'white', WebkitTextStroke: '0', backgroundImage: 'none'}}>
          <span style={{fontFamily: "'Edo SZ', sans-serif"}}>Run club born <br/>in </span><span className="text-primary">Lisbon.</span>
        </h1>
        <p className="text-white/90 text-xl md:text-2xl font-medium mb-8 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">event</span>
          Next Run: March 14th.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-primary text-white font-black text-lg px-10 py-5 rounded-none shadow-[8px_8px_0px_0px_rgba(255,102,0,0.3)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase tracking-widest">
            JOIN THE COMMUNITY
          </button>
          <a href="/events" className="border-2 border-white text-white font-black text-lg px-10 py-5 rounded-none shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 hover:bg-white hover:!text-black transition-all uppercase tracking-widest">
            UPCOMING EVENTS
          </a>
        </div>
      </div>
    </section>
  );
}
