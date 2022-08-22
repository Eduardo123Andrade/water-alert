import { useState } from 'react'
import { Button, InputTimer } from '../components'
import './Modal.css'


export const Modal = () => {
  const [initialHour, setInitialHour] = useState<string>('')
  const [finalHour, setFinalHour] = useState<string>('')
  const [intervalTime, setIntervalTime] = useState<string>('')


  return (
    <div className='Modal-background'>
      <div id='Card'>

        <div id='Close-button'>
          <label id='Close-label' onClick={() => console.log('close')}>
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
            onChange={setIntervalTime}
          />
        </div>
        <div id='Footer'>
          <Button
            title='Salvar'
            onPress={() => console.log('pressed')}
          />
        </div>
      </div>
    </div>
  )
}