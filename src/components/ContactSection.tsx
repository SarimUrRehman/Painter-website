import React, { useState } from 'react';
import { Phone, Mail, User, MessageSquare, Send, CheckCircle2, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { Logo } from './Logo.tsx';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Interior Painting',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your phone number.';
    } else if (!/^[0-9()+\-\s]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please provide a valid phone number.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate rapid instant client-side submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 400);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: 'Interior Painting',
      message: ''
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div>
      {/* Contact Section */}
      <section id="contact" className="bg-white py-16 md:py-24 relative overflow-hidden">
        {/* Subtle decorative accents */}
        <div
          className="absolute -top-24 right-0 w-96 h-96 bg-[#1BB5C8]/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 left-0 w-80 h-80 bg-[#F2B705]/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Call Info & Warm Message */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D62828]/10 text-[#D62828] font-bold text-xs uppercase tracking-wider mb-3">
                  Get In Touch
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1C1E] tracking-tight leading-tight">
                  Let's Brighten <span className="text-[#0E8FA0]">Your Home</span>
                </h2>
                <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                  Ready to transform your home with fresh color and a flawless finish? We are ready to help.
                </p>
              </div>

              {/* Tagline Callout */}
              <div className="p-4 rounded-xl bg-[#FAF7F2] border-l-4 border-[#F2B705] shadow-xs">
                <p className="text-sm sm:text-base font-semibold text-[#1C1C1E]">
                  "Give us a call and we will be glad to help."
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Friendly advice, quick answers, and honest project appraisals.
                </p>
              </div>

              {/* Large Clickable Phone Card */}
              <a
                href="tel:+18137195188"
                className="group block bg-[#1C1C1E] text-white p-6 sm:p-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-[#F2B705]/50 transform hover:-translate-y-1"
                aria-label="Call +1 813 719 5188 directly"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#D62828] flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
                    <Phone className="w-7 h-7 text-white fill-white/20 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-semibold text-[#F2B705] tracking-widest block">
                      Direct Line • Call Anytime
                    </span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-[#F2B705] transition-colors">
                      +1 (813) 719-5188
                    </span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-300">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#1BB5C8]" /> Fast Response
                  </span>
                  <span className="text-[#1BB5C8] font-semibold group-hover:underline">
                    Tap to Call Now →
                  </span>
                </div>
              </a>

              {/* Service Area Note */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <MapPin className="w-5 h-5 text-[#0E8FA0] flex-shrink-0" />
                  <span>
                    <strong>Service Area:</strong> Florida (Tampa Bay area & surrounding communities)
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <ShieldCheck className="w-5 h-5 text-[#0E8FA0] flex-shrink-0" />
                  <span>
                    Licensed, insured, and committed to high-standard craft.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#FAF7F2] p-6 sm:p-10 rounded-2xl shadow-sm border border-slate-200">
                {submitted ? (
                  <div className="text-center py-10 px-4 animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-[#1BB5C8]/20 text-[#0E8FA0] flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1C1C1E] mb-2">
                      Thank You, {formData.name || 'Friend'}!
                    </h3>
                    <p className="text-slate-600 max-w-md mx-auto text-sm sm:text-base mb-6">
                      We have received your estimate request for <strong>{formData.service}</strong>. Our team will review your details and reach out to you shortly.
                    </p>
                    <div className="bg-white p-4 rounded-xl border border-slate-200 max-w-md mx-auto mb-6 text-left text-xs sm:text-sm space-y-1">
                      <p className="text-slate-500">
                        <strong className="text-slate-700">Phone:</strong> {formData.phone}
                      </p>
                      <p className="text-slate-500">
                        <strong className="text-slate-700">Email:</strong> {formData.email}
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href="tel:+18137195188"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D62828] text-white font-bold px-6 py-2.5 rounded-lg shadow"
                      >
                        <Phone className="w-4 h-4" />
                        Call Us Now (+1 813-719-5188)
                      </a>
                      <button
                        onClick={handleReset}
                        className="w-full sm:w-auto text-xs font-semibold text-slate-600 hover:text-slate-900 px-4 py-2"
                      >
                        Submit Another Request
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    <div className="mb-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#1C1C1E]">
                        Request a Free Quote
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500">
                        Fill in your info below or call us directly at +1 (813) 719-5188.
                      </p>
                    </div>

                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name <span className="text-[#D62828]">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. John Miller"
                          className={`w-full pl-10 pr-3.5 py-2.5 text-sm rounded-lg bg-white border ${
                            errors.name ? 'border-[#D62828] ring-1 ring-[#D62828]' : 'border-slate-300'
                          } focus:outline-none focus:ring-2 focus:ring-[#1BB5C8] text-slate-900 transition`}
                        />
                      </div>
                      {errors.name && <p className="text-xs text-[#D62828] mt-1">{errors.name}</p>}
                    </div>

                    {/* Phone & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1">
                          Phone Number <span className="text-[#D62828]">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <Phone className="w-4 h-4" />
                          </div>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="(813) 000-0000"
                            className={`w-full pl-10 pr-3.5 py-2.5 text-sm rounded-lg bg-white border ${
                              errors.phone ? 'border-[#D62828] ring-1 ring-[#D62828]' : 'border-slate-300'
                            } focus:outline-none focus:ring-2 focus:ring-[#1BB5C8] text-slate-900 transition`}
                          />
                        </div>
                        {errors.phone && <p className="text-xs text-[#D62828] mt-1">{errors.phone}</p>}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">
                          Email Address <span className="text-[#D62828]">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <Mail className="w-4 h-4" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@example.com"
                            className={`w-full pl-10 pr-3.5 py-2.5 text-sm rounded-lg bg-white border ${
                              errors.email ? 'border-[#D62828] ring-1 ring-[#D62828]' : 'border-slate-300'
                            } focus:outline-none focus:ring-2 focus:ring-[#1BB5C8] text-slate-900 transition`}
                          />
                        </div>
                        {errors.email && <p className="text-xs text-[#D62828] mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Service Dropdown */}
                    <div>
                      <label htmlFor="service" className="block text-xs font-semibold text-slate-700 mb-1">
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1BB5C8] text-slate-900 transition"
                      >
                        <option value="Interior Painting">Interior Painting (Walls, Ceilings, Trim)</option>
                        <option value="Exterior Painting">Exterior Painting (Stucco, Siding, Weatherproof)</option>
                        <option value="Cabinet Painting">Cabinet Painting (Kitchen & Bath Refinishing)</option>
                        <option value="Interior + Exterior Combo">Multiple Services / Whole Home</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1">
                        Project Details (Optional)
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your home, number of rooms, or timing preferences..."
                          className="w-full p-3 text-sm rounded-lg bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1BB5C8] text-slate-900 transition"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 bg-[#D62828] hover:bg-[#B51E1E] text-white font-bold text-base py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-red-300"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Sending Request...' : 'Request Free Quote'}</span>
                    </button>

                    <p className="text-center text-xs text-slate-500 pt-1">
                      No obligation. We will respond promptly or call{' '}
                      <a href="tel:+18137195188" className="text-[#0E8FA0] font-semibold underline">
                        +1 (813) 719-5188
                      </a>
                      .
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slim Dark Charcoal Footer */}
      <footer className="bg-[#1C1C1E] text-gray-400 py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Name */}
            <div className="flex items-center gap-3">
              <Logo size="sm" />
            </div>

            {/* Tagline & Direct Call */}
            <div className="text-center md:text-right space-y-1">
              <p className="text-xs text-[#F2B705] font-medium">
                "Give us a call and we will be glad to help."
              </p>
              <p className="text-sm">
                Phone:{' '}
                <a
                  href="tel:+18137195188"
                  className="font-bold text-white hover:text-[#1BB5C8] transition-colors"
                >
                  +1 (813) 719-5188
                </a>
              </p>
              <p className="text-xs text-gray-500">
                Serving Florida & The Tampa Bay Area
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-3">
            <p>© {new Date().getFullYear()} Florida Bay Painting LLC. All rights reserved.</p>
            <p className="text-gray-500">
              Professional Interior, Exterior & Cabinet House Painting
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
