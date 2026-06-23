import {
  Users,
  Heart,
  Globe,
  Sparkles,
  Network,
  Target,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const objectives = [
  {
    icon: Network,
    title: 'Connect Professionals',
    description: 'Building bridges across all sectors — scientists, educators, healthcare professionals, and business leaders — to create a unified community of expertise.',
  },
  {
    icon: Heart,
    title: 'Champion Values',
    description: 'Promoting strong ethical values in professional life, encouraging integrity, accountability, and compassionate leadership.',
  },
  {
    icon: Target,
    title: 'Best Networking Platform',
    description: 'Providing the most comprehensive networking platform in the region for professionals to collaborate, share knowledge, and support each other.',
  },
  {
    icon: Sparkles,
    title: 'Empower Youth',
    description: 'Nurturing young minds through mentorship, guidance, and opportunities to build a stronger, more capable India for tomorrow.',
  },
];

export default function About() {
  const [missionRef, missionVisible] = useScrollAnimation<HTMLDivElement>();
  const [objectivesRef, objectivesVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#1E2761] via-[#2a3878] to-[#1E2761] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="About VIP Forum"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#CADCFC]/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-[#CADCFC]" />
              <span className="text-white/90 text-sm font-medium">
                Our Story
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              About{' '}
              <span className="text-[#CADCFC]">VIP Forum</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              Bringing together the brightest minds of Visakhapatnam to uplift society and nurture young talent.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-[#1E2761] font-semibold text-sm uppercase tracking-wider mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2761] mb-6">
                A Legacy of Excellence & Service
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Visakha Intellectuals & Professionals Forum (VIP Forum) was founded to bring together the brightest minds of Visakhapatnam — scientists, educators, doctors, engineers, and community leaders — under one roof to uplift society and nurture young talent.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We are a vibrant platform that celebrates diversity, fosters collaboration, and creates meaningful connections among professionals across all sectors. Our community is built on the foundation of shared knowledge, mutual respect, and a collective vision for a better tomorrow.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through workshops, seminars, mentorship programs, and community initiatives, we work tirelessly to bridge the gap between experienced professionals and aspiring youth, creating pathways for growth, learning, and development.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="VIP Forum Community"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#1E2761] rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#CADCFC] rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 bg-gray-50">
        <div
          ref={missionRef}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
            missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1E2761] mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2761] mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed italic">
              "To build a strong, value-driven professional community that empowers youth and supports the nation's growth through education, mentorship, and meaningful networking."
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-[#CADCFC] flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-[#1E2761]" />
              </div>
              <h3 className="font-semibold text-[#1E2761] mb-2">Community First</h3>
              <p className="text-gray-500 text-sm">Building strong relationships that foster growth and collaboration</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-[#CADCFC] flex items-center justify-center mx-auto mb-4">
                <Globe className="w-7 h-7 text-[#1E2761]" />
              </div>
              <h3 className="font-semibold text-[#1E2761] mb-2">Nation Building</h3>
              <p className="text-gray-500 text-sm">Contributing to India's growth through empowerment and education</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-[#CADCFC] flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7 text-[#1E2761]" />
              </div>
              <h3 className="font-semibold text-[#1E2761] mb-2">Values-Driven</h3>
              <p className="text-gray-500 text-sm">Upholding ethics, integrity, and compassion in all we do</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Objectives */}
      <section className="py-24 bg-white">
        <div
          ref={objectivesRef}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
            objectivesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-12">
            <span className="inline-block text-[#1E2761] font-semibold text-sm uppercase tracking-wider mb-4">
              What We Stand For
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2761]">
              Our Objectives
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-[#1E2761] flex items-center justify-center flex-shrink-0 group-hover:bg-[#2a3878] transition-colors">
                    <objective.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1E2761] text-xl mb-3">
                      {objective.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {objective.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1E2761] to-[#2a3878]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Join Our Growing Community
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Be part of a network that's making a real difference in Visakhapatnam.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1E2761] font-semibold rounded-lg hover:bg-[#CADCFC] transition-all duration-200 shadow-lg"
          >
            Get Involved
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
