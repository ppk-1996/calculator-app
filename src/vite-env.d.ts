/// <reference types="vite/client" />
type themeFunctions = {
  theme: number
  setTheme: (theme: number) => void
  toggleTheme: () => void
}
type screenProps = {
  result: string
}
type keypadProps = {
  setUserText: (text: string) => void
  userText: string
}
