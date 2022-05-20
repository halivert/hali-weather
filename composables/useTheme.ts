import { useStorage } from "@vueuse/core"
import { nextTick } from "vue"

const THEME_KEY = "theme"
const themes = ["auto", "light", "dark"]

export const useTheme = () => {
	const theme = useStorage(THEME_KEY, "auto")
	const internal = ref(themes.findIndex((i) => i === theme.value) ?? 0)

	const toggleTheme = async () => {
		internal.value = (internal.value + 1) % themes.length
		theme.value = themes[internal.value]
		await nextTick()
		window.dispatchEvent(new StorageEvent("storage"))
	}

	return {
		theme,
		toggleTheme,
	}
}
