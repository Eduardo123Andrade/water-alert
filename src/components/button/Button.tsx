import './Button.css'

type ButtonProps = {
  title: string
  onPress: () => void
  disabled?: boolean
}

export const Button = ({
  title,
  onPress,
  disabled
}: ButtonProps) => {


  return (
    <button
      className='Button'
      onClick={onPress}
      disabled={disabled}
    >
      <label id='title'>
        {title}
      </label>
    </button>
  )
}