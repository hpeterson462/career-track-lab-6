const request = require('../lib/scraper/request');
const parser = require('../lib/scraper/parser');
const store = require('../lib/scraper/store');

module.exports = job => {
  console.log(`jobData: ${job.data.page}`);
  return request(job.data.page)
    .then(parser)
    .then(store);
};