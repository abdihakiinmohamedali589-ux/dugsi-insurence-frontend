import { Eye, Target, Heart, Users, Lightbulb, Handshake, Award, Shield } from 'lucide-react';

export default function VisionMission() {
  const values = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Upholding the highest standards of honesty and accountability.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Prioritizing client needs and delivering exceptional service.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Embracing change and seeking creative solutions.',
    },
    {
      icon: Handshake,
      title: 'Collaboration',
      description: 'Working together with clients and partners for shared success.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Striving for quality in every aspect of our operations.',
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Consistently delivering dependable and trustworthy service to our clients.',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 md:p-12 shadow-xl transform hover:scale-105 transition-all duration-300 text-white">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl mb-6">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-lg text-blue-100 leading-relaxed">
              To be a leading and trusted insurance services provider, recognized for excellence,
              innovation, and customer satisfaction.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 md:p-12 shadow-xl transform hover:scale-105 transition-all duration-300 text-white">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg text-blue-100 leading-relaxed">
              To provide comprehensive insurance solutions that protect the interests of our
              clients, foster long-term relationships, and promote financial security and peace of mind.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Core Values
          </h3>
          <p className="text-xl text-slate-600">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-xl mb-4">
                <value.icon className="h-7 w-7 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h4>
              <p className="text-slate-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
