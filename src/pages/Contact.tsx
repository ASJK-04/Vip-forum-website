import { useState } from 'react';
import { MapPin, Mail, Phone, Send, Users, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    profession: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const { error: submitError } = await supabase.from('contacts').insert({
      full_name: formData.fullName,
      profession: formData.profession,
      email: formData.email,
      phone: formData.phone || null,
      message: formData.message || null,
    });

    setIsSubmitting(false);

    if (submitError) {
      setError('Something went wrong. Please try again.');
      return;
    }

    setIsSubmitted(true);
    setFormData({
      fullName: '',
      profession: '',
      email: '',
      phone: '',
      message: '',
    });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const professions = [
    'Student',
    'Teacher/Educator',
    'Engineer',
    'Doctor/Healthcare',
    'Lawyer/Legal',
    'Business Professional',
    'Researcher/Scientist',
    'Government Employee',
    'Other',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#1E2761] via-[#2a3878] to-[#1E2761] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Contact VIP Forum"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#CADCFC]/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Users className="w-4 h-4 text-[#CADCFC]" />
              <span className="text-white/90 text-sm font-medium">
                Join Our Community
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Be Part of{' '}
              <span className="text-[#CADCFC]">Something Bigger</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              Whether you're a professional wanting to contribute or a student seeking guidance — VIP Forum welcomes you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-[#1E2761] mb-2">
                  Join VIP Forum
                </h2>
                <p className="text-gray-500 mb-8">
                  Fill out the form below to become part of our growing community of changemakers.
                </p>

                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <p className="text-green-700">
                      Thank you for your interest! We'll be in touch soon.
                    </p>
                  </div>
                )}

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <p className="text-red-700">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1E2761] focus:ring-2 focus:ring-[#1E2761]/20 outline-none transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="profession" className="block text-sm font-medium text-gray-700 mb-2">
                      Profession / Field <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="profession"
                      name="profession"
                      value={formData.profession}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1E2761] focus:ring-2 focus:ring-[#1E2761]/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select your profession</option>
                      {professions.map((prof) => (
                        <option key={prof} value={prof}>{prof}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1E2761] focus:ring-2 focus:ring-[#1E2761]/20 outline-none transition-all"
                        placeholder="you@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1E2761] focus:ring-2 focus:ring-[#1E2761]/20 outline-none transition-all"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      How would you like to contribute?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1E2761] focus:ring-2 focus:ring-[#1E2761]/20 outline-none transition-all resize-none"
                      placeholder="Tell us about yourself and how you'd like to be involved with VIP Forum..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#1E2761] text-white font-semibold rounded-lg hover:bg-[#2a3878] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Join VIP Forum
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:pl-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#1E2761] mb-4">
                  Get in Touch
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Have questions about VIP Forum? Want to learn more about our programs or explore partnership opportunities? We'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#1E2761] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1E2761] mb-1">Location</h3>
                    <p className="text-gray-500">
                      Visakhapatnam, Andhra Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#1E2761] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1E2761] mb-1">Email Us</h3>
                    <p className="text-gray-500">
                      info@vipforum.org
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#1E2761] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1E2761] mb-1">Call Us</h3>
                    <p className="text-gray-500">
                      +91 XXXXX XXXXX
                    </p>
                  </div>
                </div>
              </div>

              {/* Logo display */}
              <div className="mt-8 bg-gradient-to-br from-[#f5f7ff] to-[#eef1fa] rounded-xl h-64 flex items-center justify-center border border-[#CADCFC]/40">
                <img
                  src="/Vip_Forum_logo_new.png"
                  alt="VIP Forum"
                  className="h-52 w-auto object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1E2761] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-[#1E2761] mb-2">
                How can I become a member of VIP Forum?
              </h3>
              <p className="text-gray-600">
                Simply fill out the contact form above, and our team will reach out to discuss membership options and involvement opportunities.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-[#1E2761] mb-2">
                Is there a membership fee?
              </h3>
              <p className="text-gray-600">
                VIP Forum operates as a community-driven organization. Details about any applicable fees will be discussed during the onboarding process.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-[#1E2761] mb-2">
                Can students join VIP Forum?
              </h3>
              <p className="text-gray-600">
                Absolutely! Students are welcome to participate in our programs and benefit from mentorship opportunities provided by our professional members.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-[#1E2761] mb-2">
                How often does VIP Forum conduct events?
              </h3>
              <p className="text-gray-600">
                We organize various events throughout the year, including workshops, seminars, career guidance sessions, and community programs. Stay connected through our contact form for updates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
