import { useState } from "react"
export default function Test(){
     const[count,setCount] = useState(0)
     const[status,setstatus]=useState("Sleeping")
     const[isVisible,setIsVisible] = useState(true)


 
    return(
        <div className="w-full h-full bg bg-yellow-600 flex justify-center items-center">
          
          <button onClick={
            ()=>{
              setIsVisible(!isVisible)
            }
            //if else
          }className="w-[50px] h-[50px] bg-red-600 text-white">{isVisible?"X":"O"}</button>

          {/*if*/}
             {isVisible && <div className="w-[400px] h-[400px] bg-white flex justify-center items-center flex-col">
                 <h1 className="text-[55px]">{count}</h1>
                 <div className="w-full h-[50px] flex justify-center items-center gap-2">
                  <button onClick={
                  ()=>{
                      setCount(count -1)
                      }
                } className="w-[100px] h-[45px] bg-red-600 text-white">
                        Decrement
                  </button>
                  <button onClick={
                    ()=>{
                       setCount(count +1)
                  }
                    }className="w-[100px] h-[45px] bg-green-600 text-white">
                        Increment
                  </button>
                </div>

                 <h1 className="text-[55px]">{status}</h1>
                 <div className="w-full h-[50px] flex justify-center items-center gap-2">
                  <button onClick={
                  ()=>{
                     setstatus("Sleeping")
                      }
                } className="w-[100px] h-[45px] bg-red-600 text-white">
                        Sleep
                  </button>
                  <button onClick={
                    ()=>{
                      setstatus("Awake")
                  }
                    }className="w-[100px] h-[45px] bg-green-600 text-white">
                        Awake
                  </button>
                </div>

             </div>}
      </div>

     
    )

    
             
      


    
}

//hook ek dnne function call karana thanata yatin
//hook run wenne  anupiliwalin okkoma run wenn oni ekama widiyata
//onima hook ekak patan ganne use eken
//component ekk athule srin sre wens wens wena agyk thiyenw nm...(dyanamic values thiyena gnt usestate dnn oni)
//usestate have function and variable

//setter  function run karama 1)adala value ek change wenwa 2)Component ek refresh karanawa function ek aye prk run wela 
                          