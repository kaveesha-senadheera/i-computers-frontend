import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import{Link} from "react-router-dom";
import getformattedPrice from "../../utils/priceFormats";
import axios from "axios";

const sampleProducts = [
  {
    productId: "PRD-2001",
    productName: "Apple MacBook Air M1",
    Description: "13.3-inch MacBook Air with M1 chip, 8GB RAM, 256GB SSD.",
    price: 289000,
    LabeledPrice: 309000,
    AltNames: ["MacBook Air", "Apple M1 Laptop", "Mac Air"],
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    Brand: "Apple",
    model: "MacBook Air M1",
    isVisible: true
  },
  {
    productId: "PRD-2002",
    productName: "HP Pavilion 15",
    Description: "15.6-inch Full HD laptop with Intel Core i5, 8GB RAM, 512GB SSD.",
    price: 185000,
    LabeledPrice: 199000,
    AltNames: ["HP Pavilion", "HP i5 Laptop", "Pavilion 15"],
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
    Brand: "HP",
    model: "Pavilion 15-eg2xxx",
    isVisible: true
  },
  {
    productId: "PRD-2003",
    productName: "Logitech MX Master 3S Mouse",
    Description: "Advanced wireless mouse with ergonomic design and ultra-fast scrolling.",
    price: 28500,
    LabeledPrice: 32000,
    AltNames: ["MX Master", "Logitech Mouse", "Wireless Mouse"],
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39d6",
    Brand: "Logitech",
    model: "MX Master 3S",
    isVisible: true
  },
  {
    productId: "PRD-2004",
    productName: "Samsung 27\" Curved Monitor",
    Description: "27-inch Full HD curved monitor with immersive viewing experience.",
    price: 89000,
    LabeledPrice: 95000,
    AltNames: ["Samsung Monitor", "27 inch Monitor", "Curved Display"],
    category: "Monitors",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
    Brand: "Samsung",
    model: "CF390",
    isVisible: false
  },

  {
    productId: "PRD-2005",
    productName: "Samsung 27\" Curved Monitor",
    Description: "27-inch Full HD curved monitor with immersive viewing experience.",
    price: 89000,
    LabeledPrice: 95000,
    AltNames: ["Samsung Monitor", "27 inch Monitor", "Curved Display"],
    category: "Monitors",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
    Brand: "Samsung",
    model: "CF390",
    isVisible: false
  }
];

export default function AdminProductsPage() {
  const [products, setProducts] = useState(sampleProducts);
  useEffect(()=> {
    const token = localStorage.getItem("token");

    axios
    .get(import.meta.env.VITE_API_URL + "/products",{
      headers:{
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      setProducts(prev => [...prev, ...(response.data.products || [])]);

    });
  }, []);


  return (
    <div className="w-full h-full p-6 flex flex-col">

      {/* ---------- Page Title ---------- */}
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-[var(--color-secondary)]">
          Admin Products Dashboard
        </h1>
        <p className="text-gray-600 mt-1">
          Manage your products, visibility, and details from this table.
        </p>
      </div>

      {/* ---------- Product Count ---------- */}
      <div className="mb-4">
        <span className="text-gray-700 font-medium">
          Total Products:{" "}
          <span className="text-[var(--color-accent)] font-bold">{products.length}</span>
        </span>
      </div>

      {/* ---------- Table Container with vertical scroll only ---------- */}
      {/* ---------- Table Container with vertical scroll only ---------- */}
<div className="w-full max-h-[500px] overflow-y-auto overflow-x-auto rounded-2xl shadow-xl border border-[var(--color-accent)]/20 bg-white">
  <table className="w-full border-collapse text-sm table-fixed">
    {/* Header */}
    <thead className="sticky top-0 z-10 bg-[var(--color-secondary)] text-white">
      <tr>
        <th className="px-5 py-4 text-left">Product ID</th>
        <th className="px-5 py-4 text-left">Name</th>
        <th className="px-5 py-4 text-left">Price</th>
        <th className="px-5 py-4 text-left">Labeled Price</th>
        <th className="px-5 py-4 text-left">Category</th>
        <th className="px-5 py-4 text-center">Image</th>
        <th className="px-5 py-4 text-center">Status</th>
        <th className="px-5 py-4 text-left">Brand</th>
        <th className="px-5 py-4 text-left">Model</th>
      </tr>
    </thead>

    {/* Body */}
    <tbody className="align-top">
      {products.length === 0 ? (
        <tr>
          <td colSpan={9} className="py-10 text-center text-gray-400">
            No products found
          </td>
        </tr>
      ) : (
        Array.isArray(products) &&
        products.map((item, index) => (
          <tr
            key={item.productId}
            className={`border-b border-[var(--color-accent)]/20 ${
              index % 2 === 0 ? "bg-white" : "bg-[var(--color-primary)]/40"
            } hover:bg-[var(--color-primary)] transition-colors`}
          >
            <td className="px-5 py-4 break-words">{item.productId}</td>
            <td className="px-5 py-4 font-semibold break-words">{item.productName}</td>
            <td className="px-5 py-4 text-[var(--color-accent)] font-semibold">
              {getformattedPrice(item.price)}
            </td>
            <td className="px-5 py-4 text-gray-400 line-through">
              {getformattedPrice(item.LabeledPrice)}
            </td>
            <td className="px-5 py-4">
              <span className="px-3 py-1 rounded-full text-xs bg-[var(--color-accent)]/15">
                {item.category}
              </span>
            </td>
            <td className="px-5 py-4 flex justify-center">
              <img
                src={item.image || "/placeholder.png"}
                alt={item.productName}
                loading="lazy"
                className="w-14 h-14 object-cover rounded-xl border shadow-md"
              />
            </td>
            <td className="px-5 py-4 text-center">
              {item.isVisible ? (
                <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
                  Visible
                </span>
              ) : (
                <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-700">
                  Hidden
                </span>
              )}
            </td>
            <td className="px-5 py-4 break-words">{item.Brand || <span className="text-secondary/40">N/A</span>}</td>
            <td className="px-5 py-4 break-words">{item.model || <span className="text-secondary/40">N/A</span>}</td>
          </tr>
        ))
      )}
    </tbody>
  </table>
</div>


      {/* ---------- Add Product Button ---------- */}
      <Link
        to="/admin/add-product"
        className="text-white bg-accent w-[50px] h-[50px] flex justify-center items-center text-2xl rounded-[20px] hover:rounded-full fixed bottom-12 right-16"
      >
        <FaPlus />
      </Link>
    </div>
  );
}
//hower means mkk hri ekk udata mouse geniyana ek 
//absolute,fixed
//map use karanne array ekaka thiyena dewal display karanna clearly