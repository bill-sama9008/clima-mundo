const axios = require('axios');

const getClima = async(lat,lng) => {
	const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=91ba48b435fe9166eb3a4eaf8e3f8cbd&units=metrics`);

	return resp.data.main.temp;
}


module.exports = {
	getClima
}