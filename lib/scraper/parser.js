const parse = document => {
  const bookElements = [...document.querySelectorAll('section > div > ol.row > li > article.product_pod')];

  return bookElements.map(book => {
    const title = book.querySelector('h3 > a').getAttribute('title');

    const image = book.querySelector('h3 > a').getAttribute('href');

    const rating = book.querySelector('article.product_pod > p').getAttribute('class');

    const price = book.querySelector('.product_price > p').textContent;

    const stock = book.querySelector('.availability').textContent ? true : false;

    return { title, image, rating, price, stock };
  })
}

module.exports = parse;