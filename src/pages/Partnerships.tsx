import { Percent } from 'lucide-react';

const partners = [
  {
    name: 'MILA CAFE',
    location: 'Lisbon',
    perks: [
      '1 + 1 on the lunch of the day',
      '30% discount on take away',
      'Free coffee & snacks after the VAYA Run',
    ],
  },
];

export function Partnerships() {
  return (
    <main className="pt-28 pb-32 px-8 md:px-20">
      <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">Partners</p>
      <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight text-slate-900 dark:text-white mb-16">
        Partnerships
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 dark:bg-white/10">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="bg-background-light dark:bg-background-dark p-10"
          >
            <h3 className="text-xl font-black uppercase tracking-wide text-slate-900 dark:text-white mb-1">
              {partner.name}
            </h3>
            <p className="text-xs tracking-widest uppercase text-slate-400 mb-10">{partner.location}</p>

            <ul className="flex flex-col gap-6">
              {partner.perks.map((perk) => (
                <li key={perk} className="flex items-start gap-4 border-t border-black/10 dark:border-white/10 pt-6">
                  <Percent className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {perk}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
