import { Button } from "../../components"
import { BaseModal } from "./../index"

import "./WaterModal.css"


type WaterModalProps = {
  visible: boolean
  onRequestClose: () => void
}


export const WaterModal = (props: WaterModalProps) => {
  return (
    <BaseModal {...props}>
      <div id='Water-Modal-Body'>
        <label id='Water-Modal-label'>
          Beba agua
        </label>

        <Button
          title='Bebi'
          onPress={props.onRequestClose}
        />
      </div>
    </BaseModal>
  )
}