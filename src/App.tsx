function App() {
  return (
    <main className="h-screen bg-mainBackground text-white">
      <div className="flex justify-between container mx-auto p-8">
        <h1 className="">calc</h1>
        <nav className="text-sm flex items-end">
          <h2 className="mr-4 font-light">THEME</h2>
          <div className="grid grid-cols-3 w-20 text-center">
            <p className="col-span-1">1</p>
            <p className="col-span-1">2</p>
            <p className="col-span-1">3</p>
            <div
              id="rectangle"
              className="col-span-3 w-full bg-keypadBackground h-7 rounded-full grid grid-cols-3 place-items-center"
            >
              <div className="hidden"></div>
              <div
                id="circle"
                className="w-5 bg-red h-5 col-span-1 rounded-full"
              ></div>
              <div></div>
            </div>
          </div>
        </nav>
      </div>
    </main>
  );
}

export default App;
