const { TimelineService } = require('wdio-timeline-reporter/timeline-service');

exports.config = {
    runner: 'local',
    hostname: 'localhost',
    port: 4444,
    path: '/wd/hub',
    specs: ['./dist/**/Home.feature'],
    maxInstances: 1,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
        },
    ],
    logLevel: 'debug',
    outputDir: './test-report/output',
    bail: 0,
    baseUrl: 'http://qa-wbd.mlb.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: [
        'spec',
        [
            'allure',
            {
                outputDir: './test-report/allure-result/',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
                useCucumberStepReporter: true,
            },
        ],
        ['timeline', { outputDir: './test-report/timeline' }],
    ],
    cucumberOpts: {
        requireModule: [
            () => {
                require('ts-node').register({ transpileOnly: true });
            },
        ],
        require: ['./dist/**/*.steps.js'],
        backtrace: false,
        compiler: [],
        dryRun: false,
        failFast: true,
        format: ['pretty'],
        colors: true,
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tags: [],
        timeout: 300000,
        ignoreUndefinedDefinitions: false,
        tagExpression: 'not @skip',
    },
    services: ['chromedriver', [TimelineService]],
    beforeSession() {
        require('expect-webdriverio').setOptions({ wait: 5000 });
    },
    before() {
        browser.setWindowSize(1080, 800);
        browser.execute("document.body.style.zoom='60%'");
        browser.keys("\ue0015");
    },
    afterStep(
        uri: undefined,
        feature: undefined,
        scenario: { error: boolean },
    ) {
        if (scenario.error) {
            browser.takeScreenshot();
        }
    },
};
