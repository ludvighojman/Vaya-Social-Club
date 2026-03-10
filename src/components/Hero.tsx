export function Hero() {
  return (
    <section className="relative h-[90vh] w-full flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover brightness-75 contrast-125" 
          alt="Group of diverse runners in Lisbon with Bridge in sunset" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX12TIZ8AX_Fe2Tpr0dSbbAtUBULzdkkvG9WzrBF3MT3OP9DbSJbYfi9gCtUXklU2eXcTGOfnNqZW4KzWSyHHhEh8i_UP5NIPTDjGkYhhOAh65JVxUmFp19DPxzbVVK4TdcLfkHAZo5upv1i_teZ8csptd12sp8PIx9uLIMhqBn82_ToUGYhDFwLfqlntvW9xwiYOxYLE4SNrAMpvPkZ3bUOy5fBgYVJ9QVlLwAR3qYfZsvWjy7Iv849kt_wKJdT_vplkdS3oJ6GfJ"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-60"></div>
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
      </div>
      <div className="relative z-10 px-6 pb-20 md:px-20 max-w-5xl">
        <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase italic mb-4 drop-shadow-2xl brush-script-distressed" style={{color: 'white', WebkitTextStroke: '0', backgroundImage: 'none'}}>
          <span style={{fontFamily: "'Edo SZ', sans-serif"}}>Run club born <br/>in </span><span className="text-primary">Lisbon.</span>
        </h1>
        <p className="text-white/90 text-xl md:text-2xl font-medium mb-8 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">event</span>
          Next Run: March 14th.
        </p>
        <button className="bg-primary text-white font-black text-lg px-10 py-5 rounded-none shadow-[8px_8px_0px_0px_rgba(255,102,0,0.3)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase tracking-widest">
          JOIN THE COMMUNITY
        </button>
      </div>
    </section>
  );
}
