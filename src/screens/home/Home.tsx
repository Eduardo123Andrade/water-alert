import { Timer } from '../../components'
import { TimerProvider } from '../../providers'
import './HomeStye.css'

export const Home = () => {
  return (
    <TimerProvider>
      <div className='Home'>
        <div className='Test'>
          <Timer />
          <label>Hello world</label>
        </div>
      </div>
    </TimerProvider>
  )
}