import { Leaf, Twitter, Linkedin, Facebook, Github, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="border-t border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-md mt-auto py-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-lime-400/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

                {/* Brand Column */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center gap-2">
                        <div className="p-2 bg-gradient-to-br from-lime-400 to-green-600 rounded-xl text-white shadow-sm">
                            <Leaf size={24} />
                        </div>
                        <span className="text-2xl font-black tracking-tight text-[var(--text-primary)]">Sai Gayatri Greentech</span>
                    </div>
                    <p className="text-[#0f172a] text-xl font-bold italic mb-2">
                        "Let us Make India a Solar Super Power by 2030"
                    </p>
                    <p className="text-[var(--text-secondary)] max-w-sm leading-relaxed text-sm">
                        Sai Gayatri Greentech is a Government of India MNRE-approved solar energy company based in Hyderabad. We offer end-to-end solar solutions for homes, businesses, industries, and institutions across Hyderabad and Andhra Pradesh. With 25%+ annual ROI and 5-year warranty on all products, going solar has never been smarter.
                    </p>
                    <div className="flex gap-4 pt-2">
                        <a href="#" className="w-10 h-10 rounded-full frozen-glass flex items-center justify-center text-[var(--text-secondary)] hover:text-lime-500 hover:border-lime-500 transition-colors"><Twitter size={18} /></a>
                        <a href="#" className="w-10 h-10 rounded-full frozen-glass flex items-center justify-center text-[var(--text-secondary)] hover:text-lime-500 hover:border-lime-500 transition-colors"><Linkedin size={18} /></a>
                        <a href="#" className="w-10 h-10 rounded-full frozen-glass flex items-center justify-center text-[var(--text-secondary)] hover:text-lime-500 hover:border-lime-500 transition-colors"><Facebook size={18} /></a>
                        <a href="#" className="w-10 h-10 rounded-full frozen-glass flex items-center justify-center text-[var(--text-secondary)] hover:text-lime-500 hover:border-lime-500 transition-colors"><Github size={18} /></a>
                    </div>
                </div>

                {/* Links Columns */}
                <div>
                    <h4 className="font-bold text-[#0f172a] mb-6 tracking-wide">Quick Links</h4>
                    <ul className="space-y-4 text-sm font-medium text-[var(--text-secondary)]">
                        <li><Link to="/" className="hover:text-[var(--accent)] transition-colors">Home</Link></li>
                        <li><Link to="/about" className="hover:text-[var(--accent)] transition-colors">About Us</Link></li>
                        <li><Link to="/subsidy" className="hover:text-[var(--accent)] transition-colors">Govt. Subsidies</Link></li>
                        <li><Link to="/calculator" className="hover:text-[var(--accent)] transition-colors">Pricing & Calculator</Link></li>
                        <li><Link to="/#how-it-works" className="hover:text-[var(--accent)] transition-colors">How It Works</Link></li>
                        <li><Link to="/contact" className="hover:text-[var(--accent)] transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-[#0f172a] mb-6 tracking-wide">Our Products</h4>
                    <ul className="space-y-4 text-sm font-medium text-[var(--text-secondary)]">
                        <li><Link to="/services" className="hover:text-[var(--accent)] transition-colors">Solar Panels</Link></li>
                        <li><Link to="/services" className="hover:text-[var(--accent)] transition-colors">Solar Rooftop Power</Link></li>
                        <li><Link to="/services" className="hover:text-[var(--accent)] transition-colors">Solar Water Heater</Link></li>
                        <li><Link to="/services" className="hover:text-[var(--accent)] transition-colors">Solar Street Lights</Link></li>
                        <li><Link to="/services" className="hover:text-[var(--accent)] transition-colors">Heat Pumps</Link></li>
                    </ul>
                </div>

                {/* Contact Column */}
                <div>
                    <h4 className="font-bold text-[#0f172a] mb-6 tracking-wide">Contact</h4>
                    <ul className="space-y-3 text-sm font-medium text-[var(--text-secondary)]">
                        <li className="flex items-start gap-2">
                            <MapPin size={16} className="text-lime-500 shrink-0 mt-0.5" />
                            <span>Plot No 66&67, Pragati Nagar, Hyderabad – 500090</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Phone size={16} className="text-lime-500 shrink-0 mt-0.5" />
                            <span>9848197223 | 9848068223 | 8466847091</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Mail size={16} className="text-lime-500 shrink-0 mt-0.5" />
                            <a href="mailto:saigayatrigreentech@gmail.com" className="hover:text-[var(--accent)] transition-colors">saigayatrigreentech@gmail.com</a>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-200/50 flex flex-col md:flex-row items-center justify-between text-xs text-[var(--text-secondary)] font-medium">
                <p>© 2026 Sai Gayatri Greentech. All Rights Reserved. | MNRE Approved | Go Green! Go Solar!</p>
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
