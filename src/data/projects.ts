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
    }
];
