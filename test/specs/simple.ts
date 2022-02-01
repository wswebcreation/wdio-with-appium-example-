const fs = require('fs').promises;
const path = require('path');
const expectChai = require('chai').expect;
const uniqid = require('uniqid');

  describe('Test one', async () => {

    it('Simple test', async () => {
      await browser.url('')
      const element = await $('.hero__title')
      await browser.checkElement(await element, 'simple', {})
    });

});

