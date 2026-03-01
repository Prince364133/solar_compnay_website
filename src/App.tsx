import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import { Leaf, Menu, X, Globe } from 'lucide-react';
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
    const [language, setLanguage] = useState('EN');

    const toggleLanguage = () => {
        setLanguage(language === 'EN' ? 'ES' : 'EN');
    };

    const navLinks = [
        { name: 'Services', path: '/services' },
        { name: 'Our Impact', path: '/impact' },
        { name: 'Calculator', path: '/calculator' },
        { name: 'Team', path: '/team' },
        { name: 'About Us', path: '/about' },
    ];

    return (
        <div className="min-h-screen relative overflow-hidden flex flex-col">
            {/* Abstract Background Orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-400/20 blur-[100px] -z-10" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-sky-400/20 blur-[100px] -z-10" />

            {/* Global Navigation */}
            <header className="sticky top-0 left-0 w-full z-50 p-4">
                <nav className="frozen-glass rounded-2xl mx-auto max-w-7xl px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2">
                            <div className="p-2 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl text-white shadow-sm">
                                <Leaf size={24} />
                            </div>
                            <span className="text-xl font-black tracking-tight text-[var(--text-primary)]">AeroSolar</span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center gap-8 font-medium text-[var(--text-secondary)]">
                            {navLinks.map((link) => (
                                <Link key={link.name} to={link.path} className="hover:text-[var(--accent)] transition-colors text-sm">
                                    {link.name}
                                </Link>
                            ))}

                            {/* Language Toggle */}
                            <button onClick={toggleLanguage} className="flex items-center gap-1 hover:text-[var(--accent)] transition-colors text-sm bg-white/40 px-3 py-1.5 rounded-full border border-white/60 shadow-sm cursor-pointer">
                                <Globe size={16} />
                                <span className="font-bold text-[#0f172a]">{language}</span>
                            </button>

                            <button onClick={() => setIsAuditModalOpen(true)} className="bg-[var(--accent)] hover:bg-emerald-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-[0_4px_14px_0_rgba(16,185,129,0.39)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.23)] hover:-translate-y-0.5 transform">
                                Book an Audit
                            </button>
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
                            <button onClick={toggleLanguage} className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] py-2 transition-colors">
                                <Globe size={20} />
                                <span>Language: {language === 'EN' ? 'English' : 'Español'}</span>
                            </button>
                            <button onClick={() => { setIsAuditModalOpen(true); setIsMobileMenuOpen(false); }} className="mt-2 text-center w-full block w-full bg-[var(--accent)] text-white px-6 py-3 rounded-xl font-bold shadow-lg">
                                Book an Audit
                            </button>
                        </div>
                    )}
                </nav>
            </header>

            {/* Main Content Area */}
            <main className="flex-grow flex flex-col pt-12">
                <AnimatedRoutes />
            </main>

            <Footer />
            <AuditBookingModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} />
        </div>
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
