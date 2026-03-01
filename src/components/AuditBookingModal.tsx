import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Building, Zap, CheckCircle2, ChevronRight } from 'lucide-react';
import { submitForm } from '../utils/api';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AuditBookingModal({ isOpen, onClose }: ModalProps) {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate data collection from uncontrolled form
        const mockData = { facilityType: 'Commercial', targetDate: 'Asap' };
        await submitForm('/api/book-audit', mockData);
        setIsSubmitting(false);
        setSuccess(true);
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
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl z-50 overflow-hidden border border-slate-200 dark:border-slate-800"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 flex justify-between items-center text-white relative overflow-hidden">
                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse" />
                            <div>
                                <h3 className="text-xl font-bold flex items-center gap-2">
                                    <Calendar size={20} /> Schedule Audit
                                </h3>
                                <p className="text-emerald-50 text-sm mt-1">15-Minute Engineering Discovery</p>
                            </div>
                            <button onClick={onClose} className="hover:bg-white/20 p-2 rounded-full transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-6 md:p-8">
                            {!success ? (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {step === 1 ? (
                                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Company / Organization</label>
                                                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none transition-all dark:text-white" placeholder="Acme Corp" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Facility Size (sq ft)</label>
                                                <div className="relative">
                                                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                                    <select className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none transition-all appearance-none cursor-pointer dark:text-white">
                                                        <option>Under 50,000</option>
                                                        <option>50,000 - 200,000</option>
                                                        <option>Over 200,000 (Utility Scale)</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <button type="button" onClick={() => setStep(2)} className="w-full py-4 text-emerald-600 font-bold border-2 border-emerald-100 dark:border-emerald-900 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all flex items-center justify-center gap-2">
                                                Next Step <ChevronRight size={18} />
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Work Email</label>
                                                <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none transition-all dark:text-white" placeholder="leader@company.com" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Preferred Timeframe</label>
                                                <div className="relative">
                                                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                                    <select className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none transition-all appearance-none cursor-pointer dark:text-white">
                                                        <option>This Week</option>
                                                        <option>Next Week</option>
                                                        <option>Next Month</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="flex gap-3 pt-2">
                                                <button type="button" onClick={() => setStep(1)} className="px-6 py-4 text-slate-500 font-bold hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all">Back</button>
                                                <button type="submit" disabled={isSubmitting} className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                                                    {isSubmitting ? <span className="animate-pulse">Confirming...</span> : <><Zap size={18} /> Confirm Booking</>}
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </form>
                            ) : (
                                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                                    <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 size={40} className="text-emerald-500" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Audit Confirmed!</h4>
                                    <p className="text-slate-500 dark:text-slate-400 mb-8">A lead engineer from AeroSolar will email you shortly with a calendar invite and preliminary intake questionnaire.</p>
                                    <button onClick={onClose} className="w-full py-4 text-emerald-600 font-bold border-2 border-emerald-100 dark:border-emerald-900/50 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all">
                                        Close Window
                                    </button>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

