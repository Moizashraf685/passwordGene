import React, { useState, useCallback,useEffect,useRef} from 'react'

function App() {
  const [length, setLength] =useState(6);
  const [numall,setNumberAll] =useState(false);
  const [charAll,setCharAll] = useState(false);
  const [password,setPassword]=useState("");

   const passwordRef=useRef(null)

       const copyPasswordToClipboard=useCallback(()=>{
        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange();
      window.navigator.clipboard.writeText()
    }, [])
  
  const passwordGenerator= useCallback( ()=>{
       let pass=""
       let str="avndsryiokjnfdswikmmoizmoiaashefMOZIASHRAFMOIZASHRAFMOIASHRAFMOZIASHRAFmoizashraffmoziashraf"


   
        if(numall) str+="0123456789";
        if(charAll) str+="MOIZAShraf";

        for(let i=0;i<length;i++){ 
          let char=Math.floor(Math.random()*str.length)
          pass +=str.charAt(char);
        }
     
    setPassword(pass);
  },[length,numall,charAll,setPassword]) 

  useEffect(() => {
      passwordGenerator()  
  } , [length,numall,charAll,passwordGenerator]
  )


  return (
       <div className=' '>
      <div className="text-orange-500 w-full max-w-md mx-auto shadow-md rounded-lg px-6  py-4 my-10 bg-slate-950 ">
         <h1 className='text-white text-center my-3 text-2xl'>Password Generator</h1>
      
       <div className='flex-shadow rounded-lg overflow-hidden mb-4'>
        <input
          type="text"
          value={password}
          className='outline-none  py-1 px-20 bg-amber-300'
          placeholder="password"
          readOnly
            ref={passwordRef}
            />
             <button   onClick={copyPasswordToClipboard} 
             className='outline-none bg-blue-700 text-white py-1 px-3 shrink-0 rounded-r-xl hover:bg-cyan-200'  >copy</button>
        <div className='flex text-sm gap-x-2'>
           <div className='flex items-center gap-x-1 '>
                    <input
                 type='range'
                 min={6}
                 max={100}
                 value={length}
                 className='cursor pointer'
                 onChange={(e)=>{setLength(e.target.value)}}
                    ></input> 
             <label>Length:{length}</label>
            </div>
              <div className='flex items-center gap-x-1 '>
                  <input
                 type='checkbox'
                 defaultChecked={numall}
                 id="numberinput"
                 onChange={()=>{
                  setNumberAll((prev)=>!prev)
                 }}
                 />
               </div>
                 <label htmlFor='number'>Number</label>
            <div>
                  <input
                 type='checkbox'
                 defaultChecked={charAll}
                 id="numberinput"
                 onChange={()=>{
                  setCheckAll((prev)=>!prev)
                 }}
                 />
               </div>
               <label htmlFor='characterInput'>character</label>
              </div>
       </div>
    </div>
   </div> 
  )
}
 
export default App;

