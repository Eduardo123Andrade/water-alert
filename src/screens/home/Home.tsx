import { useState } from 'react'
import { Timer } from '../../components'
import { Modal } from '../../modals'
import { WaterAlertProvider } from '../../providers'
import './HomeStye.css'

export const Home = () => {
  const [showModal, setShowModal] = useState(true)

  const onRequestClose = () => {
    setShowModal(false)
  }

  return (
    <WaterAlertProvider>
      <div className='Home'>
        <div className='Test'>
          <Timer />
          <Modal visible={showModal} onRequestClose={onRequestClose} />
        </div>
      </div>
    </WaterAlertProvider>
  )
}