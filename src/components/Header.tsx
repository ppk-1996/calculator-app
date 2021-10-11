import { TOGGLE_STYLES } from '../utils/global'

function Header({ setTheme, toggleTheme, theme }: themeFunctions) {
  return (
    <div className="flex justify-between text-skin-header">
      <h1 className="">calc</h1>
      <nav className="text-sm flex items-end">
        <h2 className="mr-4 font-light">THEME</h2>
        <div className="grid grid-cols-3 w-20">
          <button
            type="button"
            onClick={() => setTheme(0)}
            className="col-span-1"
          >
            1
          </button>
          <button
            type="button"
            onClick={() => setTheme(1)}
            className="col-span-1"
          >
            2
          </button>
          <button
            type="button"
            onClick={() => setTheme(2)}
            className="col-span-1"
          >
            3
          </button>
          <div
            id="rectangle"
            className="cursor-pointer px-1 col-span-3 w-full bg-skin-keypad h-7 rounded-full flex flex-col justify-center"
            onClick={toggleTheme}
          >
            <div
              id="circle"
              style={TOGGLE_STYLES[theme]}
              className="w-5 bg-skin-toggle h-5 rounded-full transition-all duration-500 ease-out"
            ></div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
