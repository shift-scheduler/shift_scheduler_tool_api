const express = require('express');
const multer = require('multer');
const app = express();
const ssRouter = require(`${process.cwd()}/routers/ssRouter.js`);

app.use(multer({dest: './uploads/'}).single('csv'));
app.use('/shift-scheduler', ssRouter);

module.exports = app;
