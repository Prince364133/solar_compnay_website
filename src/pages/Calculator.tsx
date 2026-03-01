import { useState, useMemo } from 'react';
import {
    Zap, ChevronRight, Sun, Battery, DollarSign, MapPin, Settings,
    TrendingUp, Leaf, ShieldCheck, AlertCircle, Info, ChevronDown, TreePine, CheckCircle2, Globe, IndianRupee
} from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

// ─── Types ─────────────────────────────────────────────────────────────────────
type Tab = 'system' | 'financial' | 'location' | 'battery' | 'advanced';
type Currency = 'USD' | 'INR';

// ─── Helpers ───────────────────────────────────────────────────────────────────
const fmt = (n: number) => Math.round(n).toLocaleString();
const USD_TO_INR = 83.5;

// Currency formatter factory — returns a formatter bound to the selected currency
const makeCurrFmt = (currency: Currency) => {
    const sym = currency === 'INR' ? '₹' : '$';
    const rate = currency === 'INR' ? USD_TO_INR : 1;
    return {
        sym,
        fmt: (usd: number) => `${sym}${Math.round(usd * rate).toLocaleString('en-IN')} `,
        fmtK: (usd: number) => {
            const v = usd * rate;
            if (currency === 'INR') {
                if (v >= 10_000_000) return `${sym}${(v / 10_000_000).toFixed(1)} Cr`;
                if (v >= 100_000) return `${sym}${(v / 100_000).toFixed(1)} L`;
                return `${sym}${Math.round(v).toLocaleString('en-IN')} `;
            }
            return v >= 1000 ? `${sym}${(v / 1000).toFixed(1)} K` : `${sym}${Math.round(v).toLocaleString()} `;
        },
    };
};

function Slider({
    label, value, min, max, step, unit, onChange, tooltip
}: {
    label: string; value: number; min: number; max: number; step: number;
    unit: string; onChange: (v: number) => void; tooltip?: string;
}) {
    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-[#0f172a]">{label}</span>
                    {tooltip && (
                        <div className="relative group">
                            <Info size={13} className="text-slate-400 cursor-help" />
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-56 bg-slate-800 text-white text-xs rounded-xl p-3 z-50 shadow-xl leading-relaxed">
                                {tooltip}
                            </div>
                        </div>
                    )}
                </div>
                <span className="text-sm font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-100">
                    {value}{unit}
                </span>
            </div>
            <input
                type="range" min={min} max={max} step={step} value={value}
                onChange={e => onChange(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="flex justify-between text-[10px] font-semibold text-slate-400">
                <span>{min}{unit}</span><span>{max}{unit}</span>
            </div>
        </div>
    );
}

function Select({
    label, value, options, onChange, tooltip
}: {
    label: string; value: string; options: { value: string; label: string }[];
    onChange: (v: string) => void; tooltip?: string;
}) {
    return (
        <div className="space-y-2">
            <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-[#0f172a]">{label}</span>
                {tooltip && (
                    <div className="relative group">
                        <Info size={13} className="text-slate-400 cursor-help" />
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-56 bg-slate-800 text-white text-xs rounded-xl p-3 z-50 shadow-xl leading-relaxed">
                            {tooltip}
                        </div>
                    </div>
                )}
            </div>
            <div className="relative">
                <select
                    value={value}
                    onChange={e => onChange(e.target.value)}
                    className="w-full appearance-none bg-white/80 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-[#0f172a] cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400 pr-8"
                >
                    {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
        </div>
    );
}

function Toggle({ label, value, onChange, tooltip }: { label: string; value: boolean; onChange: (v: boolean) => void; tooltip?: string }) {
    return (
        <div className="flex items-center justify-between py-1">
            <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-[#0f172a]">{label}</span>
                {tooltip && (
                    <div className="relative group">
                        <Info size={13} className="text-slate-400 cursor-help" />
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-56 bg-slate-800 text-white text-xs rounded-xl p-3 z-50 shadow-xl leading-relaxed">
                            {tooltip}
                        </div>
                    </div>
                )}
            </div>
            <button
                onClick={() => onChange(!value)}
                className={`relative w-11 h-6 rounded-full transition-colors ${value ? 'bg-emerald-500' : 'bg-slate-200'}`}
            >
                <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${value ? 'translate-x-5' : ''}`} />
            </button>
        </div>
    );
}

// ─── Main Component ─────────────────────────────────────────────────────────────
function Calculator() {
    const [activeTab, setActiveTab] = useState<Tab>('system');

    // ── 1. System Size & Type ─────────────────────────────────────────────────
    const [systemSizeKW, setSystemSizeKW] = useState(100);
    const [panelType, setPanelType] = useState('mono');
    const [panelEfficiency, setPanelEfficiency] = useState(21);
    const [yearlyDegradation, setYearlyDegradation] = useState(0.5);
    const [roofType, setRoofType] = useState('flat');

    // ── 2. Financial Inputs ───────────────────────────────────────────────────
    const [monthlyBill, setMonthlyBill] = useState(800);
    const [electricityRate, setElectricityRate] = useState(0.12);
    const [rateEscalation, setRateEscalation] = useState(3.5);
    const [systemCostPerW, setSystemCostPerW] = useState(2.8);
    const [financingType, setFinancingType] = useState('purchase');
    const [loanInterestRate, setLoanInterestRate] = useState(5.5);
    const [loanTermYears, setLoanTermYears] = useState(15);

    // ── 3. Location & Environment ──────────────────────────────────────────────
    const [sunlightHours, setSunlightHours] = useState(5);
    const [climateZone, setClimateZone] = useState('tropical');
    const [shading, setShading] = useState(5);

    // ── 4. Battery Storage ────────────────────────────────────────────────────
    const [includeBattery, setIncludeBattery] = useState(false);
    const [batteryCapacityKWh, setBatteryCapacityKWh] = useState(50);
    const [batteryCycles, setBatteryCycles] = useState(6000);

    // ── 5. Advanced / Incentives ──────────────────────────────────────────────
    const [federalITC, setFederalITC] = useState(30);
    const [stateIncentive, setStateIncentive] = useState(5);
    const [srecRevenue, setSrecRevenue] = useState(50);
    const [netMetering, setNetMetering] = useState(true);
    const [maintenanceCostPerYear, setMaintenanceCostPerYear] = useState(500);

    // ── Calculations ──────────────────────────────────────────────────────────
    const results = useMemo(() => {
        const lifetimeYears = 25;
        const kW = systemSizeKW;

        // Panel efficiency multiplier
        const effMult = panelType === 'mono' ? 1.0 : panelType === 'poly' ? 0.94 : 1.06;
        const shadeMult = 1 - shading / 100;
        const climateMult = { tropical: 1.1, temperate: 1.0, arid: 1.15, cold: 0.88, coastal: 1.03 }[climateZone] ?? 1;

        // Annual generation (kWh)
        const annualGenKWh = kW * 1000 * sunlightHours * 365 * effMult * shadeMult * climateMult / 1000;

        // Gross system cost
        const grossCost = kW * 1000 * systemCostPerW;
        const batteryCost = includeBattery ? batteryCapacityKWh * 700 : 0;
        const totalGrossCost = grossCost + batteryCost;

        // Incentives
        const itcCredit = totalGrossCost * (federalITC / 100);
        const stateCredit = totalGrossCost * (stateIncentive / 100);
        const netCost = totalGrossCost - itcCredit - stateCredit;

        // Year-by-year simulation
        let cumulativeSavings = 0;
        let rate = electricityRate;
        let paybackYear = 0;
        const yearlyData: { year: number; savings: number; cumulative: number; gen: number }[] = [];

        for (let y = 1; y <= lifetimeYears; y++) {
            const degradFactor = Math.pow(1 - yearlyDegradation / 100, y - 1);
            const yearGen = annualGenKWh * degradFactor;
            const srecIncome = (yearGen / 1000) * srecRevenue;
            const netMeteringBonus = netMetering ? yearGen * rate * 0.15 : 0;
            const yearSavings = yearGen * rate + srecIncome + netMeteringBonus - maintenanceCostPerYear;
            cumulativeSavings += yearSavings;
            if (cumulativeSavings >= netCost && paybackYear === 0) paybackYear = y;
            yearlyData.push({ year: y, savings: yearSavings, cumulative: cumulativeSavings, gen: yearGen });
            rate *= 1 + rateEscalation / 100;
        }

        // Loan payment
        const monthlyLoanPayment = financingType === 'loan'
            ? (netCost * (loanInterestRate / 100 / 12)) / (1 - Math.pow(1 + loanInterestRate / 100 / 12, -loanTermYears * 12))
            : 0;
        const totalLoanCost = monthlyLoanPayment * loanTermYears * 12;
        const loanInterestPaid = totalLoanCost - netCost;

        const lifetimeSavings = cumulativeSavings - (financingType === 'loan' ? loanInterestPaid : 0);
        const roi = ((lifetimeSavings - netCost) / netCost * 100);
        const co2OffsetTons = annualGenKWh * 0.000386 * lifetimeYears;
        const treesEquivalent = Math.round(co2OffsetTons * 45);

        return {
            annualGenKWh,
            grossCost,
            batteryCost,
            totalGrossCost,
            itcCredit,
            stateCredit,
            netCost,
            lifetimeSavings,
            paybackYear: paybackYear || lifetimeYears,
            roi,
            monthlyLoanPayment,
            co2OffsetTons,
            treesEquivalent,
            yearlyData,
            firstYearSavings: yearlyData[0]?.savings ?? 0,
            systemCapacityKWp: kW,
        };
    }, [
        systemSizeKW, panelType, panelEfficiency, yearlyDegradation, roofType,
        monthlyBill, electricityRate, rateEscalation, systemCostPerW,
        financingType, loanInterestRate, loanTermYears,
        sunlightHours, climateZone, shading,
        includeBattery, batteryCapacityKWh, batteryCycles,
        federalITC, stateIncentive, srecRevenue, netMetering, maintenanceCostPerYear
    ]);

    const [currency, setCurrency] = useState<Currency>('USD');
    const C = makeCurrFmt(currency);

    const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
        { id: 'system', label: 'System', icon: <Sun size={16} /> },
        { id: 'financial', label: 'Financial', icon: <DollarSign size={16} /> },
        { id: 'location', label: 'Location', icon: <MapPin size={16} /> },
        { id: 'battery', label: 'Battery', icon: <Battery size={16} /> },
        { id: 'advanced', label: 'Advanced', icon: <Settings size={16} /> },
    ];

    // Chart data for small bar chart
    const maxCumulative = results.yearlyData[results.yearlyData.length - 1]?.cumulative ?? 1;

    return (
        <div className="px-4 md:px-8 max-w-[1400px] mx-auto flex flex-col gap-10 pb-20 pt-10">
            <SEO
                title="Enterprise ROI Calculator"
                description="Calculate your commercial solar ROI, payback period, and 25-year energy savings instantly."
            />
            {/* Header */}
            <div className="text-center">
                <div className="inline-flex py-1.5 px-4 bg-amber-100 text-amber-700 font-bold text-xs uppercase tracking-widest rounded-full mb-4">
                    Advanced ROI Calculator
                </div>
                <h1 className="text-4xl md:text-5xl font-black mb-4 text-[#0f172a]">
                    Solar <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">Cost & ROI</span> Calculator
                </h1>
                <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
                    20 advanced parameters for a precise estimate of your solar investment — from panel type and battery storage to federal incentives, SREC revenue, and financing options.
                </p>

                {/* Currency Toggle */}
                <div className="inline-flex items-center gap-1 mt-6 p-1 bg-white/70 border border-slate-200 rounded-2xl shadow-sm">
                    <span className="text-xs font-bold text-slate-400 pl-3 pr-1">Currency:</span>
                    <button
                        onClick={() => setCurrency('USD')}
                        className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-black transition-all ${currency === 'USD'
                            ? 'bg-emerald-500 text-white shadow-md'
                            : 'text-slate-500 hover:bg-slate-100'
                            }`}
                    >
                        <Globe size={14} /> USD ($)
                    </button>
                    <button
                        onClick={() => setCurrency('INR')}
                        className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-black transition-all ${currency === 'INR'
                            ? 'bg-orange-500 text-white shadow-md'
                            : 'text-slate-500 hover:bg-slate-100'
                            }`}
                    >
                        <IndianRupee size={14} /> INR (₹)
                    </button>

                    {currency === 'INR' && (
                        <span className="text-[10px] text-slate-400 font-medium pr-2 pl-1">1 USD = ₹{USD_TO_INR}</span>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-[1fr_420px] gap-8 items-start">

                {/* ── Left: Input Panel ──────────────────────────────────────────── */}
                <div className="frozen-glass rounded-3xl border border-white/60 shadow-2xl overflow-hidden">

                    {/* Tab Bar */}
                    <div className="flex overflow-x-auto border-b border-white/50 bg-white/30">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-5 py-4 text-sm font-bold whitespace-nowrap transition-all border-b-2 ${activeTab === tab.id
                                    ? 'border-emerald-500 text-emerald-600 bg-white/40'
                                    : 'border-transparent text-[var(--text-secondary)] hover:text-[#0f172a] hover:bg-white/20'
                                    }`}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="p-8 space-y-7">

                        {/* ── TAB 1: System ─────────────────────────────────────── */}
                        {activeTab === 'system' && (
                            <div className="space-y-7 animate-in fade-in duration-300">
                                <div className="flex items-center gap-2 mb-2">
                                    <Sun size={18} className="text-amber-500" />
                                    <h3 className="font-black text-[#0f172a]">System Configuration</h3>
                                </div>

                                {/* 1 */}
                                <Slider label="System Size" value={systemSizeKW} min={5} max={1000} step={5} unit=" kW"
                                    onChange={setSystemSizeKW}
                                    tooltip="Total DC capacity of your solar array. Commercial systems typically range from 50 kW to 500 kW." />

                                {/* 2 */}
                                <Select label="Solar Panel Type" value={panelType} onChange={setPanelType}
                                    tooltip="Monocrystalline panels are most efficient. Polycrystalline are cheaper. Bifacial capture light from both sides."
                                    options={[
                                        { value: 'mono', label: 'Monocrystalline (Standard, 19–22% eff.)' },
                                        { value: 'poly', label: 'Polycrystalline (Budget, 15–18% eff.)' },
                                        { value: 'bifacial', label: 'Bifacial Premium (+6% yield, rear capture)' },
                                    ]} />

                                {/* 3 */}
                                <Slider label="Panel Efficiency" value={panelEfficiency} min={14} max={24} step={0.5} unit="%"
                                    onChange={setPanelEfficiency}
                                    tooltip="Higher efficiency panels produce more power per square meter of roof space." />

                                {/* 4 */}
                                <Slider label="Annual Degradation Rate" value={yearlyDegradation} min={0.2} max={1.0} step={0.05} unit="%/yr"
                                    onChange={setYearlyDegradation}
                                    tooltip="Panels lose a small amount of output each year. Industry standard is 0.5%/yr. Premium panels degrade slower." />

                                {/* 5 */}
                                <Select label="Roof / Mount Type" value={roofType} onChange={setRoofType}
                                    tooltip="Installation type affects cost and orientation. Ground mounts are most flexible but require land."
                                    options={[
                                        { value: 'flat', label: 'Flat Roof (Commercial Ballast)' },
                                        { value: 'pitched', label: 'Pitched Roof (Flush Mount)' },
                                        { value: 'ground', label: 'Ground Mount (Open Racking)' },
                                        { value: 'carport', label: 'Solar Carport / Canopy' },
                                        { value: 'tracking', label: 'Single-Axis Tracking (+25% yield)' },
                                    ]} />
                            </div>
                        )}

                        {/* ── TAB 2: Financial ──────────────────────────────────── */}
                        {activeTab === 'financial' && (
                            <div className="space-y-7 animate-in fade-in duration-300">
                                <div className="flex items-center gap-2 mb-2">
                                    <DollarSign size={18} className="text-emerald-500" />
                                    <h3 className="font-black text-[#0f172a]">Financial Parameters</h3>
                                </div>

                                {/* 6 */}
                                <Slider label={`Average Monthly Electricity Bill(${C.sym})`} value={monthlyBill} min={100} max={50000} step={100} unit=""
                                    onChange={setMonthlyBill}
                                    tooltip="Your current average monthly bill from your utility provider." />

                                {/* 7 */}
                                <Slider label={`Electricity Rate(${C.sym} / kWh)`} value={electricityRate} min={0.05} max={0.50} step={0.01} unit=""
                                    onChange={setElectricityRate}
                                    tooltip="Your current cost per kWh. Check your utility bill for the exact rate." />

                                {/* 8 */}
                                <Slider label="Annual Rate Escalation" value={rateEscalation} min={1.0} max={8.0} step={0.5} unit="%/yr"
                                    onChange={setRateEscalation}
                                    tooltip="How much utility rates rise each year. US average is 3–5%. Locking in solar protects against this." />

                                {/* 9 */}
                                <Slider label={`System Cost Per Watt(${C.sym} / W)`} value={systemCostPerW} min={1.5} max={5.0} step={0.1} unit=""
                                    onChange={setSystemCostPerW}
                                    tooltip="All-in installed cost per watt DC. Commercial systems typically run $2.50–$3.50/W (USD). Includes equipment, labor, and permitting." />

                                {/* 10 */}
                                <Select label="Financing Method" value={financingType} onChange={setFinancingType}
                                    tooltip="Cash purchases have the highest ROI. Loans spread cost over time. Leases have no upfront cost but lower long-term savings."
                                    options={[
                                        { value: 'purchase', label: 'Cash Purchase (Best ROI)' },
                                        { value: 'loan', label: 'Solar Loan (Financed)' },
                                        { value: 'lease', label: 'Solar Lease / PPA' },
                                    ]} />

                                {financingType === 'loan' && (
                                    <div className="space-y-5 pl-4 border-l-2 border-emerald-200">
                                        <Slider label="Loan Interest Rate" value={loanInterestRate} min={2.0} max={12.0} step={0.25} unit="%"
                                            onChange={setLoanInterestRate}
                                            tooltip="Annual interest rate on your solar loan." />
                                        <Slider label="Loan Term" value={loanTermYears} min={5} max={25} step={1} unit=" yrs"
                                            onChange={setLoanTermYears}
                                            tooltip="Longer loans mean lower monthly payments but more interest paid." />
                                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-blue-700 font-medium">
                                            Estimated monthly payment: <span className="font-black">{C.fmt(results.monthlyLoanPayment)}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* ── TAB 3: Location ──────────────────────────────────── */}
                        {activeTab === 'location' && (
                            <div className="space-y-7 animate-in fade-in duration-300">
                                <div className="flex items-center gap-2 mb-2">
                                    <MapPin size={18} className="text-sky-500" />
                                    <h3 className="font-black text-[#0f172a]">Location & Environment</h3>
                                </div>

                                {/* 11 */}
                                <Slider label="Peak Sunlight Hours / Day" value={sunlightHours} min={2.5} max={8.0} step={0.25} unit=" hrs"
                                    onChange={setSunlightHours}
                                    tooltip="Average peak sun hours at your location. SW US: 6–7. US average: 4.5–5.5. UK/Germany: 2.5–3.5." />

                                {/* 12 */}
                                <Select label="Climate Zone" value={climateZone} onChange={setClimateZone}
                                    tooltip="Your regional climate affects irradiance, temperature coefficients, and seasonal generation variance."
                                    options={[
                                        { value: 'arid', label: 'Arid / Desert (High irradiance, +15%)' },
                                        { value: 'tropical', label: 'Tropical (High sun, +10%)' },
                                        { value: 'coastal', label: 'Coastal / Mediterranean (+3%)' },
                                        { value: 'temperate', label: 'Temperate (Baseline)' },
                                        { value: 'cold', label: 'Cold / Nordic (-12%)' },
                                    ]} />

                                {/* 13 */}
                                <Slider label="Shading Loss" value={shading} min={0} max={40} step={1} unit="%"
                                    onChange={setShading}
                                    tooltip="Percentage of output lost due to trees, adjacent buildings, or rooftop obstructions. Microinverters can mitigate this." />

                                <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
                                    <div className="flex items-start gap-3">
                                        <AlertCircle size={18} className="text-amber-500 mt-0.5 shrink-0" />
                                        <div>
                                            <p className="text-sm font-bold text-amber-800 mb-1">Estimated Annual Generation</p>
                                            <p className="text-2xl font-black text-amber-700">{fmt(results.annualGenKWh)} kWh/year</p>
                                            <p className="text-xs text-amber-600 mt-1">Based on your {systemSizeKW} kW system with {sunlightHours} hrs/day peak sun</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ── TAB 4: Battery ──────────────────────────────────── */}
                        {activeTab === 'battery' && (
                            <div className="space-y-7 animate-in fade-in duration-300">
                                <div className="flex items-center gap-2 mb-2">
                                    <Battery size={18} className="text-violet-500" />
                                    <h3 className="font-black text-[#0f172a]">Battery Storage System</h3>
                                </div>

                                {/* 14 */}
                                <Toggle label="Include Battery Energy Storage" value={includeBattery} onChange={setIncludeBattery}
                                    tooltip="Battery storage enables grid independence and backup power during outages. Adds cost but increases independence." />

                                {includeBattery && (
                                    <div className="space-y-6 pl-4 border-l-2 border-violet-200 animate-in fade-in duration-300">
                                        {/* 15 */}
                                        <Slider label="Battery Capacity" value={batteryCapacityKWh} min={10} max={1000} step={10} unit=" kWh"
                                            onChange={setBatteryCapacityKWh}
                                            tooltip="Total energy storage capacity. 1 kWh powers approximately 10 lightbulbs for 10 hours." />

                                        {/* 16 */}
                                        <Slider label="Battery Cycle Life" value={batteryCycles} min={3000} max={10000} step={500} unit=" cycles"
                                            onChange={setBatteryCycles}
                                            tooltip="Number of full charge/discharge cycles before battery capacity falls to 80%. Premium LFP batteries: 6,000–10,000 cycles." />

                                        <div className="bg-violet-50 border border-violet-100 rounded-2xl p-5">
                                            <p className="text-sm font-bold text-violet-800 mb-1">Battery System Cost</p>
                                            <p className="text-2xl font-black text-violet-700">{C.fmt(results.batteryCost)}</p>
                                            <p className="text-xs text-violet-600 mt-1">At ~{C.fmt(700)}/kWh installed for LiFePO₄ chemistry</p>
                                            <p className="text-xs text-violet-600">Estimated lifespan: {Math.round(batteryCycles / 365)} years at 1 cycle/day</p>
                                        </div>
                                    </div>
                                )}

                                {!includeBattery && (
                                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center text-slate-500">
                                        <Battery size={32} className="mx-auto mb-3 opacity-30" />
                                        <p className="text-sm font-medium">Enable battery storage above to configure storage parameters</p>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* ── TAB 5: Advanced ──────────────────────────────────── */}
                        {activeTab === 'advanced' && (
                            <div className="space-y-7 animate-in fade-in duration-300">
                                <div className="flex items-center gap-2 mb-2">
                                    <Settings size={18} className="text-slate-500" />
                                    <h3 className="font-black text-[#0f172a]">Incentives & Advanced Settings</h3>
                                </div>

                                {/* 17 */}
                                <Slider label="Federal Investment Tax Credit (ITC)" value={federalITC} min={0} max={40} step={1} unit="%"
                                    onChange={setFederalITC}
                                    tooltip="The US federal ITC is currently 30% under the Inflation Reduction Act. Nonprofit or government entities may have different rates." />

                                {/* 18 */}
                                <Slider label="State / Local Incentive" value={stateIncentive} min={0} max={25} step={1} unit="%"
                                    onChange={setStateIncentive}
                                    tooltip="Many US states offer additional rebates or tax credits ranging from 5–25% of system cost. Check with your state energy office." />

                                {/* 19 */}
                                <Slider label={`SREC Revenue(per MWh)`} value={srecRevenue} min={0} max={300} step={10} unit={` ${C.sym} `}
                                    onChange={setSrecRevenue}
                                    tooltip="Solar Renewable Energy Certificates (SRECs) can be sold to utilities. Value varies by state." />

                                {/* 20 */}
                                <Toggle label="Net Metering Credit" value={netMetering} onChange={setNetMetering}
                                    tooltip="Net metering allows you to sell excess solar power back to the grid at retail rates. Available in most US states." />

                                <Slider label={`Annual O & M Cost`} value={maintenanceCostPerYear} min={0} max={5000} step={100} unit={` ${C.sym} `}
                                    onChange={setMaintenanceCostPerYear}
                                    tooltip="Annual operations and maintenance (cleaning, monitoring, insurance). AeroSolar includes this in our maintenance plans." />

                                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 space-y-3">
                                    <p className="text-sm font-bold text-emerald-800">Total Incentive Summary</p>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-600">Federal ITC ({federalITC}%)</span>
                                        <span className="font-black text-emerald-700">-{C.fmt(results.itcCredit)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-600">State Incentive ({stateIncentive}%)</span>
                                        <span className="font-black text-emerald-700">-{C.fmt(results.stateCredit)}</span>
                                    </div>
                                    <div className="border-t border-emerald-200 pt-2 flex justify-between">
                                        <span className="font-bold text-emerald-900">Net System Cost</span>
                                        <span className="font-black text-emerald-800 text-lg">{C.fmt(results.netCost)}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* ── Right: Results Panel ────────────────────────────────────────── */}
                <div className="flex flex-col gap-6">

                    {/* Main Results Card */}
                    <div className="bg-gradient-to-br from-[#0a1628] to-[#0f2a1a] rounded-3xl p-8 text-white shadow-2xl border border-white/10 relative overflow-hidden">
                        <div className="absolute -top-12 -right-12 text-emerald-500/10"><Zap size={200} /></div>

                        <p className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-2 relative z-10">25-Year Net Savings</p>
                        <div className="text-5xl md:text-6xl font-black mb-1 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 relative z-10">
                            {C.fmt(results.lifetimeSavings)}
                        </div>
                        <p className="text-slate-400 text-sm mb-8 relative z-10">After all costs & incentives</p>

                        {/* Key Metrics Grid */}
                        <div className="grid grid-cols-2 gap-3 relative z-10">
                            {[
                                { label: 'Gross System Cost', value: `${C.fmt(results.totalGrossCost)} `, color: 'text-white' },
                                { label: 'Total Incentives', value: `- ${C.fmt(results.itcCredit + results.stateCredit)} `, color: 'text-emerald-400' },
                                { label: 'Net Investment', value: `${C.fmt(results.netCost)} `, color: 'text-sky-300' },
                                { label: 'Year 1 Savings', value: `${C.fmt(results.firstYearSavings)} `, color: 'text-amber-400' },
                                { label: 'Payback Period', value: `${results.paybackYear} yrs`, color: 'text-violet-300' },
                                { label: '25-Yr ROI', value: `${Math.round(results.roi)}% `, color: 'text-emerald-400' },
                            ].map((m, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                    <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider mb-1">{m.label}</p>
                                    <p className={`text-xl font-black ${m.color}`}>{m.value}</p>
                                </div>
                            ))}
                        </div>

                        {/* Get Proposal Button */}
                        <Link to="/contact" className="block mt-6 relative z-10">
                            <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-900 font-black text-base py-4 rounded-2xl transition-all shadow-lg hover:shadow-emerald-500/40 hover:scale-[1.02] flex items-center justify-center gap-2">
                                Get Detailed Proposal <ChevronRight size={20} />
                            </button>
                        </Link>
                    </div>

                    {/* CO2 & Environment Card */}
                    <div className="frozen-glass rounded-3xl p-6 border border-white/60 shadow-xl">
                        <div className="flex items-center gap-2 mb-5">
                            <Leaf size={18} className="text-emerald-500" />
                            <h4 className="font-black text-[#0f172a]">Environmental Impact</h4>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 text-center">
                                <p className="text-2xl font-black text-emerald-600">{Math.round(results.co2OffsetTons).toLocaleString()}</p>
                                <p className="text-xs font-bold text-emerald-700 mt-1">Tons CO₂ Offset</p>
                                <p className="text-[10px] text-emerald-500 mt-0.5">Over 25 years</p>
                            </div>
                            <div className="bg-teal-50 border border-teal-100 rounded-2xl p-4 text-center">
                                <p className="text-2xl font-black text-teal-600">{results.treesEquivalent.toLocaleString()}</p>
                                <p className="text-xs font-bold text-teal-700 mt-1 flex items-center gap-1 justify-center"><TreePine size={12} /> Trees Equivalent</p>
                                <p className="text-[10px] text-teal-500 mt-0.5">Carbon absorption</p>
                            </div>
                            <div className="bg-sky-50 border border-sky-100 rounded-2xl p-4 text-center">
                                <p className="text-2xl font-black text-sky-600">{fmt(results.annualGenKWh)}</p>
                                <p className="text-xs font-bold text-sky-700 mt-1">kWh/yr Generated</p>
                                <p className="text-[10px] text-sky-500 mt-0.5">Year 1, no degradation</p>
                            </div>
                            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 text-center">
                                <p className="text-2xl font-black text-amber-600">{systemSizeKW}</p>
                                <p className="text-xs font-bold text-amber-700 mt-1">kW System Size</p>
                                <p className="text-[10px] text-amber-500 mt-0.5">Peak capacity</p>
                            </div>
                        </div>
                    </div>

                    {/* Cumulative Savings Chart */}
                    <div className="frozen-glass rounded-3xl p-6 border border-white/60 shadow-xl">
                        <div className="flex items-center gap-2 mb-5">
                            <TrendingUp size={18} className="text-sky-500" />
                            <h4 className="font-black text-[#0f172a]">Cumulative Savings Over 25 Years</h4>
                        </div>
                        <div className="flex items-end gap-1.5 h-28">
                            {results.yearlyData.map((d, i) => {
                                const pct = Math.max(0, Math.min(100, (d.cumulative / maxCumulative) * 100));
                                const isPaid = d.cumulative >= results.netCost;
                                return (
                                    <div key={i} className="flex-1 flex flex-col justify-end h-full group relative">
                                        <div
                                            className={`rounded-t-sm transition-all ${isPaid ? 'bg-emerald-500' : 'bg-slate-300'} hover:opacity-80`}
                                            style={{ height: `${pct}%` }}
                                        />
                                        {(i === results.paybackYear - 1) && (
                                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-black text-rose-600 whitespace-nowrap flex items-center gap-0.5">
                                                <CheckCircle2 size={9} /> Paid
                                            </div>
                                        )}
                                        <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 hidden group-hover:block bg-slate-800 text-white text-[9px] px-2 py-1 rounded-lg whitespace-nowrap z-10 shadow-xl">
                                            Yr {d.year}: {C.fmtK(d.cumulative)}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-2">
                            <span>Year 1</span>
                            <span className="text-emerald-500 font-black">Payback: Yr {results.paybackYear}</span>
                            <span>Year 25</span>
                        </div>
                        <div className="flex gap-4 mt-3 text-[10px] font-bold">
                            <div className="flex items-center gap-1 text-slate-400"><div className="w-3 h-3 bg-slate-300 rounded-sm" />Pre-payback</div>
                            <div className="flex items-center gap-1 text-emerald-600"><div className="w-3 h-3 bg-emerald-500 rounded-sm" />Post-payback profit</div>
                        </div>
                    </div>

                    {/* Guarantees */}
                    <div className="frozen-glass rounded-3xl p-5 border border-white/60 shadow-md">
                        <div className="flex items-center gap-3">
                            <ShieldCheck size={20} className="text-emerald-500 shrink-0" />
                            <p className="text-sm text-[var(--text-secondary)]">
                                <span className="font-black text-[#0f172a]">Performance Guaranteed.</span>{' '}
                                All AeroSolar installations come with a 25-year linear power output guarantee and 10-year workmanship warranty.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Disclaimer */}
            <p className="text-center text-xs text-slate-400 max-w-3xl mx-auto leading-relaxed">
                This calculator provides estimates for planning purposes only. Actual savings depend on local utility rates, weather patterns, installation specifics, and applicable incentive programs. Contact AeroSolar for a site-specific engineering proposal.
            </p>
        </div>
    );
}

export default Calculator;
