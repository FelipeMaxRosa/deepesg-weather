const axios = require('axios');

module.exports = {
  async findOne(req, res) {
    try {
      const filter = encodeURI(req.params.city);
      // const URL = `https://api.hgbrasil.com/weather?key=739fc980&city_name=${filter}`;
      const URL = `https://api.hgbrasil.com/weather?key=d01e4ecd&city_name=${filter}`;
      const result = await axios.get(URL);
      console.log(result.data);
      if (result.data.by == 'default') throw new Error('Cidade não localizada, por favor verifique o nome');

      const cityWeather = result.data.results;
      const { city, city_name, date, time, temp, humidity, wind_speedy } = cityWeather;

      const cityDate = {
        city,
        city_name,
        dateTime: `${date} ${time}`,
        temp,
        humidity,
        wind_speedy
      }
           
      res.status(200).send(cityDate);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  }
};
