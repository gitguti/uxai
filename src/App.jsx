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
    <h1 className='text-focus-in'>Empower Your Time with AI Automation</h1>
    <div className='text-pop-up-top'>
    <p>Create compelling UX/UI case studies effortlessly and focus on what truly matters. Sign up and be the first to be notified when we open our doors</p>
    <PopupButton id="O5GxuX60" style={{ width: '300px' }} className="my-form">
    Suscribe </PopupButton>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default App
