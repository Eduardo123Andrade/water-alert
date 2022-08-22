import './InputTimer.css'

type InputTimerProps = {
  value: string
  onChange: (props: string) => void
  title: string
  max?: string
  min?: string
}

export const InputTimer = (props: InputTimerProps) => {
  const { title, onChange, ...rest } = props


  const _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.validity.valid)
      onChange(event.target.value)
  }


  return (
    <div className='InputTimer'>
      <label id='Title'>{title}</label>
      <input
        id='InputTimer'
        {...rest}
        type='time'
        onChange={_onChange} />
    </div>
  )
}