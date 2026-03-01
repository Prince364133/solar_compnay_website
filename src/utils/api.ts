/**
 * Mock API Utility
 * Simulates network delays and form submission responses since we don't have a real database backend yet.
 */

export const submitForm = async (endpoint: string, data: any): Promise<{ success: boolean; message: string }> => {
    return new Promise((resolve) => {
        // Simulate a 1-2 second network delay depending on the endpoint
        const delay = Math.random() * 1000 + 800;

        console.log(`[Mock API] POST ${endpoint}`, data);

        setTimeout(() => {
            switch (endpoint) {
                case '/api/book-audit':
                    resolve({ success: true, message: 'Audit consultation scheduled! An engineer will review your details.' });
                    break;
                case '/api/newsletter':
                    resolve({ success: true, message: 'Subscribed to AeroSolar industry updates.' });
                    break;
                case '/api/lead-magnet':
                    resolve({ success: true, message: 'ESG Report unlocked. Your download will begin shortly.' });
                    break;
                case '/api/contact':
                    resolve({ success: true, message: 'Message received. Dispatched to the appropriate internal team.' });
                    break;
                default:
                    resolve({ success: true, message: 'Form submitted successfully!' });
            }
        }, delay);
    });
};
