import {
    Sun, Battery, Zap, Factory, Building2, Wrench, BarChart3,
    Cpu, ShieldCheck, ChevronRight, CheckCircle2, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function Services() {
    return (
        <div className="w-full flex flex-col pt-4 pb-24">
            <SEO
                title="Enterprise Solar Services"
                description="End-to-end solar EPC, battery storage, and microgrid engineering services."
            />
            {/* 1. HERO SECTION */}
            <section className="relative w-full min-h-[70vh] flex items-center justify-center p-6 overflow-hidden">
                <div className="absolute inset-0 bg-[#0f172a]">
                    <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1588600878108-578307a3cc9d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-in slide-in-from-bottom-5 duration-700 mt-20">
                    <div className="inline-flex py-1.5 px-4 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-bold text-xs uppercase tracking-widest rounded-full backdrop-blur-md">
                        End-to-End Solutions
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white px-4 leading-tight">
                        Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Energy</span> Services
                    </h1>
                    <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
                        From initial feasibility studies to lifetime operations and maintenance. We architect, build, and optimize enterprise-grade renewable infrastructure across the globe.
                    </p>
                </div>
            </section>

            <div className="max-w-[1400px] mx-auto w-full px-6 flex flex-col gap-32 pt-12">

                {/* --- CORE SERVICES HUB --- */}
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl font-black text-[#0f172a] mb-6">Core Infrastructure</h2>
                    <p className="text-[var(--text-secondary)] text-lg">We deliver turnkey EPC (Engineering, Procurement, and Construction) services for the most demanding energy consumers on the planet.</p>
                </div>

                {/* 2. Commercial & Industrial (C&I) */}
                <section className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative group">
                        <div className="absolute inset-0 bg-emerald-500/20 rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
                        <img
                            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
                            alt="Commercial Solar"
                            className="relative rounded-3xl shadow-2xl border border-white/50 object-cover aspect-[4/3] w-full"
                        />
                        <div className="absolute bottom-6 left-6 right-6 frozen-glass rounded-2xl p-4 flex items-center justify-between border border-white/40 shadow-xl">
                            <span className="font-bold text-[#0f172a]">Average ROI: 22%</span>
                            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-lg text-sm font-black">500kW - 5MW</span>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 space-y-6">
                        <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm border border-emerald-100 transform -rotate-3">
                            <Building2 size={32} />
                        </div>
                        <h3 className="text-3xl font-black text-[#0f172a]">Commercial & Industrial (C&I)</h3>
                        <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
                            Transform idle rooftop space and parking lots into profit centers. Our C&I solutions are engineered specifically for manufacturing facilities, logistics hubs, retail centers, and corporate campuses seeking absolute energy independence and Scope 2 emissions reduction.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Ballasted flat-roof installations (Zero penetrations)",
                                "Solar carports with integrated EV charging",
                                "Peak shaving and demand charge management",
                                "Corporate PPA and lease structuring"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* 3. Utility-Scale Solar Farms */}
                <section className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 shadow-sm border border-sky-100 transform rotate-3">
                            <Sun size={32} />
                        </div>
                        <h3 className="text-3xl font-black text-[#0f172a]">Utility-Scale Generation</h3>
                        <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
                            Massive, multi-megawatt ground-mounted arrays designed to feed directly into the high-voltage transmission grid. We handle end-to-end development including land acquisition, environmental permitting, interconnect engineering, and ISO compliance.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Single-axis and dual-axis tracking systems",
                                "High-voltage substation engineering",
                                "Agrivoltaics (Dual-use farming integration)",
                                "Utility PPA negotiation and grid modeling"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                                    <CheckCircle2 className="text-sky-500 shrink-0 mt-0.5" size={20} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-sky-500/20 rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
                        <img
                            src="https://images.unsplash.com/photo-1548611716-e522f7b24ad4?q=80&w=2070&auto=format&fit=crop"
                            alt="Utility Solar"
                            className="relative rounded-3xl shadow-2xl border border-white/50 object-cover aspect-[4/3] w-full"
                        />
                        <div className="absolute bottom-6 left-6 right-6 frozen-glass rounded-2xl p-4 flex items-center justify-between border border-white/40 shadow-xl">
                            <span className="font-bold text-[#0f172a]">Grid Export</span>
                            <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-lg text-sm font-black">5MW - 500MW+</span>
                        </div>
                    </div>
                </section>

                {/* 4. Battery Energy Storage Systems (BESS) */}
                <section className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative group">
                        <div className="absolute inset-0 bg-violet-500/20 rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
                        <img
                            src="https://images.unsplash.com/photo-1586864387789-628af9feed72?q=80&w=2070&auto=format&fit=crop"
                            alt="Battery Storage"
                            className="relative rounded-3xl shadow-2xl border border-white/50 object-cover aspect-[4/3] w-full"
                        />
                        <div className="absolute bottom-6 left-6 right-6 frozen-glass rounded-2xl p-4 flex items-center justify-between border border-white/40 shadow-xl">
                            <span className="font-bold text-[#0f172a]">Uptime: 99.99%</span>
                            <span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-lg text-sm font-black">LiFePO₄ Chem</span>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 space-y-6">
                        <div className="w-16 h-16 bg-violet-50 rounded-2xl flex items-center justify-center text-violet-600 shadow-sm border border-violet-100 transform -rotate-3">
                            <Battery size={32} />
                        </div>
                        <h3 className="text-3xl font-black text-[#0f172a]">Battery Energy Storage (BESS)</h3>
                        <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
                            Solar is intermittent; your operations are not. Our utility-grade battery systems store excess daylight generation to power your facilities through the night or during grid outages, completely eliminating expensive utility demand charges.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Lithium Iron Phosphate (LFP) safe-cell technology",
                                "Automated Time-of-Use (TOU) arbitrage",
                                "Black-start capability for grid-down scenarios",
                                "Frequency regulation and grid services revenue"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                                    <CheckCircle2 className="text-violet-500 shrink-0 mt-0.5" size={20} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* --- ANCILLARY & TECHNICAL SERVICES --- */}
                <div className="text-center max-w-3xl mx-auto mt-16">
                    <h2 className="text-4xl font-black text-[#0f172a] mb-6">Advanced Engineering & Support</h2>
                    <p className="text-[var(--text-secondary)] text-lg">Beyond installation, we provide the intelligence, maintenance, and auxiliary services required to maximize the 30-year lifespan of your assets.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* 5. Microgrids */}
                    <div className="frozen-glass rounded-3xl p-8 border border-white/60 shadow-xl frozen-glass-hover group">
                        <Cpu className="text-emerald-500 mb-6 w-12 h-12 transform group-hover:scale-110 transition-transform" />
                        <h4 className="text-xl font-black text-[#0f172a] mb-3">Microgrids & Resiliency</h4>
                        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
                            Independent energy networks that can disconnect from the traditional grid to operate autonomously. Critical for hospitals, military bases, and data centers requiring zero downtime.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-[10px] font-bold bg-white text-slate-600 px-2 py-1 rounded border border-slate-200 uppercase">Islanding controls</span>
                            <span className="text-[10px] font-bold bg-white text-slate-600 px-2 py-1 rounded border border-slate-200 uppercase">Generator sync</span>
                        </div>
                    </div>

                    {/* 6. O&M */}
                    <div className="frozen-glass rounded-3xl p-8 border border-white/60 shadow-xl frozen-glass-hover group">
                        <Wrench className="text-sky-500 mb-6 w-12 h-12 transform group-hover:scale-110 transition-transform" />
                        <h4 className="text-xl font-black text-[#0f172a] mb-3">Operations & Maintenance</h4>
                        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
                            24/7 active asset monitoring, preventative maintenance, panel washing, and rapid-response corrective repairs to ensure your system produces at or above guaranteed yields.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-[10px] font-bold bg-white text-slate-600 px-2 py-1 rounded border border-slate-200 uppercase">Thermal Drone Scans</span>
                            <span className="text-[10px] font-bold bg-white text-slate-600 px-2 py-1 rounded border border-slate-200 uppercase">IV Curve Tracing</span>
                        </div>
                    </div>

                    {/* 7. EV Charging */}
                    <div className="frozen-glass rounded-3xl p-8 border border-white/60 shadow-xl frozen-glass-hover group">
                        <Zap className="text-blue-500 mb-6 w-12 h-12 transform group-hover:scale-110 transition-transform" />
                        <h4 className="text-xl font-black text-[#0f172a] mb-3">EV Fleet Integration</h4>
                        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
                            DC Fast Charging and Level 2 infrastructure directly coupled with your solar array and battery storage to charge enterprise logistics fleets on pure sunlight.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-[10px] font-bold bg-white text-slate-600 px-2 py-1 rounded border border-slate-200 uppercase">V2G Capable</span>
                            <span className="text-[10px] font-bold bg-white text-slate-600 px-2 py-1 rounded border border-slate-200 uppercase">Fleet Load Mgt</span>
                        </div>
                    </div>

                    {/* 8. Consulting */}
                    <div className="frozen-glass rounded-3xl p-8 border border-white/60 shadow-xl frozen-glass-hover group">
                        <BarChart3 className="text-amber-500 mb-6 w-12 h-12 transform group-hover:scale-110 transition-transform" />
                        <h4 className="text-xl font-black text-[#0f172a] mb-3">Feasibility & Consulting</h4>
                        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
                            Deep-dive financial modeling, structural roof analysis, shading reports, and incentive utilization (ITC, MACRS, SRECs) before committing a single dollar to construction.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-[10px] font-bold bg-white text-slate-600 px-2 py-1 rounded border border-slate-200 uppercase">PVSyst Modeling</span>
                            <span className="text-[10px] font-bold bg-white text-slate-600 px-2 py-1 rounded border border-slate-200 uppercase">Grant Writing</span>
                        </div>
                    </div>

                    {/* 9. Technology */}
                    <div className="frozen-glass rounded-3xl p-8 border border-white/60 shadow-xl frozen-glass-hover group md:col-span-2">
                        <div className="flex items-center gap-6">
                            <div className="p-6 bg-[#0f172a] rounded-2xl text-emerald-400 shrink-0">
                                <Cpu size={48} />
                            </div>
                            <div>
                                <h4 className="text-2xl font-black text-[#0f172a] mb-2">Proprietary AI Engineering</h4>
                                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4 max-w-lg">
                                    Our in-house engineering squad utilizes custom machine learning models to analyze localized weather patterns, utility tariff schedules, and facility load profiles to design the absolute most mathematically efficient stringing and inverter layout possible.
                                </p>
                                <Link to="/about" className="text-emerald-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                    Learn about our Tech Stack <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 10. TIMELINE PROCESS */}
                <section className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-12 text-white/5 pointer-events-none transform rotate-12"><Factory size={400} /></div>

                    <h2 className="text-3xl font-black mb-12 relative z-10 text-center">The AeroSolar Delivery Method</h2>

                    <div className="relative z-10 max-w-5xl mx-auto">
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2 hidden md:block"></div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                { step: "01", title: "Discovery", desc: "Energy audit & preliminary financial modeling via satellite." },
                                { step: "02", title: "Engineering", desc: "Site walks, structural analysis, and stamped CAD designs." },
                                { step: "03", title: "Construction", desc: "Procurement, permitting, and rapid safe installation." },
                                { step: "04", title: "Commissioning", desc: "Utility interconnection, PTO, and system handoff." }
                            ].map((phase, i) => (
                                <div key={i} className="relative z-10 bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-emerald-500 hover:-translate-y-2 transition-all group">
                                    <div className="absolute -top-4 -left-4 w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center font-black text-slate-900 shadow-lg transform rotate-3">{phase.step}</div>
                                    <h4 className="font-bold text-lg text-emerald-400 mb-2 mt-2">{phase.title}</h4>
                                    <p className="text-sm text-slate-400 leading-relaxed">{phase.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 11. CTA */}
                <section className="frozen-glass rounded-3xl p-10 text-center border border-emerald-500/30 bg-emerald-50 shadow-[0_0_50px_rgba(16,185,129,0.1)] mb-12 relative overflow-hidden">
                    <div className="absolute -left-20 -top-20 text-emerald-500/10 transform -rotate-12"><ShieldCheck size={250} /></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] mb-4">Need a tailored solution?</h2>
                        <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-2xl mx-auto">
                            Every facility is unique. Talk to our advanced engineering team to get a custom roadmap for your energy independence.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/calculator">
                                <button className="bg-[#0f172a] hover:bg-slate-800 text-white font-black px-8 py-4 rounded-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto">
                                    Use ROI Calculator
                                </button>
                            </Link>
                            <Link to="/contact">
                                <button className="bg-emerald-500 hover:bg-emerald-400 text-[#0f172a] font-black px-8 py-4 rounded-xl transition-all shadow-xl hover:shadow-emerald-500/40 hover:-translate-y-1 flex justify-center items-center gap-2 w-full sm:w-auto">
                                    Request Consultation <ChevronRight size={20} />
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}

export default Services;
