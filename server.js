const app = require(`${process.cwd()}/app.js`);

const server = app.listen(3000, function() {
  console.log(`server is listening to PORT: ${server.address().port}`);
});
