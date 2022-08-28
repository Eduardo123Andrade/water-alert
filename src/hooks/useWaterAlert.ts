import { useContext } from "react"
import { WaterAlertProvider } from "../providers"



export const useWaterAlert = () => {
  const context = useContext(WaterAlertProvider.Context)

  if (!context)
    throw new Error('This hooks need to be wrapped by WaterAlertProvider')

  return context
}
