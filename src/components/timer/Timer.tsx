import { useTimer } from '../../hooks';
import { Button } from '../button';
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
  const [{ timer, status }, { onStart, onReset }] = useTimer(10)

  const onPressStart = () => {
    onStart()
  }

  const onPressReset = () => {
    onReset()
  }

  return (
    <div>
      <label id='timer-label'>
        {formatterTimer(timer)}
      </label>
      <div>
        {status === 'IDLE' && (
          <Button
            onPress={onPressStart}
            title='start'
          />
        )}
        {status === 'FINISHED' && (
          <Button
            onPress={onPressReset}
            title='reset'
          />
        )}
      </div>
    </div>
  )
}