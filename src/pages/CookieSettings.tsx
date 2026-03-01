import { useState } from 'react';
import { Cookie, BarChart3, Target, Settings, ShieldCheck, Check, X, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

type CookiePreferences = {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
    functional: boolean;
};

function CookieSettings() {
    const [preferences, setPreferences] = useState<CookiePreferences>({
        necessary: true,    // always on
        analytics: true,
        marketing: false,
        functional: true,
    });
    const [saved, setSaved] = useState(false);
    const [expanded, setExpanded] = useState<Record<string, boolean>>({});

    const handleToggle = (key: keyof CookiePreferences) => {
        if (key === 'necessary') return; // cannot disable
        setPreferences(p => ({ ...p, [key]: !p[key] }));
        setSaved(false);
    };

    const handleSave = () => {
        // In production: set cookie consent to localStorage / cookie
        localStorage.setItem('aerosolar_cookie_prefs', JSON.stringify(preferences));
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    const handleAcceptAll = () => {
        setPreferences({ necessary: true, analytics: true, marketing: true, functional: true });
        setSaved(false);
    };

    const handleRejectAll = () => {
        setPreferences({ necessary: true, analytics: false, marketing: false, functional: false });
        setSaved(false);
    };

    const toggleExpand = (key: string) => {
        setExpanded(p => ({ ...p, [key]: !p[key] }));
    };

    const cookieTypes = [
        {
            key: 'necessary' as keyof CookiePreferences,
            icon: <ShieldCheck size={22} />,
            color: 'emerald',
            title: 'Strictly Necessary Cookies',
            required: true,
            description: 'These cookies are essential for the website to function properly. They cannot be disabled. They enable core features such as security, network management, and accessibility.',
            examples: [
                { name: 'session_id', purpose: 'Maintains your secure session', duration: 'Session' },
                { name: 'csrf_token', purpose: 'Prevents cross-site request forgery attacks', duration: 'Session' },
                { name: 'cookie_consent', purpose: 'Stores your cookie preferences', duration: '1 year' },
            ]
        },
        {
            key: 'analytics' as keyof CookiePreferences,
            icon: <BarChart3 size={22} />,
            color: 'sky',
            title: 'Analytics & Performance Cookies',
            required: false,
            description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This data helps us improve the site experience.',
            examples: [
                { name: '_ga', purpose: 'Google Analytics — distinguishes unique users', duration: '2 years' },
                { name: '_gid', purpose: 'Google Analytics — stores session information', duration: '24 hours' },
                { name: 'hotjar_id', purpose: 'Heatmap and session recording analytics', duration: '1 year' },
            ]
        },
        {
            key: 'functional' as keyof CookiePreferences,
            icon: <Settings size={22} />,
            color: 'violet',
            title: 'Functional Cookies',
            required: false,
            description: 'Functional cookies enable enhanced functionality and personalization, such as remembering your preferred language, location, currency, or calculator settings.',
            examples: [
                { name: 'user_prefs', purpose: 'Stores language and region preferences', duration: '1 year' },
                { name: 'calc_settings', purpose: 'Saves your ROI calculator configuration', duration: '30 days' },
                { name: 'ui_currency', purpose: 'Remembers your selected currency (USD/INR)', duration: '30 days' },
            ]
        },
        {
            key: 'marketing' as keyof CookiePreferences,
            icon: <Target size={22} />,
            color: 'amber',
            title: 'Marketing & Targeting Cookies',
            required: false,
            description: 'These cookies track your browsing activity across websites to deliver more relevant advertising and measure the effectiveness of our marketing campaigns.',
            examples: [
                { name: '_fbp', purpose: 'Facebook Pixel — tracks ad campaign effectiveness', duration: '90 days' },
                { name: 'li_fat_id', purpose: 'LinkedIn Insight Tag — B2B campaign measurement', duration: '30 days' },
                { name: '_gcl_au', purpose: 'Google Ads conversion tracking', duration: '90 days' },
            ]
        }
    ];

    const colorMap: Record<string, { bg: string; text: string; badge: string; toggle: string }> = {
        emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', badge: 'bg-emerald-100 text-emerald-700', toggle: 'bg-emerald-500' },
        sky: { bg: 'bg-sky-50', text: 'text-sky-600', badge: 'bg-sky-100 text-sky-700', toggle: 'bg-sky-500' },
        violet: { bg: 'bg-violet-50', text: 'text-violet-600', badge: 'bg-violet-100 text-violet-700', toggle: 'bg-violet-500' },
        amber: { bg: 'bg-amber-50', text: 'text-amber-600', badge: 'bg-amber-100 text-amber-700', toggle: 'bg-amber-500' },
    };

    return (
        <div className="w-full flex flex-col pb-24">
            <SEO
                title="Cookie Settings"
                description="Manage your cookie preferences for the AeroSolar website."
            />

            {/* Hero */}
            <section className="relative bg-[#0f172a] py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1800')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent" />
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-sm font-bold uppercase tracking-widest mb-6">
                        <Cookie size={14} /> Preferences
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                        Cookie Settings
                    </h1>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        We use cookies to enhance your experience, analyze site traffic, and serve relevant content. Manage your preferences below.
                    </p>
                </div>
            </section>

            {/* Control Panel */}
            <div className="max-w-4xl mx-auto w-full px-6 py-16 flex flex-col gap-8">

                {/* Quick Actions */}
                <div className="bg-white/70 rounded-3xl border border-white/80 shadow-sm p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <Info className="text-slate-400 shrink-0" size={20} />
                        <p className="text-sm text-slate-600"><span className="font-bold text-[#0f172a]">Quick Actions:</span> Accept or reject all non-essential cookies at once, or customize below.</p>
                    </div>
                    <div className="flex gap-3 shrink-0">
                        <button
                            onClick={handleRejectAll}
                            className="px-5 py-2.5 border-2 border-slate-200 hover:border-slate-400 rounded-xl text-sm font-bold text-slate-600 transition-all"
                        >
                            Reject All
                        </button>
                        <button
                            onClick={handleAcceptAll}
                            className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl text-sm font-bold transition-all shadow-md"
                        >
                            Accept All
                        </button>
                    </div>
                </div>

                {/* Cookie Type Cards */}
                {cookieTypes.map((type) => {
                    const c = colorMap[type.color];
                    const isOn = preferences[type.key];
                    const isExpanded = expanded[type.key];

                    return (
                        <div key={type.key} className="bg-white/70 rounded-3xl border border-white/80 shadow-sm overflow-hidden">
                            {/* Card Header */}
                            <div className="p-6 flex items-start justify-between gap-4">
                                <div className="flex items-start gap-4 flex-1">
                                    <div className={`w-12 h-12 ${c.bg} ${c.text} rounded-2xl flex items-center justify-center shrink-0`}>
                                        {type.icon}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="font-black text-[#0f172a]">{type.title}</h3>
                                            {type.required && (
                                                <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${c.badge}`}>Always Active</span>
                                            )}
                                        </div>
                                        <p className="text-slate-500 text-sm leading-relaxed">{type.description}</p>
                                        <button
                                            onClick={() => toggleExpand(type.key)}
                                            className="flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-500 transition-colors mt-3"
                                        >
                                            {isExpanded ? <><ChevronUp size={14} /> Hide details</> : <><ChevronDown size={14} /> View cookies used</>}
                                        </button>
                                    </div>
                                </div>

                                {/* Toggle */}
                                <button
                                    onClick={() => handleToggle(type.key)}
                                    disabled={type.required}
                                    className={`relative w-14 h-7 rounded-full transition-all duration-300 shrink-0 mt-1 ${isOn ? c.toggle : 'bg-slate-200'} ${type.required ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'}`}
                                    title={type.required ? 'Required — cannot be disabled' : isOn ? 'Click to disable' : 'Click to enable'}
                                >
                                    <span className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 flex items-center justify-center ${isOn ? 'translate-x-7' : 'translate-x-0'}`}>
                                        {isOn ? <Check size={12} className={c.text} /> : <X size={12} className="text-slate-400" />}
                                    </span>
                                </button>
                            </div>

                            {/* Expanded Detail Table */}
                            {isExpanded && (
                                <div className="border-t border-slate-100 px-6 pb-6 pt-4">
                                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Cookies in this category:</p>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm">
                                            <thead>
                                                <tr className="border-b border-slate-100">
                                                    <th className="text-left text-xs font-bold text-slate-500 pb-2 pr-4">Cookie Name</th>
                                                    <th className="text-left text-xs font-bold text-slate-500 pb-2 pr-4">Purpose</th>
                                                    <th className="text-left text-xs font-bold text-slate-500 pb-2">Duration</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {type.examples.map((ex, i) => (
                                                    <tr key={i} className="border-b border-slate-50 last:border-0">
                                                        <td className="py-2 pr-4 font-mono text-xs text-[#0f172a] font-bold">{ex.name}</td>
                                                        <td className="py-2 pr-4 text-slate-600 text-xs">{ex.purpose}</td>
                                                        <td className="py-2 text-slate-500 text-xs whitespace-nowrap">{ex.duration}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}

                {/* Save Button */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 rounded-2xl p-6 border border-slate-200">
                    <div>
                        <p className="font-bold text-[#0f172a] text-sm">Save your preferences</p>
                        <p className="text-slate-500 text-xs mt-0.5">Your settings will be stored and applied immediately.</p>
                    </div>
                    <button
                        onClick={handleSave}
                        className={`px-8 py-3 rounded-xl font-bold text-sm transition-all shadow-md ${saved
                            ? 'bg-emerald-500 text-white cursor-default'
                            : 'bg-[#0f172a] hover:bg-slate-800 text-white hover:-translate-y-0.5'
                            }`}
                    >
                        {saved ? (
                            <span className="flex items-center gap-2"><Check size={16} /> Preferences Saved!</span>
                        ) : (
                            'Save Preferences'
                        )}
                    </button>
                </div>

                {/* Back Links */}
                <div className="flex gap-6 text-sm">
                    <Link to="/" className="text-emerald-600 font-bold hover:underline">← Back to Home</Link>
                    <Link to="/privacy" className="text-emerald-600 font-bold hover:underline">Privacy Policy →</Link>
                    <Link to="/terms" className="text-emerald-600 font-bold hover:underline">Terms of Service →</Link>
                </div>
            </div>
        </div>
    );
}

export default CookieSettings;
