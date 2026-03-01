import { Briefcase, Zap, HeartHandshake, MapPin, ExternalLink, Battery, Users, Cpu, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const jobs = [
    { id: 1, title: 'Lead Field Engineer', dept: 'Engineering', loc: 'San Francisco, CA', type: 'Full-time', icon: Zap },
    { id: 2, title: 'ESG Reporting Senior Analyst', dept: 'Sustainability', loc: 'Remote', type: 'Full-time', icon: HeartHandshake },
    { id: 3, title: 'Project Finance Manager', dept: 'Finance', loc: 'London, UK', type: 'Full-time', icon: Briefcase },
    { id: 4, title: 'SCADA Systems Developer', dept: 'Technology', loc: 'Singapore', type: 'Full-time', icon: Code },
    { id: 5, title: 'Logistics Coordinator', dept: 'Operations', loc: 'Berlin, Germany', type: 'Contract', icon: Battery },
    { id: 6, title: 'HR Business Partner', dept: 'People', loc: 'San Francisco, CA', type: 'Full-time', icon: Users },
];

function Careers() {
    return (
        <div className="w-full flex flex-col pt-4 pb-24">
            <SEO
                title="Careers | AeroSolar"
                description="Join our team of engineers and innovators to build the future of renewable energy operations."
            />

            {/* HERO */}
            <section className="relative px-4 md:px-8 max-w-7xl mx-auto pt-16 pb-12 w-full text-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-sky-500/10 blur-[120px] rounded-full -z-10" />
                <h1 className="text-5xl md:text-7xl font-black text-[#0f172a] mb-6 tracking-tight">
                    Do the best work of <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">Your Life.</span>
                </h1>
                <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-10">
                    We're tackling the greatest engineering challenge of our generation. Join 400+ innovators making zero-emission industry a reality.
                </p>
                <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black shadow-xl hover:-translate-y-1 transition-transform">
                    View Open Roles
                </button>
            </section>

            {/* OPEN POSITIONS */}
            <section className="px-4 md:px-8 max-w-5xl mx-auto w-full py-16">
                <div className="flex justify-between items-end border-b border-slate-200 pb-6 mb-8">
                    <div>
                        <h2 className="text-3xl font-black text-[#0f172a]">Open Roles</h2>
                        <p className="text-[var(--text-secondary)]">12 roles across 6 departments</p>
                    </div>
                </div>

                <div className="space-y-4">
                    {jobs.map((job) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between shadow-sm hover:shadow-md transition-shadow group"
                        >
                            <div className="flex items-center gap-6 w-full md:w-auto mb-4 md:mb-0">
                                <div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center shrink-0">
                                    <job.icon size={20} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#0f172a] mb-1 group-hover:text-emerald-600 transition-colors">{job.title}</h3>
                                    <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-500">
                                        <span className="flex items-center gap-1"><Cpu size={14} /> {job.dept}</span>
                                        <span className="flex items-center gap-1"><MapPin size={14} /> {job.loc}</span>
                                        <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md text-xs">{job.type}</span>
                                    </div>
                                </div>
                            </div>
                            <button className="hidden md:flex items-center gap-2 text-emerald-600 font-bold px-6 py-3 bg-emerald-50 rounded-xl opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
                                Apply <ExternalLink size={16} />
                            </button>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
                    <h4 className="font-bold text-emerald-800 mb-2">Don't see a fit?</h4>
                    <p className="text-emerald-600/80 text-sm mb-4">Send us your resume anyway. We're always looking for exceptional talent.</p>
                    <button className="bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl shadow-sm hover:bg-emerald-700 transition-colors">
                        Submit Open Application
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Careers;
