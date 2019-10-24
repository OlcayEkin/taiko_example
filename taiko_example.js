const { openBrowser, goto, click, highlight, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("taiko.gauge.org");
        await click("Installing taiko");
        await click("Installing as root");
        await highlight("root");
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
