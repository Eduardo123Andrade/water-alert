import { useEffect, useState } from 'react';
import { TimerStatus } from '../types';

const ONE_SECOND_IN_MILLISECONDS = 1000

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

export const useTimer = (timeCounter: number): TimerProviderData => {
  const [timer, setTimer] = useState(timeCounter)
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
    console.log({ status })
  }, [status])

  const onStart = () => {
    setStatus('RUNNING')
  }

  const onReset = () => {
    setStatus('IDLE')
    setIntervalId(undefined)
    setTimer(10)
  }

  return [
    { timer, status },
    { onStart, onReset, }
  ]

  // const context = useContext(TimerProvider.Context)

  // if (!context)
  //   throw new Error('This hook must be wrapped by TimerProvider')

  // return context
}