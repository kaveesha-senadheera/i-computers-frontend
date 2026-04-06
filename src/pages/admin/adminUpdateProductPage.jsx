import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";



export default function AdminUpdateProductPage(){

     const location = useLocation()
     const[productId , setProductId]=useState(location.state.productId);
     const[productName, setProductName]=useState(location.state.productName);
     const[description, setDescription]=useState(location.state.description || location.state.Description || "");
     const[labeledPrice, setLabeledPrice]=useState(location.state.labeledPrice || location.state.LabeledPrice || "");
     const[category, setCategory]=useState(location.state.category);
     const[brand, setBrand]=useState(location.state.brand);
     const[model, setModel]=useState(location.state.model);
     const[isVisible, setIsVisible]=useState(location.state.isVisible);
     const[files, setFiles]=useState([]);
     const[altNames, setAltNames]=useState(location.state.altNames ? location.state.altNames.join(",") : (location.state.AltNames ? location.state.AltNames.join(",") : ""));
     const[price, setPrice]=useState(location.state.price);
     const navigate =useNavigate()
     

     async function handleUpdateProduct(){
           try{

            const token =localStorage.getItem("token");

            if( token== null){
                toast.error("You must be logged in to add a product");
                window.location.href ="/login";
                return;
            }

            const fileUploadPromises = [];
            
            for(let i=0; i<files.length ; i++){
                fileUploadPromises[i]=uploadFile(files[i])
            }

            let imageURLs = await Promise.all(fileUploadPromises);

            
            if (imageURLs.length == 0){
                imageURLs = location.state.images
            }
           


                await axios.put(import.meta.env.VITE_API_URL + "/products/"+productId,{
                   productName: productName,
                   description: description,
                   images: imageURLs,
                   price: price,
                   labeledPrice: labeledPrice,
                   altNames: altNames.split(","),
                   category: category,
                   brand: brand,
                   model: model,
                   isVisible: isVisible

                },{
                    headers :{
                        Authorization:"Bearer " + token
                    }
                })
                toast.success("Product updated Successfully")
                //redirect to admin add product page
                navigate("/admin/products")
           }catch(err){
                toast.error(err?.response?.data?.message || "Failed to Update product");
                
                return;
           }
        }
        


    return(
        <div className="w-full max-h-full flex flex-wrap items-start overflow-y-scroll hide-scroll-track" >
            <h1 className="w-full text-3xl font-bold mb-4 sticky top-0 bg-primary">Update Product</h1>
            <div className="w-[50%] h-[120px] flex flex-col">
                <label className="font-bold ml-2"> Product Id</label>
                <input value={productId} disabled onChange={(e)=>{setProductId(e.target.value)}} placeholder="Ex: ID001" className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 focus:outline-white"/>
            </div>
        <div className="w-[50%] h-[120px] flex flex-col">
                <label className="font-bold ml-2"> Product Name</label>
                <input value={productName} onChange={(e)=>{setProductName(e.target.value)}} placeholder="Ex: Laptop" className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 focus:outline-white"/>
            </div>
            <div className="w-full h-[120px] flex flex-col">
                <label className="font-bold ml-2">Description</label>
                <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}} placeholder="Ex: Laptop" className="border-4 border-accent rounded-[10px] h-[100px] p-2 m-2 focus:outline-white"/>
            </div>
             
             <div className="w-full h-[120px] flex flex-col">
                 <label className="font-bold ml-2">Images</label>
                 <input multiple type ="file" onChange={(e)=> {setFiles(e.target.files)}} className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 focus:outline-white"/>
             </div>

            <div className="w-full h-[120px] flex flex-col">
                <label className="font-bold ml-2">Alternative Names (comma seperated) </label>
                <input value={altNames} onChange={(e)=>{setAltNames(e.target.value)}} placeholder="Ex: Laptop, Notebook, Portable Computer" className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 focus:outline-white"/>
            </div>
            
        
            <div className="w-[50%] h-[120px] flex flex-col">
                <label className="font-bold ml-2">Price</label>
                <input value={price} onChange={(e)=>{setPrice(e.target.value)}} type="number" placeholder="Ex: 50000" className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 focus:outline-white"/>
            </div>
            
       
            <div className="w-[50%] h-[120px] flex flex-col">
                <label className="font-bold ml-2">Labeled Price</label>
                <input value={labeledPrice} onChange={(e)=>{setLabeledPrice(e.target.value)}} placeholder="Ex: 60000" className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 focus:outline-white"/>
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
                <select value={brand} onChange={(e)=>{setBrand(e.target.value)}} placeholder="Ex: Generic" className="border-4 border-accent rounded-[10px] h-[50px] p-2 m-2 focus:outline-white">
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
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>

            </div>
         <div className="w-full h-[80px] bg-white sticky bottom-0 rounded-b-2xl flex justify-end items-center p-4 gap-4">
                  <button className="bg-accent text-white font-bold px-6 py-3 rounded-[10px] hover:bg-gray-500">Cancel</button>
                  <button onClick={handleUpdateProduct} className="bg-accent text-white font-bold px-6 py-3 rounded-[10px] hover:bg-secondary">Update Product</button>
        
         </div>
             
            
        </div>
    )
}