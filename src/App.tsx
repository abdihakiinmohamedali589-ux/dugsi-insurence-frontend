import Hero from './components/Hero';
import CompanyOverview from './components/CompanyOverview';
import VisionMission from './components/VisionMission';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <CompanyOverview />
      <VisionMission />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
