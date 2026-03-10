import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Building2 } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

import { projects } from '../data/projects';

function Projects() {
    const [filter, setFilter] = useState('All');

    return (
        <div className="w-full flex flex-col pt-4 pb-24">
            <SEO
                title="Case Studies & Portfolio | Sai Gayatri Greentech"
                description="Explore massive enterprise solar installments and utility-scale green energy projects deployed globally."
            />

            {/* HERO */}
            <section className="relative px-4 md:px-8 max-w-7xl mx-auto pt-16 pb-12 w-full text-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-lime-500/10 blur-[100px] rounded-full -z-10" />
                <h1 className="text-5xl md:text-7xl font-black text-[#0f172a] mb-6 tracking-tight">
                    Proof of <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-green-500">Power</span>
                </h1>
                <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
                    We don't just design theoretical systems. We build high-performance, efficient solar infrastructure across Telangana and Andhra Pradesh. Explore our successful deployments.
                </p>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mt-12 bg-white/50 p-2 rounded-2xl max-w-fit mx-auto border border-white/80 shadow-sm">
                    {['All', 'Utility-Scale', 'Commercial Rooftop', 'Micro-Grid'].map(f => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${filter === f ? 'bg-[#0f172a] text-white shadow-md' : 'text-slate-500 hover:text-slate-800 hover:bg-white'}`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </section>

            {/* PROJECTS GRID */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto w-full py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group frozen-glass rounded-3xl overflow-hidden border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="h-72 w-full relative overflow-hidden">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${project.image})` }} />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

                                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md border border-white/40 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider">
                                    {project.size}
                                </div>

                                <div className="absolute bottom-4 left-6 right-6">
                                    <p className="text-lime-400 text-xs font-bold uppercase tracking-widest mb-1">{project.type}</p>
                                    <h3 className="text-2xl font-black text-white">{project.title}</h3>
                                </div>
                            </div>

                            <div className="p-6 bg-white/60">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="flex items-center gap-2 text-slate-500 text-sm font-bold">
                                        <Building2 size={16} /> {project.client}
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                                        <MapPin size={16} /> {project.location}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="bg-lime-50 border border-lime-100 p-4 rounded-2xl">
                                        <p className="text-xs font-bold text-lime-600 uppercase mb-1">CO₂ Offset/Yr</p>
                                        <p className="text-xl font-black text-[#0f172a]">{project.metrics.co2}</p>
                                    </div>
                                    <div className="bg-green-50 border border-green-100 p-4 rounded-2xl">
                                        <p className="text-xs font-bold text-green-600 uppercase mb-1">Homes Powered</p>
                                        <p className="text-xl font-black text-[#0f172a]">{project.metrics.homes}</p>
                                    </div>
                                </div>

                                <Link to={`/projects/${project.id}`} className="block w-full">
                                    <button className="w-full py-4 bg-slate-900 hover:bg-lime-600 text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2">
                                        View Case Study <ArrowRight size={18} />
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Projects;
