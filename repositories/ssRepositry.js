const axiosBase = require('axios');
const axios = axiosBase.create({
  baseURL: 'http://dummy.restapiexample.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  responseType: 'json',
});

module.exports = {
  dummyGet: async (path) => {
    try {
      const data = await axios.get(path);
      console.log(data.data);
      return data.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};

