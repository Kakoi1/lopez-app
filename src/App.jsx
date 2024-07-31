import { useState } from 'react'
import Tasks from './Component/Tasks'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Tasks/>
    </div>
  )
}

export default App
