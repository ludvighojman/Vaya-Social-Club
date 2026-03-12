import { Link } from 'react-router-dom';

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/vayasocialclub', external: true },
  { label: 'Strava', href: 'https://www.strava.com/clubs/1844247?share_sig=55AE74D81765116681&_branch_match_id=1560490219938005435&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXLy4pSixL1EssKNDLyczL1jdLDIuq8vdIC41Msq8rSk1LLSrKzEuPTyrKLy9OLbJ1zijKz00FALOjvr09AAAA', external: true },
  { label: 'Email Us', href: 'mailto:vayasocialclub@gmail.com', external: true },
];

const navLinks = [
  { label: 'Events', to: '/events' },
  { label: 'About', to: '/about' },
  { label: 'Partnerships', to: '/partnerships' },
];

export function Newsletter() {
  return (
    <section className="py-24 px-8 md:px-20 bg-background-light">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left Column */}
        <div className="flex flex-col gap-12">

          {/* Social links */}
          <div>
            <p className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-400 mb-4">Follow</p>
            <div className="flex flex-col gap-1">
              {socialLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 text-2xl md:text-3xl font-black uppercase leading-tight text-slate-900 hover:text-primary transition-colors"
                >
                  <span className="text-primary text-xl leading-none">➔</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-400 mb-4">Explore</p>
            <div className="flex flex-col gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-2xl md:text-3xl font-black uppercase leading-tight text-slate-900 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex items-center gap-6 text-[10px] font-black tracking-[0.3em] uppercase text-slate-400">
            <span>Lisbon, PT</span>
            <span className="text-slate-200">|</span>
            <span>© 2026 Vaya Social Club</span>
          </div>
        </div>

        {/* Right Column — geometric shape */}
        <div
          className="p-12 md:p-16"
          style={{
            clipPath: 'polygon(6% 2%, 79% 0%, 100% 10%, 97% 74%, 88% 100%, 14% 98%, 0% 83%, 3% 22%)',
            backgroundColor: 'var(--color-primary)',
          }}
        >
          <p className="text-[10px] font-black tracking-[0.3em] uppercase text-black/50 mb-4">Newsletter</p>
          <h2 className="text-3xl md:text-4xl font-black uppercase leading-tight text-black mb-6">
            Stay in<br />the loop
          </h2>
          <p className="text-black/60 text-sm leading-relaxed mb-10 max-w-xs">
            Route updates, post-run social spots, and club news — straight to your inbox.
          </p>
          <form className="flex flex-col gap-6">
            <div className="border-b-2 border-black/30">
              <input
                className="w-full bg-transparent py-3 text-sm text-black placeholder:text-black/40 font-medium focus:outline-none"
                placeholder="Your email address"
                type="email"
              />
            </div>
            <button
              className="self-start flex items-center gap-3 bg-black text-white text-xs font-black tracking-[0.2em] uppercase px-8 py-4 hover:bg-slate-800 transition-colors"
              type="submit"
            >
              Sign up
              <span className="text-primary text-base leading-none">➔</span>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
