import { Link } from 'react-router-dom';
import {
  Target,
  Users,
  Calendar,
  Layers,
  GraduationCap,
  ArrowRight,
  UsersRound
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const stats = [
  { value: '2,000+', label: 'Students Reached' },
  { value: '10+', label: 'Events Conducted' },
  { value: 'Multi-disciplinary', label: 'Team of Experts' },
];

const quickNavCards = [
  {
    title: 'Our Objectives',
    description: 'Learn about our mission to connect professionals and empower youth.',
    icon: Target,
    link: '/about',
  },
  {
    title: 'Meet the Team',
    description: 'Get to know the dedicated professionals behind VIP Forum.',
    icon: Users,
    link: '/team',
  },
  {
    title: 'Events & Programs',
    description: 'Explore our workshops, seminars, and community initiatives.',
    icon: Calendar,
    link: '/events',
  },
  {
    title: 'Our Focus Areas',
    description: 'Discover how we support student development across key areas.',
    icon: Layers,
    link: '/focus',
  },
];

export default function Home() {
  const [aboutRef, aboutVisible] = useScrollAnimation<HTMLDivElement>();
  const [cardsRef, cardsVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E2761] via-[#2a3878] to-[#1E2761]">
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Professionals"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E2761] via-[#1E2761]/90 to-transparent" />
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#CADCFC]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#CADCFC]/5 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <UsersRound className="w-4 h-4 text-[#CADCFC]" />
              <span className="text-white/90 text-sm font-medium">
                Visakhapatnam's Premier Professional Network
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Empowering Professionals.{' '}
              <span className="text-[#CADCFC]">Inspiring Youth.</span>{' '}
              Building the Nation.
            </h1>

            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
              Visakha Intellectuals & Professionals Forum — A community where knowledge meets purpose. Join us in shaping tomorrow's leaders.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1E2761] font-semibold rounded-lg hover:bg-[#CADCFC] transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Know More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#1E2761] transition-all duration-200"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-16 z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="text-4xl font-bold text-[#1E2761] group-hover:text-[#2a3878] transition-colors">
                  {stat.value}
                </div>
                <div className="text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-24 bg-gray-50">
        <div
          ref={aboutRef}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
            aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-[#1E2761] font-semibold text-sm uppercase tracking-wider mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2761] mb-6">
                A Community of Professionals United by Purpose
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                VIP Forum is a vibrant platform connecting teachers, engineers, doctors, lawyers, and professionals across Visakhapatnam. We celebrate strong values, foster powerful networks, and guide the next generation toward a brighter future.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Founded to bring together the brightest minds of Visakhapatnam, we are committed to uplifting society and nurturing young talent through education, mentorship, and meaningful connections.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-[#1E2761] font-semibold hover:text-[#2a3878] transition-colors"
              >
                Read More About Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#CADCFC] rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#1E2761] rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#1E2761] font-semibold text-sm uppercase tracking-wider mb-4">
              Explore
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2761]">
              Discover What We Do
            </h2>
          </div>

          <div
            ref={cardsRef}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${
              cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {quickNavCards.map((card, index) => (
              <Link
                key={index}
                to={card.link}
                className="group bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg hover:border-[#CADCFC] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-[#CADCFC]/50 flex items-center justify-center mb-4 group-hover:bg-[#1E2761] group-hover:scale-110 transition-all duration-300">
                  <card.icon className="w-7 h-7 text-[#1E2761] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-[#1E2761] text-lg mb-2 group-hover:text-[#2a3878] transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {card.description}
                </p>
                <span className="inline-flex items-center text-[#1E2761] font-medium text-sm">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1E2761] to-[#2a3878]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <GraduationCap className="w-5 h-5 text-[#CADCFC]" />
            <span className="text-white/90 text-sm font-medium">
              Join Our Community
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 max-w-2xl mx-auto">
            Ready to Make a Difference?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Whether you're a professional wanting to contribute or a student seeking guidance — VIP Forum welcomes you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1E2761] font-semibold rounded-lg hover:bg-[#CADCFC] transition-all duration-200 shadow-lg"
          >
            Join VIP Forum Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
