import { Leaf, Globe, ShieldCheck, TrendingUp, Target, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function About() {

    return (
        <div className="flex flex-col gap-24 pb-20 overflow-hidden">
            <SEO
                title="About Sai Gayatri Greentech"
                description="Our mission is to accelerate the transition to sustainable enterprise energy."
            />

            {/* SECTION 1: Hero */}
            <section className="relative bg-[#f7fee7] py-28 overflow-hidden rounded-b-[3rem] mx-2">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lime-400/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-green-400/5 blur-[100px] rounded-full pointer-events-none" />

                <div className="relative z-10 px-4 md:px-8 max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-200 border border-lime-300 text-lime-800 text-sm font-bold uppercase tracking-widest mb-8">
                        <Leaf size={14} className="text-lime-600" /> About Sai Gayatri Greentech
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 text-[#1a2e05]">
                        Powering Hyderabad with
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-green-600"> Green Energy.</span>
                    </h1>
                    <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
                        Sai Gayatri Greentech is a pioneer in solar energy solutions in Hyderabad and Andhra Pradesh. We are a Government of India MNRE-Approved channel partner dedicated to transforming how homes and businesses consume electricity. With over a decade of expertise, we specialize in high-efficiency on-grid solar power systems, commercial solar plants, solar water heaters, and more.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center mt-10">
                        <Link to="/contact">
                            <button className="bg-gradient-to-r from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600 text-[#1a2e05] px-8 py-4 rounded-2xl font-black transition-all hover:scale-105 shadow-xl shadow-lime-500/20">
                                Contact Us Today
                            </button>
                        </Link>
                    </div>
                </div>
            </section>



            {/* SECTION 3: Our Mission & Vision */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12">
                <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-3xl p-10 border border-lime-100 shadow-sm relative overflow-hidden">
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-lime-200/50 rounded-full blur-2xl" />
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-lime-100 text-lime-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                            <Target size={12} /> Our Mission
                        </div>
                        <h2 className="text-3xl font-black text-[#1a2e05] mb-4 leading-tight">To deliver affordable, high-quality, and reliable solar solutions.</h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            We aim to deliver affordable, high-quality, and reliable solar solutions to every rooftop in India, ensuring rapid ROI, energy independence, and a cleaner environment for future generations.
                        </p>
                    </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-lime-50 rounded-3xl p-10 border border-green-100 shadow-sm relative overflow-hidden">
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-200/30 rounded-full blur-2xl" />
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                            <Globe size={12} /> Our Vision
                        </div>
                        <h2 className="text-3xl font-black mb-4 leading-tight text-[#1a2e05]">To make India a Solar Super Power by 2030.</h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            To make India a Solar Super Power by 2030 by empowering communities with clean, limitless solar energy, ultimately driving a zero-carbon economy.
                        </p>
                    </div>
                </div>
            </section>


            {/* SECTION 5: Requirements / Documentation */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto py-16">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-[#0f172a] mb-4">Simple Process & Required Documents</h2>
                    <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">Going solar is easy. We handle 90% of the paperwork for you. Here is what is needed for net-metering and subsidies:</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: 'Aadhar Card', desc: 'Copy of Aadhar Card linked to your mobile number.' },
                        { title: 'PAN Card', desc: 'Copy of PAN Card of the applicant.' },
                        { title: 'Electricity Bill', desc: 'Recent electricity bill (not older than 3 months).' },
                        { title: 'Property Tax Receipt', desc: 'Latest property tax receipt for the installation premises.' },
                        { title: 'Applicant Photo', desc: 'Recent passport-size photograph of the applicant.' },
                        { title: 'Approval Leters', desc: 'Local body approval if required by the state nodal agency.' },
                        { title: 'Bank Passbook', desc: 'Copy of bank passbook or cancelled cheque for subsidy direct transfer.' },
                        { title: 'Structural Safety', desc: 'Structural safety certificate if installing a high-capacity system on older roofs.' },
                        { title: 'Shadow-Free Area', desc: 'Minimum 100 sq. ft. of shadow-free rooftop area per 1kW system.' }
                    ].map((v, i) => (
                        <div key={i} className="bg-white/70 rounded-3xl p-8 border border-white/80 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                            <h3 className="text-xl font-bold text-[#1a2e05] mb-3 flex items-center gap-2"><div className="w-8 h-8 rounded-full bg-lime-100 flex items-center justify-center text-lime-600 shadow-sm text-sm shrink-0">{i + 1}</div> {v.title}</h3>
                            <p className="text-slate-500 leading-relaxed text-sm">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 6: Why Choose Us */}
            <section className="py-24 relative overflow-hidden bg-[#f7fee7]/40">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime-100/30 blur-[100px] rounded-full pointer-events-none" />
                <div className="relative z-10 px-4 md:px-8 max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4 text-[#1a2e05]">Why Choose Us?</h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">We do the heavy lifting from engineering to paperwork.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <ShieldCheck size={24} />, title: 'MNRE Approved', desc: 'Official channel partner ensuring top quality.' },
                            { icon: <TrendingUp size={24} />, title: '25%+ ROI', desc: 'Recover your cost in 3-5 years.' },
                            { icon: <Star size={24} />, title: '5-Year Warranty', desc: 'Complete peace of mind on all products.' },
                            { icon: <Globe size={24} />, title: 'Turnkey Solutions', desc: 'From paperwork to net metering, we handle it all.' },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col gap-4 p-8 bg-white/60 backdrop-blur-sm border border-white shadow-sm rounded-[2rem] hover:shadow-xl hover:-translate-y-1 transition-all text-center items-center group">
                                <div className="w-16 h-16 bg-lime-100 text-lime-600 border border-lime-200 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-lime-500 group-hover:text-white transition-all">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2 text-[#1a2e05]">{item.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* SECTION 10: CTA */}
            <section className="px-4 md:px-8 max-w-5xl mx-auto text-center mt-12 pb-24">
                <div className="bg-gradient-to-br from-[#f7fee7] to-white rounded-[3rem] p-12 md:p-16 shadow-2xl shadow-lime-900/5 relative overflow-hidden border border-lime-100">
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-lime-200/20 rounded-full blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-green-200/20 rounded-full blur-3xl" />
                    <div className="relative z-10">
                        <h2 className="text-4xl font-black text-[#1a2e05] mb-4">Ready to Write Your Chapter?</h2>
                        <p className="text-slate-600 font-medium text-lg mb-8 max-w-xl mx-auto">Join thousands of homeowners and businesses who have partnered with Sai Gayatri Greentech to generate power and lock in 25+ years of energy savings.</p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link to="/contact">
                                <button className="bg-gradient-to-r from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600 text-[#1a2e05] px-10 py-5 rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-lime-500/20">
                                    Start Your Project
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
