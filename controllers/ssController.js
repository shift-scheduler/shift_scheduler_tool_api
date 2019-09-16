module.exports = {
  doGet: (req, res) => {
    const sampleJson = {
      'text': 'sample text',
    };
    res.send(sampleJson);
  },
};
