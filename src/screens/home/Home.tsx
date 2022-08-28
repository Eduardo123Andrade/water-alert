import { useState } from 'react'
import { Button, Timer } from '../../components'
import { useWaterAlert } from '../../hooks'
import { TimerModal, WaterModal } from '../../modals'
import './HomeStye.css'

export const Home = () => {
  const [showTimerModal, setShowTimerModal] = useState(false)
  const [showWaterModal, setShowWaterModal] = useState(true)
  const [{ status }] = useWaterAlert()

  const onRequestClose = () => {
    setShowTimerModal(false)
    setShowWaterModal(false)
  }

  const onPressShowTimerModal = () => {
    setShowTimerModal(true)
  }

  return (
    <div className='Home'>
      <div className='Test'>
        <Timer />

        <Button
          title='Configurar timer'
          onPress={onPressShowTimerModal}
        />
        <TimerModal visible={showTimerModal} onRequestClose={onRequestClose} />
        <WaterModal
          visible={showWaterModal}
          onRequestClose={onRequestClose}
        />
      </div>
    </div>
  )
}