import { useState, useEffect } from 'react';
import { Leaf, ChevronRight, Sun, Battery, Activity, Award, Star, ArrowRight, Zap, Target, Globe, ShieldCheck, TrendingUp, Building2, Factory, TreePine, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
// ThreeDHero temporarily replaced with a placeholder to diagnose blank screen
const ThreeDHero = () => <div className="absolute inset-0 w-full h-full -z-0 pointer-events-none opacity-60 bg-gradient-to-br from-emerald-900/30 to-teal-900/20 rounded-3xl" />;

function Home() {
    const [quizStep, setQuizStep] = useState(0);
    const [systemSize, setSystemSize] = useState(100);
    const [liveYield, setLiveYield] = useState(84);
    const [carbonOffset, setCarbonOffset] = useState(1450230);

    // Update base yield when system size changes
    useEffect(() => {
        setLiveYield(systemSize * 0.84);
    }, [systemSize]);

    // Simulate live data fluctuating based on system size
    useEffect(() => {
        const interval = setInterval(() => {
            setLiveYield(prev => prev + (Math.random() * 2 - 1));
            setCarbonOffset(prev => prev + Math.floor(Math.random() * 5));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col gap-24 pb-20 overflow-hidden">
            <SEO
                title="Commercial Solar & Microgrids"
                description="AeroSolar designs and deploys utility-grade solar microgrids for enterprise campuses."
            />

            {/* SECTION 1: Hero Section */}
            <section className="relative w-full max-w-[1500px] 2xl:max-w-[1800px] px-4 md:px-12 lg:px-20 mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pt-10 xl:pt-16 min-h-[90vh]">
                <ThreeDHero />

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 space-y-8 z-10 text-center lg:text-left mt-8 lg:mt-0"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full frozen-glass text-sm font-medium text-[var(--accent)] shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse"></span>
                        Global Grid Status: Stable
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-[var(--text-primary)]">
                        Powering the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-500">Future</span> Today.
                    </h1>
                    <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-xl mx-auto md:mx-0">
                        Enterprise-grade renewable energy architectures. Transition your commercial real estate to 100% clean power and lock in decades of energy independence.
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                        <Link to="/contact">
                            <button className="flex items-center gap-2 bg-[var(--accent)] text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl shadow-emerald-500/20">
                                Get a Custom Quote
                                <ChevronRight size={20} />
                            </button>
                        </Link>
                        <Link to="/calculator">
                            <button className="flex items-center gap-2 frozen-glass px-8 py-4 rounded-2xl font-bold frozen-glass-hover text-[#0f172a]">
                                Calculate ROI
                            </button>
                        </Link>
                    </div>
                </motion.div>

                {/* Interactive 3D Mockup / Live Stats */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="flex-1 relative w-full lg:max-w-xl h-[500px] perspective-1000 hidden md:block group z-10"
                >
                    <div className="absolute inset-0 frozen-glass rounded-3xl shadow-2xl flex flex-col p-8 overflow-hidden transform hover:-translate-y-2 transition-transform duration-500 border border-white/60">
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-400/30 blur-3xl rounded-full"></div>

                        <div className="flex justify-between items-center mb-8 relative z-10">
                            <h3 className="text-xl font-bold flex items-center gap-2 text-[var(--text-primary)]"><Activity size={20} className="text-emerald-500" /> Array Output</h3>
                            <span className="text-emerald-600 font-mono font-bold bg-emerald-100 px-3 py-1 rounded-full text-xs tracking-wider shadow-sm">LIVE</span>
                        </div>

                        <div className="flex-1 flex flex-col border border-white/40 rounded-2xl bg-white/30 p-6 backdrop-blur-md justify-center shadow-inner relative z-10">
                            <div className="text-center group-hover:scale-105 transition-transform duration-300">
                                <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-500 to-teal-700 font-mono tracking-tighter">
                                    {liveYield.toFixed(1)}<span className="text-3xl text-[var(--text-secondary)]"> kW</span>
                                </div>
                                <p className="text-sm font-bold text-[var(--text-secondary)] mt-1 uppercase tracking-widest">Generation Rate</p>
                            </div>

                            <div className="mt-6 px-1">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] tracking-wider">System Setup</span>
                                    <span className="font-extrabold text-[#0f172a] text-sm bg-white/60 px-2 py-0.5 rounded-md border border-white/50">{systemSize} kW</span>
                                </div>
                                <input
                                    type="range"
                                    min="20"
                                    max="500"
                                    value={systemSize}
                                    onChange={(e) => setSystemSize(Number(e.target.value))}
                                    className="w-full h-2 bg-emerald-100 rounded-lg appearance-none cursor-pointer accent-emerald-500 border border-black/5"
                                    title="Adjust System Capacity"
                                />
                                <div className="flex justify-between mt-1 text-[9px] font-semibold text-slate-400">
                                    <span>Commercial</span>
                                    <span>Industrial</span>
                                </div>
                            </div>

                            <div className="mt-8 grid grid-cols-2 gap-4">
                                <div className="bg-white/60 p-4 rounded-xl flex items-center gap-3 border border-white/80 shadow-sm transition-all hover:bg-white/80">
                                    <Sun size={24} className="text-amber-500" />
                                    <div>
                                        <p className="text-[10px] uppercase font-bold text-[var(--text-secondary)]">Irradiance</p>
                                        <p className="font-extrabold text-[#0f172a]">Optimal</p>
                                    </div>
                                </div>
                                <div className="bg-white/60 p-4 rounded-xl flex items-center gap-3 border border-white/80 shadow-sm transition-all hover:bg-white/80">
                                    <Battery size={24} className="text-emerald-500" />
                                    <div>
                                        <p className="text-[10px] uppercase font-bold text-[var(--text-secondary)]">Storage</p>
                                        <p className="font-extrabold text-[#0f172a]">98% Full</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* SECTION 2: Trust Signals */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto w-full">
                <div className="frozen-glass rounded-3xl p-8 flex flex-wrap justify-between items-center gap-8 border border-white/60 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 left-1/4 w-32 h-32 bg-sky-300/20 blur-2xl rounded-full"></div>
                    <div className="flex flex-col sm:flex-row items-center gap-5 z-10 w-full md:w-auto text-center sm:text-left">
                        <div className="p-4 bg-emerald-100/80 rounded-2xl text-emerald-600 shadow-sm"><Award size={36} /></div>
                        <div>
                            <h4 className="font-black text-2xl text-[#0f172a]">15+ Years</h4>
                            <p className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Experience</p>
                        </div>
                    </div>
                    <div className="w-full md:w-px h-px md:h-16 bg-slate-200 hidden md:block"></div>
                    <div className="flex flex-col sm:flex-row items-center gap-5 z-10 w-full md:w-auto text-center sm:text-left">
                        <div className="p-4 bg-blue-100/80 rounded-2xl text-blue-600 shadow-sm"><Star size={36} /></div>
                        <div>
                            <h4 className="font-black text-2xl text-[#0f172a]">4.9/5 Rating</h4>
                            <p className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider">500+ Enterprise Installs</p>
                        </div>
                    </div>
                    <div className="w-full md:w-px h-px md:h-16 bg-slate-200 hidden lg:block"></div>
                    <div className="flex flex-col sm:flex-row items-center gap-5 z-10 w-full md:w-auto text-center sm:text-left">
                        <div className="p-4 bg-teal-100/80 rounded-2xl text-teal-600 shadow-sm"><Target size={36} /></div>
                        <div>
                            <h4 className="font-black text-2xl text-[#0f172a]">#1 Innovator</h4>
                            <p className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Green Tech Awards</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: The AeroSolar Advantage */}
            <section className="bg-white/40 py-24 border-y border-white/50">
                <div className="px-4 md:px-8 max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4 text-[#0f172a]">The AeroSolar Advantage</h2>
                        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">Why Fortune 500 companies trust us to architect their renewable future.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white/60 p-8 rounded-3xl border border-white/80 shadow-sm hover:shadow-xl transition-shadow">
                            <ShieldCheck className="text-emerald-500 mb-6" size={48} />
                            <h3 className="text-xl font-bold mb-3 text-[#0f172a]">Energy Independence</h3>
                            <p className="text-[var(--text-secondary)]">Sever reliance on the aging grid. Our micro-grid architectures provide absolute operational uptime during blackouts.</p>
                        </div>
                        <div className="bg-white/60 p-8 rounded-3xl border border-white/80 shadow-sm hover:shadow-xl transition-shadow">
                            <TrendingUp className="text-teal-500 mb-6" size={48} />
                            <h3 className="text-xl font-bold mb-3 text-[#0f172a]">Unmatched ROI</h3>
                            <p className="text-[var(--text-secondary)]">Lock in your energy rates for 25+ years. Protect your bottom line against utility hyper-inflation and generate SREC revenue.</p>
                        </div>
                        <div className="bg-white/60 p-8 rounded-3xl border border-white/80 shadow-sm hover:shadow-xl transition-shadow">
                            <TreePine className="text-emerald-600 mb-6" size={48} />
                            <h3 className="text-xl font-bold mb-3 text-[#0f172a]">ESG Compliance</h3>
                            <p className="text-[var(--text-secondary)]">Instantly hit your corporate sustainability mandates. Transitioning to zero-emission power is the fastest route to Net-Zero.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Solutions Showcase (Teaser) */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-black mb-4 text-[#0f172a]">Comprehensive Solutions</h2>
                        <p className="text-[var(--text-secondary)] text-lg max-w-xl">We deploy a holistic mix of modern renewable technologies tailored to your specific geography and load profile.</p>
                    </div>
                    <Link to="/services" className="text-[var(--accent)] font-bold flex items-center gap-1 hover:gap-2 transition-all mt-4 md:mt-0">
                        View All Services <ArrowRight size={20} />
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="group relative h-80 rounded-3xl overflow-hidden shadow-lg cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity group-hover:opacity-90"></div>
                        <img src="https://images.unsplash.com/photo-1509391366360-1e97d5259d52?auto=format&fit=crop&q=80&w=800" alt="Solar Arrays" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute bottom-0 left-0 p-8 z-20">
                            <h3 className="text-white text-2xl font-bold mb-2 flex items-center gap-2"><Sun size={24} /> Solar Arrays</h3>
                            <p className="text-slate-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">High-yield monocrystalline panels for rooftops and ground mounts.</p>
                        </div>
                    </div>
                    <div className="group relative h-80 rounded-3xl overflow-hidden shadow-lg cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity group-hover:opacity-90"></div>
                        <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=800" alt="Wind Turbines" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute bottom-0 left-0 p-8 z-20">
                            <h3 className="text-white text-2xl font-bold mb-2 flex items-center gap-2"><Factory size={24} /> Aero Turbines</h3>
                            <p className="text-slate-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">Compact vertical-axis wind turbines for continuous nightly generation.</p>
                        </div>
                    </div>
                    <div className="group relative h-80 rounded-3xl overflow-hidden shadow-lg cursor-pointer hidden lg:block">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity group-hover:opacity-90"></div>
                        <img src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=800" alt="Micro Hydro" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute bottom-0 left-0 p-8 z-20">
                            <h3 className="text-white text-2xl font-bold mb-2 flex items-center gap-2"><Zap size={24} /> Storage Tech</h3>
                            <p className="text-slate-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">Utility-scale battery banks ensuring 100% uptime and resilience.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: Global Footprint */}
            <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="px-4 md:px-8 max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-emerald-400 font-bold text-xs uppercase tracking-widest mb-6 border border-white/20">
                            <Globe size={16} /> Global Impact
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">Decarbonizing the globe, one facility at a time.</h2>
                        <p className="text-slate-300 text-lg max-w-2xl mx-auto">We operate in 12 countries, managing over 3GW of distributed generation. Join the movement.</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                        <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl text-center hover:bg-slate-700/50 transition-colors">
                            <div className="text-4xl font-black text-white mb-2">500+</div>
                            <p className="text-slate-400 font-medium">Enterprise Clients</p>
                        </div>
                        <div className="bg-emerald-900/50 border border-emerald-800 p-8 rounded-3xl text-center hover:bg-emerald-800/50 transition-colors">
                            <div className="text-4xl font-black text-emerald-400 mb-2">3.2 GW</div>
                            <p className="text-emerald-200/70 font-medium">Installed Capacity</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl text-center hover:bg-slate-700/50 transition-colors">
                            <div className="text-4xl font-black text-white mb-2">-$1.2B</div>
                            <p className="text-slate-400 font-medium">Client Energy Savings</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl text-center hover:bg-slate-700/50 transition-colors">
                            <div className="text-4xl font-black text-white mb-2">12</div>
                            <p className="text-slate-400 font-medium">Countries Operating</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Live Carbon Emissions Counter */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto">
                <div className="bg-gradient-to-br from-slate-900 to-emerald-950 rounded-3xl p-10 md:p-16 text-white flex flex-col md:flex-row items-center gap-12 shadow-2xl overflow-hidden relative">
                    <div className="absolute top-1/2 right-0 w-80 h-80 bg-emerald-500/10 blur-[100px] rounded-full" />
                    <div className="flex-1 relative z-10">
                        <p className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-3">Updating Every 3 Seconds</p>
                        <h2 className="text-3xl md:text-4xl font-black mb-4">Live Carbon Offset Counter</h2>
                        <p className="text-slate-300 text-lg">Every installation we commission contributes to this number in real time. Powered by IoT sensor data across all 12 countries.</p>
                    </div>
                    <div className="flex-1 relative z-10">
                        <div className="bg-black/40 border border-white/10 p-8 rounded-3xl backdrop-blur-md text-center">
                            <p className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-2">Live Carbon Offset (Tons CO₂)</p>
                            <div className="text-5xl md:text-7xl font-mono font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                                {carbonOffset.toLocaleString()}
                            </div>
                            <div className="h-1 w-full bg-slate-800 rounded-full mt-6 overflow-hidden">
                                <div className="h-full bg-emerald-500 rounded-full w-3/4 animate-pulse"></div>
                            </div>
                            <p className="text-slate-400 text-xs mt-3 font-medium">Equivalent to planting {Math.floor(carbonOffset / 50).toLocaleString()} trees</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 7: Featured Case Studies */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto py-12">
                <h2 className="text-center text-3xl font-black text-[#0f172a] mb-12">Trusted by Industry Leaders</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { comp: "TechCorp HQ", metric: "84% Offset", val: "Utility spend reduced" },
                        { comp: "Global Logistics Center", metric: "1.2 MW Array", val: "Installed in 45 days" },
                        { comp: "Apex Manufacturing", metric: "Grid Resilient", val: "No downtime since 2023" },
                        { comp: "Horizon Data Centers", metric: "100% Green", val: "Hit ESG goals 2 yrs early" }
                    ].map((cs, i) => (
                        <div key={i} className="frozen-glass p-6 rounded-3xl border border-white/60 text-center hover:-translate-y-1 transition-transform">
                            <Building2 className="mx-auto text-emerald-600 mb-4 opacity-70" size={32} />
                            <h4 className="font-bold text-lg text-[#0f172a] mb-1">{cs.comp}</h4>
                            <p className="text-[var(--accent)] font-black text-xl mb-1">{cs.metric}</p>
                            <p className="text-[var(--text-secondary)] text-sm">{cs.val}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 8: Calculator Teaser */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto">
                <div className="bg-gradient-to-r from-emerald-100 to-teal-50 rounded-3xl p-10 md:p-16 border border-emerald-200 flex flex-col md:flex-row items-center justify-between gap-10 shadow-lg">
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] mb-4">Curious about your ROI?</h2>
                        <p className="text-emerald-800 text-lg mb-6 max-w-xl">Find out exactly how much you can save over the next 25 years with our interactive commercial estimation tool.</p>
                        <div className="flex items-center gap-4 text-emerald-700 font-bold justify-center md:justify-start">
                            <span>Federal ITC Eligible</span> • <span>SREC Revenue</span>
                        </div>
                    </div>
                    <div>
                        <Link to="/calculator">
                            <button className="bg-[#0f172a] hover:bg-slate-800 text-white px-10 py-5 rounded-2xl font-black text-lg transition-transform hover:scale-105 shadow-xl flex items-center gap-3 whitespace-nowrap">
                                <Zap size={24} className="text-emerald-400" />
                                Open ROI Calculator
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* SECTION 9: Interactive Quiz & Testimonial */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                    <h2 className="text-4xl font-black mb-4">Is AeroSolar right for you?</h2>
                    <p className="text-[var(--text-secondary)] mb-8 text-lg">Take our 30-second interactive assessment to pre-qualify your property and uncover hidden green incentives.</p>

                    <div className="frozen-glass rounded-3xl p-8 border border-white/60 relative shadow-xl min-h-[350px] flex flex-col justify-center">
                        {quizStep === 0 && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <h4 className="text-xl font-bold mb-6 text-[#0f172a]">1. What type of property are you inquiring about?</h4>
                                <div className="space-y-3">
                                    {['Commercial / Industrial Campus', 'Utility Scale Generation', 'Multi-Family Residential', 'Government / Public Sector'].map(opt => (
                                        <button key={opt} onClick={() => setQuizStep(1)} className="w-full text-left px-5 py-4 rounded-xl border-2 border-white/60 bg-white/40 hover:bg-emerald-50 hover:border-emerald-300 transition-all font-semibold text-[var(--text-secondary)] hover:text-[#0f172a] shadow-sm flex items-center justify-between group">
                                            {opt}
                                            <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 text-emerald-500 transition-opacity" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                        {quizStep === 1 && (
                            <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                                <h4 className="text-xl font-bold mb-6 text-[#0f172a]">2. Do you own the facility?</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <button onClick={() => setQuizStep(2)} className="py-6 rounded-xl border-2 border-emerald-200 bg-emerald-50 hover:bg-emerald-100 hover:border-emerald-400 transition-all font-bold text-center text-emerald-800 text-lg shadow-sm">Yes</button>
                                    <button onClick={() => setQuizStep(2)} className="py-6 rounded-xl border-2 border-white/60 bg-white/40 hover:bg-slate-50 hover:border-slate-300 transition-all font-bold text-center text-slate-700 text-lg shadow-sm">No, I lease</button>
                                </div>
                                <button onClick={() => setQuizStep(0)} className="text-sm font-bold text-slate-400 mt-8 flex items-center gap-1 hover:text-emerald-600 transition-colors">← Start over</button>
                            </div>
                        )}
                        {quizStep === 2 && (
                            <div className="animate-in zoom-in-95 duration-500 text-center py-6">
                                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner ring-4 ring-emerald-50">
                                    <Leaf className="text-emerald-500" size={40} />
                                </div>
                                <h4 className="text-3xl font-black mb-3 text-[#0f172a]">Great news! You qualify.</h4>
                                <p className="text-[var(--text-secondary)] mb-8 text-lg font-medium">Your property type is eligible for federal tax incentives up to 30% and corporate green grants.</p>
                                <Link to="/contact">
                                    <button className="bg-[var(--accent)] text-white px-10 py-4 rounded-xl font-black text-lg shadow-xl shadow-emerald-500/30 hover:scale-105 transition-all w-full md:w-auto">
                                        Connect with an Architect
                                    </button>
                                </Link>
                                <div className="mt-6">
                                    <button onClick={() => setQuizStep(0)} className="text-sm font-bold text-slate-400 hover:text-emerald-600 transition-colors">Restart Quiz</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Testimonial Carousel Mockup */}
                <div className="order-1 lg:order-2 bg-[#020617] rounded-3xl p-10 md:p-14 text-white relative overflow-hidden shadow-2xl h-full flex flex-col justify-center transform hover:scale-[1.02] transition-transform duration-500 border border-slate-800">
                    <div className="absolute top-0 right-0 w-[120%] h-full bg-gradient-to-bl from-teal-900/30 to-transparent pointer-events-none"></div>
                    <Star className="text-amber-400 mb-8" size={48} fill="currentColor" />
                    <h3 className="text-2xl md:text-3xl font-medium leading-relaxed mb-10 italic relative z-10 text-slate-200">
                        "AeroSolar didn't just install panels; they architected a complete micro-grid that reduced our campus energy overhead by 84% in the first year alone. The ROI was undeniable."
                    </h3>
                    <div className="flex items-center gap-5 relative z-10">
                        <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center font-black text-xl shadow-lg border-2 border-white/10">SO</div>
                        <div>
                            <p className="font-bold text-lg">Sarah O'Connor</p>
                            <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">VP of Operations, TechCorp</p>
                        </div>
                    </div>
                    <div className="flex gap-3 mt-10 absolute bottom-10 right-10">
                        <div className="w-12 h-12 border-2 border-slate-700 bg-slate-800/50 rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald-600 hover:border-emerald-500 transition-all transform rotate-180 backdrop-blur-sm"><ArrowRight size={20} /></div>
                        <div className="w-12 h-12 border-2 border-slate-700 bg-slate-800/50 rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald-600 hover:border-emerald-500 transition-all backdrop-blur-sm"><ArrowRight size={20} /></div>
                    </div>
                </div>
            </section>

            {/* SECTION 10: Meet the Team */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto">
                <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 blur-[120px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-60 h-60 bg-teal-500/10 blur-[100px] rounded-full" />
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="flex-1 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-6">
                                <Users size={14} /> Our People
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">Built by the World's Best Clean Energy Minds</h2>
                            <p className="text-slate-300 text-lg mb-8 max-w-xl">400+ engineers, developers, and sustainability experts — united by a mission to power every enterprise on earth with clean energy.</p>
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                <Link to="/team">
                                    <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105 shadow-xl shadow-emerald-500/30 flex items-center gap-2">
                                        <Users size={20} /> Meet Our Team
                                    </button>
                                </Link>
                                <Link to="/about">
                                    <button className="border border-white/20 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-bold transition-all backdrop-blur-sm">
                                        Our Story
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 grid grid-cols-2 gap-4 max-w-sm">
                            {[
                                { initials: 'AM', name: 'Dr. Arjun Mehta', role: 'Founder & CEO', gradient: 'from-emerald-500 to-teal-600' },
                                { initials: 'PK', name: 'Prince Kumar', role: 'Lead Developer', gradient: 'from-cyan-500 to-blue-600' },
                                { initials: 'PS', name: 'Dr. Priya Sharma', role: 'CTO', gradient: 'from-sky-500 to-indigo-600' },
                                { initials: 'MJ', name: 'Marcus Johnson', role: 'COO', gradient: 'from-amber-500 to-orange-600' },
                            ].map((m, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-colors">
                                    <div className={`w-12 h-12 bg-gradient-to-br ${m.gradient} rounded-xl flex items-center justify-center text-white font-black text-sm mx-auto mb-3 shadow-lg`}>{m.initials}</div>
                                    <p className="font-bold text-sm">{m.name}</p>
                                    <p className="text-slate-400 text-xs mt-0.5">{m.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Home;
