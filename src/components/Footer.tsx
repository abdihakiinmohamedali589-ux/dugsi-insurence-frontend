import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="/IMG_9281.PNG"
              alt="Dugsi Insurance Services"
              className="h-16 w-auto mb-4"
            />
            <p className="text-blue-100 leading-relaxed">
              Professional insurance brokerage and risk advisory services committed to protecting what matters most.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-blue-100 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-blue-100 hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-blue-100 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Personal Insurance</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Business Insurance</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Specialty Insurance</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Risk Management</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                <span className="text-blue-100">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                <span className="text-blue-100">info@dugsiinsurance.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                <span className="text-blue-100">123 Business Ave, Suite 100<br />City, State 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-100 text-sm">
              &copy; {new Date().getFullYear()} Dugsi Insurance Services. All rights reserved.
            </p>

            <div className="flex items-center space-x-6">
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
