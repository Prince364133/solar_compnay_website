import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Building2, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { submitForm } from '../utils/api';

function Contact() {
    const [formType, setFormType] = useState<'sales' | 'support'>('sales');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        const res = await submitForm('/api/contact', { type: formType });
        setIsSubmitting(false);
        setSuccess(res.message);
        setTimeout(() => setSuccess(''), 5000);
    };

    return (
        <div className="w-full flex flex-col pt-4 pb-24">
            <SEO
                title="Contact AeroSolar | Global HQ"
                description="Get in touch with our commercial solar experts to schedule an audit, request a quote, or get technical support."
            />

            {/* HERO */}
            <section className="relative bg-slate-900 text-white py-28 overflow-hidden rounded-b-[3rem] mx-2">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/40" />
                <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative z-10 px-4 md:px-8 max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-sm font-bold tracking-widest mb-8">
                        <Globe size={14} /> Global Operations
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6">
                        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Connect</span>
                    </h1>
                    <p className="text-slate-300 text-xl max-w-2xl mx-auto leading-relaxed">
                        Whether you're ready to transition a 500,000 sq ft facility to solar or need support for an existing micro-grid.
                    </p>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto w-full -mt-16 relative z-20">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* LEFT STACK: Locations & Info */}
                    <div className="w-full lg:w-5/12 flex flex-col gap-6">
                        {/* HQ Card */}
                        <div className="frozen-glass rounded-3xl p-8 border border-white/60 shadow-xl bg-white/80">
                            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                                <Building2 size={24} />
                            </div>
                            <h3 className="text-2xl font-black text-[#0f172a] mb-2">Global Headquarters</h3>
                            <p className="text-slate-500 font-medium mb-6">San Francisco, California</p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <MapPin className="text-emerald-500 mt-1" size={20} />
                                    <div>
                                        <p className="font-bold text-[#0f172a]">AeroSolar Tower</p>
                                        <p className="text-slate-500 text-sm">One Market Plaza, Ste 400<br />San Francisco, CA 94105</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="text-emerald-500" size={20} />
                                    <p className="font-bold text-[#0f172a]">+1 (800) 555-0199</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail className="text-emerald-500" size={20} />
                                    <p className="font-bold text-[#0f172a]">enterprise@aerosolar.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Global Offices */}
                        <div className="frozen-glass rounded-3xl p-8 border border-white/60 shadow-xl bg-white/50">
                            <h4 className="font-bold text-[#0f172a] mb-6 flex items-center gap-2">
                                <Globe className="text-emerald-500" size={18} /> Regional Hubs
                            </h4>
                            <div className="space-y-6">
                                <div className="flex justify-between items-center border-b border-white/60 pb-4">
                                    <div>
                                        <p className="font-bold text-[#0f172a]">London, UK</p>
                                        <p className="text-xs text-slate-500">EMEA Operations</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-md mb-1">+44 20 7123</p>
                                        <p className="text-xs text-slate-400">9AM - 6PM GMT</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/60 pb-4">
                                    <div>
                                        <p className="font-bold text-[#0f172a]">Singapore</p>
                                        <p className="text-xs text-slate-500">APAC Operations</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-md mb-1">+65 6789 0123</p>
                                        <p className="text-xs text-slate-400">9AM - 6PM SGT</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT STACK: Dynamic Form */}
                    <div className="w-full lg:w-7/12">
                        <div className="frozen-glass rounded-3xl p-8 md:p-10 border border-white/60 shadow-xl bg-white/90 relative overflow-hidden h-full">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100/50 rounded-full blur-3xl pointer-events-none" />

                            <h3 className="text-3xl font-black text-[#0f172a] mb-6 relative z-10">Send a Message</h3>

                            {/* Form Toggle */}
                            <div className="flex p-1 bg-slate-100 rounded-xl mb-8 relative z-10">
                                <button
                                    onClick={() => setFormType('sales')}
                                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all ${formType === 'sales' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                >
                                    <Building2 size={16} /> Enterprise Sales
                                </button>
                                <button
                                    onClick={() => setFormType('support')}
                                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all ${formType === 'support' ? 'bg-white text-sky-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                >
                                    <MessageSquare size={16} /> Technical Support
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                                        <input required type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all shadow-sm" placeholder="Jane Doe" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Work Email</label>
                                        <input required type="email" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all shadow-sm" placeholder="jane@company.com" />
                                    </div>
                                </div>

                                {formType === 'sales' && (
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Company Size</label>
                                        <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all shadow-sm">
                                            <option>Mid-Market (500+ employees)</option>
                                            <option>Enterprise (2000+ employees)</option>
                                            <option>Utility/Government</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                )}

                                {formType === 'support' && (
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">System ID (Optional)</label>
                                        <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all shadow-sm" placeholder="AERO-XXXX-YYYY" />
                                    </div>
                                )}

                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Message</label>
                                    <textarea required rows={4} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none shadow-sm" placeholder="How can we help?"></textarea>
                                </div>

                                {success ? (
                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-emerald-50 border border-emerald-200 text-emerald-700 p-4 rounded-xl flex items-center justify-center gap-2 font-bold">
                                        <Send size={18} /> {success}
                                    </motion.div>
                                ) : (
                                    <button disabled={isSubmitting} type="submit" className={`w-full text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 ${formType === 'sales' ? 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 hover:shadow-emerald-500/25' : 'bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 hover:shadow-sky-500/25'}`}>
                                        {isSubmitting ? 'Sending Transmission...' : <><Send size={18} /> Send Message</>}
                                    </button>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
