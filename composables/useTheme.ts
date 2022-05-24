import { useStorage } from "@vueuse/core"
import { nextTick } from "vue"

const THEME_KEY = "theme"
const themes = ["auto", "light", "dark"] as const

const getNextIndex = (currentIndex: number, nextTheme?: string) => {
	if (nextTheme && typeof nextTheme === "string") {
		const nextIndex = themes.findIndex((i) => i === nextTheme)
		if (nextIndex < 0) throw new "Theme not found"()
		return nextIndex
	}

	return (currentIndex + 1) % themes.length
}

export const useTheme = () => {
	const theme = useStorage(THEME_KEY, "auto")
	const internal = ref(themes.findIndex((i) => i === theme.value) ?? 0)

	const toggleTheme = async (
		nextTheme: typeof themes[number] | null = null
	) => {
		internal.value = getNextIndex(internal.value, nextTheme)
		theme.value = themes[internal.value]
		await nextTick()
		window.dispatchEvent(new StorageEvent("storage"))
	}

	return {
		theme,
		toggleTheme,
	}
}
