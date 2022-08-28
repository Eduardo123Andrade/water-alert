import { useState } from 'react'
import { Button, InputTimer } from '../components'
import { useWaterAlert } from '../hooks'
import './Modal.css'


type ModalProps = {
  visible: boolean
  onRequestClose: () => void
}

export const Modal = ({
  visible,
  onRequestClose
}: ModalProps) => {
  const [initialHour, setInitialHour] = useState<string>('')
  const [finalHour, setFinalHour] = useState<string>('')
  const [intervalTime, setInterval] = useState<string>('1')
  const [, {setIntervalTimer}] = useWaterAlert()


  
  const onSubmit = () => {
    const [minutes, seconds = 0] = intervalTime
      .split(':')
      .map(item => Number(item))

      const totalSeconds = (minutes * 11) + seconds
      setIntervalTimer(totalSeconds)
      onRequestClose()
  }

  if(!visible)
    return

  return (
    
    <div className='Modal-background'>
      <div id='Card'>

        <div id='Close-button'>
          <label id='Close-label' onClick={onRequestClose}>
            X
          </label>
        </div>

        <div id='Children'>
          <InputTimer
            title='Hora inicial:'
            value={initialHour}
            onChange={setInitialHour}
          />

          <InputTimer
            title='Hora final:'
            value={finalHour}
            onChange={setFinalHour}
          />

          <InputTimer
            title='Tempo de intervalo:'
            value={intervalTime}
            onChange={setInterval}
            mode='JUST_MINUTES'
          />
        </div>
        <div id='Footer'>
          <Button
            title='Salvar'
            onPress={onSubmit}
          />
        </div>
      </div>
    </div>
  )
}