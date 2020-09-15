const { taskQueue } = require('./queue');

taskQueue.add({ payload: 'data' })
  .then(() => console.log('added pages to queue'));