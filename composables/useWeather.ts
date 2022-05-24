import { Ref, isRef } from "vue"
import { RealtimeWeather } from "@/server/api/weather/current.get"

interface Weather {
	region: string
	country: string
	name: string
	timezoneId: string
	localtime: string
	temperature: number
	isDay: number
	windSpeed: number
	cloud: number
	feelsLike: number
	uv: number
	condition: string
	conditionIcon: string
	conditionCode: number
	humidity: number
}

const normalizeWeather = (
	weather: RealtimeWeather = { location: {}, current: {} }
) => {
	const { location, current } = weather

	const result: Weather = Object.assign({
		region: location.region ?? "",
		country: location.country ?? "",
		name: location.name ?? "",
		timezoneId: location.tz_id ?? "",
		localtime: location.localtime ?? "",
		temperature: current.temp_c ?? 0,
		isDay: current.is_day ?? 0,
		windSpeed: current.wind_kph ?? 0,
		cloud: current.cloud ?? 0,
		feelsLike: current.feelslike_c ?? 0,
		uv: current.uv ?? 0,
		condition: current.condition?.text ?? "",
		conditionIcon: (current.condition?.icon ?? "").replace("64x64", "128x128"),
		conditionCode: current.condition?.code ?? 0,
		humidity: current.humidity ?? 0,
	})

	return result
}

const waitForData = async (pending: Ref<boolean>) => {
	return new Promise((resolve) => {
		const unwatch = watch(
			pending,
			(pending) => {
				if (!pending) {
					resolve(() => unwatch())
				}
			},
			{ immediate: true }
		)
	})
}

const queryApi = useThrottleFn(async (weather: Ref<Weather>, query: string) => {
	const { data, pending } = await useFetch<RealtimeWeather>(
		`/api/weather/current?q=${encodeURIComponent(query)}`
	)

	const unwatch = await waitForData(pending)

	Object.assign(weather, normalizeWeather(data.value))
}, 2000)

export const useWeather = (location: Ref<GeolocationCoordinates> | string) => {
	const weather = reactive<Weather>(normalizeWeather())

	if (isRef(location)) {
		watch(location, (location): string =>
			queryApi(weather, `${location.latitude},${location.longitude}`)
		)
	}

	if (typeof location === "string") {
		queryApi(weather, location)

		return weather
	}

	return weather
}
