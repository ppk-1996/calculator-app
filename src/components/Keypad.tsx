const Keypad = ({ setUserText, userText }: keypadProps) => {
  return (
    <div className="bg-skin-keypad rounded-xl mt-8 py-6 px-10 ">
      <div className="flex justify-between">
        <button
          onClick={() => setUserText(userText + '7')}
          className="bg-skin-num-shadow pb-1 rounded-lg  h-16 w-16"
        >
          <div className="bg-skin-num w-full h-full rounded-lg text-center pt-2 text-skin-num">
            7
          </div>
        </button>
        <button
          onClick={() => setUserText(userText + '8')}
          className="bg-skin-num-shadow pb-1 rounded-lg  h-16 w-16"
        >
          <div className="bg-skin-num w-full h-full rounded-lg text-center pt-2 text-skin-num">
            8
          </div>
        </button>
        <button
          onClick={() => setUserText(userText + '9')}
          className="bg-skin-num-shadow pb-1 rounded-lg  h-16 w-16"
        >
          <div className="bg-skin-num w-full h-full rounded-lg text-center pt-2 text-skin-num">
            9
          </div>
        </button>
        <button
          onClick={() => setUserText(userText.slice(0, -1))}
          className="bg-skin-del-shadow pb-1 rounded-lg  h-16 w-16"
        >
          <div className="bg-skin-del w-full h-full rounded-lg text-center pt-5 text-base text-skin-del">
            DEL
          </div>
        </button>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setUserText(userText + '4')}
          className="bg-skin-num-shadow pb-1 rounded-lg  h-16 w-16"
        >
          <div className="bg-skin-num w-full h-full rounded-lg text-center pt-2 text-skin-num">
            4
          </div>
        </button>
        <button
          onClick={() => setUserText(userText + '5')}
          className="bg-skin-num-shadow pb-1 rounded-lg  h-16 w-16"
        >
          <div className="bg-skin-num w-full h-full rounded-lg text-center pt-2 text-skin-num">
            5
          </div>
        </button>
        <button
          onClick={() => setUserText(userText + '6')}
          className="bg-skin-num-shadow pb-1 rounded-lg  h-16 w-16"
        >
          <div className="bg-skin-num w-full h-full rounded-lg text-center pt-2 text-skin-num">
            6
          </div>
        </button>
        <button
          onClick={() => setUserText(userText + '+')}
          className="bg-skin-num-shadow pb-1 rounded-lg  h-16 w-16"
        >
          <div className="bg-skin-num w-full h-full rounded-lg text-center pt-2 text-skin-num">
            +
          </div>
        </button>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setUserText(userText + '1')}
          className="bg-skin-num-shadow pb-1 rounded-lg  h-16 w-16"
        >
          <div className="bg-skin-num w-full h-full rounded-lg text-center pt-2 text-skin-num">
            1
          </div>
        </button>
        <button
          onClick={() => setUserText(userText + '2')}
          className="bg-skin-num-shadow pb-1 rounded-lg  h-16 w-16"
        >
          <div className="bg-skin-num w-full h-full rounded-lg text-center pt-2 text-skin-num">
            2
          </div>
        </button>
        <button
          onClick={() => setUserText(userText + '3')}
          className="bg-skin-num-shadow pb-1 rounded-lg  h-16 w-16"
        >
          <div className="bg-skin-num w-full h-full rounded-lg text-center pt-2 text-skin-num">
            3
          </div>
        </button>
        <button
          onClick={() => setUserText(userText + '-')}
          className="bg-skin-num-shadow pb-1 rounded-lg  h-16 w-16"
        >
          <div className="bg-skin-num w-full h-full rounded-lg text-center pt-2 text-skin-num">
            -
          </div>
        </button>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setUserText(userText + '.')}
          className="bg-skin-num-shadow pb-1 rounded-lg  h-16 w-16"
        >
          <div className="bg-skin-num w-full h-full rounded-lg text-center pt-2 text-skin-num">
            .
          </div>
        </button>
        <button
          onClick={() => setUserText(userText + '0')}
          className="bg-skin-num-shadow pb-1 rounded-lg  h-16 w-16"
        >
          <div className="bg-skin-num w-full h-full rounded-lg text-center pt-2 text-skin-num">
            0
          </div>
        </button>
        <button
          onClick={() => setUserText(userText + '/')}
          className="bg-skin-num-shadow pb-1 rounded-lg  h-16 w-16"
        >
          <div className="bg-skin-num w-full h-full rounded-lg text-center pt-2 text-skin-num">
            /
          </div>
        </button>
        <button
          onClick={() => setUserText(userText + '*')}
          className="bg-skin-num-shadow pb-1 rounded-lg  h-16 w-16"
        >
          <div className="bg-skin-num w-full h-full rounded-lg text-center pt-2 text-skin-num">
            x
          </div>
        </button>
      </div>
      <div className="flex justify-between mt-4">
        <button className="bg-skin-del-shadow pb-1 rounded-lg text-skin-del h-16 w-1/2 mr-2">
          <div className="bg-skin-del w-full h-full rounded-lg text-center pt-4 text-lg">
            RESET
          </div>
        </button>
        <button className="bg-skin-toggle-shadow pb-1 rounded-lg text-skin-del h-16 w-1/2 ml-3">
          <div className="bg-skin-toggle w-full h-full rounded-lg text-center pt-4 text-base">
            =
          </div>
        </button>
      </div>
    </div>
  )
}

export default Keypad
