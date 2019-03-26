const axios = require('axios');



const getLugarLatLng = async(dir) => {
	const encodedUrl = encodeURI(dir);

	const instance = axios.create({
	  baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
	  timeout: 1000,
	  headers: {'X-RapidAPI-Key': 'a18cbd9074msh5adb78eaeaf1ef2p1c2744jsnc146b137e4f4'}
	});

	const resp = await instance.get();

	if (resp.data.Results[0] == 0 ){
		throw new Error(`No hay Resultados para ${dir}`);
	}

	const data = resp.data.Results[0];
	const direccion = data.name;
	const lat = data.lat;
	const lon = data.lon;

	return {
		direccion,
		lat,
		lon,
	}
}


module.exports = {
	getLugarLatLng
}
