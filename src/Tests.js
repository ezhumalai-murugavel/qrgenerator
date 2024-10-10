import { useEffect, useState } from "react"


const Tests = () => {
    
    

        const[name,setName]=useState({
            names:"Ezhumali",
            age:22
        })
        const[count,setCount]=useState(0)
        function handle(e){
          setName({...name,[e.target.name]:e.target.value})
         
        }
        useEffect(()=>{
          setTimeout(()=>{
            setCount((e)=>e+1)
          },1000)
        })
        
   

  return (
    <><div>
    <h1>i am {name.names} and {name.age}</h1>
   <input type="text" name="names" value={name.names} onChange={handle}/>
   <input type="number" name="age"  value={name.age} onChange={handle} />
   <p>the countdown is start now:{count}</p>
   <form>
    <label><input type="radio" />father</label>
    <input type="month" name="" id="" />
    <p>today date is:{Date()}</p>
   </form>
   </div>
    </>
  )
}

export default Tests
