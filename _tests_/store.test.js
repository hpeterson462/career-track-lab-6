const fs = require('fs');
const pool = require('../lib/utils/pool');
const store = require('../lib/scraper/store');

describe('store function', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  it('takes an array of books and saves them in the db', async () => {
    const books = [
      {
        title: 'A Light in the Attic',
        image: 'catalogue / a - light -in -the - attic_1000 / index.html',
        rating: 'star - rating Three',
        price: '£51.77',
        stock: true
      },
      {
        title: 'Tipping the Velvet',
        image: 'catalogue/tipping-the-velvet_999/index.html',
        rating: 'star-rating One',
        price: '£53.74',
        stock: true
      }
    ];

    await store(books);

    const { rows } = await pool.query('SELECT * FROM books');

    expect(rows).toHaveLength(2);
  });
});