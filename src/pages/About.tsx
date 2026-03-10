const founders = [
  {
    initials: 'AR',
    name: 'Alex Rivera',
    role: 'Co-Founder & Head of Routes',
    bio: "The pavement-obsessed route planner who mapped every alley in Lisbon so you don't have to.",
  },
  {
    initials: 'SC',
    name: 'Sam Chen',
    role: 'Co-Founder & Community Lead',
    bio: 'Believes every run is better with a stranger. Has yet to be proven wrong.',
  },
  {
    initials: 'JM',
    name: 'Jordan Matos',
    role: 'Co-Founder & Events Director',
    bio: "Turns Saturday morning suffering into something you'll brag about all week.",
  },
];

export function About() {
  return (
    <main className="pt-20">
      {/* About Us */}
      <section className="py-20 px-6 md:px-20 bg-background-light dark:bg-background-dark">
        <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-10 brush-script-distressed">
          About <span className="text-primary">Us</span>
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vaya Social Club started as a
          handful of friends chasing sunrise routes through Lisbon's oldest neighbourhoods and grew
          into a community of runners, wanderers, and coffee devotees who believe the best way to
          know a city is on foot — preferably at a pace that leaves room for conversation. We run
          together, we explore together, and we always find somewhere worth stopping afterwards.
        </p>
      </section>

      {/* Founders */}
      <section className="py-20 px-6 md:px-20 bg-slate-100 dark:bg-slate-900/50">
        <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-12 brush-script-distressed">
          Meet the <span className="text-primary">Founders</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((founder) => (
            <div key={founder.name} className="aspect-square relative overflow-hidden group rounded-lg">
              {/* Placeholder headshot */}
              <div className="w-full h-full bg-slate-300 dark:bg-slate-700 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <span className="text-6xl font-black text-slate-500 dark:text-slate-400 select-none">
                  {founder.initials}
                </span>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary flex flex-col justify-center items-center p-8 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-xl font-black uppercase tracking-widest mb-1">{founder.name}</h3>
                <p className="text-sm font-bold uppercase tracking-wider mb-4 opacity-80">{founder.role}</p>
                <p className="text-sm leading-relaxed">{founder.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
