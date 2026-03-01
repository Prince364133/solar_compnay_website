import { Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const articles = [
    {
        id: '1',
        title: 'The Financial Case for Datacenter Micro-Grids',
        category: 'Market Trends',
        date: 'Oct 12, 2026',
        read: '6 min read',
        author: 'Dr. Arjun Mehta',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80',
        excerpt: 'As AI workloads double, the grid is failing to keep up. Here\'s why hyperscalers are turning to on-site solar.'
    },
    {
        id: '2',
        title: 'Navigating Section 48 ITC Requirements',
        category: 'Policy & Finance',
        date: 'Oct 08, 2026',
        read: '12 min read',
        author: 'Sophia Chen',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
        excerpt: 'A comprehensive guide to structured finance and maximizing your Investment Tax Credit on massive commercial installations.'
    },
    {
        id: '3',
        title: 'Breakthroughs in Battery Storage Management',
        category: 'Technology',
        date: 'Sep 29, 2026',
        read: '8 min read',
        author: 'Dr. Priya Sharma',
        image: 'https://images.unsplash.com/photo-1620803023069-b3a537fbdca3?auto=format&fit=crop&q=80',
        excerpt: 'How AI-driven charge/discharge cycles are extending the lifespan of industrial MegaPack arrays by up to 30%.'
    }
];

function Insights() {
    return (
        <div className="w-full flex flex-col pt-4 pb-24">
            <SEO
                title="Insights & Research | AeroSolar"
                description="Industry updates, policy analysis, and technological breakthroughs in the commercial renewable energy sector."
            />

            {/* HERO */}
            <section className="relative px-4 md:px-8 max-w-7xl mx-auto pt-16 pb-12 w-full">
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-7xl font-black text-[#0f172a] mb-6 tracking-tight">
                        Research & <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">Insights</span>
                    </h1>
                    <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
                        Deep dives into energy policy, grid infrastructure, and the financial mechanics of the clean transition.
                    </p>
                </div>

                {/* FEATURED POST */}
                <div className="bg-slate-900 rounded-3xl p-2 relative overflow-hidden shadow-2xl flex flex-col md:flex-row group cursor-pointer mb-16">
                    <div className="md:w-1/2 h-64 md:h-96 relative rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-white relative z-10">
                        <div className="flex gap-3 mb-6">
                            <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold tracking-widest border border-emerald-500/30">LATEST RESEARCH</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black mb-4 group-hover:text-emerald-400 transition-colors">The 2026 Enterprise Guide to Solar ROI</h2>
                        <p className="text-slate-300 leading-relaxed mb-6">We analyzed 500+ commercial installations to determine exactly how quickly Class A real estate can achieve grid parity.</p>

                        <div className="flex items-center gap-4 text-sm text-slate-400 font-medium">
                            <span className="flex items-center gap-1"><User size={16} /> Research Team</span>
                            <span className="flex items-center gap-1"><Calendar size={16} /> Oct 15</span>
                        </div>
                    </div>
                </div>

                {/* POSTS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article, i) => (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col"
                        >
                            <div className="h-48 w-full relative overflow-hidden">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${article.image})` }} />
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <span className="text-xs font-bold text-emerald-600 tracking-wider uppercase mb-3">{article.category}</span>
                                <h3 className="text-xl font-bold text-[#0f172a] mb-3 group-hover:text-emerald-600 transition-colors">{article.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{article.excerpt}</p>

                                <div className="flex justify-between items-center text-xs font-medium text-slate-400 pt-4 border-t border-slate-100">
                                    <span className="flex items-center gap-1"><Calendar size={14} /> {article.date}</span>
                                    <span>{article.read}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Insights;
