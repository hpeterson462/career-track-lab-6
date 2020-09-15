const request = require('../lib/scraper/request');
const parse = require('../lib/scarper/parser');

describe('parse function', () => {
  it('returns an array of all book names, ratings, price, and stock', async () => {
    const document = await request(1);

    const bookNames = parse(document);

    expect(bookNames).toHaveLength(10);
    expect(bookNames).toEqual(expect.arrayContaining([
      {
        title: 'A Light in the Attic', image: 'catalogue/a-light-in-the-attic_1000/index.html', rating: 'star-rating Three', price: '£51.77', stock: true
      },
      {
        title: 'Tipping the Velvet',
        image: 'catalogue/tipping-the-velvet_999/index.html',
        rating: 'star-rating One',
        price: '£53.74',
        stock: true
      }
    ]));
  });
});