import React, { useEffect, useState } from 'react';
import { TimerStatus } from '../../types';
import './Timer.css'

function formatterTimer(seconds: number) {
  const date = new Date()
  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(seconds)
  const hourString = `00${date.getHours()}`.slice(-2)
  const minuteString = `00${date.getMinutes()}`.slice(-2)
  const secondString = `00${date.getSeconds()}`.slice(-2)
  return `${hourString}:${minuteString}:${secondString}`
}

const ONE_SECOND_IN_MILLISECONDS = 1000


export const Timer = () => {
  const [currentTime, setTimer] = useState(10)
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
    if (currentTime <= 0 && intervalId) {
      clearInterval(intervalId)
      setIntervalId(undefined)
      setStatus('FINISHED')
    }
  }, [status, intervalId, setIntervalId, currentTime])


  return (
    <div>
      <label id='timer-label'>
        {formatterTimer(currentTime)}
      </label>
      <div>
        <button onClick={() => {
          setStatus('RUNNING')
        }}>
          start
        </button>

        <button onClick={() => {
          setStatus('STOPPED') 
        }}>
          pause
        </button>

        <button onClick={() => {
          setStatus('IDLE')
          setTimer(10)
          setIntervalId(undefined)
        }}>
          reset
        </button>
      </div>
    </div>
  )
}