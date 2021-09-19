const webdriver = require("selenium-webdriver");
require("chromedriver");
const chrome = require("selenium-webdriver/chrome");
const firefox = require("selenium-webdriver/firefox");
const { Builder, By, Key, until } = require("selenium-webdriver");

const ONE_SECOND = 1000;
const ONE_MINUTE = 60 * ONE_SECOND;
const DEFAULT_TIMEOUT = 2 * ONE_MINUTE;
let driver;
class AutomationLibrary {
  constructor() {
    driver = this.driver;
  }
  _setTimeouts() {
    const timeouts = this.driver.manage().timeouts();
    if (this.options.timeout) {
      //timeouts.implicitlyWait(this.options.timeout);
      timeouts.pageLoadTimeout(this.options.timeout);
      timeouts.setScriptTimeout(this.options.timeout);
    }
  }
  async buildChrome(config) {
    config = config || {};
    const chromeOptions = config.chromeOptions || new chrome.Options();
    console.log("buildChrome(): no proxyConfig provided");
    this.driver = new webdriver.Builder()
      .forBrowser("chrome")
      .setChromeOptions(chromeOptions)
      .build();
    console.log("buildChrome(): driver has been built");
    driver = this.driver;
    return this.driver;
  }

  async buildFirefox(config) {
    config = config || {};
    let options = config.options || new firefox.Options();
    this.driver = new webdriver.Builder()
      .forBrowser("firefox")
      .setFirefoxOptions(options)
      .build();
    console.log("buildFirefox(): driver has been built");
    driver = this.driver;
    return this.driver;
  }

  async openPage(url) {
    console.log("openPage(): url:", url);
    return await driver.get(url);
  }
}
module.exports = new AutomationLibrary();
