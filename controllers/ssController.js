const fs = require('fs');
const csv = require('csv');
module.exports = {
  scheduler: async (req, res) => {
    fs.createReadStream(req.file.path)
        .pipe(csv.parse(function(err, data) {
          console.log(data);
        }));
  },
};
