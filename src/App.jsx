import './App.css';
import Spline from '@splinetool/react-spline';

function App() {

  return (
    <>
    <div className='hero'>
    <Spline scene="https://prod.spline.design/Kzxb2QVVKWxB3ked/scene.splinecode" className='spline' />
    <div style={{zIndex: 100, position: 'relative', top: '30%', width: '85%'}}>
    <h1>Empower Your Time with AI Automation</h1>
    <p style={{width: '70%'}}>Streamline your workflow and elevate your productivity with the transformative power of AI automation. Create compelling UX/UI case studies effortlessly and focus on what truly matters.</p>
    <p style={{width: '70%'}}>Sign up and be the first to be notified when we open our doors</p>
    </div>
    </div>
    </>
  )
}

export default App
