import { useState } from 'react';
import { Leaf, Twitter, Linkedin, Facebook, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { submitForm } from '../utils/api';

function Footer() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setStatus('loading');
        await submitForm('/api/newsletter', { email });
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 3000);
    };
    return (
        <footer className="border-t border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-md mt-auto py-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

                {/* Brand Column */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center gap-2">
                        <div className="p-2 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl text-white shadow-sm">
                            <Leaf size={24} />
                        </div>
                        <span className="text-2xl font-black tracking-tight text-[var(--text-primary)]">AeroSolar</span>
                    </div>
                    <p className="text-[var(--text-secondary)] max-w-sm leading-relaxed text-sm">
                        Pioneering enterprise-grade renewable energy architectures. Transforming commercial real estate into resilient, zero-emission power plants.
                    </p>
                    <div className="flex gap-4 pt-2">
                        <a href="#" className="w-10 h-10 rounded-full frozen-glass flex items-center justify-center text-[var(--text-secondary)] hover:text-emerald-500 hover:border-emerald-500 transition-colors"><Twitter size={18} /></a>
                        <a href="#" className="w-10 h-10 rounded-full frozen-glass flex items-center justify-center text-[var(--text-secondary)] hover:text-emerald-500 hover:border-emerald-500 transition-colors"><Linkedin size={18} /></a>
                        <a href="#" className="w-10 h-10 rounded-full frozen-glass flex items-center justify-center text-[var(--text-secondary)] hover:text-emerald-500 hover:border-emerald-500 transition-colors"><Facebook size={18} /></a>
                        <a href="#" className="w-10 h-10 rounded-full frozen-glass flex items-center justify-center text-[var(--text-secondary)] hover:text-emerald-500 hover:border-emerald-500 transition-colors"><Github size={18} /></a>
                    </div>
                </div>

                {/* Links Columns */}
                <div>
                    <h4 className="font-bold text-[#0f172a] mb-6 tracking-wide">Platform</h4>
                    <ul className="space-y-4 text-sm font-medium text-[var(--text-secondary)]">
                        <li><Link to="/services" className="hover:text-[var(--accent)] transition-colors">Micro-Grids</Link></li>
                        <li><Link to="/projects" className="hover:text-[var(--accent)] transition-colors">Case Studies</Link></li>
                        <li><Link to="/calculator" className="hover:text-[var(--accent)] transition-colors">ROI Calculator</Link></li>
                        <li><Link to="/impact" className="hover:text-[var(--accent)] transition-colors">Live Analytics</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-[#0f172a] mb-6 tracking-wide">Company</h4>
                    <ul className="space-y-4 text-sm font-medium text-[var(--text-secondary)]">
                        <li><Link to="/about" className="hover:text-[var(--accent)] transition-colors">About Us</Link></li>
                        <li><Link to="/careers" className="hover:text-[var(--accent)] transition-colors">Careers</Link></li>
                        <li><Link to="/insights" className="hover:text-[var(--accent)] transition-colors">Press & Media</Link></li>
                        <li><Link to="/contact" className="hover:text-[var(--accent)] transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Newsletter Column */}
                <div>
                    <h4 className="font-bold text-[#0f172a] mb-6 tracking-wide">Stay Updated</h4>
                    <p className="text-[var(--text-secondary)] text-sm mb-4">Get the latest insights on commercial renewable tech.</p>
                    <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
                            disabled={status === 'loading' || status === 'success'}
                        />
                        <button
                            type="submit"
                            disabled={status === 'loading' || status === 'success'}
                            className="bg-slate-900 text-white hover:bg-[var(--accent)] disabled:bg-slate-400 transition-colors px-4 py-3 rounded-xl text-sm font-bold shadow-md flex justify-center items-center"
                        >
                            {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : 'Subscribe'}
                        </button>
                    </form>
                </div>

            </div>

            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-200/50 flex flex-col md:flex-row items-center justify-between text-xs text-[var(--text-secondary)] font-medium">
                <p>© 2026 AeroSolar Technologies, Inc. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link to="/privacy" className="hover:text-[var(--accent)] transition-colors">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-[var(--accent)] transition-colors">Terms of Service</Link>
                    <Link to="/cookies" className="hover:text-[var(--accent)] transition-colors">Cookie Settings</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
