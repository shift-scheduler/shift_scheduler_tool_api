const ssRepository = require(`${process.cwd()}/repositories/ssRepositry.js`);

module.exports = {
  doGet: async (req, res) => {
    const data = await ssRepository.dummyGet('/employees');
    res.send(JSON.stringify(data));
  },
};
