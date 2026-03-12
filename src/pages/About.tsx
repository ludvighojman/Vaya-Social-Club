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
      <section className="py-32 px-8 md:px-20 bg-background-light">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-6">Our story</p>
        <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight text-slate-900 mb-16 max-w-2xl">
          About <span className="text-primary">Us</span>
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-slate-600">
          Vaya Social Club started as a handful of friends chasing sunrise routes through Lisbon's
          oldest neighbourhoods and grew into a community of runners, wanderers, and coffee devotees
          who believe the best way to know a city is on foot — preferably at a pace that leaves room
          for conversation. We run together, we explore together, and we always find somewhere worth
          stopping afterwards.
        </p>
      </section>

      {/* Founders */}
      <section className="py-32 px-8 md:px-20 bg-background-light">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-6">The team</p>
        <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight text-slate-900 mb-16">
          Meet the <span className="text-primary">Founders</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200">
          {founders.map((founder) => (
            <div key={founder.name} className="aspect-square relative overflow-hidden group bg-background-light">
              <div className="w-full h-full bg-slate-100 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <span className="text-7xl font-black text-slate-200 select-none">
                  {founder.initials}
                </span>
              </div>
              <div className="absolute inset-0 bg-primary flex flex-col justify-end p-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-lg font-black uppercase tracking-wide mb-1">{founder.name}</h3>
                <p className="text-xs font-bold uppercase tracking-widest mb-4 opacity-70">{founder.role}</p>
                <p className="text-sm leading-relaxed opacity-90">{founder.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
