const setTheme = (matchDark) => {
  const classList = document.documentElement.classList
  classList.remove("dark", "light")

  if (["light", "dark"].includes(localStorage.theme)) {
    classList.add(localStorage.theme)
    return
  }

  if (matchDark.matches) classList.add("dark")
}

const matchDark = window.matchMedia("(prefers-color-scheme: dark)")
setTheme(matchDark)

matchDark.addEventListener("change", () => {
  if (["light", "dark"].includes(localStorage.theme)) return

  setTheme(matchDark)
})

window.addEventListener("storage", () => setTheme(matchDark))
