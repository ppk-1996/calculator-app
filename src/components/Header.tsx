import { TOGGLE_STYLES } from '../utils/global'
import { ChangeEvent } from 'react'

function Header({ setTheme, toggleTheme, theme }: themeFunctions) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setTheme(parseInt(value))
  }
  return (
    <div className="flex justify-between text-skin-header">
      <h1 className="">calc</h1>
      <nav className="text-sm flex items-end">
        <h2 className="mr-4 font-light">THEME</h2>
        <div className="relative">
          <div className="grid grid-cols-3 gap-1 place-items-center">
            <label htmlFor="T1">1</label>
            <label htmlFor="T2">2</label>
            <label htmlFor="T3">3</label>
          </div>
          <div className="grid grid-cols-3 gap-2 place-items-center bg-skin-keypad rounded-lg relative z-10 px-1">
            <div
              id="circle"
              style={TOGGLE_STYLES[theme]}
              className="w-4 bg-skin-toggle h-4 rounded-full transition-all duration-500 ease-out absolute left-0 ml-1"
            ></div>
            <div>
              <input
                className="cursor-pointer opacity-0"
                style={{ transform: 'scale(2)' }}
                type="radio"
                id="T1"
                name="theme"
                value={0}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                className="cursor-pointer opacity-0"
                style={{ transform: 'scale(2)' }}
                type="radio"
                id="T2"
                name="theme"
                value={1}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                className="cursor-pointer opacity-0"
                style={{ transform: 'scale(2)' }}
                type="radio"
                id="T3"
                name="theme"
                value={2}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
