const request = require('./request');

describe('request function', () => {
  it('makes a requests to Books to Scrape page and returns html', async () => {
    const document = await request();
    expect(document.querySelector('.action h1').textContent).toEqual('All products');
  });
});