import './BaseModal.css'

type ModalProps = {
  visible: boolean
  onRequestClose: () => void
  children: React.ReactNode
}

export const BaseModal = ({
  visible,
  onRequestClose,
  children
}: ModalProps) => {

  if (!visible)
    return

  return (
    <div className='Modal-background'>
      <div id='Card-Modal'>

        <div id='Modal-close-button'>
          <label id='Close-label' onClick={onRequestClose}>
            X
          </label>
        </div>

        <div id='Base-Modal-Children'>
          {children}
        </div>
      </div>
    </div>
  )
}