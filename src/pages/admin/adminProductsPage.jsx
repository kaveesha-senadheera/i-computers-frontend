import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import{Link} from "react-router-dom";


export default function AdminProductsPage(){
   const[products,setProducts] =useState([])
    return(
        <div className="w-full h-full overflow-y-scroll">
             {
                products.map(
                      (item,index)=>{
                            return <h1 key={index}>{item.name}</h1>
                         }
                
                )
                   
            }
            <Link to="/admin/add-product" className="text-white bg-accent w-[50px] h-[50px] flex justify-center items-center text-2xl rounded-[20px]  hover:rounded-full fixed bottom-12 right-16 ">
                <FaPlus/>
            </Link>
        </div>
    )
}

//hower means mkk hri ekk udata mouse geniyana ek 
//absolute,fixed