import { useState } from 'react';
import { Shield, Phone, Mail, Menu, X } from 'lucide-react';

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative bg-white">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="/IMG_9281.PNG"
              alt="Dugsi Insurance Services"
              className="h-32 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">About</a>
            <a href="#services" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Services</a>
            <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
            <a href="#contact" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition-all transform hover:scale-105 inline-block">
              Get a Quote
            </a>
          </div>
          <button
            className="md:hidden p-2 text-slate-700"
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
          <div className="md:hidden mt-4 pb-4 border-t border-slate-200 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#services" className="text-slate-700 hover:text-blue-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <a href="#contact" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition-all w-full text-center block" onClick={() => setIsMenuOpen(false)}>
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </nav>

      <div className="container mx-auto px-6 py-20 md:py-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-6 border border-blue-200">
            <Shield className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">Trusted Insurance Solutions</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-slate-900">
            Protecting What
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              Matters Most
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Professional insurance brokerage and risk advisory services committed to delivering reliable, ethical, and innovative solutions for individuals and businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
            <a href="#services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl text-center">
              Explore Our Services
            </a>
            <a href="#about" className="bg-slate-100 hover:bg-slate-200 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all border border-slate-200 text-center">
              Learn More
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 text-sm justify-center">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-blue-600" />
              <span className="text-slate-700">+252771958443</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-blue-600" />
              <span className="text-slate-700">info@dugsiinsurance.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
