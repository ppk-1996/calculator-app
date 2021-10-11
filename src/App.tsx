import Header from './components/Header'
import Screen from './components/Screen'
import { useCallback, useEffect, useState } from 'react'
import { THEMES } from './utils/global'
import Keypad from './components/Keypad'

function App() {
  const [theme, setTheme] = useState(0)
  const [shouldSaveTheme, setShouldSaveTheme] = useState(false)
  useEffect(() => {
    let storedTheme = localStorage.getItem('theme')
    storedTheme && setTheme(parseInt(storedTheme))
  }, [])
  useEffect(() => {
    if (shouldSaveTheme) {
      localStorage.setItem('theme', theme.toString())
    }
  }, [theme, shouldSaveTheme])
  const toggleTheme = () => {
    if (theme < 2) {
      setTheme(theme + 1)
    } else {
      setTheme(0)
    }
  }

  const [userText, setUserText] = useState('')
  const [finished, setFinished] = useState(true)

  const handleUserKeyPress = useCallback(
    (e) => {
      if (/[0-9]|\+|\-|\.|\/|\*/.test(e.key)) {
        displayText(e.key)
      } else if (e.key == 'Delete' || e.key == 'Backspace') {
        deleteUserText()
      } else if (e.key == 'Enter') {
        computeString()
      } else if (e.code == 'Space') {
        resetText()
      }
    },
    [userText, finished],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress)
    return () => {
      window.removeEventListener('keydown', handleUserKeyPress)
    }
  }, [handleUserKeyPress])

  const displayText = (text: string) => {
    if (!finished) {
      setUserText((prevUserText) => `${prevUserText}${text}`)
    } else {
      if (/[0-9]/.test(text)) {
        setUserText(text)
      } else {
        setUserText((prevUserText) => `${prevUserText}${text}`)
      }
      setFinished(false)
    }
  }

  const deleteUserText = () => {
    if (typeof userText == 'string') {
      setUserText(userText?.slice(0, -1))
    } else {
      setUserText('')
    }
  }
  const computeString = () => {
    try {
      let ans = eval(userText)
      ans = parseFloat(ans.toFixed(2))
      setUserText(ans)
      setFinished(true)
    } catch (e) {
      if (e instanceof SyntaxError) {
        alert('Invalid')
        setUserText('')
      }
    }
  }
  const resetText = () => {
    setUserText('')
  }
  return (
    <main className={`${THEMES[theme]}`}>
      <div className="h-screen flex flex-col justify-center items-center">
        <div
          className="mx-auto p-8  bg-skin-main rounded-3xl shadow-lg"
          style={{ width: 460 }}
        >
          <Header toggleTheme={toggleTheme} theme={theme} setTheme={setTheme} />
          <Screen result={userText} />
          <Keypad
            displayText={displayText}
            computeString={computeString}
            resetText={resetText}
            deleteUserText={deleteUserText}
          />
        </div>
        <div className="text-sm mt-3">
          <label className="flex items-center">
            <input
              onChange={() => setShouldSaveTheme(!shouldSaveTheme)}
              type="checkbox"
              name="theme-default"
              className="mr-2"
            />
            use current theme as default
          </label>
        </div>
      </div>
    </main>
  )
}

export default App
