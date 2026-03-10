import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { About } from './pages/About';
import { Events } from './pages/Events';
import { Partnerships } from './pages/Partnerships';

export default function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden vintage-grain font-display text-slate-900 dark:text-slate-100 selection:bg-primary selection:text-white bg-background-light dark:bg-background-dark">
      <Header />
      <Routes>
        <Route path="/" element={<>
          <Hero />
          <Stats />
          <Newsletter />
        </>} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/partnerships" element={<Partnerships />} />
      </Routes>
      <Footer />
    </div>
  );
}
