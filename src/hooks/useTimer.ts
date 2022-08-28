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
  setTimer: (time: number) => void
}

export type TimerProviderData = [
  state: TimerProviderState,
  actions: TimerProviderActions
]

export const useTimer = (timeCounter?: number): TimerProviderData => {
  const [timer, updateTimer] = useState(timeCounter)
  const [initialTimer, updateInitialTimer] = useState(timeCounter)
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>()
  const [status, setStatus] = useState<TimerStatus>('IDLE')

  useEffect(() => {
    if (status === 'RUNNING' && !intervalId) {
      const id = setInterval(() => {
        updateTimer(prevState => --prevState)
      }, ONE_SECOND_IN_MILLISECONDS)
      setIntervalId(id)
    }
  }, [status, setIntervalId, intervalId, updateTimer])

  useEffect(() => {
    if (timer <= 0 && intervalId) {
      clearInterval(intervalId)
      setIntervalId(undefined)
      setStatus('FINISHED')
    }
  }, [status, intervalId, setIntervalId, timer])


  const onStart = () => {
    setStatus('RUNNING')
  }

  const onReset = () => {
    setStatus('IDLE')
    setIntervalId(undefined)
    updateTimer(initialTimer)
  }

  const setTimer = (time: number) => {
    updateTimer(time)
    updateInitialTimer(time)
  }

  return [
    { timer, status },
    { onStart, onReset, setTimer }
  ]

  // const context = useContext(TimerProvider.Context)

  // if (!context)
  //   throw new Error('This hook must be wrapped by TimerProvider')

  // return context
}