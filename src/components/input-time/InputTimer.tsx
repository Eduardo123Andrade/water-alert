import React, { MouseEvent, MouseEventHandler, useState } from 'react'
import { range } from '../../utils';
import './InputTimer.css'

type InputTimerProps = {
  mode?: 'JUST_MINUTES' | 'FULL'
  value: string
  onChange: (props: string) => void
  title: string
  max?: string
  min?: string
}

const MINUTES = range(60)

const renderItem = (second: number) => {
  const secondString = `00${second}`.slice(-2)

  return <option  key={second} value={second}>{secondString}</option>
}

export const InputTimer = (props: InputTimerProps) => {
  const { title, onChange, mode = 'FULL', ...rest } = props


  const _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.validity.valid)
      onChange(event.target.value)
  }

  const _onChangeSeconds = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.currentTarget.value)
  }


  return (
    <div className='InputTimer'>
      <label id='Title'>{title}</label>
      {mode === 'FULL' && (
        <input
          id='InputTimer'
          {...rest}
          type='time'
          onChange={_onChange}
        />
      )}
      {mode === 'JUST_MINUTES' && (
        <select value={1} onChange={_onChangeSeconds} id='InputTimer' >
          {MINUTES.map(renderItem)}
        </select>
      )}
    </div>
  )
}