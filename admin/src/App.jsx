import { useState } from 'react'
import "./App.css"
import Signin from './pages/page-signin'
import Signup from './pages/pages-signup'
import Blank from './pages/pages-blank'
import GoogleMap from './pages/map-google'
import CardsPage from './pages/pages-Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Signin/>
      <div className='sepration'></div>
      <Signup/>
      <div className='sepration'></div>
      <Blank/>
      <div className='sepration'></div>
      <GoogleMap/>
      <div className='sepration'></div>
      <CardsPage/>
      </div>
     
    </>
  )
}

export default App
