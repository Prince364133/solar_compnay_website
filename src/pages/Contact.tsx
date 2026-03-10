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
                title="Contact Sai Gayatri Greentech | Solar Experts in Hyderabad"
                description="Ready to reduce your electricity bill to zero? Reach out to our solar experts today."
            />

            {/* HERO */}
            <section className="relative bg-[#f7fee7] py-28 overflow-hidden rounded-b-[3rem] mx-2">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lime-400/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-green-400/5 blur-[100px] rounded-full pointer-events-none" />

                <div className="relative z-10 px-4 md:px-8 max-w-5xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 text-[#0d1a04]">
                        Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-green-600">Sai Gayatri Greentech</span>
                    </h1>
                    <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed">
                        Ready to reduce your electricity bill to zero? Reach out to our solar experts today.
                    </p>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto w-full -mt-16 relative z-20">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* LEFT STACK: Locations & Info */}
                    <div className="w-full lg:w-5/12 flex flex-col gap-6">
                        {/* HQ Card */}
                        <div className="frozen-glass rounded-3xl p-8 border border-white/60 shadow-xl bg-white/40">
                            <div className="w-12 h-12 bg-lime-100 text-lime-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                                <Building2 size={24} />
                            </div>
                            <h3 className="text-2xl font-black text-[#1a2e05] mb-2">Headquarters</h3>
                            <p className="text-slate-500 font-medium mb-6">Hyderabad, Telangana</p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <MapPin className="text-lime-500 mt-1" size={20} />
                                    <div>
                                        <p className="font-bold text-[#1a2e05]">Sai Gayatri Greentech</p>
                                        <p className="text-slate-500 text-sm">Plot No 66&67, Pragati Nagar,<br />Hyderabad, Telangana 500090</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="text-lime-500" size={20} />
                                    <div>
                                        <p className="font-bold text-[#1a2e05]">+91 9848197223</p>
                                        <p className="font-bold text-[#1a2e05] mt-1">+91 9848068223</p>
                                        <p className="font-bold text-[#1a2e05] mt-1">+91 8466847091</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail className="text-lime-500" size={20} />
                                    <p className="font-bold text-[#1a2e05] break-all">saigayatrigreentech<br />@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Working Hours */}
                        <div className="frozen-glass rounded-3xl p-8 border border-white/60 shadow-xl bg-white/50">
                            <h4 className="font-bold text-[#1a2e05] mb-6 flex items-center gap-2">
                                <Globe className="text-lime-500" size={18} /> Working Hours
                            </h4>
                            <div className="space-y-6">
                                <div className="flex justify-between items-center border-b border-white/60 pb-4">
                                    <div>
                                        <p className="font-bold text-[#1a2e05]">Monday to Saturday</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs font-bold text-lime-600 bg-lime-100 px-2 py-1 rounded-md mb-1">9:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/60 pb-4">
                                    <div>
                                        <p className="font-bold text-[#1a2e05]">Sunday</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-md mb-1">Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT STACK: Dynamic Form */}
                    <div className="w-full lg:w-7/12">
                        <div className="frozen-glass rounded-3xl p-8 md:p-10 border border-white/60 shadow-xl bg-white/90 relative overflow-hidden h-full">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-lime-100/50 rounded-full blur-3xl pointer-events-none" />

                            <h3 className="text-3xl font-black text-[#1a2e05] mb-6 relative z-10">Send a Message</h3>

                            {/* Form Toggle */}
                            <div className="flex p-1 bg-slate-100 rounded-xl mb-8 relative z-10">
                                <button
                                    onClick={() => setFormType('sales')}
                                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all ${formType === 'sales' ? 'bg-white text-lime-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                >
                                    <MessageSquare size={16} /> General Inquiry
                                </button>
                                <button
                                    onClick={() => setFormType('support')}
                                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all ${formType === 'support' ? 'bg-white text-green-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                >
                                    <Building2 size={16} /> Commercial Projects
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                                        <input required type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all shadow-sm" placeholder="Jane Doe" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Work Email</label>
                                        <input required type="email" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all shadow-sm" placeholder="jane@company.com" />
                                    </div>
                                </div>

                                {formType === 'sales' && (
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Company Size</label>
                                        <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all shadow-sm">
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
                                        <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all shadow-sm" placeholder="AERO-XXXX-YYYY" />
                                    </div>
                                )}

                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Message</label>
                                    <textarea required rows={4} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all resize-none shadow-sm" placeholder="How can we help?"></textarea>
                                </div>

                                {success ? (
                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-lime-50 border border-lime-200 text-lime-700 p-4 rounded-xl flex items-center justify-center gap-2 font-bold">
                                        <Send size={18} /> {success}
                                    </motion.div>
                                ) : (
                                    <button disabled={isSubmitting} type="submit" className={`w-full text-[#1a2e05] font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 ${formType === 'sales' ? 'bg-gradient-to-r from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600 hover:shadow-lime-500/25' : 'bg-gradient-to-r from-green-500 to-lime-500 hover:from-green-600 hover:to-lime-600 hover:shadow-green-500/25'}`}>
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
