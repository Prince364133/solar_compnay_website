import { FileText, Scale, AlertTriangle, ShieldCheck, CreditCard, Globe, Clock, Gavel, ChevronRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function TermsOfService() {
    const sections = [
        {
            icon: <FileText size={24} />,
            title: 'Agreement to Terms',
            content: 'By accessing or using AeroSolar\'s website, requesting consultations, or engaging our engineering services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services. These terms apply to all visitors, clients, contractors, and others who access or use our services.'
        },
        {
            icon: <Globe size={24} />,
            title: 'Description of Services',
            content: 'AeroSolar Technologies, Inc. provides enterprise-grade renewable energy engineering, procurement, and construction (EPC) services, including but not limited to: commercial and industrial solar array design and installation; battery energy storage system (BESS) engineering; microgrid development and controls; utility-scale solar farm development; operations and maintenance (O&M) agreements; energy feasibility studies and financial modeling; EV fleet charging infrastructure; and digital energy monitoring platforms. Specific service deliverables, timelines, warranties, and payment terms are governed by individual Master Service Agreements (MSAs) and Statements of Work (SOWs) executed between AeroSolar and each client.'
        },
        {
            icon: <Scale size={24} />,
            title: 'Intellectual Property',
            content: 'All content on this website — including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software — is the property of AeroSolar Technologies, Inc. or its content suppliers and is protected by United States and international copyright laws. The compilation of all content on this website is the exclusive property of AeroSolar Technologies and is protected by U.S. and international copyright law. Our proprietary engineering software, algorithms, design methodologies, and system architectures constitute trade secrets and confidential information. Unauthorized use, reproduction, or distribution is strictly prohibited.'
        },
        {
            icon: <ShieldCheck size={24} />,
            title: 'Client Responsibilities',
            content: 'Clients engaging AeroSolar for services agree to: provide accurate and complete information about their facilities, energy usage, and requirements; grant necessary access to facilities for site assessments and installation work; obtain all required permits and approvals unless otherwise specified in the SOW; comply with all applicable local, state, and federal laws and regulations; not engage in any activity that may damage, disable, or impair AeroSolar\'s systems or services; and maintain appropriate insurance coverage as specified in project agreements.'
        },
        {
            icon: <CreditCard size={24} />,
            title: 'Payment Terms & Pricing',
            content: 'Pricing for AeroSolar\'s services is as negotiated and specified in individual project contracts. All quotes are valid for 30 days unless otherwise stated. Standard payment terms are Net-30 unless specified otherwise in the MSA. Late payments are subject to 1.5% monthly interest. AeroSolar reserves the right to suspend services for accounts more than 60 days past due. All fees are exclusive of applicable taxes. Clients are responsible for all taxes, duties, and government charges related to the services.'
        },
        {
            icon: <AlertTriangle size={24} />,
            title: 'Disclaimer of Warranties',
            content: 'AeroSolar\'s website and informational content are provided "as is" and "as available" without any representations or warranties, express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses. Energy production estimates and ROI projections are based on historical data and modeling assumptions and do not constitute a guarantee of actual performance. Actual results may vary based on weather, grid conditions, equipment degradation, and other factors beyond our control. Performance guarantees are governed solely by the terms of individual project contracts.'
        },
        {
            icon: <Gavel size={24} />,
            title: 'Limitation of Liability',
            content: 'To the maximum extent permitted by applicable law, AeroSolar Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to lost profits, lost revenue, lost data, or business interruption, arising from your use of our website or services. Our total cumulative liability to any client for claims arising under any individual service contract shall not exceed the total fees paid by that client in the 12 months preceding the claim. These limitations apply whether the claim arises in contract, tort, warranty, or any other legal theory.'
        },
        {
            icon: <Globe size={24} />,
            title: 'Governing Law & Dispute Resolution',
            content: 'These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. Any dispute arising under these terms that cannot be resolved through good-faith negotiation shall be submitted to binding arbitration under the rules of the American Arbitration Association (AAA). The arbitration shall take place in San Francisco, California. Notwithstanding the foregoing, AeroSolar may seek injunctive relief in any court of competent jurisdiction to protect its intellectual property rights.'
        },
        {
            icon: <Clock size={24} />,
            title: 'Modifications to Terms',
            content: 'AeroSolar reserves the right to modify these Terms of Service at any time. We will notify registered users of material changes by email or by posting a prominent notice on our website. Your continued use of our services after such modifications constitutes your acceptance of the updated terms. We recommend reviewing these terms periodically. If you disagree with any changes, you should cease using our services and contact us to discuss any active contractual relationships.'
        }
    ];

    return (
        <div className="w-full flex flex-col pb-24">
            <SEO
                title="Terms of Service"
                description="AeroSolar's Terms of Service — the legal agreement governing use of our website and services."
            />

            {/* Hero */}
            <section className="relative bg-[#0f172a] py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1800')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent" />
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/20 border border-sky-500/40 text-sky-300 text-sm font-bold uppercase tracking-widest mb-6">
                        <Scale size={14} /> Legal
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                        Terms of Service
                    </h1>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        Please read these terms carefully. They constitute a legally binding agreement between you and AeroSolar Technologies, Inc.
                    </p>
                    <p className="text-slate-400 text-sm mt-6">
                        Last updated: March 1, 2026 · Effective Date: March 1, 2026
                    </p>
                </div>
            </section>

            {/* Content */}
            <div className="max-w-4xl mx-auto w-full px-6 py-16 flex flex-col gap-8">

                {/* Table of Contents */}
                <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8">
                    <h2 className="font-black text-[#0f172a] text-lg mb-4">Table of Contents</h2>
                    <ol className="space-y-2">
                        {sections.map((s, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-slate-600 hover:text-emerald-600 transition-colors cursor-pointer group">
                                <span className="w-6 h-6 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-xs font-black shrink-0">{i + 1}</span>
                                {s.title}
                                <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </li>
                        ))}
                    </ol>
                </div>

                {/* Sections */}
                {sections.map((section, i) => (
                    <section key={i} className="bg-white/70 rounded-3xl border border-white/80 shadow-sm p-8">
                        <div className="flex items-center gap-4 mb-5">
                            <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center">
                                {section.icon}
                            </div>
                            <div>
                                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">Section {String(i + 1).padStart(2, '0')}</span>
                                <h2 className="text-xl font-black text-[#0f172a]">{section.title}</h2>
                            </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed text-sm">{section.content}</p>
                    </section>
                ))}

                {/* Acceptance Banner */}
                <div className="bg-[#0f172a] rounded-3xl p-8 text-white text-center">
                    <ShieldCheck className="mx-auto mb-4 text-emerald-400" size={40} />
                    <h2 className="text-2xl font-black mb-3">Questions About These Terms?</h2>
                    <p className="text-slate-300 text-sm mb-6 max-w-lg mx-auto">Our legal team is available to clarify any aspect of these terms before you engage our services.</p>
                    <a href="mailto:legal@aerosolar.com" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg">
                        <Mail size={16} /> legal@aerosolar.com
                    </a>
                </div>

                {/* Back Links */}
                <div className="flex gap-6 text-sm">
                    <Link to="/" className="text-emerald-600 font-bold hover:underline">← Back to Home</Link>
                    <Link to="/privacy" className="text-emerald-600 font-bold hover:underline">Privacy Policy →</Link>
                    <Link to="/cookies" className="text-emerald-600 font-bold hover:underline">Cookie Settings →</Link>
                </div>
            </div>
        </div>
    );
}

export default TermsOfService;
