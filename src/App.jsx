import './App.css';
import Spline from '@splinetool/react-spline';
import { PopupButton } from '@typeform/embed-react'

function App() {

  return (
    <>
    <div className='hero'>
    <Spline scene="https://prod.spline.design/Kzxb2QVVKWxB3ked/scene.splinecode" className='spline' />
    <div className='hero-relative'>
    <div className='hero-text'>
    <h1 className='text-focus-in'>Be the First to Experience AI-Powered Case Studies</h1>
    <div className='text-pop-up-top'>
    <p>Simplify your UX/UI case study creation effortlessly with AI automation. Join our waiting list and be among the first to be notified when we launch</p>
    <PopupButton id="O5GxuX60" style={{ width: '300px' }} className="my-form">
    Join Waiting List </PopupButton>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default App
