import './Button.css'

type ButtonProps = {
  title: string
  onPress: () => void
}

export const Button = ({
  title,
  onPress
}: ButtonProps) => {


  return (
    <button className='Button' onClick={onPress}>
      <label id='title'>
        {title}
      </label>
    </button>
  )
}