import { Link } from 'react-router-dom';
import { ArrowRight, Crown, Briefcase, Users, GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface TeamMember {
  name: string;
  role: string;
  background: string;
  tier: 'leadership' | 'advisor' | 'committee' | 'youth';
  initials: string;
}

const teamMembers: TeamMember[] = [
  { name: 'Mr. R. Bhaskar Rao', role: 'Founder & Director', background: 'Scientist', tier: 'leadership', initials: 'RB' },
  { name: 'Mr. Daniel M.S. Kamalakar', role: 'Secretary', background: 'World Vision', tier: 'leadership', initials: 'DK' },
  { name: 'Mrs. R. Teena Bhaskar', role: 'Organizing President', background: 'Assistant Professor', tier: 'leadership', initials: 'TB' },
  { name: 'Mr. Harsha Sundar', role: 'Senior Advisor', background: 'Scientist', tier: 'advisor', initials: 'HS' },
  { name: 'Mr. Sudhakar', role: 'Senior Advisor', background: 'Pastor', tier: 'advisor', initials: 'SD' },
  { name: 'Mr. S.S. Joshua', role: 'Senior Advisor', background: 'Research Scholar', tier: 'advisor', initials: 'SJ' },
  { name: 'Miss T. Eugenia', role: 'Organization Committee', background: 'Chegg', tier: 'committee', initials: 'TE' },
  { name: 'Mr. D. Gautham Chakravarthy', role: 'Organization Committee', background: 'Techie', tier: 'committee', initials: 'GC' },
  { name: 'Mrs. M. Felicia Daniel', role: 'Treasurer', background: 'M.Sc.', tier: 'committee', initials: 'FD' },
  { name: 'Mr. Akhil', role: 'Youth Wing (FZ)', background: 'Teacher, M.Sc.', tier: 'youth', initials: 'AK' },
];

const tierConfig = {
  leadership: {
    label: 'Leadership',
    icon: Crown,
    avatarBg: 'bg-[#1E2761]',
    badgeBg: 'bg-[#1E2761]/10',
    badgeText: 'text-[#1E2761]',
    nodeBorder: 'border-[#1E2761]',
    nodeRing: 'ring-[#1E2761]/20',
    accentLine: 'bg-[#1E2761]',
  },
  advisor: {
    label: 'Senior Advisor',
    icon: Briefcase,
    avatarBg: 'bg-[#2a5298]',
    badgeBg: 'bg-blue-50',
    badgeText: 'text-blue-700',
    nodeBorder: 'border-blue-400',
    nodeRing: 'ring-blue-200',
    accentLine: 'bg-blue-400',
  },
  committee: {
    label: 'Organization Committee',
    icon: Users,
    avatarBg: 'bg-[#1a6b5c]',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-700',
    nodeBorder: 'border-emerald-400',
    nodeRing: 'ring-emerald-200',
    accentLine: 'bg-emerald-400',
  },
  youth: {
    label: 'Youth Wing',
    icon: GraduationCap,
    avatarBg: 'bg-[#b45309]',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-700',
    nodeBorder: 'border-amber-400',
    nodeRing: 'ring-amber-200',
    accentLine: 'bg-amber-400',
  },
};

const milestoneLabels: Partial<Record<TeamMember['tier'], string>> = {
  leadership: 'Leadership Team',
  advisor: 'Senior Advisors',
  committee: 'Organization Committee',
  youth: 'Youth Wing',
};

export default function Team() {
  const [timelineRef, timelineVisible] = useScrollAnimation<HTMLDivElement>();

  let lastTier: TeamMember['tier'] | null = null;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[#1E2761] via-[#2a3878] to-[#1E2761] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="VIP Forum Team"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#CADCFC]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#CADCFC]/5 rounded-full blur-2xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Users className="w-4 h-4 text-[#CADCFC]" />
            <span className="text-white/90 text-sm font-medium">Our Leadership</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            The People Behind{' '}
            <span className="text-[#CADCFC]">VIP Forum</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Meet the dedicated professionals who drive our mission forward and make our vision a reality.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gray-50">
        <div
          ref={timelineRef}
          className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
            timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1E2761] mb-4">Meet the Team</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              From founding visionaries to youth champions — every member plays a vital role in shaping VIP Forum's impact.
            </p>
          </div>

          <div className="relative">
            {/* Vertical center line — desktop only */}
            <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1E2761] via-[#CADCFC] to-amber-300" />

            {teamMembers.map((member, index) => {
              const config = tierConfig[member.tier];
              const isLeft = index % 2 === 0;
              const showMilestone = member.tier !== lastTier;
              lastTier = member.tier;

              return (
                <div key={index}>
                  {/* Tier milestone marker */}
                  {showMilestone && (
                    <div className="relative flex items-center justify-center mb-6 mt-2">
                      {/* Line overlay to "break" the line at the badge */}
                      <div className="hidden md:block absolute left-1/2 -translate-x-px w-0.5 h-10 bg-gray-50 -top-4 z-10" />
                      <div className="relative z-20 flex items-center gap-2 bg-white border-2 border-gray-100 shadow px-4 py-2 rounded-full">
                        <div className={`w-6 h-6 rounded-full ${config.avatarBg} flex items-center justify-center`}>
                          <config.icon className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-[#1E2761]">
                          {milestoneLabels[member.tier]}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Member row */}
                  <div
                    className={`relative flex items-center mb-10 md:mb-12 ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Card side */}
                    <div
                      className={`w-full md:w-[calc(50%-2.5rem)] ml-16 md:ml-0 ${
                        isLeft ? 'md:pr-10' : 'md:pl-10'
                      }`}
                    >
                      <div className={`group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 ${config.accentLine.replace('bg-', 'border-')}`}>
                        <div className="flex items-start gap-4">
                          {/* Avatar */}
                          <div
                            className={`w-14 h-14 rounded-xl ${config.avatarBg} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-md`}
                          >
                            <span className="text-white font-bold text-sm tracking-wide">
                              {member.initials}
                            </span>
                          </div>

                          {/* Info */}
                          <div className="min-w-0">
                            <h3 className="font-bold text-[#1E2761] text-base leading-tight mb-1">
                              {member.name}
                            </h3>
                            <p className="text-sm font-medium text-gray-700 mb-2">
                              {member.role}
                            </p>
                            <span
                              className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full ${config.badgeBg} ${config.badgeText}`}
                            >
                              {member.background}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Center node */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                      <div
                        className={`w-12 h-12 rounded-full bg-white border-4 ${config.nodeBorder} ring-4 ${config.nodeRing} flex items-center justify-center shadow-md`}
                      >
                        <span className={`text-xs font-bold ${config.badgeText}`}>
                          {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Empty opposing side (desktop spacer) */}
                    <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
                  </div>
                </div>
              );
            })}

            {/* End cap */}
            <div className="relative flex justify-center mt-4">
              <div className="hidden md:block absolute left-1/2 -translate-x-px w-0.5 h-8 bg-gray-50 -top-4 z-10" />
              <div className="relative z-20 w-5 h-5 rounded-full bg-[#CADCFC] border-4 border-[#1E2761]" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '3', label: 'Leadership Members' },
              { value: '3', label: 'Senior Advisors' },
              { value: '3', label: 'Committee Members' },
              { value: '1', label: 'Youth Wing Leader' },
            ].map((stat, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5">
                <div className="text-3xl font-bold text-[#1E2761] mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1E2761] to-[#2a3878]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Want to Join Our Team?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            We're always looking for passionate professionals to contribute to our mission.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1E2761] font-semibold rounded-lg hover:bg-[#CADCFC] transition-all duration-200 shadow-lg"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
