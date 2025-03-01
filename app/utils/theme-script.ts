// This script runs before the React app loads to prevent flash of wrong theme
export function themeScript() {
  return `
    (function() {
      function getStoredTheme() {
        return localStorage.getItem('theme')
      }
      
      function getPreferredTheme() {
        const storedTheme = getStoredTheme()
        if (storedTheme) {
          return storedTheme
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      }
      
      function setTheme(theme) {
        if (theme === 'dark') {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      }
      
      setTheme(getPreferredTheme())
    })()
  `
}
