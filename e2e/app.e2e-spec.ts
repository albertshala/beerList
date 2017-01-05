import { browser, element, by } from 'protractor';

describe('Welcome Component E2E Test', function () {

  let expectedMsg = 'Beer List App';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.className('title')).getText()).toEqual(expectedMsg);
  });

});
