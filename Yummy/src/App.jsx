import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import WhyUsSection from "./components/WhyUsSection";
import StatsSection from "./components/StatsSection";
import MenuSection from "./components/MenuSection";
import TestimonialsSection from "./components/TestimonialsSection";
import EventsSection from "./components/EventsSection";
import ChefsSection from "./components/ChefSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Gallery from "./components/GallerySection";
import "../src/assets/css/main.css";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyUsSection />
        <StatsSection />
        <MenuSection />
        <TestimonialsSection />
        <EventsSection />
        <ChefsSection />
        <Gallery/>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
