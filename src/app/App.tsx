import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Equipment } from './components/Equipment';
import { Events } from './components/Events';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Hero />
      <Features />
      <Pricing />
      <Equipment />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
}
