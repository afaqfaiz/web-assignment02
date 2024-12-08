import { useState } from 'react'
import "./App.css"
import Signin from './components/page-signin'
import Signup from './components/pages-signup'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Signin/>
      <div className='sepration'></div>
      <Signup/>
      </div>
     
    </>
  )
}

export default App
