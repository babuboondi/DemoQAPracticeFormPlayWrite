import type {PlaywrightTestConfig} from '@playwright/test';

const config: PlaywrightTestConfig = {
    
    //testMatch: ["test/"],
    use: {
        baseURL: "https://demoqa.com/automation-practice-form",
        headless: true,
        screenshot: "off",
        video: "off",
        launchOptions: {
            // slowMo: 1000
        },
    },
    timeout: 60 * 1000 * 5,
    retries: 0,
    reporter: [["dot"], ["json", {
        outputFile: "jsonReports/jsonReport.json"
    }], ["html", {
        open: "never"
    }]]
};

export default config;
