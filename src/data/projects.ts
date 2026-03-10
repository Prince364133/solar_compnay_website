export interface ProjectMetric {
    label: string;
    value: string;
    icon?: string;
}

export interface ProjectSpec {
    label: string;
    value: string;
}

export interface Project {
    id: string;
    title: string;
    client: string;
    location: string;
    size: string;
    type: string;
    image: string;
    gallery?: string[];
    metrics: {
        co2: string;
        homes: string;
        additional?: ProjectMetric[];
    };
    description: string;
    challenge: string;
    solution: string;
    results: string;
    specs: ProjectSpec[];
}

export const projects: Project[] = [
    {
        id: '1',
        title: 'Industrial Solar Hub',
        client: 'Hyderabad Manufacturing Units',
        location: 'Cherlapally, Hyderabad',
        size: '1.2 MW',
        type: 'Rooftop Solar Array',
        image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1466611653911-95281773ad90?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80'
        ],
        metrics: {
            co2: '1,500 Tons',
            homes: '450',
            additional: [
                { label: 'Annual Savings', value: '₹1.8 Cr' },
                { label: 'ROI Period', value: '3.2 Years' }
            ]
        },
        description: 'A massive rooftop installation for one of Hyderabad’s largest manufacturing clusters, focused on reducing operational costs and carbon footprint.',
        challenge: 'The facility had multiple fragmented roofs with varying orientations and structural capacities. Achieving a consistent 1.2 MW output required complex engineering and structural reinforcement.',
        solution: 'We deployed a high-efficiency monocrystalline PERC panel system with string inverters to optimize power harvesting across different roof segments. Custom mounting structures were designed to handle high wind loads without compromising the existing roof integrity.',
        results: 'The system has been operational for over a year, consistently exceeding yield forecasts by 8%. The client has reported a 40% reduction in their monthly electricity bills.',
        specs: [
            { label: 'Panel Type', value: '540Wp Monocrystalline PERC' },
            { label: 'Inverter', value: 'Commercial Grade String Inverters' },
            { label: 'Mounting', value: 'Custom Aluminum Non-Penetrative' },
            { label: 'Monitoring', value: '24/7 Remote IoT Dashboard' }
        ]
    },
    {
        id: '2',
        title: 'Residential Green Park',
        client: 'Housing Society Association',
        location: 'Pragati Nagar, Hyderabad',
        size: '250 KW',
        type: 'Community Rooftop',
        image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1558444479-c86e10556b0c?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1594818379496-da1e345b0ded?auto=format&fit=crop&q=80'
        ],
        metrics: {
            co2: '320 Tons',
            homes: '80',
            additional: [
                { label: 'Society Savings', value: '₹35L/Year' },
                { label: 'Property Value', value: '+12% Increase' }
            ]
        },
        description: 'A community-driven solar project powering common areas and providing discounted energy to residents of Green Park Housing Society.',
        challenge: 'Managing energy distribution across multiple residents while ensuring the common area amenities (lifts, water pumps, lighting) remain prioritized.',
        solution: 'Implemented a smart grid system with net-metering and a multi-user distribution dashboard. The installation used high-efficiency bifacial panels to maximize yield from reflected light on white-coated roofs.',
        results: 'Maintenance costs for the society have dropped by 65%. Residents enjoy uninterrupted power for common facilities even during peak summer grid fluctuations.',
        specs: [
            { label: 'Panel Type', value: 'Bifacial Solar Modules' },
            { label: 'System Type', value: 'On-Grid with Net-Metering' },
            { label: 'Monitoring', value: 'Community Web Portal' }
        ]
    },
    {
        id: '3',
        title: 'Smart Commercial Microgrid',
        client: 'GVK Sky City',
        location: 'Banjara Hills, Hyderabad',
        size: '500 KW',
        type: 'Enterprise Microgrid',
        image: '/commercial_solar_microgrid.png',
        gallery: [
            'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1449156059431-789995fd2ffc?auto=format&fit=crop&q=80'
        ],
        metrics: {
            co2: '650 Tons',
            homes: '120',
            additional: [
                { label: 'Business Savings', value: '₹75L/Year' },
                { label: 'Peak Load Shaving', value: '45%' }
            ]
        },
        description: 'A sophisticated solar microgrid designed for high-density business districts, providing reliable backup and significant energy cost reductions.',
        challenge: 'Limited roof space in a high-rise environment required creative use of vertical surfaces and semi-transparent solar glass in the atrium.',
        solution: 'Integrated custom vertical solar louvers and high-efficiency bifacial panels. The system is managed by an AI-driven energy storage controller that predicts demand peaks.',
        results: 'The microgrid has reduced reliance on the main grid by 60% during peak hours, saving the enterprise over ₹75 Lakhs annually in demand charges.',
        specs: [
            { label: 'Panel Type', value: 'High-Density Bifacial + Solar Glass' },
            { label: 'Storage', value: '250kWh LiFePO4 Energy Bank' },
            { label: 'Control System', value: 'AI Smart Grid Controller' },
            { label: 'Payout Period', value: '4.5 Years' }
        ]
    },
    {
        id: '4',
        title: 'Agricultural Power Unit',
        client: 'Telangana Farm Cluster',
        location: 'Medak, Telangana',
        size: '150 KW',
        type: 'Irrigation Microgrid',
        image: '/agricultural_solar_pump.png',
        gallery: [
            'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1523348830342-d01f9fc9336a?auto=format&fit=crop&q=80'
        ],
        metrics: {
            co2: '180 Tons',
            homes: '40',
            additional: [
                { label: 'Water Saved', value: '1.2M Liters/Yr' },
                { label: 'Farm Profit', value: '+35%' }
            ]
        },
        description: 'A sustainable solar irrigation system providing reliable water pumping and electricity to local farming communities, reducing reliance on expensive diesel pumps.',
        challenge: 'Voltage fluctuations in the rural grid were damaging pump motors, and high diesel costs were making irrigation unaffordable for small-scale farmers.',
        solution: 'Developed a robust solar pump array with variable frequency drives (VFD) and remote monitoring. The system surplus powers a local cold storage facility.',
        results: 'Farmers have seen a 35% increase in crop yield due to reliable water access. Diesel consumption for irrigation has been eliminated entirely for the 25 participating farms.',
        specs: [
            { label: 'Pump Drive', value: 'VFD with Solar Optimizer' },
            { label: 'System Type', value: 'Off-Grid with Backup' },
            { label: 'Monitoring', value: 'SMS/Mobile App' },
            { label: 'Warranty', value: '5 Year Performance' }
        ]
    },
    {
        id: '5',
        title: 'Institutional Brightness',
        client: 'City General Hospital',
        location: 'Secunderabad, Hyderabad',
        size: '350 KW',
        type: 'Healthcare Rooftop',
        image: '/institutional_solar_hospital.png',
        gallery: [
            'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1586773860418-d3b9da531dbb?auto=format&fit=crop&q=80'
        ],
        metrics: {
            co2: '450 Tons',
            homes: '90',
            additional: [
                { label: 'Bill Reduction', value: '55%' },
                { label: 'Critical Uptime', value: '99.9%' }
            ]
        },
        description: 'Priority solar installation for critical healthcare infrastructure, ensuring uninterrupted power for life-saving equipment and lighting.',
        challenge: 'Sensitive medical equipment requires extremely stable power. Any grid interruption could be life-threatening, necessitating a zero-ms transition system.',
        solution: 'Integrated high-precision inverters with a fast-acting UPS bridge. The rooftop panels are designed for maximum heat dissipation to maintain peak hospital-grade efficiency.',
        results: 'The hospital has saved over ₹40 Lakhs in its first year of operation. More importantly, it has maintained 100% solar availability for its critical care units during grid outages.',
        specs: [
            { label: 'Inverter Grade', value: 'Medical/Industrial Pure Sine' },
            { label: 'Switchover', value: 'Zero-Transition Bridge' },
            { label: 'Panel Efficiency', value: '22.5% Peak' },
            { label: 'Compliance', value: 'NABH/Healthcare Standards' }
        ]
    }
];
