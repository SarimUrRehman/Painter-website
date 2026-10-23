import React from 'react';
import { PaintRoller, Home, CheckCircle2, Phone, ArrowRight } from 'lucide-react';

// Custom Cabinet Line Icon for high visual precision
const CabinetIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="12" y1="3" x2="12" y2="21" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <circle cx="8" cy="6" r="0.8" fill="currentColor" />
    <circle cx="16" cy="6" r="0.8" fill="currentColor" />
    <line x1="9" y1="14" x2="10" y2="14" strokeWidth="2.5" />
    <line x1="14" y1="14" x2="15" y2="14" strokeWidth="2.5" />
  </svg>
);

export const Services: React.FC = () => {
  const serviceCards = [
    {
      id: 'interior',
      title: 'Interior Painting',
      tagline: 'Walls, Ceilings, Trim & Doors',
      description: 'Walls, ceilings, trim, and doors for a fresh, clean look. We deliver sharp lines, immaculate surface prep, and long-lasting smooth finishes that transform your living spaces.',
      icon: <PaintRoller className="w-8 h-8 text-[#1BB5C8]" />,
      highlights: ['Crisp edges & zero mess', 'Low-VOC & odorless options', 'Drywall patching & smooth prep']
    },
    {
      id: 'exterior',
      title: 'Exterior Painting',
      tagline: 'Built For Florida Sunshine & Rain',
      description: 'Weather-resistant finishes that protect and refresh your home. Formulated specifically to shield your exterior stucco, siding, and fascia from Florida humidity, UV rays, and tropical storms.',
      icon: <Home className="w-8 h-8 text-[#1BB5C8]" />,
      highlights: ['Florida weather protection', 'Pressure washing & sealing', 'Long-lasting curb appeal']
    },
    {
      id: 'cabinet',
      title: 'Cabinet Painting',
      tagline: 'Factory-Like Smooth Enamel',
      description: 'Kitchen and bathroom cabinet refinishing at a fraction of replacement cost. Modernize your kitchen or vanities with durable, silky-smooth spray enamel finishes.',
      icon: <CabinetIcon className="w-8 h-8 text-[#1BB5C8]" />,
      highlights: ['Fraction of replacement cost', 'Flawless spray-applied finish', 'Durable, scrubbable coating']
    }
  ];

  const whyChoosePoints = [
    { title: 'Free Estimates', description: 'Fast, upfront quotes with zero pressure or obligation' },
    { title: 'Quality Paints & Materials', description: 'Premium top-tier coatings built for durability' },
    { title: 'Clean & Respectful Crew', description: 'Daily cleanup, careful masking, and prompt communication' },
    { title: 'Satisfaction Guaranteed', description: 'We inspect every detail with you before final sign-off' }
  ];

  return (
    <section id="services" className="bg-[#FAF7F2] py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1BB5C8]/10 text-[#0E8FA0] font-semibold text-xs tracking-wider uppercase mb-3">
            What We Do Best
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1E] tracking-tight">
            Our House Painting Services
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Expert residential painting tailored to Florida homes. Quality craftsmanship you can trust.
          </p>
        </div>

        {/* 3 Large Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {serviceCards.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1BB5C8] to-[#F2B705] opacity-80 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-xl bg-[#FAF7F2] border border-[#1BB5C8]/20 flex items-center justify-center mb-6 group-hover:bg-[#1BB5C8]/10 group-hover:scale-105 transition-all">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#1C1C1E] mb-1 group-hover:text-[#0E8FA0] transition-colors">
                  {service.title}
                </h3>
                <span className="text-xs font-semibold text-[#0E8FA0] uppercase tracking-wider block mb-4">
                  {service.tagline}
                </span>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Key Points */}
                <ul className="space-y-2 mb-8">
                  {service.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center text-xs font-medium text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1BB5C8] mr-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link to Contact Form */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="#contact"
                  className="inline-flex items-center text-sm font-semibold text-[#0E8FA0] hover:text-[#1BB5C8] group-hover:underline"
                >
                  <span>Request quote for this</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+18137195188"
                  className="text-xs font-bold text-[#D62828] hover:text-[#B51E1E] flex items-center gap-1"
                  title="Call to discuss"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* "Why Choose Us" Strip */}
        <div id="why-choose-us" className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1C1C1E]">
              Why Florida Homeowners Choose Us
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Dependable service, honest communication, and pride in every coat.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoosePoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start space-x-3.5 p-3 rounded-xl hover:bg-[#FAF7F2] transition"
              >
                <div className="w-7 h-7 rounded-full bg-[#1BB5C8]/15 flex items-center justify-center flex-shrink-0 mt-0.5 text-[#0E8FA0]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#1C1C1E]">{point.title}</h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
