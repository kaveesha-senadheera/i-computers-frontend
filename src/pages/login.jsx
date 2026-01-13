import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage(){
      const[email,setEmail] = useState("");
      const[password,setPassword] = useState("");
      const navigate = useNavigate()

     /* function login(){
           console.log(email)
           console.log(password)
           axios.post(import.meta.env.VITE_API_URL + "/users/login",{
            email:email,
            password:password
           }
        ).then(
            (response)=>{
                console.log(response)
                toast.success("Login Successful")
            }
        ).catch(
            (error)=>{
                console.log(error)
                toast.error("Login Failed")
            }
        )
      }*/


      async function login(){
         try{
         const response = await axios.post("http://localhost:3000/users/login",
         {
            email : email,
            password:password
         }
         )
         console.log(response)
         toast.success("Login Successful")
         if(response.data.role == "admin"){
           // window.location.href ="/admin/" (navigate wenna use navigate hook ekk dmmama lesi ethkot refresh wenne na smooth)

           navigate("/admin")
         }else{
            //redirect to home page
         }
         }catch(error) {
             console.log(error)
             toast.error("Login Failed")
         }
         
         }
        
      

    return(
        <div className="w-full h-full bg-[url('/backgroundpic.jpg')] bg-cover bg-no-repeat bg-center flex">
            <div className="w-[50%] h-full flex justify-center items-center"> 
                <img src="/logo.png" className="w-[300px]"/>
                <h1 className="text-4xl font-bold mt-5 text-white">Isuri Computers</h1>
            </div>
            <div className="w-[50%] h-full flex justify-center items-center">
          
              <div className="backdrop-blur-3xl w-[400px] h-[500px] shadow-2xl rounded-lg flex flex-col">
                   <input type="email" 
                   placeholder="Email" 
                   onChange={
                    (e)=>{
                        console.log(e.target.value)
                        
                    }
                   }
                   className="m-5 p-3 w-[90%] h-[50px] rounded-lg border border-secondary outline-none"></input>
                   <input 
                         type="password" 
                         placeholder="Password" 
                         onChange={
                    (e)=>{
                        setEmail(e.target.value)
                        
                    }
                   }
                         className="m-5 p-3 w-[90%] h-[50px] rounded-lg border border-secondary outline-none">

                    </input>
                    
                   <p className="w-full text-right pr-5">
                         Forgot Password?{""}
                         <Link to="/forgot password"className="text-accent">
                             Reset
                         </Link>
                    </p>

                   <button onClick={login} className="m-5 p-3 w-[90%] h-[50px] bg-accent rounded-lg text-white font-bold ">
                         Login
                    </button>

                   <button className="m-5 p-3 w-[90%] h-[50px] border border-accent rounded-lg text-white font-bold ">
                         Login with Google 
                    </button>

                   <p className="w-full text-right pr-5">
                         Don't have an account? 
                         <Link to="/register"className="text-accent">
                         Register
                         </Link>
                    </p>
                   
              </div>

            </div>
            
            
        </div>
    )
}

