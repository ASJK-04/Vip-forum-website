import { Calendar, MapPin, Gift, Heart, Atom, Users, Lightbulb, Briefcase, Book, GraduationCap, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const events = [
  {
    date: 'Jan 26, 2021',
    title: 'What Next for 10+2 Students',
    description: 'A career guidance program helping students navigate post-secondary education options and career pathways.',
    location: 'Kotthuru, Srikakulam',
    icon: GraduationCap,
    month: 'Jan',
  },
  {
    date: 'Feb 14, 2021',
    title: "Valentine's Day Special Program",
    description: 'A special event celebrating love, relationships, and community bonds with meaningful activities.',
    location: 'Visakhapatnam',
    icon: Heart,
    month: 'Feb',
  },
  {
    date: 'Feb 28, 2021',
    title: 'National Science Day Celebration',
    description: 'Honoring scientific achievement and inspiring young minds to pursue careers in science and research.',
    location: 'Visakhapatnam',
    icon: Atom,
    month: 'Feb',
  },
  {
    date: 'June 20, 2021',
    title: "Father's Day Eve Program",
    description: 'A tribute to fatherhood and the invaluable role fathers play in shaping children\'s lives and careers.',
    location: 'Visakhapatnam',
    icon: Users,
    month: 'Jun',
  },
  {
    date: 'July 17-18, 2021',
    title: 'E-Conclave: Career Guidance',
    description: 'A two-day virtual conference bringing experts to guide students on career choices and professional development.',
    location: 'Online',
    icon: Lightbulb,
    month: 'Jul',
  },
  {
    date: 'Sept 15, 2021',
    title: "Engineer's Day",
    description: 'Celebrating the contributions of engineers to society and inspiring the next generation of innovators.',
    location: 'Visakhapatnam',
    icon: Briefcase,
    month: 'Sep',
  },
  {
    date: 'Oct 5, 2021',
    title: "International Teachers' Day",
    description: 'Honoring educators who shape minds and build the foundation for future generations.',
    location: 'Visakhapatnam',
    icon: Book,
    month: 'Oct',
  },
  {
    date: 'Nov 4, 2021',
    title: 'Pre-Marital Seminar',
    description: 'Providing guidance and preparation for couples planning marriage, covering essential life skills.',
    location: 'Visakhapatnam',
    icon: Gift,
    month: 'Nov',
  },
];

const iconColors = [
  'bg-blue-500',
  'bg-pink-500',
  'bg-purple-500',
  'bg-indigo-500',
  'bg-amber-500',
  'bg-emerald-500',
  'bg-cyan-500',
  'bg-rose-500',
];

export default function Events() {
  const [timelineRef, timelineVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#1E2761] via-[#2a3878] to-[#1E2761] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/1540404/pexels-photo-1540404.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Events"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#CADCFC]/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Calendar className="w-4 h-4 text-[#CADCFC]" />
              <span className="text-white/90 text-sm font-medium">
                Our Journey
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Milestones &{' '}
              <span className="text-[#CADCFC]">Memorable Events</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              A chronicle of our journey — workshops, seminars, and community programs that have touched thousands of lives.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gray-50">
        <div
          ref={timelineRef}
          className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
            timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1E2761] mb-4">
              Our Event Journey — 2021
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Each event represents our commitment to nurturing talent, celebrating professionals, and empowering youth across Andhra Pradesh.
            </p>
          </div>

          {/* Timeline Events */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#CADCFC]" />

            {events.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Date Badge */}
                <div className={`hidden md:flex w-1/2 ${index % 2 === 0 ? 'justify-end pr-12' : 'justify-start pl-12'}`}>
                  <div className="flex items-center gap-2 text-[#1E2761] font-semibold">
                    <Clock className="w-4 h-4" />
                    {event.date}
                  </div>
                </div>

                {/* Center Icon */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <div className={`w-16 h-16 rounded-full ${iconColors[index % iconColors.length]} flex items-center justify-center shadow-lg`}>
                    <event.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Event Card */}
                <div className={`w-full md:w-1/2 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-2 md:hidden">
                      <Clock className="w-4 h-4" />
                      {event.date}
                    </div>
                    <h3 className="font-semibold text-[#1E2761] text-lg mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {event.description}
                    </p>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#1E2761] mb-2">8+</div>
              <div className="text-gray-500">Events in 2021</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#1E2761] mb-2">2,000+</div>
              <div className="text-gray-500">Students Reached</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#1E2761] mb-2">Multiple</div>
              <div className="text-gray-500">Districts Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1E2761] to-[#2a3878]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Join Our Upcoming Events
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Be part of our future initiatives and contribute to meaningful programs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1E2761] font-semibold rounded-lg hover:bg-[#CADCFC] transition-all duration-200 shadow-lg"
          >
            Stay Updated
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
