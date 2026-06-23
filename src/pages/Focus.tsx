import {
  BookOpen,
  Heart,
  Brain,
  Users,
  Target,
  Sparkles,
  ArrowRight,
  GraduationCap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const focusAreas = [
  {
    icon: BookOpen,
    title: 'Secular & Academic Guidance',
    description: 'Providing comprehensive academic support and guidance for students to excel in their educational journey, regardless of their field of study.',
    color: 'bg-blue-500',
  },
  {
    icon: Heart,
    title: 'Mental Well-being',
    description: 'Promoting mental health awareness and providing resources to help students manage stress, anxiety, and emotional challenges during their academic years.',
    color: 'bg-pink-500',
  },
  {
    icon: Brain,
    title: 'Psychological Support',
    description: 'Offering psychological support services and counseling to address deeper emotional needs and help students develop healthy coping mechanisms.',
    color: 'bg-purple-500',
  },
  {
    icon: Users,
    title: 'Social Development',
    description: 'Fostering social skills and community engagement, helping students build meaningful relationships and become active community members.',
    color: 'bg-indigo-500',
  },
  {
    icon: Target,
    title: 'Career Perspectives',
    description: 'Guiding students through career exploration, helping them understand various professional paths and make informed decisions about their future.',
    color: 'bg-amber-500',
  },
  {
    icon: Sparkles,
    title: 'Personality Development',
    description: 'Conducting workshops and coaching sessions to develop confidence, communication skills, leadership qualities, and overall personal growth.',
    color: 'bg-emerald-500',
  },
];

export default function Focus() {
  const [cardsRef, cardsVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#1E2761] via-[#2a3878] to-[#1E2761] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photo-1522202176988-7a54e6148694?auto=compress&cs=tinysrgb&w=1920"
            alt="Student programs"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#CADCFC]/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <GraduationCap className="w-4 h-4 text-[#CADCFC]" />
              <span className="text-white/90 text-sm font-medium">
                Our Programs
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Reaching the{' '}
              <span className="text-[#CADCFC]">Next Generation</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              During the pandemic, VIP Forum reached over 2,000 students with guidance, encouragement, and support across six key areas.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2761] mb-6">
              Holistic Student Development
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At VIP Forum, we believe in nurturing the complete individual — not just academic excellence, but mental health, social skills, and personal growth. Our programs are designed to equip students with all the tools they need to succeed in life.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Through interactive workshops, one-on-one mentoring, group sessions, and community programs, we address every aspect of student well-being and development.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 bg-white">
        <div
          ref={cardsRef}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-12">
            <span className="inline-block text-[#1E2761] font-semibold text-sm uppercase tracking-wider mb-4">
              Our Focus Areas
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2761]">
              Six Pillars of Student Support
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-xl ${area.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-[#1E2761] text-xl mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#1E2761] to-[#2a3878] rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Our Impact During the Pandemic
                </h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  When students needed support the most, VIP Forum rose to the challenge. Through virtual programs and community outreach, we continued our mission without interruption.
                </p>
                <div className="flex items-center gap-6">
                  <div>
                    <div className="text-3xl font-bold text-[#CADCFC]">2,000+</div>
                    <div className="text-white/70 text-sm">Students Reached</div>
                  </div>
                  <div className="w-px h-12 bg-white/20" />
                  <div>
                    <div className="text-3xl font-bold text-[#CADCFC]">6</div>
                    <div className="text-white/70 text-sm">Focus Areas</div>
                  </div>
                  <div className="w-px h-12 bg-white/20" />
                  <div>
                    <div className="text-3xl font-bold text-[#CADCFC]">100%</div>
                    <div className="text-white/70 text-sm">Online Access</div>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <img
                  src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Students learning online"
                  className="rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2761] mb-4">
              Our Approach
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine professional expertise with compassionate mentorship to create lasting impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#CADCFC] flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#1E2761]">1</span>
              </div>
              <h3 className="font-semibold text-[#1E2761] text-lg mb-2">
                Expert-Led Sessions
              </h3>
              <p className="text-gray-500">
                Programs designed and delivered by professionals with real-world experience.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#CADCFC] flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#1E2761]">2</span>
              </div>
              <h3 className="font-semibold text-[#1E2761] text-lg mb-2">
                Interactive Learning
              </h3>
              <p className="text-gray-500">
                Hands-on workshops and activities that engage students actively in their development.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#CADCFC] flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#1E2761]">3</span>
              </div>
              <h3 className="font-semibold text-[#1E2761] text-lg mb-2">
                Ongoing Support
              </h3>
              <p className="text-gray-500">
                Continuous mentorship and guidance throughout the student's educational journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1E2761] to-[#2a3878]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Support Our Mission
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Whether you're a professional wanting to mentor or a student seeking guidance, there's a place for you at VIP Forum.
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
