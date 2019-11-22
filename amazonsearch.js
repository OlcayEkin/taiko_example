const { openBrowser, goto, near, write, $, press, click, highlight, closeBrowser } = require('taiko');
(async () => {
    try {
	openBrowser;
        await openBrowser({headless: false});
        await goto("amazon.com");
        await write("Nintendo Switch", $("#twotabsearchtextbox"));
        await press("Enter");
        await click("Amazon's Choice");
        await highlight("Add to List");
        await click("Add to List");
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
