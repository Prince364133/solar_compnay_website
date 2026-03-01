import { useState, useEffect } from 'react';
import {
    Globe, Leaf, Zap, Trees, Car, Factory, Sun, Activity, ArrowRight, CheckCircle2,
    Users, BookOpen, Anchor, ChevronRight, ChevronLeft, Download, ShieldCheck
} from 'lucide-react';
import SEO from '../components/SEO';
import LeadMagnetModal from '../components/LeadMagnetModal';

function Impact() {
    // ─── STATE FOR INTERACTIVE SECTIONS ──────────────────────────────────────────

    // 2. Global Counter Tick State
    const [co2Saved, setCo2Saved] = useState(2540300);
    const [mwhGenerated, setMwhGenerated] = useState(890520);
    const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

    // 3. Toggle: Problem vs Solution State
    const [viewMode, setViewMode] = useState<'problem' | 'solution'>('problem');

    // 4. Slide Visualizer State
    const [visualizerTons, setVisualizerTons] = useState(10);

    // 5. Map Hover State
    const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

    // 6. SDG Flip Cards State
    const [flippedCard, setFlippedCard] = useState<number | null>(null);

    // 7. Testimonial Carousel State
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    // 8. Circular Economy Active Step State
    const [activeEcoStep, setActiveEcoStep] = useState(1);

    // 10. Education Accordion State
    const [openAccordion, setOpenAccordion] = useState<number | null>(0);

    // 13. Terminal Tick State
    const [terminalLines, setTerminalLines] = useState<string[]>([
        "> Initialize global telemetry...",
        "> Connecting to edge nodes [OK]",
    ]);

    // ─── EFFECTS ────────────────────────────────────────────────────────────────
    useEffect(() => {
        // Ticking counters for realism
        const interval = setInterval(() => {
            setCo2Saved(prev => prev + Math.floor(Math.random() * 5));
            setMwhGenerated(prev => prev + Math.floor(Math.random() * 3));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Terminal log generation
        const interval = setInterval(() => {
            const locs = ['Tokyo', 'Berlin', 'New York', 'Sydney', 'Mumbai'];
            const loc = locs[Math.floor(Math.random() * locs.length)];
            const power = (Math.random() * 5 + 1).toFixed(2);
            setTerminalLines(prev => {
                const newLines = [...prev, `> [${new Date().toISOString().split('T')[1].split('.')[0]}] Node ${loc} streaming +${power} MWh to grid.`];
                return newLines.slice(-6); // Keep last 6
            });
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    // ─── MOCK DATA ──────────────────────────────────────────────────────────────
    const testimonials = [
        { id: 1, quote: "Since partnering with AeroSolar, our manufacturing campus runs 100% on clean energy. It's transformed our sustainability reporting entirely.", author: "Sarah Jenkins, VP of Ops", company: "Global Motors" },
        { id: 2, quote: "The community micro-grid saved our hospital during the blackout. Clean, resilient power when we needed it most.", author: "Dr. Alistair Vance", company: "Mercy General Hospital" },
        { id: 3, quote: "Not only have we cut utility costs by 60%, but our brand loyalty reached an all-time high by becoming carbon negative.", author: "Elena Rodriguez, CEO", company: "Verde Retail Corp" }
    ];

    const sdgs = [
        { id: 1, title: "Affordable & Clean Energy", icon: <Zap size={24} />, num: "7", desc: "Deploying GW-scale solar infrastructure globally at grid-parity prices." },
        { id: 2, title: "Industry & Innovation", icon: <Factory size={24} />, num: "9", desc: "Pioneering bifacial solar tracking systems and heavy battery storage." },
        { id: 3, title: "Sustainable Cities", icon: <Globe size={24} />, num: "11", desc: "Building resilient micro-grids for urban emergency preparedness." },
        { id: 4, title: "Climate Action", icon: <CloudLightningIcon size={24} />, num: "13", desc: "Offsetting millions of tons of CO2 via direct fossil-fuel displacement." },
    ];

    function CloudLightningIcon({ size }: { size: number }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973M13 11l-4 6h6l-4 6" /></svg>; }

    return (
        <div className="w-full flex flex-col pt-4">
            <SEO
                title="Our Global Impact"
                description="Track AeroSolar's real-time environmental impact, CO2 offsets, and global installations."
            />
            {/* 1. HERO WITH VIDEO BACKGROUND (Simulated) */}
            <section className="relative w-full min-h-[85vh] flex items-center justify-center p-6 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900">
                    <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1540103711724-1536424e1074?auto=format&fit=crop&q=80')] bg-cover bg-center animate-pulse duration-10000"></div>
                </div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-in slide-in-from-bottom-5 duration-700">
                    <div className="inline-flex py-1.5 px-4 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-bold text-xs uppercase tracking-widest rounded-full backdrop-blur-md">
                        2026 Impact Report
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white px-4 leading-tight">
                        Powering a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Regenerative</span> Future.
                    </h1>
                    <p className="text-slate-300 text-xl max-w-2xl mx-auto leading-relaxed">
                        We don't just generate energy. We rebuild ecosystems, empower communities, and reverse climate acceleration. See our real-world impact below.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                        <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-black px-8 py-4 rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                            Explore the Data
                        </button>
                    </div>
                </div>
            </section>

            <div className="max-w-[1400px] mx-auto w-full px-6 flex flex-col gap-24 py-24">

                {/* 2. REAL-TIME GLOBAL IMPACT COUNTER */}
                <section className="relative z-20 -mt-36">
                    <div className="frozen-glass rounded-3xl p-8 border border-white/40 shadow-2xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
                        <div className="p-4 transform hover:scale-105 transition-transform duration-300">
                            <Zap size={32} className="mx-auto text-amber-500 mb-3" />
                            <p className="text-4xl lg:text-5xl font-black text-[#0f172a] tabular-nums font-mono">{mwhGenerated.toLocaleString()}</p>
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-2">MWh Clean Energy Generated</p>
                        </div>
                        <div className="p-4 transform hover:scale-105 transition-transform duration-300">
                            <Leaf size={32} className="mx-auto text-emerald-500 mb-3" />
                            <p className="text-4xl lg:text-5xl font-black text-[#0f172a] tabular-nums font-mono">{co2Saved.toLocaleString()}</p>
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-2">Tons CO₂ Prevented</p>
                        </div>
                        <div className="p-4 transform hover:scale-105 transition-transform duration-300">
                            <Users size={32} className="mx-auto text-sky-500 mb-3" />
                            <p className="text-4xl lg:text-5xl font-black text-[#0f172a] tabular-nums font-mono">152,490</p>
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-2">Homes Powered Annually</p>
                        </div>
                    </div>
                </section>

                {/* 3. INTERACTIVE: THE PROBLEM VS SOLUTION */}
                <section className="scroll-mt-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black text-[#0f172a] mb-4">The Paradigm Shift</h2>
                        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">We are actively dismantling old infrastructure and replacing it with sustainable alternatives.</p>
                    </div>
                    <div className="flex justify-center mb-10">
                        <div className="bg-slate-200 p-1.5 rounded-2xl flex relative w-64 shadow-inner">
                            <div className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white rounded-xl shadow-md transition-all duration-500 ${viewMode === 'problem' ? 'left-1.5' : 'left-[calc(50%+1.5px)]'}`}></div>
                            <button onClick={() => setViewMode('problem')} className={`flex-1 py-2.5 text-sm font-bold relative z-10 transition-colors ${viewMode === 'problem' ? 'text-rose-600' : 'text-slate-500 hover:text-slate-700'}`}>The Past</button>
                            <button onClick={() => setViewMode('solution')} className={`flex-1 py-2.5 text-sm font-bold relative z-10 transition-colors ${viewMode === 'solution' ? 'text-emerald-600' : 'text-slate-500 hover:text-slate-700'}`}>The Future</button>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[400px] border border-white/60">
                        <div className={`absolute inset-0 bg-slate-900 transition-opacity duration-1000 ${viewMode === 'problem' ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-black/50">
                                <Factory size={64} className="text-rose-500 mb-6 drop-shadow-[0_0_15px_rgba(244,63,94,0.5)]" />
                                <h3 className="text-3xl font-black text-white mb-4">Fossil Fuel Grid</h3>
                                <p className="text-rose-200 max-w-md mx-auto">Centralized, fragile, polluting. Emits 0.85 lbs of CO2 per kWh. Causes respiratory illness and climate volatility.</p>
                            </div>
                        </div>

                        <div className={`absolute inset-0 bg-emerald-900 transition-opacity duration-1000 ${viewMode === 'solution' ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-emerald-900/60">
                                <Sun size={64} className="text-amber-400 mb-6 drop-shadow-[0_0_15px_rgba(251,191,36,0.6)] animate-[spin_10s_linear_infinite]" />
                                <h3 className="text-3xl font-black text-white mb-4">AeroSolar Micro-Grid</h3>
                                <p className="text-emerald-100 max-w-md mx-auto">Decentralized, resilient, zero-emission. Generates endless local power while sequestering corporate carbon footprints.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. VISUALIZER SLIDER (What a difference makes) */}
                <section className="bg-emerald-50 rounded-3xl p-8 md:p-12 border border-emerald-100 relative overflow-hidden">
                    <div className="absolute -right-20 -top-20 text-emerald-500/10"><Leaf size={300} /></div>
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-black text-[#0f172a] mb-6">Scale the Impact</h2>
                            <p className="text-emerald-800 font-medium mb-10">Use the slider to see how solar capacity translates to tangible, everyday environmental milestones.</p>

                            <div className="space-y-4">
                                <div className="flex justify-between font-bold text-emerald-900">
                                    <span>Offset: <span className="text-xl font-black text-emerald-600">{visualizerTons} Tons CO₂</span></span>
                                </div>
                                <input
                                    type="range" min="1" max="1000" step="1" value={visualizerTons}
                                    onChange={(e) => setVisualizerTons(Number(e.target.value))}
                                    className="w-full h-3 bg-emerald-200 rounded-full appearance-none accent-emerald-600 cursor-pointer"
                                />
                                <div className="flex justify-between text-xs font-bold text-emerald-600/70">
                                    <span>1 Ton</span><span>1,000 Tons</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-50 text-center transform transition-all hover:-translate-y-1">
                                <Trees size={32} className="text-teal-500 mx-auto mb-3" />
                                <p className="text-3xl font-black text-[#0f172a]">{(visualizerTons * 45).toLocaleString()}</p>
                                <p className="text-xs font-bold text-emerald-600 tracking-wider uppercase mt-1">Trees Planted</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-50 text-center transform transition-all hover:-translate-y-1">
                                <Car size={32} className="text-blue-500 mx-auto mb-3" />
                                <p className="text-3xl font-black text-[#0f172a]">{(Math.floor(visualizerTons / 4.6)).toLocaleString()}</p>
                                <p className="text-xs font-bold text-sky-600 tracking-wider uppercase mt-1">Cars Taken Off Road</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. INTERACTIVE MAP OF INSTALLATIONS */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black text-[#0f172a] mb-4">Global Deployment</h2>
                        <p className="text-[var(--text-secondary)]">Hover over key hubs to see live installation capacity.</p>
                    </div>
                    <div className="frozen-glass rounded-3xl p-6 border border-white/60 shadow-xl overflow-hidden relative min-h-[400px] flex items-center justify-center bg-slate-50">
                        {/* Mock Map Background */}
                        <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-center bg-contain bg-no-repeat m-10"></div>

                        {/* Map Dots */}
                        <div className="relative w-full h-full max-w-[800px] aspect-[2/1] z-10">
                            {[
                                { id: 'NA', top: '30%', left: '20%', label: 'North America', cap: '1.2 GW' },
                                { id: 'SA', top: '65%', left: '30%', label: 'South America', cap: '350 MW' },
                                { id: 'EU', top: '25%', left: '50%', label: 'Europe', cap: '980 MW' },
                                { id: 'AF', top: '55%', left: '55%', label: 'Africa', cap: '850 MW (Core Growth)' },
                                { id: 'AS', top: '40%', left: '75%', label: 'Asia Pacific', cap: '2.1 GW' },
                                { id: 'AU', top: '75%', left: '85%', label: 'Australia', cap: '420 MW' },
                            ].map(region => (
                                <div key={region.id}
                                    className="absolute w-6 h-6 -ml-3 -mt-3 flex items-center justify-center cursor-pointer group"
                                    style={{ top: region.top, left: region.left }}
                                    onMouseEnter={() => setHoveredRegion(region.label)}
                                    onMouseLeave={() => setHoveredRegion(null)}
                                >
                                    <div className="absolute w-full h-full bg-emerald-500 rounded-full animate-ping opacity-40"></div>
                                    <div className="w-3 h-3 bg-emerald-600 rounded-full shadow-lg z-10"></div>

                                    {/* Tooltip */}
                                    <div className={`absolute bottom-full mb-3 bg-slate-800 text-white rounded-xl p-3 shadow-xl transition-all duration-300 w-48 text-center pointer-events-none origin-bottom ${hoveredRegion === region.label ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                                        <p className="font-black text-sm">{region.label}</p>
                                        <p className="text-emerald-400 font-bold text-xs mt-1">Installed: {region.cap}</p>
                                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-slate-800"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. UN SDG ALIGNMENT (Interactive Flip Cards) */}
                <section>
                    <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="max-w-xl">
                            <h2 className="text-3xl font-black text-[#0f172a] mb-4">Aligned with UN SDGs</h2>
                            <p className="text-[var(--text-secondary)]">We map every corporate initiative to the United Nations Sustainable Development Goals. Click a card to reveal how we tackle it.</p>
                        </div>
                        <div className="bg-blue-50 text-blue-800 px-5 py-2.5 rounded-full font-bold text-sm border border-blue-200 shadow-sm flex items-center gap-2 w-max">
                            <Globe size={18} /> United Nations Global Compact Member
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {sdgs.map(sdg => (
                            <div key={sdg.id}
                                className="h-64 relative perspective-1000 cursor-pointer group"
                                onClick={() => setFlippedCard(flippedCard === sdg.id ? null : sdg.id)}>
                                <div className={`w-full h-full relative preserve-3d transition-transform duration-700 ${flippedCard === sdg.id ? 'rotate-y-180' : ''}`}>
                                    {/* Front */}
                                    <div className="absolute inset-0 backface-hidden bg-white border border-slate-200 rounded-2xl p-6 shadow-md flex flex-col items-center justify-center text-center hover:border-emerald-300 hover:shadow-lg transition-all">
                                        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-emerald-600 mb-4 shadow-inner">
                                            {sdg.icon}
                                        </div>
                                        <div className="inline-block px-3 py-1 bg-slate-100 text-slate-500 font-black text-[10px] uppercase tracking-widest rounded-full mb-3">Goal {sdg.num}</div>
                                        <h3 className="font-bold text-[#0f172a] text-lg">{sdg.title}</h3>
                                        <p className="text-xs text-sky-600 font-bold mt-4 uppercase flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">Tap to reveal <ArrowRight size={12} /></p>
                                    </div>
                                    {/* Back */}
                                    <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-emerald-600 to-teal-800 rounded-2xl p-6 shadow-xl text-white flex flex-col justify-center text-center">
                                        <h4 className="font-black text-xl mb-3 border-b border-white/20 pb-3">{sdg.title}</h4>
                                        <p className="text-emerald-50 text-sm leading-relaxed">{sdg.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 7. COMMUNITY STORIES CAROUSEL */}
                <section className="bg-[#0f172a] rounded-3xl p-8 md:p-16 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-8 text-white/5 pointer-events-none"><Anchor size={250} /></div>

                    <h2 className="text-3xl font-black mb-10 relative z-10 text-emerald-400">Community Voices</h2>

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <div className="min-h-[200px] flex items-center justify-center text-center px-4">
                            <p className="text-2xl md:text-3xl font-medium leading-relaxed italic animate-in slide-in-from-right duration-500" key={currentTestimonial}>
                                "{testimonials[currentTestimonial].quote}"
                            </p>
                        </div>
                        <div className="mt-8 text-center" key={`author-${currentTestimonial}`}>
                            <p className="font-black text-lg text-emerald-400">{testimonials[currentTestimonial].author}</p>
                            <p className="text-slate-400 text-sm font-bold tracking-widest uppercase mt-1">{testimonials[currentTestimonial].company}</p>
                        </div>

                        <div className="flex justify-center gap-4 mt-12">
                            <button
                                onClick={() => setCurrentTestimonial(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                                <ChevronLeft size={20} />
                            </button>
                            <div className="flex items-center gap-2">
                                {testimonials.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentTestimonial(i)}
                                        className={`w-3 h-3 rounded-full transition-all ${i === currentTestimonial ? 'bg-emerald-500 scale-125' : 'bg-white/20 hover:bg-white/40'}`}
                                    />
                                ))}
                            </div>
                            <button
                                onClick={() => setCurrentTestimonial(prev => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </section>

                {/* 8. MINI CALCULATOR IMPACT PEEK */}
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex py-1 px-3 bg-sky-100 text-sky-700 font-bold text-xs uppercase tracking-widest rounded-full mb-4">Enterprise Impact</div>
                        <h2 className="text-3xl font-black text-[#0f172a] mb-6">Quantify Your Potential</h2>
                        <p className="text-[var(--text-secondary)] mb-8">
                            Every facility has an idle roof or parking lot. See what transforming that space means for your corporate ESG goals instantly.
                        </p>
                        <ul className="space-y-4 font-medium text-slate-600 mb-8">
                            <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-500" size={20} /> Reduce Scope 2 emissions immediately</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-500" size={20} /> Protect against utility rate hikes</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-500" size={20} /> Improve property valuation</li>
                        </ul>
                    </div>
                    <div className="frozen-glass rounded-3xl p-8 border border-white/60 shadow-xl bg-gradient-to-br from-white/80 to-sky-50/50">
                        <h4 className="font-black text-center mb-6 text-slate-800">Quick Estimate: Office Building</h4>
                        <div className="space-y-6">
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 flex justify-between items-center">
                                <span className="font-bold text-slate-500 text-sm">Roof Area (Sq Ft)</span>
                                <span className="font-black text-sky-600 text-xl">50,000</span>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-1 bg-emerald-50 rounded-xl p-4 text-center border border-emerald-100">
                                    <p className="text-2xl font-black text-emerald-600">650 kW</p>
                                    <p className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider mt-1">System Size</p>
                                </div>
                                <div className="flex-1 bg-amber-50 rounded-xl p-4 text-center border border-amber-100">
                                    <p className="text-2xl font-black text-amber-600">$1.2M</p>
                                    <p className="text-[10px] font-bold text-amber-800 uppercase tracking-wider mt-1">20-Yr Savings</p>
                                </div>
                            </div>
                            <button className="w-full bg-[#0f172a] hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2">
                                Go to Advanced Calculator <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                </section>

                {/* 9. CIRCULAR ECONOMY TIMELINE */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black text-[#0f172a] mb-4">True Circularity</h2>
                        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">Solar panels shouldn't end up in landfills. Our closed-loop hardware lifecycle reclaims 95% of material.</p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 max-w-5xl mx-auto">
                        {[
                            { step: 1, title: 'Extraction', desc: 'Ethical sourcing of raw silicon and conflict-free minerals.' },
                            { step: 2, title: 'Manufacturing', desc: '100% renewable powered assembly lines.' },
                            { step: 3, title: 'Operation', desc: '30+ year active lifespan with zero direct emissions.' },
                            { step: 4, title: 'Recycling', desc: 'Glass, aluminum, and rare metals separated and reused.' },
                        ].map((s) => (
                            <div
                                key={s.step}
                                onMouseEnter={() => setActiveEcoStep(s.step)}
                                className={`flex-1 rounded-2xl p-6 transition-all duration-300 cursor-pointer border ${activeEcoStep === s.step ? 'bg-emerald-600 text-white border-emerald-500 shadow-xl scale-105 z-10' : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50'}`}
                            >
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black mb-4 ${activeEcoStep === s.step ? 'bg-white text-emerald-600' : 'bg-slate-100 text-slate-400'}`}>
                                    {s.step}
                                </div>
                                <h4 className={`font-black text-lg mb-2 ${activeEcoStep === s.step ? 'text-white' : 'text-[#0f172a]'}`}>{s.title}</h4>
                                <p className={`text-sm leading-relaxed ${activeEcoStep === s.step ? 'text-emerald-50' : 'text-slate-500'}`}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 10. WILDLIFE & ECOSYSTEM (Image hover cards) */}
                <section>
                    <h2 className="text-3xl font-black text-[#0f172a] mb-10 text-center">Pollinator-Friendly Arrays</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { img: "https://images.unsplash.com/photo-1518774026360-35741eed8eeb?auto=format&fit=crop&q=80", title: "Agrivoltaics", desc: "Sheep grazing beneath raised panels maintains land health without mowing." },
                            { img: "https://images.unsplash.com/photo-1588600878108-578307a3cc9d?auto=format&fit=crop&q=80", title: "Native Flora", desc: "Seeding native wildflowers around installations fixes nitrogen and prevents runoff." },
                            { img: "https://images.unsplash.com/photo-1589133663004-9276495be1eb?auto=format&fit=crop&q=80", title: "Apiary Integration", desc: "Partnering with local beekeepers to host hives safe from high wind beneath panels." },
                        ].map((item, i) => (
                            <div key={i} className="group h-80 rounded-3xl overflow-hidden relative shadow-lg">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${item.img})` }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 w-full p-8 transform transition-transform duration-300 translate-y-8 group-hover:translate-y-0">
                                    <h4 className="text-white font-black text-xl mb-2">{item.title}</h4>
                                    <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 11. EDUCATIONAL SCHOLARSHIPS (Accordion) */}
                <section className="bg-sky-50 border border-sky-100 rounded-3xl p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <div className="w-16 h-16 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mb-6">
                                <BookOpen size={32} />
                            </div>
                            <h2 className="text-3xl font-black text-[#0f172a] mb-4">Empowering the Next Generation</h2>
                            <p className="text-sky-800 leading-relaxed mb-6">
                                We direct 5% of net profits to STEM education programs aimed at underserved communities, building a pipeline of diverse talent for the renewable sector.
                            </p>
                            <div className="flex -space-x-4 mb-4">
                                {[1, 2, 3, 4].map(i => (
                                    <img key={i} className="w-12 h-12 rounded-full border-2 border-white object-cover" src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Student" />
                                ))}
                                <div className="w-12 h-12 rounded-full border-2 border-white bg-sky-200 text-sky-800 font-bold flex items-center justify-center text-xs">+2k</div>
                            </div>
                            <p className="text-sm font-bold text-sky-700">Students Supported Globally</p>
                        </div>
                        <div className="space-y-4">
                            {[
                                { q: "Women in CleanTech Grant", a: "A $10,000 annual scholarship awarded to 50 female engineering students entering the renewable energy space." },
                                { q: "Trade School Apprenticeships", a: "Fully paid, 6-month hands-on training for high school graduates to become certified solar installers and electricians." },
                                { q: "K-12 Solar Curriculum", a: "We donate solar learning kits and curriculum maps to 500 under-funded public schools annually." },
                            ].map((faq, i) => (
                                <div key={i} className="bg-white rounded-2xl border border-sky-100 shadow-sm overflow-hidden">
                                    <button
                                        onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                                        className="w-full px-6 py-5 text-left font-bold text-[#0f172a] flex justify-between items-center hover:bg-sky-50/50"
                                    >
                                        {faq.q}
                                        <ChevronDown className={`transform transition-transform ${openAccordion === i ? 'rotate-180 text-sky-500' : 'text-slate-400'}`} size={18} />
                                    </button>
                                    <div className={`px-6 pb-5 text-slate-600 text-sm leading-relaxed transition-all duration-300 ${openAccordion === i ? 'block' : 'hidden'}`}>
                                        {faq.a}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 12. R&D Lab Transparency */}
                <section>
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-black text-[#0f172a]">Future Tech Labs</h2>
                    </div>
                    <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-200 border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
                        {[
                            { title: "Perovskite Solar Cells", stat: "28.5%", label: "Lab Efficiency Achieved" },
                            { title: "Solid-State Batteries", stat: "40%", label: "Higher Energy Density" },
                            { title: "AI Grid Balancing", stat: "<2ms", label: "Anomaly Response Time" },
                        ].map((lab, i) => (
                            <div key={i} className="flex-1 p-8 bg-white hover:bg-slate-50 transition-colors group cursor-crosshair">
                                <h4 className="font-bold text-slate-500 text-sm uppercase tracking-wider mb-8">{lab.title}</h4>
                                <p className="text-4xl font-black text-[#0f172a] mb-2 transform group-hover:scale-110 group-hover:text-emerald-500 transition-all origin-left">{lab.stat}</p>
                                <p className="text-sm font-medium text-slate-400">{lab.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 13. LIVE DATA TERMINAL */}
                <section className="bg-slate-900 rounded-3xl p-8 font-mono text-emerald-400 relative overflow-hidden shadow-2xl border border-slate-700">
                    <div className="absolute top-4 right-4 flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    </div>
                    <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
                        <Activity className="animate-pulse text-emerald-500" size={20} />
                        <h4 className="font-bold text-white tracking-widest text-sm">GLOBAL_TELEMETRY_STREAM_v2.4</h4>
                    </div>
                    <div className="space-y-2 h-48 overflow-hidden flex flex-col justify-end text-sm">
                        {terminalLines.map((line, i) => (
                            <div key={i} className="animate-in fade-in slide-in-from-bottom-2">{line}</div>
                        ))}
                        <div className="flex items-center gap-2 mt-2">
                            <span>&gt;</span>
                            <div className="w-3 h-5 bg-emerald-400 animate-pulse"></div>
                        </div>
                    </div>
                </section>

                {/* 14. ESG REPORT DOWNLOAD */}
                <section className="frozen-glass rounded-3xl p-8 md:p-12 border border-emerald-500/30 bg-emerald-500/5 shadow-[0_0_50px_rgba(16,185,129,0.1)] relative">
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-emerald-100/50 to-transparent pointer-events-none rounded-3xl"></div>
                    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <div className="w-16 h-16 bg-white shadow-md rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                                <ShieldCheck size={32} />
                            </div>
                            <h2 className="text-3xl font-black text-[#0f172a] mb-4">Complete Transparency</h2>
                            <p className="text-[var(--text-secondary)] mb-6">
                                Download our 2026 ESG (Environmental, Social, and Governance) report. Verified by third-party auditors and fully compliant with SEC climate rules.
                            </p>
                            <div className="flex gap-4">
                                <div className="bg-white px-4 py-2 rounded-lg text-xs font-bold text-slate-500 border border-slate-200">PDF Document</div>
                                <div className="bg-white px-4 py-2 rounded-lg text-xs font-bold text-slate-500 border border-slate-200">14.2 MB</div>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-xl border border-emerald-100 flex flex-col items-center justify-center text-center">
                            <h4 className="font-bold text-[#0f172a] mb-2">Get the Full Report</h4>
                            <p className="text-sm text-slate-500 mb-6">Enter your details to receive the 45-page PDF directly to your inbox.</p>

                            <button
                                onClick={() => setIsLeadModalOpen(true)}
                                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 transition-all text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg"
                            >
                                <Download size={20} /> Access Report Now
                            </button>
                            <p className="text-[10px] text-slate-400 mt-4 leading-tight">100% Free. No commitment required.</p>
                        </div>
                    </div>
                </section>

                {/* 15. FINAL CTA */}
                <section className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                    <div className="relative z-10 max-w-2xl mx-auto py-8">
                        <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to make an impact?</h2>
                        <p className="text-emerald-100 text-lg mb-10">
                            Join the hundreds of enterprises actively reversing climate change while reducing operational costs.
                        </p>
                        <button className="bg-white text-emerald-600 hover:bg-slate-50 font-black px-10 py-5 rounded-2xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3 mx-auto">
                            Start Your Partnership <ArrowRight size={20} />
                        </button>
                    </div>
                </section>

            </div>

            <LeadMagnetModal isOpen={isLeadModalOpen} onClose={() => setIsLeadModalOpen(false)} />
        </div>
    );
}

// Helper icon
function ChevronDown({ className, size }: { className?: string, size: number }) {
    return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>;
}

export default Impact;
