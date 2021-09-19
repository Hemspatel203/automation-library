const AutomationLibrary = require("../lib/index.js");
var expect = require('chai').expect;

/* globals describe, before, beforeEach, after, afterEach, it */


// var chai = require('chai');
// var assert = chai.assert;
// var expect = chai.expect;
// chai.should();
// chai.use(require('chai-things')); //http://chaijs.com/plugins/chai-things


describe('selenium-helpers', async () => {

  before('before', function () {
    
  });

  beforeEach('beforeEach', function () {

  });

  afterEach('afterEach', function () {

  });

  after('after', function () {

  });
  it('should open google.com', async () => {
    let driver = await AutomationLibrary.buildChrome();
    await AutomationLibrary.openPage("https://www.google.com/");
    let currentURL= await driver.getCurrentUrl();
    expect(currentURL).to.equal('https://www.google.com/');
    await driver.quit();
  });

});
