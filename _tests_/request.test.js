const request = require('../lib/scraper/request');

describe('request function', () => {
  it('makes a requests to Books to Scrape page and returns html', async () => {
    const document = await request();
    expect(document).not.toBeUndefined();
    expect(document).not.toBeNull();
  });
});