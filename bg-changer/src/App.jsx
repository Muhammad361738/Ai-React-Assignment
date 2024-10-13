import { useState } from "react"


function App() {
  const [color,setColor] = useState('olive')

  return (
    <div className="w-full h-screen duration-200 " 
    style={{backgroundColor:color}}>
     
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 px-3 py-2 rounded-3xl bg-slate-600 shadow-lg">
          <button
          onClick={()=>setColor("red")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "red"}}>
            RED</button>

            <button
          onClick={()=>setColor("green")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "green"}}>
            Green</button>

            <button
          onClick={()=>setColor("Blue")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "Blue"}}>
            Blue</button>

            <button
          onClick={()=>setColor("Olive")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "Olive"}}>
            Olive</button>

            <button
          onClick={()=>setColor("Gray")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "Gray"}}>
            Gray</button>

            <button
          onClick={()=>setColor("Yellow")}
           className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor : "Yellow"}}>
            Yellow</button>

            <button
          onClick={()=>setColor("PINK")}
           className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor : "PINK"}}>
            PINK</button>

            <button
          onClick={()=>setColor("LAVENDER")}
           className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor : "LAVENDER"}}>
            LAVENDER</button>

            <button
          onClick={()=>setColor("WHITE")}
           className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor : "WHITE"}}>
            WHITE</button>

            <button
          onClick={()=>setColor("BLACK")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "BLACK"}}>
            BLACK</button>

            <button
          onClick={()=>setColor("PURPLE")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "PURPLE"}}>
            PURPLE</button>

           
        </div>
      </div>





    </div>
  
  )
}

export default App
