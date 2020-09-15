const request = require("./request");
const { Pool } = require("pg");

module.exports = job => {
  console.log(`jobId: ${job.id} jobData: ${job.data}`);
  return request(job.data.page)
    .then(parser)
    .then(store)
    .finally(() => Pool.end());
};