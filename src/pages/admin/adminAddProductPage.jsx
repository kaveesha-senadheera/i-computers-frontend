import { useState } from "react";

export default function AdminAddProductPage(){
     const[productId , setProductId]=useState("");
     const[productName, setProductName]=useState("")
     const[Description, setDescription]=useState("")
     const[AltNames, setAltNames]=useState([])
     const[price, setPrice]=useState("")
     const[LabeledPrice, setLabeledPrice]=useState("")
     const[category,setCategory]=useState("Others")
     const[Brand, setBrand]=useState("Standard")
     const[model,setModel]=useState("Others")
     const[isVisible,setIsVisible]=useState("Others")


    return(
        <div className="w-full max-h-full flex flex-wrap items-start overflow-y-scroll" >
            <div className="w-[50%] h-[120px] flex flex-col">
                <label className="font-bold ml-2"> Product Id</label>
                <input value={productId} onChange={(e)=>{setProductId(e.target.value)}} placeholder="Ex: ID001" className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 focus:outline-white"/>
            </div>
        <div className="w-[50%] h-[120px] flex flex-col">
                <label className="font-bold ml-2"> Product Name</label>
                <input value={productName} onChange={(e)=>{setProductName(e.target.value)}}placeholder="Ex: Laptop" className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 focus:outline-white"/>
            </div>
            <div className="w-full h-[120px] flex flex-col">
                <label className="font-bold ml-2">Description</label>
                <textarea value={Description} onChange={(e)=>{setDescription(e.target.value)}}placeholder="Ex: Laptop" className="border-4 border-accent rounded-[10px] h-[100px] p-2 m-2 focus:outline-white"/>
            </div>
            <div className="w-full h-[120px] flex flex-col">
                <label className="font-bold ml-2">Alternative Names (comma seperated) </label>
                <input value={AltNames} onChange={(e)=>{setAltNames(e.target.value)}}placeholder="Ex: Laptop" className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 focus:outline-white"/>
            </div>
            
        
            <div className="w-[50%] h-[120px] flex flex-col">
                <label className="font-bold ml-2">Price</label>
                <input value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder="50000" className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 focus:outline-white"/>
            </div>
            
       
            <div className="w-[50%] h-[120px] flex flex-col">
                <label className="font-bold ml-2">Labeled Price</label>
                <input value={LabeledPrice} onChange={(e)=>{setLabeledPrice(e.target.value)}} placeholder="Ex: ID001" className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 focus:outline-white"/>
            </div>
            
             <div className="w-[25%] h-[120px] flex flex-col">
                <label className="font-bold ml-2">Categories</label>
                <select value={category} onChange={(e)=>{setCategory(e.target.value)}} placeholder="Ex: Laptop" className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 focus:outline-white">
                    <option value="Laptops">Laptops</option>
                    <option value="Desktops">Desktops</option>
                    <option value="Components">Components</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Peripharals">Peripharals</option>

                </select>
            </div>

        <div className="w-[25%] h-[120px] flex flex-col">
                <label className="font-bold ml-2"> Brand</label>
                <select value={Brand} onChange={(e)=>{setBrand(e.target.value)}} placeholder="Ex: Generic" className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 focus:outline-white">
                    <option value="Generic">Generic</option>
                    <option value="Dell">Dell</option>
                    <option value="HP">HP</option>
                    <option value="Lenovo">Lenovo</option>
                    <option value="Asus">Asus</option>
                    <option value="Acer">Acer</option>
                    <option value="Apple">Apple</option>
                </select>
            </div>
        <div className="w-[25%] h-[120px] flex flex-col">
                <label className="font-bold ml-2"> Model</label>
                <input value={model} onChange={(e)=>{setModel(e.target.value)}} placeholder="Ex: Inspiron 15" className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 focus:outline-white"/>
            </div>

         <div className="w-[25%] h-[120px] flex flex-col">
                <label className="font-bold ml-2">Is visible</label>
                <select value={isVisible} onChange={(e)=>{setIsVisible(e.target.value)}} placeholder="Ex: Yes" className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 focus:outline-white">
                    <option value="True">Yes</option>
                    <option value="false">No</option>
                </select>

            </div>

             
            
        </div>
    )
}