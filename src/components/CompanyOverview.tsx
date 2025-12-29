import { useState, useEffect, useRef } from 'react';
import { Building2, Users, Award, TrendingUp } from 'lucide-react';

function useCountUp(end: number, duration: number = 2000, suffix: string = '') {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return { count: formatNumber(count), elementRef, displayValue: `${formatNumber(count)}${suffix}` };
}

export default function CompanyOverview() {
  const clientsCount = useCountUp(1000, 2000, '+');
  const growthCount = useCountUp(45, 2000, '%');

  const stats: Array<{
    icon: typeof Building2;
    label: string;
    value: string;
    isNumber: boolean;
    ref?: React.RefObject<HTMLDivElement>;
  }> = [
    { icon: Building2, label: 'Established Trust', value: 'Since 2020', isNumber: false },
    { icon: Users, label: 'Satisfied Clients', value: clientsCount.displayValue, isNumber: true, ref: clientsCount.elementRef },
    { icon: Award, label: 'Industry Recognition', value: 'Certified', isNumber: false },
    { icon: TrendingUp, label: 'Growth Rate', value: `${growthCount.displayValue} YoY`, isNumber: true, ref: growthCount.elementRef },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            About Dugsi Insurance Services
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            A professional insurance brokerage and risk advisory firm committed to delivering
            reliable, ethical, and innovative insurance solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={stat.ref || undefined}
              className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 md:p-16 text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Company</h3>
            <div className="space-y-4 text-lg text-blue-100 leading-relaxed">
              <p>
                Dugsi Insurance Services acts as a bridge between clients and reputable insurance
                underwriters, ensuring that clients receive tailored coverage, competitive pricing,
                and dependable claims support.
              </p>
              <p>
                Through a combination of experienced professionals, modern systems, and strong
                insurer partnerships, we position ourselves as a dependable partner in risk
                management and insurance solutions.
              </p>
              <p>
                Our company is structured to comply with industry standards and regulatory
                requirements, ensuring ethical conduct and financial responsibility. Our operational
                model is built around understanding client needs, assessing risks accurately, and
                delivering appropriate insurance solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
