import { useState } from "react"
import { createClient } from "@supabase/supabase-js"
import UploadFile from "../utils/mediaUloads"


export default function Test(){
     
const[file,setFile] =useState(null)

async function upload(){
    try{
         const url = await UploadFile(file)
         console.log(url)
    }catch(err){
      
      console.log("File upload at URL : "+ url)
    }
    }
    
   
}
 
    return(
        <div className="w-full h-full bg bg-yellow-600 flex justify-center items-center">
             <input type ="file" onChange={
              (e)=>{
                    setFile(e.target.files[0])
              }
              
              }></input>
              <button onClick={upload}className="w-[100px] h-[40px] bg-blue-500 text-white rounded-lg">\
                Upload
              </button>
          
      </div>

     
    )

    
             
      


    


//hook ek dnne function call karana thanata yatin
//hook run wenne  anupiliwalin okkoma run wenn oni ekama widiyata
//onima hook ekak patan ganne use eken
//component ekk athule srin sre wens wens wena agyk thiyenw nm...(dyanamic values thiyena gnt usestate dnn oni)
//usestate have function and variable

//setter  function run karama 1)adala value ek change wenwa 2)Component ek refresh karanawa function ek aye prk run wela 
                          