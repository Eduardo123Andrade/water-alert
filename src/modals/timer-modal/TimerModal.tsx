import { useState } from "react"
import { Button, InputTimer } from "../../components"
import { useWaterAlert } from "../../hooks"
import { BaseModal } from "../index"

import "./TimerModal.css"


type TimeModalProps = {
  visible: boolean
  onRequestClose: () => void
}


export const TimerModal = (props: TimeModalProps) => {
  const [initialHour, setInitialHour] = useState<string>('')
  const [finalHour, setFinalHour] = useState<string>('')
  const [intervalTime, setInterval] = useState<string>('1')
  const [, { setIntervalTimer }] = useWaterAlert()



  const onSubmit = () => {
    const [minutes, seconds = 0] = intervalTime
      .split(':')
      .map(item => Number(item))

    const totalSeconds = (minutes * 60) + seconds
    setIntervalTimer(totalSeconds)
    props.onRequestClose()
  }

  return (
    <BaseModal {...props}>
      <div id='Timer-Modal-Body'>
        <div>
          {/* <InputTimer
          title='Hora inicial:'
          value={initialHour}
          onChange={setInitialHour}
        />

        <InputTimer
          title='Hora final:'
          value={finalHour}
          onChange={setFinalHour}
        /> */}

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
    </BaseModal >
  )
}