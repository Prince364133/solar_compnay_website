import { Shield, Lock, Eye, Database, Globe, Mail, Phone, FileText, Clock, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function PrivacyPolicy() {
    const sections = [
        {
            icon: <Database size={24} />,
            title: 'Information We Collect',
            content: [
                {
                    subtitle: 'Information You Provide',
                    text: 'When you request a consultation, book an audit, download resources, or contact us, we collect: full name, company name, email address, phone number, job title, facility location and size, energy consumption data you voluntarily share, and any other information included in your messages to us.'
                },
                {
                    subtitle: 'Automatically Collected Information',
                    text: 'When you visit our website, we automatically collect: IP address, browser type and version, operating system, referring URLs, pages viewed and time spent, device identifiers, and cookie data. This information is collected via cookies, web beacons, and similar tracking technologies.'
                },
                {
                    subtitle: 'Third-Party Sources',
                    text: 'We may receive information about you from third-party business partners, public databases, marketing partners, and social media platforms when you interact with our content on those platforms.'
                }
            ]
        },
        {
            icon: <Eye size={24} />,
            title: 'How We Use Your Information',
            content: [
                {
                    subtitle: 'Service Delivery',
                    text: 'We use your information to provide our renewable energy consulting and engineering services, process your audit bookings and consultation requests, generate custom ROI analyses and energy feasibility reports, communicate with you about your project, and provide customer support.'
                },
                {
                    subtitle: 'Marketing & Communications',
                    text: 'With your consent, we use your contact information to send newsletters, industry insights, product updates, and promotional communications. You may opt out of marketing emails at any time via the unsubscribe link in any email or by contacting us directly.'
                },
                {
                    subtitle: 'Legal Basis (GDPR)',
                    text: 'For users in the European Economic Area, we process your data on the following legal bases: performance of a contract, legitimate interests (improving our services), compliance with legal obligations, and your explicit consent where required.'
                }
            ]
        },
        {
            icon: <Globe size={24} />,
            title: 'Information Sharing & Disclosure',
            content: [
                {
                    subtitle: 'We Do Not Sell Your Data',
                    text: 'AeroSolar Technologies does not sell, rent, or trade your personal information to third parties for their marketing purposes. Period.'
                },
                {
                    subtitle: 'Service Providers',
                    text: 'We share data with trusted service providers who assist us in operating our website and delivering services — including cloud hosting providers (AWS, Google Cloud), CRM platforms (Salesforce), email marketing services, analytics providers (Google Analytics), and payment processors. All providers are contractually bound to protect your data.'
                },
                {
                    subtitle: 'Legal Requirements',
                    text: 'We may disclose your information if required by law, court order, or government regulation; to protect our rights, property, or safety; to prevent fraud or security threats; or in connection with a merger, acquisition, or sale of company assets.'
                }
            ]
        },
        {
            icon: <Lock size={24} />,
            title: 'Data Security',
            content: [
                {
                    subtitle: 'Security Measures',
                    text: 'We implement industry-standard security measures to protect your personal information, including: TLS/SSL encryption for all data in transit, AES-256 encryption for data at rest, access controls and authentication requirements, regular security audits and penetration testing, and SOC 2 Type II compliant infrastructure.'
                },
                {
                    subtitle: 'Data Breach Notification',
                    text: 'In the event of a data breach that affects your personal information, we will notify you and relevant regulatory authorities within 72 hours of becoming aware of the breach, as required by applicable law.'
                }
            ]
        },
        {
            icon: <Shield size={24} />,
            title: 'Your Privacy Rights',
            content: [
                {
                    subtitle: 'Access & Portability',
                    text: 'You have the right to request a copy of the personal data we hold about you in a structured, machine-readable format.'
                },
                {
                    subtitle: 'Correction & Deletion',
                    text: 'You may request correction of inaccurate data or deletion of your personal information from our systems, subject to our legal retention obligations.'
                },
                {
                    subtitle: 'Opt-Out & Restriction',
                    text: 'You may opt out of marketing communications at any time, restrict how we process your data, or withdraw consent for processing based on consent. These requests will not affect service delivery unless the data is essential to providing the service.'
                },
                {
                    subtitle: 'California Residents (CCPA)',
                    text: 'California residents have additional rights under the CCPA, including the right to know what personal information we collect, sell, or disclose; the right to opt-out of sale (note: we do not sell personal information); and the right to non-discrimination for exercising your rights.'
                }
            ]
        },
        {
            icon: <Clock size={24} />,
            title: 'Data Retention',
            content: [
                {
                    subtitle: 'Retention Periods',
                    text: 'We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. Client project data is retained for 7 years for regulatory and warranty compliance. Marketing data is retained until you opt out or request deletion. Website analytics data is retained for 26 months.'
                }
            ]
        }
    ];

    return (
        <div className="w-full flex flex-col pb-24">
            <SEO
                title="Privacy Policy"
                description="AeroSolar's Privacy Policy — how we collect, use, and protect your personal information."
            />

            {/* Hero */}
            <section className="relative bg-[#0f172a] py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1800')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent" />
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-sm font-bold uppercase tracking-widest mb-6">
                        <Shield size={14} /> Legal
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                        Privacy Policy
                    </h1>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        We take your privacy seriously. This policy describes how AeroSolar Technologies collects, uses, and protects your personal information.
                    </p>
                    <p className="text-slate-400 text-sm mt-6">
                        Last updated: March 1, 2026 · Effective Date: March 1, 2026
                    </p>
                </div>
            </section>

            {/* Content */}
            <div className="max-w-4xl mx-auto w-full px-6 py-16 flex flex-col gap-12">

                {/* Intro Banner */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 flex gap-4">
                    <AlertCircle className="text-emerald-600 shrink-0 mt-0.5" size={20} />
                    <div>
                        <p className="font-bold text-[#0f172a] mb-1">Our Commitment</p>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            AeroSolar is committed to protecting your privacy. We collect only what we need, use it only for the purposes described here, and never sell your personal data to third parties. This policy applies to all services provided by AeroSolar Technologies, Inc., including our website, mobile applications, and enterprise solutions.
                        </p>
                    </div>
                </div>

                {/* Sections */}
                {sections.map((section, i) => (
                    <section key={i} className="bg-white/70 rounded-3xl border border-white/80 shadow-sm p-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
                                {section.icon}
                            </div>
                            <h2 className="text-2xl font-black text-[#0f172a]">{section.title}</h2>
                        </div>
                        <div className="flex flex-col gap-6">
                            {section.content.map((item, j) => (
                                <div key={j}>
                                    <h3 className="font-bold text-[#0f172a] mb-2">{item.subtitle}</h3>
                                    <p className="text-slate-600 leading-relaxed text-sm">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}

                {/* Contact Section */}
                <section className="bg-[#0f172a] rounded-3xl p-8 text-white">
                    <h2 className="text-2xl font-black mb-4">Contact Our Privacy Team</h2>
                    <p className="text-slate-300 mb-6 text-sm">To exercise your rights or raise concerns about how we handle your data, contact our Data Protection Officer:</p>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <a href="mailto:privacy@aerosolar.com" className="flex items-center gap-3 text-emerald-400 hover:text-emerald-300 transition-colors">
                            <Mail size={18} /> privacy@aerosolar.com
                        </a>
                        <a href="tel:+18005550100" className="flex items-center gap-3 text-emerald-400 hover:text-emerald-300 transition-colors">
                            <Phone size={18} /> +1 (800) 555-0100
                        </a>
                    </div>
                    <p className="text-slate-400 text-xs mt-6">AeroSolar Technologies, Inc. · 150 California Street, Suite 800, San Francisco, CA 94111</p>
                </section>

                {/* Back Links */}
                <div className="flex gap-6 text-sm">
                    <Link to="/" className="text-emerald-600 font-bold hover:underline">← Back to Home</Link>
                    <Link to="/terms" className="text-emerald-600 font-bold hover:underline">Terms of Service →</Link>
                    <Link to="/cookies" className="text-emerald-600 font-bold hover:underline">Cookie Settings →</Link>
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;
