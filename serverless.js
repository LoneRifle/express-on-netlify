const app = require('./app');
const serverless = require('serverless-http');

exports.handler = serverless(app, {
  binary: ['image/*', 'font/*']
});
