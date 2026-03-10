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
    <main className="pt-24 pb-20 px-6 md:px-20">
      <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-10 brush-script-distressed">
        Partnerships
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/40 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h3 className="text-xl font-black uppercase tracking-wide text-white mb-1">
              {partner.name}
            </h3>
            <p className="text-sm text-slate-400 mb-8">{partner.location}</p>

            <ul className="flex flex-col gap-5">
              {partner.perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Percent className="w-3.5 h-3.5 text-primary" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm text-slate-300 leading-snug">
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
