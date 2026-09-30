import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import GlobalPresence from './components/GlobalPresence';
import OurStory from './components/OurStory';
import Journey from './components/Journey';
import Services from './components/Services';
import TechFocus from './components/TechFocus';
import WhyCling from './components/WhyCling';
import FeaturedWork from './components/FeaturedWork';
import Leadership from './components/Leadership';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-light text-brand-dark overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <GlobalPresence />
        <OurStory />
        <Journey />
        <Services />
        <TechFocus />
        <WhyCling />
        <FeaturedWork />
        <Leadership />
        <Clients />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
