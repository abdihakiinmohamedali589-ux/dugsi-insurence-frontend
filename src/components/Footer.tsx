import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="/IMG_9281.PNG"
              alt="Dugsi Insurance Services"
              className="h-32 w-auto mb-4"
            />
            <p className="text-slate-600 leading-relaxed">
              Professional insurance brokerage and risk advisory services committed to protecting what matters most.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-slate-900">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors">Services</a></li>
              <li><a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-slate-900">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Personal Insurance</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Business Insurance</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Specialty Insurance</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Risk Management</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-slate-900">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-600">+252771958443</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-600">info@dugsiinsurance.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-600">admin@dugsiinsurance.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-600">123 Business Ave, Suite 100<br />City, State 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-slate-600 text-sm text-center">
              &copy; {new Date().getFullYear()} Dugsi Insurance Services. All rights reserved.
            </p>

            <div className="flex items-center space-x-6">
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
