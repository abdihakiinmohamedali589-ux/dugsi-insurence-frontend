import { useState } from 'react';
import { Shield, Phone, Mail, Menu, X } from 'lucide-react';

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="/IMG_9281.PNG"
              alt="Dugsi Insurance Services"
              className="h-16 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-blue-200 transition-colors font-medium">About</a>
            <a href="#services" className="hover:text-blue-200 transition-colors font-medium">Services</a>
            <a href="#contact" className="hover:text-blue-200 transition-colors font-medium">Contact</a>
            <a href="#contact" className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg font-semibold transition-all transform hover:scale-105 inline-block">
              Get a Quote
            </a>
          </div>
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="hover:text-blue-200 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#services" className="hover:text-blue-200 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#contact" className="hover:text-blue-200 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <a href="#contact" className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg font-semibold transition-all w-full text-center block" onClick={() => setIsMenuOpen(false)}>
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </nav>

      <div className="container mx-auto px-6 py-20 md:py-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
            <Shield className="h-5 w-5 text-white" />
            <span className="text-sm font-medium">Trusted Insurance Solutions</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Protecting What
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">
              Matters Most
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto">
            Professional insurance brokerage and risk advisory services committed to delivering reliable, ethical, and innovative solutions for individuals and businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
            <a href="#services" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl text-center">
              Explore Our Services
            </a>
            <a href="#about" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 px-8 py-4 rounded-lg font-semibold text-lg transition-all border border-white/20 text-center">
              Learn More
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 text-sm justify-center">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-white" />
              <span className="text-blue-100">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-white" />
              <span className="text-blue-100">info@dugsiinsurance.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
