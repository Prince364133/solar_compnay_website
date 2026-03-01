import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Download, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { submitForm } from '../utils/api';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LeadMagnetModal({ isOpen, onClose }: ModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        const mockData = { leadMagnet: 'ESG Report 2026' };
        await submitForm('/api/lead-magnet', mockData);
        setIsSubmitting(false);
        setSuccess(true);

        // Auto close after 3 seconds of success
        setTimeout(() => {
            onClose();
            setSuccess(false); // reset for next time
        }, 3000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl z-50 overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row"
                    >
                        {/* Left Side: Visual / Value Prop */}
                        <div className="md:w-5/12 bg-gradient-to-br from-emerald-600 to-teal-800 p-8 text-white relative flex flex-col justify-between hidden md:flex">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=800')] opacity-20 bg-cover bg-center mix-blend-overlay" />
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
                                    <FileText size={24} className="text-emerald-300" />
                                </div>
                                <h3 className="text-2xl font-black mb-4 leading-tight">The 2026 Enterprise Guide to Solar ROI</h3>
                                <p className="text-emerald-100/80 text-sm leading-relaxed mb-6">Learn how Fortune 500 companies are leveraging commercial solar to eliminate energy costs and hit ESG targets 5 years early.</p>
                            </div>

                            <div className="relative z-10 space-y-3">
                                <div className="flex items-center gap-3 text-sm font-medium text-emerald-100">
                                    <ShieldCheck size={16} className="text-emerald-400" /> 100% Free, Zero Obligation
                                </div>
                                <div className="flex items-center gap-3 text-sm font-medium text-emerald-100">
                                    <ShieldCheck size={16} className="text-emerald-400" /> Instant PDF Download
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="md:w-7/12 p-6 md:p-8 relative">
                            <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 p-2 rounded-full transition-colors z-10">
                                <X size={20} />
                            </button>

                            {!success ? (
                                <div className="h-full flex flex-col justify-center">
                                    <div className="mb-6 md:hidden">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-bold mb-3">
                                            <FileText size={14} /> Free Whitepaper
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">The Enterprise Solar ROI Guide</h3>
                                    </div>

                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Where should we send it?</h4>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Enter your work email to access the 45-page industry report immediately.</p>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">First Name</label>
                                                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all dark:text-white" placeholder="Jane" />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Last Name</label>
                                                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all dark:text-white" placeholder="Doe" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Work Email</label>
                                            <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all dark:text-white" placeholder="jane.doe@company.com" />
                                        </div>

                                        <button type="submit" disabled={isSubmitting} className="w-full mt-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                                            {isSubmitting ? <span className="animate-pulse">Preparing Download...</span> : <><Download size={18} /> Download Now</>}
                                        </button>
                                        <p className="text-[10px] text-center text-slate-400 mt-4 leading-relaxed">
                                            By downloading, you agree to receive periodic industry updates from AeroSolar. You can unsubscribe at any time.
                                        </p>
                                    </form>
                                </div>
                            ) : (
                                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="h-full flex flex-col items-center justify-center text-center py-12">
                                    <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 size={40} className="text-emerald-500" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Check Your Inbox!</h4>
                                    <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-sm">We've sent the PDF report securely to your email address. It should arrive within the next 2 minutes.</p>
                                    <p className="text-sm font-bold text-emerald-600 animate-pulse">Closing automatically...</p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
