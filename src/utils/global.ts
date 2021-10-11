export const THEMES = ['theme-one', 'theme-two', 'theme-three']
export const TOGGLE_STYLES = [
  { marginRight: 0, transform: 'translate(0%, 0%)' },
  { marginLeft: '50%', transform: 'translate(-50%, 0%)' },
  {
    marginLeft: '100%',
    transform: 'translate(-100%, 0%)',
  },
]
export function numberWithCommas(x: string) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
