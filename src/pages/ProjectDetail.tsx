import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Building2, CheckCircle2, TrendingUp, Zap } from 'lucide-react';
import { projects } from '../data/projects';
import SEO from '../components/SEO';

function ProjectDetail() {
    const { id } = useParams<{ id: string }>();
    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Project Not Found</h2>
                <p className="text-slate-600 mb-8">The case study you are looking for doesn't exist or has been moved.</p>
                <Link to="/projects" className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-lime-600 transition-colors">
                    Back to Portfolio
                </Link>
            </div>
        );
    }

    return (
        <div className="w-full pb-24">
            <SEO
                title={`${project.title} | Case Study | Sai Gayatri Greentech`}
                description={project.description}
            />

            {/* HERO SECTION */}
            <section className="relative pt-16 pb-24 px-4 md:px-8 overflow-hidden bg-[#f7fee7]">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-lime-200/20 to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <Link to="/projects" className="inline-flex items-center gap-2 text-lime-700 font-bold mb-8 hover:text-lime-800 transition-colors group">
                        <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" /> Back to Portfolio
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-1.5 bg-lime-500/10 border border-lime-500/20 text-lime-700 text-sm font-black uppercase tracking-wider rounded-full mb-6">
                                {project.type}
                            </span>
                            <h1 className="text-4xl md:text-6xl font-black text-[#0f172a] mb-6 leading-tight">
                                {project.title}
                            </h1>
                            <p className="text-xl text-slate-700 leading-relaxed max-w-xl mb-8">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-6 text-slate-600 font-bold">
                                <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-xl border border-white/80 shadow-sm">
                                    <Building2 size={20} className="text-lime-600" />
                                    {project.client}
                                </div>
                                <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-xl border border-white/80 shadow-sm">
                                    <MapPin size={20} className="text-lime-600" />
                                    {project.location}
                                </div>
                                <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-xl border border-white/80 shadow-sm">
                                    <Zap size={20} className="text-lime-600" />
                                    {project.size}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-8 rounded-3xl shadow-xl max-w-[240px]">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-lime-500 rounded-lg">
                                        <TrendingUp size={20} className="text-slate-900" />
                                    </div>
                                    <span className="text-sm font-bold uppercase tracking-wider text-slate-400">Total Yield</span>
                                </div>
                                <p className="text-2xl font-black">2.4 GWh</p>
                                <p className="text-xs text-slate-400 mt-1">Lifetime clean energy produced</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* IMPACT GRID */}
            <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Project Impact</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto font-medium">Real-world results delivered through meticulous engineering and quality components.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="frozen-glass p-8 rounded-3xl border border-white/80 shadow-lg text-center">
                        <p className="text-lime-600 font-bold uppercase text-xs tracking-widest mb-2">CO₂ Reduction</p>
                        <p className="text-4xl font-black text-slate-900 mb-1">{project.metrics.co2}</p>
                        <p className="text-sm text-slate-500">Offset Per Year</p>
                    </div>
                    <div className="frozen-glass p-8 rounded-3xl border border-white/80 shadow-lg text-center">
                        <p className="text-green-600 font-bold uppercase text-xs tracking-widest mb-2">Homes Powered</p>
                        <p className="text-4xl font-black text-slate-900 mb-1">{project.metrics.homes}</p>
                        <p className="text-sm text-slate-500">Residential Equivalent</p>
                    </div>
                    {project.metrics.additional?.map((metric, idx) => (
                        <div key={idx} className="frozen-glass p-8 rounded-3xl border border-white/80 shadow-lg text-center">
                            <p className="text-lime-600 font-bold uppercase text-xs tracking-widest mb-2">{metric.label}</p>
                            <p className="text-4xl font-black text-slate-900 mb-1">{metric.value}</p>
                            <p className="text-sm text-slate-500">Project Benefit</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* DETAILS SECTION */}
            <section className="py-24 px-4 md:px-8 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-12">
                            <div>
                                <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-lime-100 flex items-center justify-center text-lime-600 text-sm">01</span>
                                    The Challenge
                                </h3>
                                <p className="text-lg text-slate-700 leading-relaxed italic border-l-4 border-lime-400 pl-6 py-2 bg-white/40 rounded-r-2xl">
                                    "{project.challenge}"
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-lime-100 flex items-center justify-center text-lime-600 text-sm">02</span>
                                    Our Approach
                                </h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    {project.solution}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-lime-100 flex items-center justify-center text-lime-600 text-sm">03</span>
                                    The Outcome
                                </h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    {project.results}
                                </p>
                            </div>

                            {/* SMALL GALLERY */}
                            {project.gallery && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                                    {project.gallery.map((img, i) => (
                                        <div key={i} className="aspect-video rounded-3xl overflow-hidden shadow-lg border-2 border-white">
                                            <img src={img} alt={`${project.title} gallery ${i}`} className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-white p-8 rounded-[40px] shadow-xl border border-slate-100 sticky top-32">
                                <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
                                    <CheckCircle2 className="text-lime-600" size={24} />
                                    Technical Specs
                                </h3>
                                <div className="space-y-4">
                                    {project.specs.map((spec, i) => (
                                        <div key={i} className="flex flex-col pb-4 border-b border-slate-50 last:border-0 hover:bg-slate-50 p-2 rounded-xl transition-colors">
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{spec.label}</span>
                                            <span className="text-slate-800 font-bold">{spec.value}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 p-6 bg-lime-50 rounded-3xl border border-lime-100">
                                    <p className="text-sm font-bold text-lime-800 mb-4">Want a similar solution for your facility?</p>
                                    <Link to="/contact">
                                        <button className="w-full py-4 bg-slate-900 hover:bg-lime-600 text-white rounded-xl font-bold transition-all shadow-md active:scale-95">
                                            Request a Quote
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProjectDetail;
