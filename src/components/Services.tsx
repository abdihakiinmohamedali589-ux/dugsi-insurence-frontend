import { Car, Home, Heart, Briefcase, Shield, Plane, Activity, ClipboardCheck, FileText } from 'lucide-react';

export default function Services() {
  const personalServices = [
    {
      icon: Car,
      title: 'Auto Insurance',
      description: 'Coverage for personal vehicles against accidents, theft, and damages.',
    },
    {
      icon: Home,
      title: 'Homeowners Insurance',
      description: 'Protection against damages to homes and personal property.',
    },
    {
      icon: Heart,
      title: 'Life Insurance',
      description: 'Financial security for families and loved ones in the event of unforeseen circumstances.',
    },
  ];

  const businessServices = [
    {
      icon: Shield,
      title: 'Liability Insurance',
      description: 'Safeguarding businesses against legal claims and lawsuits.',
    },
    {
      icon: Briefcase,
      title: 'Property Insurance',
      description: 'Coverage for physical assets including buildings and equipment.',
    },
    {
      icon: Activity,
      title: "Workers' Compensation",
      description: 'Insurance to cover employee injuries sustained in the workplace.',
    },
  ];

  const specialtyServices = [
    {
      icon: Plane,
      title: 'Travel Insurance',
      description: 'Protection for travelers against trip cancellations, medical emergencies, and more.',
    },
    {
      icon: Activity,
      title: 'Health Insurance',
      description: 'Comprehensive health coverage for individuals and families.',
    },
  ];

  const advisoryServices = [
    {
      icon: ClipboardCheck,
      title: 'Risk Management Services',
      description: 'Thorough risk assessments to identify potential exposures and customized strategies to mitigate risks.',
    },
    {
      icon: FileText,
      title: 'Client Advisory Services',
      description: 'Ongoing consultation and regular policy reviews to ensure adequate coverage aligns with changing circumstances.',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Comprehensive insurance products tailored to meet your diverse needs
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="h-1 w-12 bg-blue-600 rounded"></div>
              <h3 className="text-3xl font-bold text-slate-900">Personal Insurance</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {personalServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-white"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl mb-4">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                  <p className="text-blue-100 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="h-1 w-12 bg-blue-600 rounded"></div>
              <h3 className="text-3xl font-bold text-slate-900">Business Insurance</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {businessServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-200"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-600 rounded-xl mb-4">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="h-1 w-12 bg-blue-600 rounded"></div>
              <h3 className="text-3xl font-bold text-slate-900">Specialty Insurance</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {specialtyServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-white"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl mb-4">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                  <p className="text-blue-100 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="h-1 w-12 bg-blue-600 rounded"></div>
              <h3 className="text-3xl font-bold text-slate-900">Advisory Services</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {advisoryServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-200"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-600 rounded-xl mb-4">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Protect What Matters Most?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get in touch with our team today for a personalized insurance consultation.
          </p>
          <a href="#contact" className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-xl inline-block">
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
