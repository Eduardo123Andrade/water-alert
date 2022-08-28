import { createContext, useEffect, useState } from "react"
import { useTimer } from "../hooks"
import { TimerStatus } from "../types"



type WaterAlertState = {
  timer: number,
  status: TimerStatus
}

type WaterAlertActions = {
  setIntervalTimer: (data: number) => void
  onStart: () => void
  onReset: () => void
}

type WaterAlertData = [
  state: WaterAlertState,
  actions: WaterAlertActions
]


const WaterAlertContext = createContext<WaterAlertData>(null)

type WaterAlertProviderProp = {
  children: React.ReactNode
}

export const WaterAlertProvider = ({
  children
}: WaterAlertProviderProp) => {
  // const [intervalTimer, updateIntervalTimer] = useState(0)
  const [{ timer, status }, { onStart, onReset, setTimer }] = useTimer()

  // useEffect(() => {
  //   console.log(intervalTimer)
  //   setTimer()
  // }, [intervalTimer])

  const setIntervalTimer = (intervalTimerInsSeconds: number) => {
    setTimer(intervalTimerInsSeconds)
  }


  return <WaterAlertContext.Provider
    children={children}
    value={[
      {
        timer,
        status
      },
      {
        setIntervalTimer,
        onStart,
        onReset
      }
    ]}
  />
}

WaterAlertProvider.Context = WaterAlertContext
