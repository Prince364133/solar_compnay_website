import puppeteer from "puppeteer";

(async () => {
    try {
        const browser = await puppeteer.launch({
            headless: 'new',
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();

        page.on('console', msg => {
            console.log(`[Browser Console] ${msg.type().toUpperCase()}:`, msg.text());
        });

        page.on('pageerror', error => {
            console.log(`[Browser Error]:`, error.message);
        });

        page.on('requestfailed', request => {
            console.log(`[Request Failed] ${request.url()}:`, request.failure()?.errorText);
        });

        console.log("Navigating to http://localhost:5173...");
        await page.goto('http://localhost:5173', { waitUntil: 'networkidle2', timeout: 10000 });

        await browser.close();
        console.log("Done checking.");
    } catch (e) {
        console.error("Puppeteer script error:", e);
    }
})();
