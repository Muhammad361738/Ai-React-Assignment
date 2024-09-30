import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  
<>
{/* <body className='bg-cyan-400'> */}
  

<form className=' bg-cyan-800 mt-2 items-end justify-center rounded-3xl ' action="/action_page.php">
   {/* Personal In formation  */}
    <legend className='bg-fuchsia-700 p-4 rounded-3xl mb-3 '>Personal Information :</legend>
    <label className='p-3 font-bold fon text-xl  ' for="fname">First name:</label>
    <input className='p-2 rounded-md border border-zinc-800 w-60 md:w-72 lg:w-96'  type="text" id="fname" name="fname" /><br/><br/>
    <label className='p-3 font-bold fon text-xl  ' for="lname">Last name:</label>
    <input className='pt-4 rounded-md border border-zinc-800 w-60 md:w-72 lg:w-96' type="text" id="lname" name="lname"/><br/><br/>  
    <label className='ml-8 p-3 font-bold fon text-xl  ' for="email">Email:</label>
    <input className='pt-4 rounded-md border border-zinc-800 w-60 md:w-72 lg:w-96' type="email" id="email" name="email"/><br/><br/>
    <label className=' ml-11  font-bold fon text-xl  justify p-3' for="birthday">Age</label>
    <input className='pt-4 rounded-md border border-zinc-800 w-60 md:w-72 lg:w-96' type="date" id="birthday" name="birthday"/><br/><br/>

  

    <input type="submit" value="Submit"/>

</form> 



</>
    
  )
}

export default App
