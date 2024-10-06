// import { useState } from 'react'

// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
  
// <>
// {/* <body className='bg-cyan-400'> */}
  

// <h1>Hello education portal</h1>


// </>
    
//   )
// }

// export default App
import { useState} from "react";
// import Form from "./Components/Form"
import Todo from "./Components/Todo"
import Todos from "./Components/Todos"


const App = () => {
    const [isRender, setIsRender] = useState(true)

    return <div>
        <button onClick={() => setIsRender(!isRender)} >Toggle</button>
        {isRender ? <Todos /> : "data not found"}
        <Todo/>
    </div>
}

// export default App

// const App = () => {

//     return <div>
//         <h1>React Router</h1>
//     </div>
// }

export default App