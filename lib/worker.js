const request = require('./request');
const parser = require('./parser');
const store = require('./store');

module.exports = job => {
  console.log(`jobId: ${job.id} jobData: ${job.data}`);
  return request(job.data.page)
    .then(parser)
    .then(store)
};