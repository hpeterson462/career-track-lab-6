const request = require('../lib/scraper/request');
const parse = require('../lib/scraper/parser');

describe('parse function', () => {
  it('returns an array of all book names, ratings, price, and stock', async () => {
    const document = await request(1);

    const bookNames = parse(document);

    expect(bookNames).toEqual(expect.arrayContaining([
      {
        title: 'A Light in the Attic', image: 'a-light-in-the-attic_1000/index.html', rating: 'star-rating Three', price: '£51.77', stock: true
      }
    ]));
  });
});