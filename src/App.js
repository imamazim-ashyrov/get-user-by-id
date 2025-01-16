import { useState } from "react"
import GetUsers from "./GetUsers"

const App = () => {
  const [state, setState] = useState(true)
  return (
    <center>
      {state && <GetUsers />}
    </center>
  )
}

export default App




