const puppeteer = require('puppeteer');

async function run() {
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    page.on('load', () => console.log('Loaded: ' + page.url()));

    await page.goto('https://www.google.co.il');
    const gitMetrics = await page.metrics();
    console.log('Timestamp', gitMetrics.Timestamp);
    console.log('TaskDuration', gitMetrics.TaskDuration);

    browser.close();
}

run();
