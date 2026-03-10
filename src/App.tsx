import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import { Leaf, Menu, X, Phone, Mail, ShieldCheck, TrendingUp, Award } from 'lucide-react';
import { ThemeProvider } from './contexts/ThemeContext';
import Home from './pages/Home';
import Services from './pages/Services';
import Impact from './pages/Impact';
import About from './pages/About';
import Team from './pages/Team';
import Calculator from './pages/Calculator';
import Projects from './pages/Projects';
import Careers from './pages/Careers';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import Subsidy from './pages/Subsidy';
import AuditBookingModal from './components/AuditBookingModal';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookieSettings from './pages/CookieSettings';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
                <Route path="/impact" element={<PageTransition><Impact /></PageTransition>} />
                <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                <Route path="/team" element={<PageTransition><Team /></PageTransition>} />
                <Route path="/calculator" element={<PageTransition><Calculator /></PageTransition>} />
                <Route path="/subsidy" element={<PageTransition><Subsidy /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
                <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
                <Route path="/insights" element={<PageTransition><Insights /></PageTransition>} />
                <Route path="/privacy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
                <Route path="/terms" element={<PageTransition><TermsOfService /></PageTransition>} />
                <Route path="/cookies" element={<PageTransition><CookieSettings /></PageTransition>} />
            </Routes>
        </AnimatePresence>
    );
}

function PageTransition({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
        >
            {children}
        </motion.div>
    );
}

function AppContent() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

    const navLinks = [
        { name: 'About Us', path: '/about' },
        { name: 'Solar Solutions', path: '/services' },
        { name: 'Govt. Subsidies', path: '/subsidy' },
        { name: 'Pricing & Calculator', path: '/calculator' },
        { name: 'Gallery', path: '/projects' },
        { name: 'Contact Us', path: '/contact' },
    ];

    return (
        <div className="min-h-screen relative overflow-hidden flex flex-col">
            {/* Abstract Background Orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-lime-400/20 blur-[100px] -z-10" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-green-400/15 blur-[100px] -z-10" />

            {/* Global Navigation */}
            <header className="sticky top-0 left-0 w-full z-50">
                {/* Header Top Bar */}
                <div className="hidden lg:flex justify-between items-center px-6 py-2 bg-[#0a1a05] text-white text-[10px] md:text-xs font-medium border-b border-white/5">
                    <div className="flex gap-6 items-center">
                        <a href="tel:9848197223" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-200 group">
                            <span className="p-1 bg-white/5 rounded-md group-hover:bg-lime-500/20 transition-colors">
                                <Phone size={12} className="text-lime-400" />
                            </span>
                            9848197223 | 9848068223 | 8466847091
                        </a>
                        <a href="mailto:saigayatrigreentech@gmail.com" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-200 group">
                            <span className="p-1 bg-white/5 rounded-md group-hover:bg-lime-500/20 transition-colors">
                                <Mail size={12} className="text-lime-400" />
                            </span>
                            saigayatrigreentech@gmail.com
                        </a>
                    </div>
                    <div className="flex gap-6 items-center">
                        <div className="flex items-center gap-2 px-3 py-1 bg-lime-500/10 rounded-full border border-lime-500/20">
                            <Award size={12} className="text-lime-400" />
                            <span className="text-lime-200">Govt. of India MNRE Approved</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-300">
                            <ShieldCheck size={14} className="text-lime-400" />
                            <span>5-Year Warranty on All Products</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-300">
                            <TrendingUp size={14} className="text-lime-400" />
                            <span>25%+ Annual Return on Investment</span>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <nav className="frozen-glass rounded-2xl mx-auto max-w-7xl px-6 py-4">
                        <div className="flex items-center justify-between">
                            {/* Logo */}
                            <Link to="/" className="flex items-center gap-2">
                                <div className="p-2 bg-gradient-to-br from-lime-400 to-green-600 rounded-xl text-white shadow-sm">
                                    <Leaf size={24} />
                                </div>
                                <span className="text-xl font-black tracking-tight text-[var(--text-primary)]">Sai Gayatri Greentech</span>
                            </Link>

                            {/* Desktop Nav */}
                            <div className="hidden lg:flex items-center gap-8">
                                {navLinks.map((link) => (
                                    <Link key={link.name} to={link.path} className="hover:text-[var(--accent)] transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                ))}
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                className="lg:hidden text-[var(--text-primary)]"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>

                        {/* Mobile Nav Dropdown */}
                        {isMobileMenuOpen && (
                            <div className="lg:hidden mt-4 pt-4 border-t border-[var(--glass-border)] flex flex-col gap-4 font-medium animate-in slide-in-from-top-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors py-2 block"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </nav>
                </div>
            </header>

            {/* Main Content Area */}
            < main className="flex-grow flex flex-col pt-12" >
                <AnimatedRoutes />
            </main >

            <Footer />
            <AuditBookingModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} />
        </div >
    );
}

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; error: Error | null }> {
    constructor(props: { children: React.ReactNode }) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: '40px', color: '#e11d48', background: '#fff1f2', minHeight: '100vh', fontFamily: 'monospace' }}>
                    <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>React Runtime Error</h1>
                    <div style={{ background: '#ffffff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
                        <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>Error Message:</p>
                        <pre style={{ whiteSpace: 'pre-wrap', color: '#be123c' }}>{this.state.error?.message}</pre>
                        <p style={{ fontWeight: 'bold', marginTop: '16px', marginBottom: '8px' }}>Stack Trace:</p>
                        <pre style={{ fontSize: '12px', overflowX: 'auto', whiteSpace: 'pre-wrap' }}>{this.state.error?.stack}</pre>
                    </div>
                    <button
                        onClick={() => window.location.reload()}
                        style={{ marginTop: '24px', padding: '12px 24px', background: '#be123c', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                        Reload Application
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

function App() {
    return (
        <ThemeProvider>
            <HelmetProvider>
                <Router>
                    <ErrorBoundary>
                        <AppContent />
                    </ErrorBoundary>
                </Router>
            </HelmetProvider>
        </ThemeProvider>
    );
}

export default App;
