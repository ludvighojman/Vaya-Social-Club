import { Calendar, MapPin } from 'lucide-react';

const upcomingEvents = [
  {
    dateBadge: '15 MAR',
    priceBadge: 'FREE',
    title: 'SATURDAY INTERVALS',
    titleColor: 'text-slate-900 dark:text-white',
    day: 'Sunday, 6:59 AM',
    location: 'Jardim de Estrela, Lisbon',
    image: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&q=80',
  },
  {
    dateBadge: '18 MAR',
    priceBadge: '€8',
    title: 'SUNRISE YOGA',
    titleColor: 'text-primary',
    day: 'Wednesday, 4:29 PM',
    location: 'Mila Intendente',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80',
  },
];

const pastEvents = [
  {
    title: 'MOVE & GROOVE RUN',
    date: '28 Feb 2026',
    location: 'Lisbon',
    image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?w=600&q=80',
  },
  {
    title: 'NORMAL SOCIAL RUN',
    date: '21 Feb 2026',
    location: 'Lisbon',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80',
  },
  {
    title: 'VALENTINE HILL REPEATS',
    date: '14 Feb 2026',
    location: 'Lisbon',
    image: 'https://images.unsplash.com/photo-1502904550040-7534597429ae?w=600&q=80',
  },
  {
    title: 'FIRST RUN',
    date: '31 Jan 2026',
    location: 'Lisbon',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80',
  },
];

export function Events() {
  return (
    <main className="pt-28 pb-32 px-8 md:px-20">

      {/* Upcoming */}
      <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">Schedule</p>
      <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight text-slate-900 dark:text-white mb-16">
        Upcoming
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
        {upcomingEvents.map((event) => (
          <div key={event.title} className="group">
            <div className="relative aspect-[16/9] overflow-hidden mb-5">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute top-4 left-4 bg-primary text-white text-xs font-black uppercase tracking-widest px-3 py-1.5">
                {event.dateBadge}
              </span>
              <span className="absolute top-4 right-4 bg-white text-slate-900 text-xs font-black uppercase tracking-widest px-3 py-1.5">
                {event.priceBadge}
              </span>
            </div>
            <h3 className={`text-lg font-black uppercase tracking-wide mb-3 ${event.titleColor}`}>
              {event.title}
            </h3>
            <div className="flex flex-col gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>{event.day}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Past Events */}
      <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">Archive</p>
      <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight text-slate-900 dark:text-white mb-16">
        Past Events
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {pastEvents.map((event) => (
          <div key={event.title} className="relative overflow-hidden aspect-[3/4] group">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-white text-xs font-black uppercase leading-tight mb-1">{event.title}</p>
              <p className="text-white/50 text-[10px] tracking-widest">{event.date}</p>
            </div>
          </div>
        ))}
      </div>

    </main>
  );
}
