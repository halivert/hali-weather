export default defineEventHandler(async (event): RealtimeWeather => {
	const url = "https://www.weatherapi.com/docs/conditions.json"

	const response = await fetch(url)

	const rawData = await response.json()

	const selectLanguage = (lang) => (item) => {
		const newLabels = item.languages
			.map((itemLang) => {
				if (itemLang.lang_iso === lang) return itemLang
				return null
			})
			.filter(Boolean)

		return {
			code: item.code,
			icon: item.icon,
			day: newLabels[0]?.day_text ?? item.day,
			night: newLabels[0]?.night_text ?? item.night,
		}
	}

	const data = Object.fromEntries(
		rawData.map(selectLanguage("es")).map((item) => [item.code, item])
	)

	return data
})
