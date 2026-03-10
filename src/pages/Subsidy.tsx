import { Sun, Landmark, CheckCircle2, ClipboardCheck, ArrowRight, HelpCircle, ShieldCheck, Info, FileText, Banknote } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

function Subsidy() {
    const subsidyRates = [
        { capacity: "Up to 2 kW", subsidy: "₹30,000 / kW", total: "Up to ₹60,000" },
        { capacity: "Next 1 kW (Up to 3 kW)", subsidy: "₹18,000 / kW", total: "Up to ₹78,000" },
        { capacity: "Above 3 kW", subsidy: "Fixed Total", total: "₹78,000 Max" },
    ];

    const eligibility = [
        "Residential households with valid electricity connection",
        "Ownership of shade-free rooftop space",
        "Indian citizenship with valid Aadhaar/PAN",
        "Willingness to install Grid-Connected Rooftop Solar (RTS)",
    ];

    const steps = [
        {
            title: "Registration",
            desc: "Register on the National Portal for Rooftop Solar with your electricity consumer number.",
            icon: <FileText className="text-lime-500" />
        },
        {
            title: "Feasibility Approval",
            desc: "Wait for the DISCOM (Utility) to provide technical feasibility approval.",
            icon: <CheckCircle2 className="text-lime-500" />
        },
        {
            title: "Installation",
            desc: "Install the plant through an empanelled vendor like Sai Gayatri Greentech.",
            icon: <Sun className="text-lime-500" />
        },
        {
            title: "Inspection & Net Meter",
            desc: "Apply for net-metering and wait for the DISCOM inspection.",
            icon: <ClipboardCheck className="text-lime-500" />
        },
        {
            title: "Subsidy Credit",
            desc: "After commissioning and site inspection, subsidy is credited to your bank account.",
            icon: <Banknote className="text-lime-500" />
        }
    ];

    return (
        <div className="w-full flex flex-col pt-4 pb-24">
            <SEO
                title="PM Surya Ghar Muft Bijli Yojana | Solar Subsidy Guide"
                description="Comprehensive guide to India's National Solar Subsidy program. Learn how to save up to ₹78,000 with MNRE and State support."
            />

            {/* HERO SECTION */}
            <section className="relative bg-[#f7fee7] py-28 overflow-hidden rounded-b-[3rem] mx-2">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lime-400/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-green-400/5 blur-[100px] rounded-full pointer-events-none" />

                <div className="relative z-10 px-4 md:px-8 max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-200 border border-lime-300 text-lime-800 text-sm font-bold uppercase tracking-widest mb-8">
                        <Landmark size={14} className="text-lime-600" /> Ministry of New & Renewable Energy (MNRE)
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 text-[#1a2e05]">
                        Govt. <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-green-600">Subsidies</span>
                    </h1>
                    <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed font-medium">
                        Under the <span className="text-lime-600 font-extrabold uppercase tracking-tight">PM Surya Ghar: Muft Bijli Yojana</span>, residential consumers can receive up to <span className="text-[#1a2e05] font-black underline decoration-lime-500 decoration-4">₹78,000</span> in direct central subsidy.
                    </p>
                </div>
            </section>

            {/* SUBSIDY TABLE SECTION */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto -mt-16 relative z-20">
                <div className="frozen-glass rounded-3xl p-8 md:p-12 border border-white/60 shadow-2xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-black text-[#1a2e05] mb-6">Subsidy Structure (Central Govt.)</h2>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                The Government of India provides a direct financial incentive to residential consumers to encourage the adoption of rooftop solar. The amount is based on the sanctioned load and system capacity.
                            </p>

                            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                                <table className="w-full text-left">
                                    <thead className="bg-lime-50 text-lime-800 text-xs font-bold uppercase tracking-wider">
                                        <tr>
                                            <th className="px-6 py-4">System Capacity</th>
                                            <th className="px-6 py-4">Subsidy Amount</th>
                                            <th className="px-6 py-4">Total Benefit</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 bg-white">
                                        {subsidyRates.map((rate, i) => (
                                            <tr key={i} className="hover:bg-lime-50/30 transition-colors">
                                                <td className="px-6 py-4 font-bold text-[#1a2e05]">{rate.capacity}</td>
                                                <td className="px-6 py-4 text-lime-600 font-bold">{rate.subsidy}</td>
                                                <td className="px-6 py-4 text-green-700 font-black">{rate.total}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-6 flex items-start gap-3 bg-lime-50 p-4 rounded-xl border border-lime-100">
                                <Info className="text-lime-600 shrink-0 mt-0.5" size={18} />
                                <p className="text-xs text-lime-800 leading-relaxed font-medium">
                                    <strong>Note:</strong> Group Housing Societies (GHS) and Residential Welfare Associations (RWA) are eligible for a subsidy of ₹18,000 per kW for common facilities up to 500 kW capacity.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-lime-100 to-white rounded-3xl p-8 text-[#1a2e05] shadow-xl border border-lime-200">
                                <ShieldCheck size={40} className="mb-6 text-lime-600" />
                                <h3 className="text-2xl font-black mb-4">Empanelled Partner</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                                    Sai Gayatri Greentech is a registered and empanelled vendor with MNRE/DISCOMs. Choosing an empanelled partner is mandatory to claim your government subsidy.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2 text-sm font-black">
                                        <CheckCircle2 size={16} /> Technical Site Feasibility Study
                                    </li>
                                    <li className="flex items-center gap-2 text-sm font-black">
                                        <CheckCircle2 size={16} /> End-to-End Paperwork Management
                                    </li>
                                    <li className="flex items-center gap-2 text-sm font-black">
                                        <CheckCircle2 size={16} /> Net-Metering Coordination
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ELIGIBILITY & PROCESS */}
            <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-20">
                    <div>
                        <h2 className="text-4xl font-black text-[#1a2e05] mb-8">Who Can Apply?</h2>
                        <div className="space-y-4">
                            {eligibility.map((item, i) => (
                                <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-black/5 shadow-sm hover:translate-x-1 transition-transform">
                                    <div className="w-8 h-8 rounded-full bg-lime-100 flex items-center justify-center text-lime-600 shrink-0">
                                        <CheckCircle2 size={18} />
                                    </div>
                                    <p className="text-slate-700 font-bold">{item}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-8 border-2 border-dashed border-slate-200 rounded-3xl">
                            <h4 className="font-bold text-[#1a2e05] mb-4 flex items-center gap-2">
                                <Info className="text-lime-500" size={18} /> Required Documents
                            </h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[var(--text-secondary)]">
                                <li className="flex items-center gap-2">• Recent Electricity Bill</li>
                                <li className="flex items-center gap-2">• Aadhaar Card</li>
                                <li className="flex items-center gap-2">• Bank Passbook/Cheque</li>
                                <li className="flex items-center gap-2">• Property Ownership Proof</li>
                                <li className="flex items-center gap-2">• Passport Size Photo</li>
                                <li className="flex items-center gap-2">• Mobile Linked to Aadhaar</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-4xl font-black text-[#1a2e05] mb-8">The Process</h2>
                        <div className="relative">
                            <div className="absolute left-6 top-8 bottom-8 w-1 bg-lime-100 " />
                            <div className="space-y-12">
                                {steps.map((step, i) => (
                                    <div key={i} className="relative flex gap-8">
                                        <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center z-10 shrink-0">
                                            {step.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#1a2e05] text-lg mb-2">Step {i + 1}: {step.title}</h4>
                                            <p className="text-slate-600 leading-relaxed text-sm font-medium">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="px-4 md:px-8 max-w-5xl mx-auto">
                <div className="bg-gradient-to-br from-[#f7fee7] to-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-lime-100 shadow-2xl shadow-lime-900/5">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-lime-200/20 blur-[100px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-200/20 blur-[100px] rounded-full" />
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-black text-[#1a2e05] mb-6">Claim Your Subsidy Today</h2>
                        <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto font-medium">
                            Our experts will guide you through every step of the PM Surya Ghar registration and ensure you get the maximum possible benefit.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link to="/contact">
                                <button className="bg-gradient-to-r from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600 text-[#1a2e05] px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-lime-500/20 flex items-center gap-2 group">
                                    Start Application <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                            <Link to="/calculator">
                                <button className="border border-lime-200 hover:bg-lime-50 text-[#1a2e05] px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-sm">
                                    Check Eligibility
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Sub-section */}
            <section className="mt-24 px-4 md:px-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-black text-[#1a2e05] mb-8 text-center">Frequently Asked Questions</h3>
                <div className="space-y-4">
                    {[
                        { q: "Is the subsidy available for commercial buildings?", a: "No, currently the capital subsidy is strictly for residential rooftops. Commercial and industrial entities can avail Accelerated Depreciation (AD) benefits instead." },
                        { q: "How long does it take for the subsidy to be credited?", a: "Typically, the subsidy is credited within 30-45 days after the plant commissioning and final inspection by the DISCOM." },
                        { q: "Can I install solar panels from any vendor?", a: "You can only claim the subsidy if you install through a vendor empanelled with the DISCOM/MNRE. Sai Gayatri Greentech is an approved vendor." }
                    ].map((faq, i) => (
                        <div key={i} className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                            <h4 className="font-bold text-[#1a2e05] mb-2 flex items-center gap-2">
                                <HelpCircle size={18} className="text-lime-500" /> {faq.q}
                            </h4>
                            <p className="text-slate-600 text-sm">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Subsidy;
