const { taskQueue } = require('./queue');

taskQueue.process(5, `${_dirname}./worker.js`);