import { Github, Linkedin, Mail, User, Users, Globe, Star, Award, Code2, Leaf, Zap, BookOpen, TrendingUp, Plane, Lightbulb, Heart, Dumbbell } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

function Team() {

    const founder = {
        name: 'Dr. Arjun Mehta',
        role: 'Founder & Chief Executive Officer',
        initials: 'AM',
        gradient: 'from-emerald-500 to-teal-600',
        badge: 'Founder',
        bio: `Dr. Arjun Mehta founded AeroSolar in 2009 after a decade of research in photovoltaic engineering at IIT Bombay and Stanford University. Driven by a conviction that enterprise-scale buildings must become energy producers — not just consumers — he bootstrapped the company from a 3-person research lab into a global clean energy powerhouse spanning 12 countries.

        Arjun holds a Ph.D. in Electrical Engineering with a specialization in photovoltaic systems and grid integration. Before AeroSolar, he consulted for the International Energy Agency (IEA) and contributed to India's National Solar Mission framework. His paper "Distributed Generation at Scale: A Micro-Grid Architecture for Commercial Real Estate" is cited in over 300 academic publications.

        Today, Arjun leads AeroSolar's executive team with the same philosophy he started with: technology must serve the planet first, and profit will follow. Under his leadership, the company has delivered over 3.2 GW of clean energy installations and offset 2 million tons of CO₂ annually.`,
        achievements: [
            'Forbes Energy Disruptor of the Year, 2022',
            'TIME100 Most Influential in Climate Tech, 2023',
            'IEA Young Innovator Award, 2011',
            'Stanford Clean Energy Fellowship Alumni',
        ],
        quote: '"The most powerful force for decarbonization is not policy or protest — it is making clean energy so financially compelling that choosing otherwise becomes irrational."',
        social: { linkedin: '#', twitter: '#', web: '#' },
    };

    const leadership = [
        {
            name: 'Dr. Priya Sharma',
            role: 'Chief Technology Officer',
            initials: 'PS',
            gradient: 'from-sky-500 to-indigo-600',
            bio: 'Leading AeroSolar\'s R&D division since 2014, Dr. Sharma holds 12 patents in battery storage and smart grid management. Former researcher at MIT Energy Initiative.',
            expertise: ['Battery Storage', 'Smart Grid', 'Power Electronics'],
        },
        {
            name: 'Marcus Johnson',
            role: 'Chief Operating Officer',
            initials: 'MJ',
            gradient: 'from-amber-500 to-orange-600',
            bio: 'Marcus brings 18 years of large-scale infrastructure deployment experience from GE Renewable Energy. He has overseen 200+ MW project deliveries across 4 continents.',
            expertise: ['Project Management', 'Supply Chain', 'International Ops'],
        },
        {
            name: 'Sophia Chen',
            role: 'Chief Financial Officer',
            initials: 'SC',
            gradient: 'from-violet-500 to-purple-600',
            bio: 'Former Goldman Sachs Managing Director specializing in green infrastructure finance. Sophia has structured over $2B in renewable energy project financing since joining AeroSolar.',
            expertise: ['Green Finance', 'SREC Markets', 'Tax Equity'],
        },
        {
            name: 'Ravi Nair',
            role: 'VP of Engineering',
            initials: 'RN',
            gradient: 'from-teal-500 to-emerald-600',
            bio: 'Ravi leads a 120-person global engineering team that designs and commissions AeroSolar\'s most complex micro-grid installations. MSc from TU Delft in Energy Systems.',
            expertise: ['Micro-Grid Design', 'System Integration', 'SCADA'],
        },
        {
            name: 'Dr. Aisha Okafor',
            role: 'Director of Sustainability',
            initials: 'AO',
            gradient: 'from-green-500 to-teal-600',
            bio: 'Ph.D. in Environmental Science from Oxford. Dr. Okafor architects AeroSolar\'s ESG reporting framework, used as an industry benchmark by the GreenTech Alliance.',
            expertise: ['ESG Reporting', 'Carbon Accounting', 'LCA Analysis'],
        },
        {
            name: 'James O\'Brien',
            role: 'Director of Business Development',
            initials: 'JO',
            gradient: 'from-rose-500 to-pink-600',
            bio: 'James has closed over $500M in enterprise renewable energy contracts. He leads a global sales team focused on Fortune 500 clean energy transitions and utility-scale project development.',
            expertise: ['Enterprise Sales', 'PPA Structuring', 'Market Expansion'],
        },
    ];

    const engineers = [
        {
            name: 'Prince Kumar',
            role: 'Senior Full-Stack Developer',
            initials: 'PK',
            gradient: 'from-cyan-500 to-blue-600',
            badge: '💻 Developer',
            bio: 'Prince Kumar is the lead developer behind AeroSolar\'s digital platforms — including this very website, the AeroSolar client portal, and the real-time monitoring dashboard. With deep expertise in React, TypeScript, and cloud architecture, Prince has transformed how AeroSolar communicates its impact to the world.',
            expertise: ['React / TypeScript', 'Node.js / APIs', 'Cloud Infrastructure', 'UI/UX Design'],
            social: { github: 'https://github.com', linkedin: '#', mail: 'prince@aerosolar.com' },
            funFact: 'Built the live carbon offset counter from scratch — it updates every 3 seconds, reflecting real-time data from all global installations.',
        },
        {
            name: 'Ananya Roy',
            role: 'Data Engineer & Analytics Lead',
            initials: 'AR',
            gradient: 'from-pink-500 to-rose-600',
            badge: '📊 Analytics',
            bio: 'Ananya architects the data pipelines that power AeroSolar\'s real-time monitoring systems. Her work enables clients to see live energy generation data from their installations worldwide.',
            expertise: ['Python / Pandas', 'Apache Kafka', 'Power BI', 'SQL'],
            social: { github: '#', linkedin: '#', mail: 'ananya@aerosolar.com' },
            funFact: 'Processes over 50 million data points per day from AeroSolar\'s global sensor network.',
        },
        {
            name: 'Lucas Fernandez',
            role: 'DevOps & Cloud Engineer',
            initials: 'LF',
            gradient: 'from-orange-500 to-amber-600',
            badge: '☁️ Cloud',
            bio: 'Lucas maintains the cloud infrastructure that keeps AeroSolar\'s monitoring systems online with 99.99% uptime. He designed the CI/CD pipeline that allows the engineering team to ship updates in minutes.',
            expertise: ['AWS / GCP', 'Kubernetes', 'Terraform', 'CI/CD'],
            social: { github: '#', linkedin: '#', mail: 'lucas@aerosolar.com' },
            funFact: "Reduced AeroSolar's cloud infrastructure costs by 40% through a year-long optimization initiative.",
        },
    ];

    const departments = [
        { icon: <User size={20} />, name: 'Engineering', count: '120+ engineers', color: 'emerald' },
        { icon: <User size={20} />, name: 'Technology', count: '35 developers', color: 'sky' },
        { icon: <User size={20} />, name: 'Business Dev', count: '60 specialists', color: 'amber' },
        { icon: <User size={20} />, name: 'Operations', count: '85 managers', color: 'violet' },
        { icon: <User size={20} />, name: 'Sustainability', count: '25 experts', color: 'teal' },
        { icon: <User size={20} />, name: 'People & Culture', count: '20 professionals', color: 'rose' },
    ];

    const colorBtn: Record<string, string> = {
        emerald: 'bg-emerald-100 text-emerald-700',
        sky: 'bg-sky-100 text-sky-700',
        amber: 'bg-amber-100 text-amber-700',
        violet: 'bg-violet-100 text-violet-700',
        teal: 'bg-teal-100 text-teal-700',
        rose: 'bg-rose-100 text-rose-700',
    };

    return (
        <div className="w-full flex flex-col pt-4 pb-24">
            <SEO
                title="Our Leadership Team"
                description="Meet the engineers, visionaries, and experts driving AeroSolar's mission."
            />
            {/* HERO SECTION */}
            <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-28 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1800')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-900/90" />
                <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-teal-500/10 blur-[100px] rounded-full pointer-events-none" />

                <div className="relative z-10 px-4 md:px-8 max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-sm font-bold uppercase tracking-widest mb-8">
                        <Users size={14} /> The People Behind the Power
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                        Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Team</span>
                    </h1>
                    <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
                        400+ passionate engineers, developers, scientists, and business leaders united by one mission: accelerating the world's transition to clean energy.
                    </p>
                </div>
            </section>

            {/* SECTION 2: Departments Overview */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto w-full">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-black text-[#0f172a] mb-3">Our Departments</h2>
                    <p className="text-[var(--text-secondary)]">A multidisciplinary team working in perfect harmony.</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {departments.map((d, i) => (
                        <div key={i} className={`frozen-glass rounded-2xl p-5 border border-white/60 text-center hover:-translate-y-1 transition-all shadow-sm hover:shadow-lg`}>
                            <div className={`w-10 h-10 ${colorBtn[d.color]} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                                {d.icon}
                            </div>
                            <p className="font-bold text-[#0f172a] text-sm">{d.name}</p>
                            <p className="text-xs text-[var(--text-secondary)] mt-1">{d.count}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 3: Founder Spotlight */}
            <section className="bg-white/40 py-24 border-y border-white/50">
                <div className="px-4 md:px-8 max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-[#0f172a] mb-4">Our Founder</h2>
                        <p className="text-[var(--text-secondary)] text-lg">The visionary who started it all — from a university lab to a global energy company.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                        {/* Founder Card */}
                        <div className="lg:col-span-2">
                            <div className="frozen-glass rounded-3xl p-8 border border-white/70 shadow-xl text-center relative overflow-hidden">
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-300/20 rounded-full blur-3xl" />
                                <div className={`w-32 h-32 bg-gradient-to-br ${founder.gradient} rounded-3xl flex items-center justify-center text-white text-4xl font-black mx-auto mb-6 shadow-2xl shadow-emerald-500/30`}>
                                    {founder.initials}
                                </div>
                                <div className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold mb-4">
                                    {founder.badge}
                                </div>
                                <h3 className="text-2xl font-black text-[#0f172a] mb-1">{founder.name}</h3>
                                <p className="text-[var(--accent)] font-bold text-sm mb-6">{founder.role}</p>
                                <div className="flex justify-center gap-4">
                                    <a href={founder.social.linkedin} className="w-10 h-10 frozen-glass rounded-xl flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors border border-white/60 shadow-sm">
                                        <Linkedin size={18} />
                                    </a>
                                    <a href={founder.social.web} className="w-10 h-10 frozen-glass rounded-xl flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors border border-white/60 shadow-sm">
                                        <Globe size={18} />
                                    </a>
                                    <a href={founder.social.twitter} className="w-10 h-10 frozen-glass rounded-xl flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors border border-white/60 shadow-sm">
                                        <Star size={18} />
                                    </a>
                                </div>
                                <div className="mt-6 space-y-2">
                                    {founder.achievements.map((a, i) => (
                                        <div key={i} className="flex items-center gap-2 text-left bg-white/60 rounded-xl px-3 py-2 text-xs font-medium text-slate-700 border border-white/80">
                                            <Award size={12} className="text-emerald-500 shrink-0" />
                                            {a}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Founder Bio */}
                        <div className="lg:col-span-3 space-y-6">
                            <blockquote className="border-l-4 border-emerald-500 pl-6 py-2">
                                <p className="text-xl font-medium italic text-[#0f172a] leading-relaxed">{founder.quote}</p>
                            </blockquote>
                            {founder.bio.split('\n\n').filter(p => p.trim()).map((para, i) => (
                                <p key={i} className="text-[var(--text-secondary)] leading-relaxed text-lg">
                                    {para.trim()}
                                </p>
                            ))}
                            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100 mt-4">
                                <h4 className="font-bold text-[#0f172a] mb-3 flex items-center gap-2">
                                    <Leaf size={16} className="text-emerald-500" />
                                    Founder's Philosophy
                                </h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Arjun believes the clean energy revolution will not be won by idealism alone — it requires engineering excellence, financial innovation, and relentless execution. He leads by example, spending 30% of his time on-site at major installations around the world to maintain a ground-level understanding of what it takes to deliver.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Leadership Team */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-[#0f172a] mb-4">Executive Leadership</h2>
                    <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">Our leadership team brings together decades of expertise in engineering, finance, operations, and sustainability.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {leadership.map((l, i) => (
                        <div key={i} className="frozen-glass rounded-3xl p-8 border border-white/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                            <div className={`w-20 h-20 bg-gradient-to-br ${l.gradient} rounded-2xl flex items-center justify-center text-white text-2xl font-black mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                {l.initials}
                            </div>
                            <h3 className="text-xl font-black text-[#0f172a] mb-1">{l.name}</h3>
                            <p className="text-[var(--accent)] font-bold text-sm mb-4">{l.role}</p>
                            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5">{l.bio}</p>
                            <div className="flex flex-wrap gap-2">
                                {l.expertise.map((e, j) => (
                                    <span key={j} className="px-3 py-1 bg-white/70 border border-white/80 text-xs font-bold text-slate-600 rounded-full">
                                        {e}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 5: Technology Team */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 text-white relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/5 blur-[140px] rounded-full" />
                <div className="relative z-10 px-4 md:px-8 max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/20 border border-sky-500/30 text-sky-300 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                            <Code2 size={14} /> Technology Team
                        </div>
                        <h2 className="text-4xl font-black mb-4">The Digital Engineers</h2>
                        <p className="text-slate-300 text-lg max-w-2xl mx-auto">The team that builds the software, platforms, and digital infrastructure powering AeroSolar's global operations.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {engineers.map((eng, i) => (
                            <div key={i} className={`relative rounded-3xl p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-all hover:-translate-y-1 ${i === 0 ? 'ring-2 ring-sky-500/30' : ''}`}>
                                {i === 0 && (
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-sky-500/30 border border-sky-500/40 text-sky-300 text-xs font-bold px-3 py-1 rounded-full">Lead Dev</span>
                                    </div>
                                )}
                                <div className={`w-20 h-20 bg-gradient-to-br ${eng.gradient} rounded-2xl flex items-center justify-center text-white text-2xl font-black mb-6 shadow-xl`}>
                                    {eng.initials}
                                </div>
                                <div className="inline-flex items-center gap-1 px-2 py-1 bg-white/10 text-slate-300 rounded-full text-xs font-bold mb-3">
                                    {eng.badge}
                                </div>
                                <h3 className="text-xl font-black mb-1">{eng.name}</h3>
                                <p className="text-sky-400 font-bold text-sm mb-4">{eng.role}</p>
                                <p className="text-slate-300 text-sm leading-relaxed mb-5">{eng.bio}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {eng.expertise.map((e, j) => (
                                        <span key={j} className="px-3 py-1 bg-white/10 border border-white/20 text-xs font-bold text-slate-300 rounded-full">
                                            {e}
                                        </span>
                                    ))}
                                </div>

                                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Fun Fact</p>
                                    <p className="text-slate-300 text-xs leading-relaxed">{eng.funFact}</p>
                                </div>

                                <div className="flex gap-3">
                                    {eng.social.github && (
                                        <a href={eng.social.github} className="w-9 h-9 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/20 transition-all">
                                            <Github size={16} />
                                        </a>
                                    )}
                                    <a href={eng.social.linkedin} className="w-9 h-9 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/20 transition-all">
                                        <Linkedin size={16} />
                                    </a>
                                    <a href={`mailto:${eng.social.mail}`} className="w-9 h-9 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/20 transition-all">
                                        <Mail size={16} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 6: Culture & Perks */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-[#0f172a] mb-4">Life at AeroSolar</h2>
                    <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">We work hard on problems that matter — and we build a culture that makes extraordinary work possible.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: <Globe size={28} />, title: 'Remote-First', desc: 'Work from anywhere in the world. Our 400-person team spans 18 countries.' },
                        { icon: <BookOpen size={28} />, title: 'Learning Budget', desc: '$3,000 annual budget per person for courses, conferences, and certifications.' },
                        { icon: <Leaf size={28} />, title: 'Green Mission', desc: "Every team member's work directly contributes to measurable carbon reduction." },
                        { icon: <TrendingUp size={28} />, title: 'Equity for All', desc: 'All full-time employees receive stock options — we win together.' },
                        { icon: <Plane size={28} />, title: 'Unlimited PTO', desc: "We trust our team. Take the time you need — we care about output, not hours." },
                        { icon: <Lightbulb size={28} />, title: 'Innovation Days', desc: '20% time for personal projects. Some of our best products started as side experiments.' },
                        { icon: <Heart size={28} />, title: 'Impact Leave', desc: '5 days per year of paid volunteering to contribute to community solar initiatives.' },
                        { icon: <Dumbbell size={28} />, title: 'Wellness Support', desc: 'Full health coverage and a $500/year wellness stipend for gym, meditation, or sports.' },
                    ].map((perk, i) => (
                        <div key={i} className="frozen-glass rounded-2xl p-6 border border-white/60 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all text-center">
                            <div className="flex justify-center text-emerald-500 mb-4">{perk.icon}</div>
                            <h4 className="font-bold text-[#0f172a] mb-2">{perk.title}</h4>
                            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{perk.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 7: Open Roles CTA */}
            <section className="px-4 md:px-8 max-w-4xl mx-auto text-center">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-12 md:p-16 shadow-2xl shadow-emerald-500/20 relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-400/20 rounded-full blur-3xl" />
                    <div className="relative z-10">
                        <div className="flex justify-center mb-6"><Zap size={40} className="text-white" /></div>
                        <h2 className="text-4xl font-black text-white mb-4">Join the Mission</h2>
                        <p className="text-emerald-50 text-lg mb-8 max-w-xl mx-auto">We're always looking for exceptional engineers, scientists, and business leaders passionate about clean energy. Come build the future with us.</p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link to="/contact">
                                <button className="bg-white text-emerald-700 px-8 py-4 rounded-2xl font-black hover:scale-105 transition-all shadow-xl">
                                    View Open Roles
                                </button>
                            </Link>
                            <Link to="/about">
                                <button className="border-2 border-white/40 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all">
                                    Learn About Us
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Team;
