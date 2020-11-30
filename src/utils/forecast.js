const request = require('request');

const forecast = (lat, long, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=1bdf769f41b7a3d5242a4f4d96bc0ace&query=' + lat + ',' + long + '&units=f'
  
  request( { url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service', undefined);
    } else if (body.error) { 
      callback('Unable to find weather for location', undefined);
    } else {
      const data = body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.'
      callback(undefined, data);
    }
  });
};

module.exports = forecast;