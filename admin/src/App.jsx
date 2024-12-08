import { useState } from 'react'
import Signin from './components/page-signin'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Signin/>
      </div>
     
    </>
  )
}

export default App
