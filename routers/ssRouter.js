const express = require('express');
// eslint-disable-next-line new-cap
const ssRouter = express.Router();
const ssController = require(`${process.cwd()}/controllers/ssController.js`);

ssRouter.get('/', ssController.doGet);

module.exports = ssRouter;
