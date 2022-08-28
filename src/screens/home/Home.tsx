import { useEffect, useState } from 'react'
import { Button, Timer } from '../../components'
import { useWaterAlert } from '../../hooks'
import { TimerModal, WaterModal } from '../../modals'
import './HomeStye.css'

export const Home = () => {
  const [showTimerModal, setShowTimerModal] = useState(false)
  const [showWaterModal, setShowWaterModal] = useState(false)
  const [{ status }, { onReset, onStart }] = useWaterAlert()

  useEffect(() => {
    if (status === 'FINISHED')
      setShowWaterModal(true)
  }, [status])


  const onRequestClose = () => {
    setShowTimerModal(false)
    setTimeout(() => {
      onStart()
    }, 500)
  }

  const onPressShowTimerModal = () => {
    setShowTimerModal(true)
  }

  const onPressCloseWaterModal = () => {
    setShowWaterModal(false)
    onReset()
    setTimeout(() => {
      onStart()
    }, 500)
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
          onRequestClose={onPressCloseWaterModal}
        />
      </div>
    </div>
  )
}