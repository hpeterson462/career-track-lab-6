const Queue = require('bull');
console.log(process.env.REDIS_URL);
const taskQueue = new Queue('tasks', {
  redis: process.env.REDIS_URL
});

module.exports = {
  taskQueue
};