export interface RealtimeWeather {
	location: {
		name: string
		region: string
		country: string
		tz_id: string
		localtime: string
	}
	current: {
		last_updated: string
		last_updated_epoch: number
		temp_c: number
		temp_f: number
		feelslike_c: number
		feelslike_f: number
		condition: {
			text: string
			icon: string
			code: number
		}
		wind_mph: number
		wind_kph: number
		wind_degree: number
		wind_dir: string
		pressure_mb: number
		pressure_in: number
		precip_mm: number
		precip_in: number
		humidity: number
		cloud: number
		is_day: number
		uv: number
		gust_mph: number
		gust_kph: number
	}
}

const mocked: RealtimeWeather = {
	location: {
		name: "Tultitlan",
		region: "México",
		country: "Mexico",
		lat: 19.66,
		lon: -99.18,
		tz_id: "America/Mexico_City",
		localtime_epoch: 1653092794,
		localtime: "2022-05-20 19:26",
	},
	current: {
		last_updated_epoch: 1653092100,
		last_updated: "2022-05-20 19:15",
		temp_c: 29,
		temp_f: 84.2,
		is_day: 1,
		condition: {
			text: "Partly cloudy",
			icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
			code: 1003,
		},
		wind_mph: 2.2,
		wind_kph: 3.6,
		wind_degree: 10,
		wind_dir: "N",
		pressure_mb: 1020,
		pressure_in: 30.12,
		precip_mm: 0,
		precip_in: 0,
		humidity: 15,
		cloud: 37,
		feelslike_c: 26.9,
		feelslike_f: 80.4,
		vis_km: 8,
		vis_miles: 4,
		uv: 7,
		gust_mph: 7.4,
		gust_kph: 11.9,
	},
}

export default defineEventHandler(async (event): RealtimeWeather => {
	const query = useQuery(event)
	const { apiUrl, apiKey, host } = useRuntimeConfig()

	const url = `${apiUrl}/current.json?q=${query.q}`

	const response = await fetch(url, {
		headers: {
			"X-RapidAPI-Host": host,
			"X-RapidAPI-Key": apiKey,
		},
	})

	const data = await response.json()

	return data
})
