const Keypad = ({
  displayText,
  deleteUserText,
  computeString,
  resetText,
}: keypadProps) => {
  return (
    <div className="bg-skin-keypad rounded-xl mt-8 py-6 px-10 ">
      <div className="flex justify-between">
        <button
          onClick={() => displayText('7')}
          className="bg-skin-num-shadow pb-1 rounded-lg  h-16 w-16"
        >
          <span className="bg-skin-num w-full h-full rounded-lg text-center pt-2 text-skin-num block">
            7
          </span>
        </button>
        <button
          onClick={() => displayText('8')}
          className="bg-skin-num-shadow pb-1 rounded-lg  h-16 w-16"
        >
          <span className="bg-skin-num w-full h-full rounded-lg text-center pt-2 text-skin-num block">
            8
          </span>
        </button>
        <button
          onClick={() => displayText('9')}
          className="bg-skin-num-shadow pb-1 rounded-lg  h-16 w-16"
        >
          <span className="bg-skin-num w-full h-full rounded-lg text-center pt-2 text-skin-num block">
            9
          </span>
        </button>
        <button
          onClick={() => deleteUserText()}
          className="bg-skin-del-shadow pb-1 rounded-lg  h-16 w-16"
        >
          <span className="bg-skin-del w-full h-full rounded-lg text-center pt-5 text-base text-skin-del block">
            DEL
          </span>
        </button>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => displayText('4')}
          className="bg-skin-num-shadow pb-1 rounded-lg  h-16 w-16"
        >
          <span className="bg-skin-num w-full h-full rounded-lg text-center pt-2 text-skin-num block">
            4
          </span>
        </button>
        <button
          onClick={() => displayText('5')}
          className="bg-skin-num-shadow pb-1 rounded-lg  h-16 w-16"
        >
          <span className="bg-skin-num w-full h-full rounded-lg text-center pt-2 text-skin-num block">
            5
          </span>
        </button>
        <button
          onClick={() => displayText('6')}
          className="bg-skin-num-shadow pb-1 rounded-lg  h-16 w-16"
        >
          <span className="bg-skin-num w-full h-full rounded-lg text-center pt-2 text-skin-num block">
            6
          </span>
        </button>
        <button
          onClick={() => displayText('+')}
          className="bg-skin-num-shadow pb-1 rounded-lg  h-16 w-16"
        >
          <span className="bg-skin-num w-full h-full rounded-lg text-center pt-2 text-skin-num block">
            +
          </span>
        </button>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => displayText('1')}
          className="bg-skin-num-shadow pb-1 rounded-lg  h-16 w-16"
        >
          <span className="bg-skin-num w-full h-full rounded-lg text-center pt-2 text-skin-num block">
            1
          </span>
        </button>
        <button
          onClick={() => displayText('2')}
          className="bg-skin-num-shadow pb-1 rounded-lg  h-16 w-16"
        >
          <span className="bg-skin-num w-full h-full rounded-lg text-center pt-2 text-skin-num block">
            2
          </span>
        </button>
        <button
          onClick={() => displayText('3')}
          className="bg-skin-num-shadow pb-1 rounded-lg  h-16 w-16"
        >
          <span className="bg-skin-num w-full h-full rounded-lg text-center pt-2 text-skin-num block">
            3
          </span>
        </button>
        <button
          onClick={() => displayText('-')}
          className="bg-skin-num-shadow pb-1 rounded-lg  h-16 w-16"
        >
          <span className="bg-skin-num w-full h-full rounded-lg text-center pt-2 text-skin-num block">
            -
          </span>
        </button>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => displayText('.')}
          className="bg-skin-num-shadow pb-1 rounded-lg  h-16 w-16"
        >
          <span className="bg-skin-num w-full h-full rounded-lg text-center pt-2 text-skin-num block">
            .
          </span>
        </button>
        <button
          onClick={() => displayText('0')}
          className="bg-skin-num-shadow pb-1 rounded-lg  h-16 w-16"
        >
          <span className="bg-skin-num w-full h-full rounded-lg text-center pt-2 text-skin-num block">
            0
          </span>
        </button>
        <button
          onClick={() => displayText('/')}
          className="bg-skin-num-shadow pb-1 rounded-lg  h-16 w-16"
        >
          <span className="bg-skin-num w-full h-full rounded-lg text-center pt-2 text-skin-num block">
            /
          </span>
        </button>
        <button
          onClick={() => displayText('*')}
          className="bg-skin-num-shadow pb-1 rounded-lg  h-16 w-16"
        >
          <span className="bg-skin-num w-full h-full rounded-lg text-center pt-2 text-skin-num block">
            x
          </span>
        </button>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => resetText()}
          className="bg-skin-del-shadow pb-1 rounded-lg text-skin-del h-16 w-1/2 mr-2"
        >
          <span className="bg-skin-del w-full h-full rounded-lg text-center pt-4 text-lg block">
            RESET
          </span>
        </button>
        <button
          onClick={() => computeString()}
          className="bg-skin-toggle-shadow pb-1 rounded-lg text-skin-del h-16 w-1/2 ml-3"
        >
          <span className="bg-skin-toggle w-full h-full rounded-lg text-center pt-4 text-base block">
            =
          </span>
        </button>
      </div>
    </div>
  )
}

export default Keypad
