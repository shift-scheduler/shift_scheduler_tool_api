const express = require('express');
const app = express();
const ssRouter = require(`${process.cwd()}/routers/ssRouter.js`);

app.use('/', ssRouter);

module.exports = app;
