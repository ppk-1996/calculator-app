import { numberWithCommas } from '../utils/global'

const Screen = ({ result }: screenProps) => {
  return (
    <div
      className="bg-skin-screen text-skin-header rounded-xl mt-8 h-auto text-right p-6 overflow-auto overflow-y-hidden"
      style={{ direction: 'rtl' }}
    >
      <div
        style={{
          direction: 'ltr',
          whiteSpace: 'nowrap',
          display: 'inline-block',
        }}
      >
        {numberWithCommas(result)}
      </div>
      {/*https://stackoverflow.com/a/39874526*/}
    </div>
  )
}

export default Screen
