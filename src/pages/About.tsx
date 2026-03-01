import { Leaf, Globe, ShieldCheck, TrendingUp, Award, Target, Zap, Users, Heart, Star, Building2, TreePine, Battery } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function About() {
    const milestones = [
        { year: '2009', title: 'Founded', desc: 'AeroSolar was founded by Dr. Arjun Mehta in a small research lab in Bangalore with a single mission: make clean energy accessible to enterprises at scale.' },
        { year: '2012', title: 'First 10 MW Deployment', desc: 'Successfully deployed our first 10 MW commercial solar array for a Fortune 500 tech campus, proving that enterprise-grade solar is viable and profitable.' },
        { year: '2015', title: 'International Expansion', desc: 'Opened offices in Dubai, Singapore, and Frankfurt to serve growing demand across Asia-Pacific and the Middle East.' },
        { year: '2018', title: 'Breakthrough Storage Tech', desc: 'Launched AeroVault — our proprietary modular energy storage platform — enabling 72-hour grid independence for industrial clients.' },
        { year: '2021', title: '1 GW Milestone', desc: 'Crossed 1 GW of total installed capacity across 8 countries, offsetting over 1 million tons of CO₂ annually.' },
        { year: '2024', title: '3 GW & Growing', desc: 'Today we operate 3.2 GW of distributed generation across 12 countries, serving 500+ enterprise clients with zero-emission power solutions.' },
    ];

    const values = [
        { icon: <Leaf size={32} />, title: 'Planet First', desc: 'Every decision we make is filtered through one question: is this good for the planet? Our engineering philosophy starts and ends with environmental impact.', color: 'emerald' },
        { icon: <ShieldCheck size={32} />, title: 'Built to Last', desc: 'We design for a 30-year horizon, not a quarterly earnings cycle. Reliability, redundancy, and resilience are non-negotiable in every system we deploy.', color: 'teal' },
        { icon: <TrendingUp size={32} />, title: 'Client ROI', desc: 'Clean energy must make financial sense. We back every project with bankable financial models and performance guarantees — your investment is protected.', color: 'sky' },
        { icon: <Users size={32} />, title: 'People Matter', desc: 'Our 400+ global team members are our greatest asset. We invest in their growth, safety, and well-being with the same rigor we apply to engineering.', color: 'indigo' },
        { icon: <Heart size={32} />, title: 'Community Impact', desc: 'Beyond commercial projects, we run AeroSolar Community, a program that funds solar installations in underserved rural communities worldwide.', color: 'rose' },
        { icon: <Globe size={32} />, title: 'Global Thinking', desc: 'Energy challenges are global. Our solutions are designed to be culturally adaptive and geographically versatile — from tropical coasts to arctic facilities.', color: 'cyan' },
    ];

    const colorMap: Record<string, { bg: string; text: string; ring: string }> = {
        emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600', ring: 'ring-emerald-200' },
        teal: { bg: 'bg-teal-100', text: 'text-teal-600', ring: 'ring-teal-200' },
        sky: { bg: 'bg-sky-100', text: 'text-sky-600', ring: 'ring-sky-200' },
        indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', ring: 'ring-indigo-200' },
        rose: { bg: 'bg-rose-100', text: 'text-rose-600', ring: 'ring-rose-200' },
        cyan: { bg: 'bg-cyan-100', text: 'text-cyan-600', ring: 'ring-cyan-200' },
    };

    const stats = [
        { label: 'Years of Innovation', value: '15+' },
        { label: 'Countries Operating', value: '12' },
        { label: 'Enterprise Clients', value: '500+' },
        { label: 'GW Installed', value: '3.2' },
        { label: 'Tons CO₂ Offset', value: '2M+' },
        { label: 'Global Team Members', value: '400+' },
    ];

    const awards = [
        { org: 'Green Tech Awards', title: '#1 Innovator', year: '2024', icon: <Award size={36} className="text-amber-500" /> },
        { org: 'Forbes Energy List', title: 'Top 10 Clean Energy Co.', year: '2023', icon: <Star size={36} className="text-amber-400" /> },
        { org: 'UN Climate Action', title: 'Global Impact Partner', year: '2022', icon: <Globe size={36} className="text-emerald-500" /> },
        { org: 'IEA Excellence', title: 'Best Storage Innovation', year: '2021', icon: <Battery size={36} className="text-violet-500" /> },
    ];

    const partners = [
        'Siemens Energy', 'Schneider Electric', 'Tesla Energy', 'Honeywell', 'ABB', 'General Electric'
    ];

    return (
        <div className="flex flex-col gap-24 pb-20 overflow-hidden">
            <SEO
                title="About AeroSolar"
                description="Our mission is to accelerate the transition to sustainable enterprise energy."
            />

            {/* SECTION 1: Hero */}
            <section className="relative bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white py-28 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1509391366360-1e97d5259d52?auto=format&fit=crop&q=80&w=1800')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-slate-900/60" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative z-10 px-4 md:px-8 max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-sm font-bold uppercase tracking-widest mb-8">
                        <Leaf size={14} /> Our Story
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                        We Don't Just Install
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300"> Solar Panels.</span>
                    </h1>
                    <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
                        We architect energy futures. AeroSolar was born from the belief that the world's most sophisticated buildings deserve the world's most advanced clean energy systems.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center mt-10">
                        <Link to="/contact">
                            <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105 shadow-xl shadow-emerald-500/30">
                                Partner With Us
                            </button>
                        </Link>
                        <Link to="/team">
                            <button className="border border-white/20 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-bold transition-all backdrop-blur-sm">
                                Meet Our Team
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* SECTION 2: Stats Bar */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto w-full -mt-12">
                <div className="frozen-glass rounded-3xl p-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center border border-white/60 shadow-2xl">
                    {stats.map((s, i) => (
                        <div key={i} className="flex flex-col items-center gap-1">
                            <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-500 to-teal-600">{s.value}</span>
                            <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">{s.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 3: Our Mission & Vision */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-10 border border-emerald-100 shadow-sm relative overflow-hidden">
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-200/50 rounded-full blur-2xl" />
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                            <Target size={12} /> Our Mission
                        </div>
                        <h2 className="text-3xl font-black text-[#0f172a] mb-4 leading-tight">To make clean energy the obvious choice for every enterprise on earth.</h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            We believe that the transition to renewable energy should not require compromise — no compromises on reliability, profitability, or performance. Our mission is to shatter those trade-offs with engineering excellence and data-driven energy design.
                        </p>
                        <p className="text-slate-600 leading-relaxed mt-4">
                            From a single rooftop array to a multi-site distributed generation network, we treat every project with the same rigorous care and ambition — because the planet deserves nothing less.
                        </p>
                    </div>
                </div>
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 border border-slate-700 shadow-2xl relative overflow-hidden text-white">
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-500/10 rounded-full blur-2xl" />
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-500/20 text-teal-300 border border-teal-500/30 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                            <Globe size={12} /> Our Vision
                        </div>
                        <h2 className="text-3xl font-black mb-4 leading-tight">A world where every building generates more energy than it consumes.</h2>
                        <p className="text-slate-300 leading-relaxed text-lg">
                            We envision a future where the global grid is a network of distributed clean power — where factories, offices, and data centers are not energy consumers but energy producers. AeroSolar is building the infrastructure for that world, today.
                        </p>
                        <p className="text-slate-400 leading-relaxed mt-4">
                            Our 2035 target: 10 GW of global installed capacity, serving 2,000+ clients, and contributing to the world shedding 10 million tons of CO₂ annually because of our work.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Our Story / Timeline */}
            <section className="bg-white/40 py-24 border-y border-white/50">
                <div className="px-4 md:px-8 max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-[#0f172a] mb-4">15 Years of Impact</h2>
                        <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">From a single lab to a global clean energy powerhouse — our journey has been driven by one constant: purpose.</p>
                    </div>
                    <div className="relative">
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-200 via-teal-300 to-emerald-200" />
                        <div className="flex flex-col gap-12">
                            {milestones.map((m, i) => (
                                <div key={i} className={`flex flex-col md:flex-row gap-6 items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                    <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <div className={`bg-white/80 rounded-2xl p-6 border border-white/80 shadow-sm hover:shadow-lg transition-shadow inline-block w-full`}>
                                            <span className="text-emerald-500 font-black text-sm uppercase tracking-widest">{m.year}</span>
                                            <h3 className="text-xl font-bold text-[#0f172a] mt-1 mb-2">{m.title}</h3>
                                            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{m.desc}</p>
                                        </div>
                                    </div>
                                    <div className="hidden md:flex w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full items-center justify-center text-white font-black text-sm shadow-lg z-10 shrink-0">
                                        {m.year.slice(2)}
                                    </div>
                                    <div className="flex-1 hidden md:block" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: Core Values */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-[#0f172a] mb-4">What We Stand For</h2>
                    <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">Our values aren't a wall poster — they're the engineering principles behind every project, partnership, and decision we make.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((v, i) => {
                        const c = colorMap[v.color];
                        return (
                            <div key={i} className="bg-white/70 rounded-3xl p-8 border border-white/80 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group">
                                <div className={`w-16 h-16 ${c.bg} ${c.text} rounded-2xl flex items-center justify-center mb-6 ring-4 ${c.ring} group-hover:scale-110 transition-transform`}>
                                    {v.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#0f172a] mb-3">{v.title}</h3>
                                <p className="text-[var(--text-secondary)] leading-relaxed text-sm">{v.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* SECTION 6: Why AeroSolar — Deep Dive */}
            <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-24 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1800')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/40" />
                <div className="relative z-10 px-4 md:px-8 max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4">Why AeroSolar Is Different</h2>
                        <p className="text-slate-300 text-lg max-w-2xl mx-auto">We've broken the mold that traditional energy companies operate in. Here's how.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { icon: <Zap size={24} />, title: 'Performance Guarantees', desc: 'We are one of the only renewable energy companies that offers legally binding performance guarantees. If your system underperforms, we pay the difference. Period.' },
                            { icon: <Building2 size={24} />, title: 'Turnkey Delivery', desc: 'From site assessment, permitting, engineering, installation, and commissioning — we handle everything. One contract, one point of accountability.' },
                            { icon: <TreePine size={24} />, title: 'Carbon-Neutral Operations', desc: "Our own operations have been 100% carbon-neutral since 2020. We don't just sell green energy — we live it." },
                            { icon: <Star size={24} />, title: '25-Year Support', desc: 'We don\'t disappear after installation. Our remote monitoring and maintenance teams ensure your system performs optimally for its entire lifespan.' },
                            { icon: <Globe size={24} />, title: 'Regulatory Mastery', desc: 'Navigating government incentives, net metering, and grid interconnection agreements is complex. Our policy team handles it all to maximize your financial return.' },
                            { icon: <Award size={24} />, title: 'Award-Winning Engineering', desc: 'Recognized by Forbes, GreenTech Alliance, and the IEA, our engineering teams are consistently ranked among the best in the clean energy sector globally.' },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-xl flex items-center justify-center shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 7: Technology & Innovation */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-[#0f172a] mb-4">Our Technology Stack</h2>
                    <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">We don't just deploy off-the-shelf components. We engineer integrated energy ecosystems using the best available technology.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="relative rounded-3xl overflow-hidden shadow-xl group h-64">
                        <img src="https://images.unsplash.com/photo-1509391366360-1e97d5259d52?auto=format&fit=crop&q=80&w=800" alt="Solar Technology" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-0 p-6">
                            <h3 className="text-white text-xl font-bold">AeroPanel Pro Series</h3>
                            <p className="text-slate-300 text-sm mt-1">23.5% efficiency monocrystalline modules with integrated microinverters</p>
                        </div>
                    </div>
                    <div className="relative rounded-3xl overflow-hidden shadow-xl group h-64">
                        <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=800" alt="Wind Technology" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-0 p-6">
                            <h3 className="text-white text-xl font-bold">AeroTurbine V-Series</h3>
                            <p className="text-slate-300 text-sm mt-1">Vertical-axis wind turbines generating power at wind speeds as low as 2 m/s</p>
                        </div>
                    </div>
                    <div className="relative rounded-3xl overflow-hidden shadow-xl group h-64">
                        <img src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=800" alt="Storage Technology" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-0 p-6">
                            <h3 className="text-white text-xl font-bold">AeroVault ESS</h3>
                            <p className="text-slate-300 text-sm mt-1">Modular lithium-iron-phosphate storage enabling up to 72-hour grid independence</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 8: Awards & Recognition */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black text-[#0f172a] mb-4">Awards & Recognition</h2>
                    <p className="text-[var(--text-secondary)] text-lg">Our work speaks for itself — but it's nice when the world takes notice.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {awards.map((a, i) => (
                        <div key={i} className="frozen-glass p-8 rounded-3xl border border-white/60 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="flex justify-center mb-4">{a.icon}</div>
                            <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-2">{a.org} · {a.year}</p>
                            <h4 className="text-lg font-black text-[#0f172a]">{a.title}</h4>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 9: Partners */}
            <section className="bg-white/40 py-16 border-y border-white/50">
                <div className="px-4 md:px-8 max-w-7xl mx-auto">
                    <p className="text-center text-sm font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-10">Strategic Technology Partners</p>
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                        {partners.map((p, i) => (
                            <div key={i} className="frozen-glass px-6 py-3 rounded-2xl border border-white/60 text-[var(--text-secondary)] font-bold text-sm hover:text-[var(--accent)] transition-colors shadow-sm">
                                {p}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 10: CTA */}
            <section className="px-4 md:px-8 max-w-4xl mx-auto text-center">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-12 md:p-16 shadow-2xl shadow-emerald-500/20 relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-400/20 rounded-full blur-3xl" />
                    <div className="relative z-10">
                        <h2 className="text-4xl font-black text-white mb-4">Ready to Write Your Chapter?</h2>
                        <p className="text-emerald-50 text-lg mb-8 max-w-xl mx-auto">Join 500+ enterprises that have partnered with AeroSolar to decarbonize their operations and lock in long-term energy savings.</p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link to="/contact">
                                <button className="bg-white text-emerald-700 px-8 py-4 rounded-2xl font-black hover:scale-105 transition-all shadow-xl">
                                    Start Your Project
                                </button>
                            </Link>
                            <Link to="/team">
                                <button className="border-2 border-white/40 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all">
                                    Meet the Team
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default About;
