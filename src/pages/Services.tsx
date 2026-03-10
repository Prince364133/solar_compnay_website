import {
    Sun, Battery, Zap, Building2, Wrench,
    Cpu, ShieldCheck, ChevronRight, Droplets, Lightbulb
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function Services() {
    return (
        <div className="w-full flex flex-col pt-4 pb-24">
            <SEO
                title="Sai Gayatri Greentech | Our Solar Solutions"
                description="Comprehensive solar solutions including On-Grid, Off-Grid, Commercial plants, and more."
            />
            {/* 1. HERO SECTION */}
            <section className="relative w-full min-h-[50vh] flex items-center justify-center p-6 overflow-hidden">
                <div className="absolute inset-0 bg-[#0a1a05]">
                    <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1588600878108-578307a3cc9d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a05] via-[#0a1a05]/60 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-in slide-in-from-bottom-5 duration-700 mt-20">
                    <div className="inline-flex py-1.5 px-4 bg-lime-500/20 border border-lime-400/30 text-lime-300 font-bold text-xs uppercase tracking-widest rounded-full backdrop-blur-md">
                        Comprehensive Range
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white px-4 leading-tight">
                        Our Solar Systems & <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-400">Solutions</span>
                    </h1>
                    <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
                        From residential rooftops to commercial power plants, we provide high-quality solar products to meet your energy needs.
                    </p>
                </div>
            </section>

            <div className="max-w-[1400px] mx-auto w-full px-6 flex flex-col pt-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {[
                        { icon: <Zap size={32} />, title: "On-Grid Solar Power System", desc: "Grid-connected systems that reduce your reliance on DISCOMs. Best for homes and businesses with stable electricity to maximize savings and net metering benefits." },
                        { icon: <Battery size={32} />, title: "Off-Grid Solar Power System", desc: "Independent systems with battery backup. Ideal for areas with frequent power cuts. Generate and store your own power for 24/7 reliability." },
                        { icon: <Cpu size={32} />, title: "Hybrid Solar Power System", desc: "The best of both worlds. Connects to the grid and includes battery storage. Never worry about power outages or high bills again." },
                        { icon: <Building2 size={32} />, title: "Commercial Solar Plants", desc: "High-capacity scalable PV plants for factories, hospitals, and educational institutions. Accelerate your ROI and enjoy tax depreciation benefits." },
                        { icon: <Sun size={32} />, title: "Solar Water Heaters (ETC & FPC)", desc: "Efficient heating solutions using Evacuated Tube Collectors (ETC) or Flat Plate Collectors (FPC) to significantly cut down your water heating electricity costs." },
                        { icon: <Lightbulb size={32} />, title: "Solar Street Lights", desc: "Integrated and standalone LED solar street lights. Zero running cost, automatic dusk-to-dawn operation, perfect for communities and pathways." },
                        { icon: <Droplets size={32} />, title: "Solar Water Pumps", desc: "MNRE-approved agricultural solar pumps. Reliable watering solutions for farmers without depending on the erratic grid supply." },
                        { icon: <Wrench size={32} />, title: "Operation & Maintenance (AMC)", desc: "Comprehensive Annual Maintenance Contracts. We ensure your existing and new solar systems run at peak performance year-round with regular cleaning and technically thorough checks." }
                    ].map((s, i) => (
                        <div key={i} className="frozen-glass rounded-3xl p-8 border border-white/60 shadow-xl frozen-glass-hover group flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-lime-50 w-16 h-16 rounded-2xl flex items-center justify-center text-lime-600 mb-6 group-hover:bg-lime-500 group-hover:text-white transition-colors">
                                {s.icon}
                            </div>
                            <h4 className="text-xl font-black text-[#1a2e05] mb-3">{s.title}</h4>
                            <p className="text-[var(--text-secondary)] text-sm leading-relaxed flex-grow">
                                {s.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* 11. CTA */}
                <section className="frozen-glass rounded-3xl p-10 text-center border border-lime-500/30 bg-lime-50 shadow-[0_0_50px_rgba(163,230,53,0.1)] mb-12 relative overflow-hidden">
                    <div className="absolute -left-20 -top-20 text-lime-500/10 transform -rotate-12"><ShieldCheck size={250} /></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-black text-[#1a2e05] mb-4">Start Saving with Solar Today</h2>
                        <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
                            Get a customized solar solution designed for your specific property and energy needs. Call us today for a free assessment!
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/calculator">
                                <button className="bg-[#1a2e05] hover:bg-[#0a1a05] text-white font-black px-8 py-4 rounded-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto">
                                    Calculate Savings
                                </button>
                            </Link>
                            <Link to="/contact">
                                <button className="bg-lime-500 hover:bg-lime-400 text-[#1a2e05] font-black px-8 py-4 rounded-xl transition-all shadow-xl hover:shadow-lime-500/40 hover:-translate-y-1 flex justify-center items-center gap-2 w-full sm:w-auto">
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
