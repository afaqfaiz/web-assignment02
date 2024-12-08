import { useState } from 'react'
import "./App.css"
import Signin from './pages/page-signin'
import Signup from './pages/pages-signup'
import Blank from './pages/pages-blank'
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


      </div>
     
    </>
  )
}

export default App
