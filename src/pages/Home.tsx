import React, { useState, useEffect } from 'react';
import { ShieldCheck, TrendingUp, Zap, ChevronRight, Star, Building2, Sun, Activity, ArrowRight, Battery, Globe, Landmark, Coins, Leaf, CheckCircle2, ClipboardCheck, Banknote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
// ThreeDHero temporarily replaced with a placeholder to diagnose blank screen
// Hero Background Component with Premium Generated Image
const ThreeDHero = () => (
    <div className="absolute inset-0 w-full h-full -z-0 overflow-hidden bg-[#f7fee7]" style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}>
        {/* Subtle Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f7fee7] to-lime-50/30" />

        {/* Dynamic Energy Orbs - Optimized for Light Mode */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
            <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-lime-400/20 rounded-full blur-[120px] animate-float-1" />
            <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-green-400/15 rounded-full blur-[150px] animate-float-2" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-lime-200/10 rounded-full blur-[180px]" />
        </div>
    </div>
);

function Home() {
    const [systemSize, setSystemSize] = useState(100);
    const [liveYield, setLiveYield] = useState(84);

    // Update base yield when system size changes
    useEffect(() => {
        setLiveYield(systemSize * 0.84);
    }, [systemSize]);

    // Simulate live data fluctuating based on system size
    useEffect(() => {
        const interval = setInterval(() => {
            setLiveYield(prev => prev + (Math.random() * 2 - 1));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col gap-24 pb-20 overflow-hidden">
            <SEO
                title="Commercial Solar & Microgrids"
                description="Sai Gayatri Greentech designs and deploys utility-grade solar microgrids for enterprise campuses."
            />

            {/* SECTION 1: Hero Section */}
            <section className="relative w-full max-w-[1500px] 2xl:max-w-[1800px] px-4 md:px-12 lg:px-20 mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pt-10 xl:pt-16 min-h-[90vh]">
                <ThreeDHero />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex-[1.2] space-y-8 z-30 text-center lg:text-left mt-8 lg:mt-0"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-500/10 border border-lime-500/20 text-xs md:text-sm font-bold text-lime-400 shadow-lg backdrop-blur-md">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
                        </span>
                        Hyderabad's Most Trusted MNRE-Approved Solar Partner
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-[#0d1a04]">
                        Switch to Solar. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 via-lime-500 to-green-600">
                            Save ₹50,000+
                        </span> <br />
                        Every Single Year.
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                        Join 500+ Hyderabad families and businesses powered by Sai Gayatri Greentech. High-efficiency systems designed to pay for themselves in under 4 years.
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-5 pt-4">
                        <Link to="/contact">
                            <button className="flex items-center gap-3 bg-lime-500 hover:bg-lime-400 text-slate-950 px-10 py-5 rounded-2xl font-black text-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(132,204,22,0.4)] relative group overflow-hidden">
                                <span className="relative z-10 flex items-center gap-2">
                                    Get Free Solar Assessment
                                    <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        </Link>
                        <Link to="/calculator">
                            <button className="flex items-center gap-3 bg-slate-100 hover:bg-slate-200 text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg transition-all border border-slate-200">
                                Calculate Investment Potential
                            </button>
                        </Link>
                    </div>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8 border-t border-slate-200">
                        <div className="flex flex-col">
                            <span className="text-3xl font-black text-[#0d1a04]">500+</span>
                            <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">Installations</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-black text-[#0d1a04]">15 MW+</span>
                            <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">Total Capacity</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-black text-[#0d1a04]">25%</span>
                            <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">Average ROI</span>
                        </div>
                    </div>
                </motion.div>

                {/* Interactive 3D Mockup / Live Stats */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    className="flex-1 relative w-full lg:max-w-xl perspective-1000 hidden lg:block group z-30"
                >
                    <div className="absolute inset-0 bg-lime-500/10 blur-[100px] -z-10 rounded-full animate-pulse-slow"></div>

                    <div className="relative bg-white/80 backdrop-blur-3xl rounded-[2.5rem] border border-slate-200 p-1 shadow-2xl overflow-hidden group-hover:border-lime-200 transition-all duration-700 hover:shadow-lime-500/10">
                        <div className="p-8 space-y-8">
                            <div className="flex justify-between items-center">
                                <div className="space-y-1">
                                    <h3 className="text-xl font-bold text-[#0d1a04] flex items-center gap-2">
                                        <Activity size={20} className="text-lime-600" />
                                        Analytics Dashboard
                                    </h3>
                                    <p className="text-xs text-slate-500 font-medium">Real-time Solar Generation Monitoring</p>
                                </div>
                                <span className="bg-lime-50 text-lime-700 border border-lime-100 px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-lime-500 animate-pulse"></span>
                                    LIVE TELEMETRY
                                </span>
                            </div>

                            <div className="relative group/main">
                                <div className="absolute inset-0 bg-gradient-to-br from-lime-500/5 to-transparent rounded-3xl -z-10"></div>
                                <div className="text-center py-10 rounded-3xl bg-slate-50 border border-slate-100 backdrop-blur-md">
                                    <div className="text-7xl font-black text-[#0d1a04] font-mono tracking-tighter group-hover/main:scale-110 transition-transform duration-500">
                                        {liveYield.toFixed(1)}
                                        <span className="text-2xl text-lime-600 ml-1">kW</span>
                                    </div>
                                    <p className="text-xs font-bold text-slate-500 mt-2 uppercase tracking-[0.2em]">Current Generation Rate</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-slate-500 font-bold uppercase tracking-wider">Array Capacity</span>
                                        <span className="text-lime-700 font-black bg-lime-400/20 px-2 py-0.5 rounded border border-lime-400/30">{systemSize} kW</span>
                                    </div>
                                    <div className="relative h-1.5 w-full bg-slate-200 rounded-full overflow-hidden border border-black/5">
                                        <input
                                            type="range"
                                            min="20"
                                            max="500"
                                            value={systemSize}
                                            onChange={(e) => setSystemSize(Number(e.target.value))}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                        />
                                        <div
                                            className="absolute h-full bg-gradient-to-r from-lime-500 to-lime-300 shadow-[0_0_15px_rgba(163,230,53,0.5)] transition-all duration-300"
                                            style={{ width: `${(systemSize / 500) * 100}%` }}
                                        />
                                    </div>
                                    <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest pt-1">
                                        <span>Residential</span>
                                        <span>Industrial Campus</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/60 p-4 rounded-2xl border border-black/5 flex items-center gap-4 group/card hover:bg-white/80 transition-colors">
                                        <div className="p-2 bg-lime-500/10 rounded-xl group-hover/card:bg-lime-500/20 transition-colors">
                                            <Sun size={20} className="text-lime-600" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase font-black text-slate-500 tracking-wider">Cloud Cover</p>
                                            <p className="text-sm font-black text-slate-900">0% Clear</p>
                                        </div>
                                    </div>
                                    <div className="bg-white/60 p-4 rounded-2xl border border-black/5 flex items-center gap-4 group/card hover:bg-white/80 transition-colors">
                                        <div className="p-2 bg-lime-500/10 rounded-xl group-hover/card:bg-lime-500/20 transition-colors">
                                            <Battery size={20} className="text-lime-600" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase font-black text-slate-500 tracking-wider">Efficiency</p>
                                            <p className="text-sm font-black text-slate-900">99.2% Peak</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            <section className="px-4 md:px-8 max-w-7xl mx-auto w-full -mt-12 relative z-20">
                <div className="backdrop-blur-2xl bg-white/60 rounded-3xl p-1 md:p-2 border border-white/80 shadow-[0_20px_50px_rgba(77,124,15,0.1)] overflow-hidden group/bar">
                    <div className="absolute inset-0 bg-gradient-to-r from-lime-500/10 via-transparent to-green-500/10 opacity-0 group-hover/bar:opacity-100 transition-opacity duration-700"></div>
                    <div className="flex flex-wrap items-center justify-center lg:justify-between py-6 px-8 gap-y-6 md:gap-x-4 relative z-10">
                        {[
                            { icon: Landmark, text: "Govt. of India MNRE Approved", color: "text-lime-600" },
                            { icon: ShieldCheck, text: "5-Year Product Warranty", color: "text-green-600" },
                            { icon: Coins, text: "25%+ ROI Every Year", color: "text-lime-600" },
                            { icon: Leaf, text: "Eco-Friendly Green Energy", color: "text-lime-500" },
                            { icon: Zap, text: "3–5 Year Payback Period", color: "text-green-600" }
                        ].map((item, idx) => (
                            <React.Fragment key={idx}>
                                {idx !== 0 && <div className="hidden lg:block w-px h-10 bg-slate-200/50"></div>}
                                <div className="flex items-center gap-3 group/item cursor-default">
                                    <div className={`p-2 rounded-xl bg-white/50 border border-white/80 shadow-sm group-hover/item:scale-110 group-hover/item:shadow-md transition-all duration-300 ${item.color}`}>
                                        <item.icon size={20} strokeWidth={2.5} />
                                    </div>
                                    <span className="font-extrabold text-[#0f172a] tracking-tight whitespace-nowrap">{item.text}</span>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 relative overflow-hidden bg-[#f7fee7]/50">
                <div className="absolute top-0 left-0 w-full h-full bg-white/20 -z-10"></div>
                {/* Decorative Elements */}
                <div className="absolute top-40 -left-20 w-80 h-80 bg-lime-200/30 blur-[100px] rounded-full"></div>
                <div className="absolute bottom-40 -right-20 w-80 h-80 bg-green-200/30 blur-[100px] rounded-full"></div>

                <div className="px-4 md:px-8 max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-100 border border-lime-200 text-lime-700 font-bold text-xs uppercase tracking-widest mb-4">
                                <Zap size={14} className="fill-lime-600" /> Professional Grade
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black mb-4 text-[#1a2e05] leading-tight">Elite Solar Infrastructure</h2>
                            <p className="text-slate-700 text-lg font-medium mb-8">Engineered for maximum reliability and exceptional ROI across Industrial, Commercial, and Residential sectors.</p>

                            {/* NEW: Premium Assets Showcase */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-lime-200/50 group mb-12"
                            >
                                <img
                                    src="/elite_solar_industrial.png"
                                    alt="Industrial Solar Installation Hyderabad by Sai Gayatri Greentech"
                                    className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e05]/60 to-transparent flex items-end p-8">
                                    <div>
                                        <p className="text-lime-400 font-bold uppercase tracking-widest text-xs mb-1">Live Project</p>
                                        <h4 className="text-white font-bold text-xl">Industrial Solar Park Installation</h4>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* System Features Card */}
                        <div className="relative group/card">
                            <div className="absolute -inset-1 bg-gradient-to-r from-lime-400 to-green-500 rounded-[2.5rem] blur opacity-10 group-hover/card:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-white rounded-[2.2rem] p-10 overflow-hidden text-slate-900 h-full border border-slate-200 shadow-xl shadow-lime-900/5">
                                {/* Ornament */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/5 blur-[80px] -mr-32 -mt-32"></div>

                                <div className="flex items-center gap-5 mb-10">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-lime-400 blur-xl opacity-10 animate-pulse"></div>
                                        <div className="relative w-16 h-16 bg-lime-50 rounded-2xl flex items-center justify-center border border-lime-200 shadow-sm">
                                            <ShieldCheck className="text-lime-600" size={32} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-black tracking-tight text-[#1a2e05]">System Features</h3>
                                        <p className="text-lime-600 text-sm font-bold uppercase tracking-widest">Built to Outperform</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                    {[
                                        { title: "Grid Connected", desc: "Seamless utility integration" },
                                        { title: "24/7 Reliability", desc: "Uninterrupted power supply" },
                                        { title: "Flexible Install", desc: "Ground or rooftop ready" },
                                        { title: "Intelligent AI Control", desc: "Smart energy optimization" },
                                        { title: "High ROI", desc: "3-5 year payback average" },
                                        { title: "Zero Maintenance", desc: "Minimal upkeep required" },
                                        { title: "5-Year Guarantee", desc: "Full product backing" },
                                        { title: "Govt. Subsidy", desc: "MNRE Support Included" }
                                    ].map((feat, i) => (
                                        <div key={i} className="flex gap-4 group/item">
                                            <div className="mt-1.5 w-5 h-5 rounded-full bg-lime-100 flex items-center justify-center border border-lime-200 group-hover/item:bg-lime-500 transition-colors duration-300">
                                                <CheckCircle2 size={12} className="text-lime-600 group-hover:text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 leading-tight mb-1">{feat.title}</h4>
                                                <p className="text-slate-500 text-xs leading-relaxed">{feat.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Advantages Card */}
                        <div className="relative group/card">
                            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-lime-500 rounded-[2.5rem] blur opacity-10 group-hover/card:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-white rounded-[2.2rem] p-10 overflow-hidden h-full border border-slate-200 shadow-xl shadow-slate-200/50">
                                {/* Ornament */}
                                <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-500/5 blur-[80px] -mr-32 -mb-32"></div>

                                <div className="flex items-center gap-5 mb-10">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-green-400 blur-xl opacity-10"></div>
                                        <div className="relative w-16 h-16 bg-white rounded-2xl flex items-center justify-center border border-slate-200 shadow-sm">
                                            <TrendingUp className="text-green-600" size={32} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-black tracking-tight text-[#1a2e05]">Key Advantages</h3>
                                        <p className="text-green-600 text-sm font-bold uppercase tracking-widest">Industry Leading Benefits</p>
                                    </div>
                                </div>

                                <ul className="space-y-6">
                                    {[
                                        { icon: Sun, title: "Rooftop Integration", desc: "Maximize vacant space for productive generation." },
                                        { icon: Battery, title: "Energy Freedom", desc: "Consume self-generated power & feed back excess." },
                                        { icon: ClipboardCheck, title: "Monthly Settlements", desc: "Automated credit settlement for surplus energy." },
                                        { icon: Banknote, title: "Guaranteed Payouts", desc: "DISCOM payments at Government-decided rates." },
                                        { icon: Leaf, title: "Zero Carbon Footprint", desc: "Environment-friendly, sustainable green energy." }
                                    ].map((adv, i) => (
                                        <li key={i} className="flex gap-5 group/item cursor-default">
                                            <div className="w-12 h-12 rounded-xl bg-lime-50 border border-lime-100 flex items-center justify-center text-lime-600 group-hover/item:bg-lime-600 group-hover/item:text-white transition-all duration-300 shadow-sm">
                                                <adv.icon size={22} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#1a2e05] text-lg mb-1 leading-tight group-hover/item:translate-x-1 transition-transform">{adv.title}</h4>
                                                <p className="text-slate-600 text-sm leading-relaxed">{adv.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Solutions Showcase (Teaser) */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-black mb-4 text-[#1a2e05]">Our Solar Systems & Solutions</h2>
                        <p className="text-[var(--text-secondary)] text-lg max-w-xl">From rooftop solar panels to solar security fencing, Sai Gayatri Greentech offers the most advanced, comprehensive range of solar systems available in Hyderabad.</p>
                    </div>
                    <Link to="/services" className="text-[var(--accent)] font-bold flex items-center gap-1 hover:gap-2 transition-all mt-4 md:mt-0">
                        View All Solutions <ArrowRight size={20} />
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="group relative h-80 rounded-3xl overflow-hidden shadow-lg cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity group-hover:opacity-90"></div>
                        <img src="https://images.unsplash.com/photo-1509391366360-1e97d5259d52?auto=format&fit=crop&q=80&w=800" alt="High-efficiency solar panels for rooftop installation in Hyderabad" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute bottom-0 left-0 p-8 z-20">
                            <h3 className="text-white text-2xl font-bold mb-2 flex items-center gap-2"><Sun size={24} /> Solar Panels</h3>
                            <p className="text-slate-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">High-efficiency photovoltaic panels that convert sunlight into clean DC electricity. Suitable for residential and commercial rooftops. MNRE-certified. Low maintenance. Designed for India's climate.</p>
                        </div>
                    </div>
                    <div className="group relative h-80 rounded-3xl overflow-hidden shadow-lg cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity group-hover:opacity-90"></div>
                        <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=800" alt="Rooftop solar power system Hyderabad – on-grid installation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute bottom-0 left-0 p-8 z-20">
                            <h3 className="text-white text-2xl font-bold mb-2 flex items-center gap-2"><Zap size={24} /> Solar Rooftop Power Systems</h3>
                            <p className="text-slate-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">On-grid rooftop solar power systems with bi-directional metering. Generate electricity from your rooftop, use what you need, and feed excess power back to the grid.</p>
                        </div>
                    </div>
                    <div className="group relative h-80 rounded-3xl overflow-hidden shadow-lg cursor-pointer hidden lg:block">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity group-hover:opacity-90"></div>
                        <img src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=800" alt="Solar water heater system installation Hyderabad" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute bottom-0 left-0 p-8 z-20">
                            <h3 className="text-white text-2xl font-bold mb-2 flex items-center gap-2"><Activity size={24} /> Solar Water Heater</h3>
                            <p className="text-slate-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">Reduce electricity bills by up to 80% on water heating. Our solar water heaters use advanced vacuum tube technology to provide hot water 365 days a year, even on cloudy days.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: Stats / Numbers Strip */}
            <section className="bg-transparent py-24 text-[#0d1a04] relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime-400/10 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="px-4 md:px-8 max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-50 text-lime-600 font-bold text-xs uppercase tracking-widest mb-6 border border-lime-100">
                            <Globe size={16} /> Sai Gayatri Greentech Impact
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">Our Impact in Numbers</h2>
                        <p className="text-slate-500 text-lg max-w-2xl mx-auto">Let us Make India a Solar Super Power by 2030.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="bg-white/70 border border-white/80 p-8 rounded-3xl text-center hover:bg-white/90 transition-all shadow-sm hover:shadow-md">
                            <div className="flex justify-center mb-3"><Zap size={32} className="text-lime-500" /></div>
                            <div className="text-4xl font-black text-[#0d1a04] mb-2">25%+</div>
                            <p className="text-slate-500 font-medium">Annual Return on Investment</p>
                        </div>
                        <div className="bg-white/70 border border-lime-200/50 p-8 rounded-3xl text-center hover:bg-white/90 transition-all shadow-sm hover:shadow-md">
                            <div className="flex justify-center mb-3"><Battery size={32} className="text-lime-500" /></div>
                            <div className="text-4xl font-black text-lime-600 mb-2">5 Years</div>
                            <p className="text-slate-500 font-medium">Product Warranty</p>
                        </div>
                        <div className="bg-white/70 border border-white/80 p-8 rounded-3xl text-center hover:bg-white/90 transition-all shadow-sm hover:shadow-md">
                            <div className="flex justify-center mb-3"><ClipboardCheck size={32} className="text-lime-500" /></div>
                            <div className="text-4xl font-black text-[#0d1a04] mb-2">3–5 Years</div>
                            <p className="text-slate-500 font-medium">Average Payback Period</p>
                        </div>
                        <div className="bg-white/70 border border-white/80 p-8 rounded-3xl text-center hover:bg-white/90 transition-all shadow-sm hover:shadow-md">
                            <div className="flex justify-center mb-3"><Landmark size={32} className="text-lime-500" /></div>
                            <div className="text-4xl font-black text-[#0d1a04] mb-2">MNRE</div>
                            <p className="text-slate-500 font-medium">Government Approved</p>
                        </div>
                        <div className="bg-white/70 border border-lime-200/50 p-8 rounded-3xl text-center hover:bg-white/90 transition-all shadow-sm hover:shadow-md">
                            <div className="flex justify-center mb-3"><Globe size={32} className="text-lime-500" /></div>
                            <div className="text-4xl font-black text-lime-600 mb-2">2030</div>
                            <p className="text-slate-500 font-medium">India Solar Superpower Goal</p>
                        </div>
                        <div className="bg-white/70 border border-white/80 p-8 rounded-3xl text-center hover:bg-white/90 transition-all shadow-sm hover:shadow-md">
                            <div className="flex justify-center mb-3"><Sun size={32} className="text-lime-500" /></div>
                            <div className="text-4xl font-black text-[#0d1a04] mb-2">14,000+</div>
                            <p className="text-slate-500 font-medium">Units Generated Per Year (10KW)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Who We Serve */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto py-12">
                <h2 className="text-center text-4xl font-black text-[#1a2e05] mb-4">Who We Serve</h2>
                <p className="text-center text-[var(--text-secondary)] text-lg mb-12 max-w-2xl mx-auto">Providing customized solar solutions based on your specific property and energy needs.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { title: "Residential", desc: "Reduce your home electricity bills by up to 100% and increase property value." },
                        { title: "Commercial & Industrial (C&I)", desc: "Lower operational costs, claim accelerated depreciation, and boost your bottom line." },
                        { title: "Independent Houses & Villas", desc: "Premium aesthetic installations that securely power your entire lifestyle." },
                        { title: "Agriculture & Farming", desc: "Reliable solar water pumps and off-grid solutions for remote farming needs." },
                        { title: "Institutions & Hospitals", desc: "Uninterrupted power for critical infrastructure and long-term cost savings." },
                        { title: "Apartments & Societies", desc: "Power common areas, lifts, and water pumps with shared solar power." }
                    ].map((sector, i) => (
                        <div key={i} className="bg-white/70 p-8 rounded-3xl border border-white/80 shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1 text-center group cursor-pointer">
                            <div className="w-16 h-16 bg-lime-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-lime-500 transition-colors">
                                <Building2 className="text-lime-600 group-hover:text-white transition-colors" size={32} />
                            </div>
                            <h3 className="font-bold text-xl text-[#1a2e05] mb-3">{sector.title}</h3>
                            <p className="text-slate-600">{sector.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 7: Testimonials */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto py-12">
                <h2 className="text-center text-4xl font-black text-[#1a2e05] mb-12">What Our Customers Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { name: "Rahul Deshmukh", loc: "Banjara Hills", quote: "Sai Gayatri Greentech installed a 5KW system at my villa. The installation was seamless, and my electricity bill has literally dropped to zero. Highly professional team!" },
                        { name: "Priya Reddy", loc: "KPHB Colony", quote: "I was confused about the MNRE subsidy process, but their team handled everything from documentation to net metering. Now I'm enjoying huge savings." },
                        { name: "Srinivas Rao", loc: "Industrial Setup, Jeedimetla", quote: "We opted for their 50KW commercial rooftop solar. The ROI is fantastic, and their after-sales service and AMC maintenance are prompt and reliable." }
                    ].map((t, i) => (
                        <div key={i} className="frozen-glass p-8 rounded-3xl border border-white/60 hover:-translate-y-1 transition-transform">
                            <div className="flex text-lime-400 mb-6">
                                <Star size={20} fill="currentColor" />
                                <Star size={20} fill="currentColor" />
                                <Star size={20} fill="currentColor" />
                                <Star size={20} fill="currentColor" />
                                <Star size={20} fill="currentColor" />
                            </div>
                            <p className="text-[var(--text-secondary)] italic mb-6 leading-relaxed">"{t.quote}"</p>
                            <div>
                                <h4 className="font-bold text-lg text-[#1a2e05]">{t.name}</h4>
                                <p className="text-lime-600 text-sm font-medium">{t.loc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 8: Calculator Teaser */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto">
                <div className="bg-gradient-to-r from-lime-100 to-green-50 rounded-3xl p-10 md:p-16 border border-lime-200 flex flex-col md:flex-row items-center justify-between gap-10 shadow-lg">
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-black text-[#1a2e05] mb-4">Want to Know Your Solar Savings?</h2>
                        <p className="text-lime-800 text-lg mb-6 max-w-xl">Use our intelligent Solar Cost & Savings Calculator tailored for Indian tariffs. Find out how much you can save!</p>
                        <div className="flex items-center gap-4 text-lime-700 font-bold justify-center md:justify-start">
                            <span>MNRE Subsidy Available</span> • <span>Fast Payback</span>
                        </div>
                    </div>
                    <div>
                        <Link to="/calculator">
                            <button className="bg-[#1a2e05] hover:bg-slate-800 text-white px-10 py-5 rounded-2xl font-black text-lg transition-transform hover:scale-105 shadow-xl flex items-center gap-3 whitespace-nowrap">
                                <Zap size={24} className="text-lime-400" />
                                Open Solar Calculator
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* SECTION 9: How It Works */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto py-12" id="how-it-works">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black mb-4 text-[#1a2e05]">How Solar Power Works for Your Home</h2>
                    <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">6 Simple Steps from Sunlight to Savings</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { step: "1", title: "Sunlight Absorption", desc: "Solar panels on your roof absorb photons from sunlight during the day." },
                        { step: "2", title: "DC Electricity Generation", desc: "The panels convert the absorbed sunlight into Direct Current (DC) electricity." },
                        { step: "3", title: "Conversion to AC", desc: "The Solar Inverter converts this DC power into Alternating Current (AC) used by your home appliances." },
                        { step: "4", title: "Powering Your Home", desc: "The converted AC electricity flows through your electrical panel and powers your home seamlessly." },
                        { step: "5", title: "Net Metering", desc: "Any excess electricity generated is sent back to the grid, earning you credits from your DISCOM." },
                        { step: "6", title: "Massive Savings", desc: "Your electricity bill drops significantly, and you enjoy uninterrupted green power!" }
                    ].map((s, i) => (
                        <div key={i} className="frozen-glass p-8 rounded-3xl border border-white/60 relative hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl">
                            <div className="text-6xl font-black text-lime-500/10 absolute top-4 right-6 pointer-events-none">{s.step}</div>
                            <h3 className="text-xl font-bold mb-3 text-[#1a2e05] relative z-10 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-lime-100 text-lime-600 flex items-center justify-center text-sm font-black">{s.step}</span>
                                {s.title}
                            </h3>
                            <p className="text-[var(--text-secondary)] relative z-10">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}

export default Home;
