// Placeholder video — 1976 Marathon Man trailer (public domain), replace with your own footage
const PLACEHOLDER_VIDEO = 'https://archive.org/download/turner_video_790/790.mp4';

export function Hero() {
  return (
    <section className="relative h-[100vh] w-full flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={PLACEHOLDER_VIDEO}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-background-dark/60" />
      </div>

      <div className="relative z-10 px-8 pb-24 md:px-20 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-black leading-none tracking-tight uppercase mb-8" style={{color: 'white', backgroundImage: 'none'}}>
          <span style={{fontFamily: "'Edo SZ', sans-serif"}}>Run club born<br/>in </span><span className="text-primary">Lisbon.</span>
        </h1>
        <p className="text-white/60 text-sm tracking-[0.2em] uppercase font-medium flex items-center gap-3">
          <span className="w-6 h-px bg-primary inline-block" />
          Next Run: March 14th
        </p>
      </div>
    </section>
  );
}
