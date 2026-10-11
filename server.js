const express = require('express');
const fs = require('fs');
const dateformat = require('dateformat');

const booksRouter = require('./Books.js');
const computersRouter = require('./Computers.js');

const app = express();
const SERVER_PORT = 8080;

function writeData(data) {
  fs.appendFile('server_log.txt', data + '\n', (err) => {
    if (err) {
      console.log(err);
    }
  });
}

function logger(request, response, next) {
  const timestamp = dateformat(Date(), 'dddd, mmmm dS, yyyy, h:MM:ss TT');
  const logMessage = `[${timestamp} ${request.originalUrl}]`;
  console.log(logMessage);
  writeData(logMessage);
  next();
}

function booksLogger(request, response, next) {
  console.log('Books logger called');
  next();
}

app.use(logger);

app.use('/books', booksLogger, booksRouter);
app.use('/books/computers', computersRouter);

app.listen(SERVER_PORT, () => {
  console.log(`Web server is listening at port: ${SERVER_PORT}`);
});
