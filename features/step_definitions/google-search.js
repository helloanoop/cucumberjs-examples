'use strict';
 
const assert = require('assert');
const { Before, Given, When, Then } = require('cucumber');
const By = require('selenium-webdriver').By;
const webdriver = require('selenium-webdriver');

Given('I am on Google', function (next) {
  this.driver.get('http://www.google.com').then(next);;
});

When('I search for {string}', function(query, next) {
  let el = this.driver.findElement(By.name('q'));
  this.driver.wait(webdriver.until.elementIsVisible(el), 5000).then(el => {
    el.sendKeys(query + '\n').then(next);
  });
});

Then('I see a link to {string}', function(url, next) {
  let el = this.driver.findElement(By.css('a[href*="' + url + '"]'));
  let self = this;
  this.driver
    .wait(webdriver.until.elementIsVisible(el), 5000)
    .then(function() {
      self.driver.quit();
      next();
    })
    .catch(function(err) {
      next(err);
    });
});
