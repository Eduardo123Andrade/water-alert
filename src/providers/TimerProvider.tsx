import React, { createContext, useContext, useEffect, useState } from 'react'
import { TimerStatus } from '../types'


type TimerProviderState = {
  timer: number
  status: TimerStatus
}

type TimerProviderActions = {
  onStart: () => void
  onReset: () => void
}

export type TimerProviderData = [
  state: TimerProviderState,
  actions: TimerProviderActions
]

type TimerProviderProps = {
  children: React.ReactNode
}

const TimerProviderContext = createContext<TimerProviderData>(null)

const ONE_SECOND_IN_MILLISECONDS = 1000

export const TimerProvider = ({ children }: TimerProviderProps) => {
  const [timer, setTimer] = useState(10)
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>()
  const [status, setStatus] = useState<TimerStatus>('IDLE')

  useEffect(() => {
    if (status === 'RUNNING' && !intervalId) {
      const id = setInterval(() => {
        setTimer(prevState => --prevState)
      }, ONE_SECOND_IN_MILLISECONDS)
      setIntervalId(id)
    }
  }, [status, setIntervalId, intervalId])

  useEffect(() => {
    if (timer <= 0 && intervalId) {
      clearInterval(intervalId)
      setIntervalId(undefined)
      setStatus('FINISHED')
    }
  }, [status, intervalId, setIntervalId, timer])


  useEffect(() => {
    console.log({status})
  }, [status])

  const onStart = () => {
    setStatus('RUNNING')
  }

  const onReset = () => {
    setStatus('IDLE')
    setIntervalId(undefined)
    setTimer(10)
  }

  return (
    <TimerProviderContext.Provider
      children={children}
      value={[
        { timer, status },
        {
          onStart,
          onReset,
        }
      ]}
    />
  )
}

TimerProvider.Context = TimerProviderContext