import { useTimer } from '../../hooks';
import './Timer.css';

function formatterTimer(seconds: number) {
  const date = new Date()
  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(seconds)
  const hourString = `00${date.getHours()}`.slice(-2)
  const minuteString = `00${date.getMinutes()}`.slice(-2)
  const secondString = `00${date.getSeconds()}`.slice(-2)
  return `${hourString}:${minuteString}:${secondString}`
}

export const Timer = () => {
  const [{ timer, status }, { onStart, onReset }] = useTimer()

  const onPressStart = () => {
    onStart()
  }

  const onPressRest = () => {
    onReset()
  }

  return (
    <div>
      <label id='timer-label'>
        {formatterTimer(timer)}
      </label>
      <div>
        {status === 'IDLE' && (
          <button onClick={onPressStart}>
            start
          </button>
        )}
        {status === 'FINISHED' && (
          <button onClick={onPressRest}>
            reset
          </button>
        )}
      </div>
    </div>
  )
}