const { setWorldConstructor } = require("cucumber");
const webdriver = require('selenium-webdriver');

class World {
  constructor() {
    this.driver = new webdriver.Builder().forBrowser('chrome').build();
  }

  waitForElement(locator) {
    const condition = webdriver.until.elementLocated(locator)
    return this.driver.wait(condition)
  }

  doBeforeScenario() {
    // Before scenario prep code
  }

  doAfterScenario() {
    // After scenario cleanup code
  }
}

setWorldConstructor(World);
