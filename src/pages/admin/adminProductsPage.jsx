import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import{Link} from "react-router-dom";
import getformattedPrice from "../../utils/priceFormats";
import axios from "axios";
import { CiEdit } from "react-icons/ci";
import toast from "react-hot-toast";

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          toast.error("You must be logged in to view products");
          return;
        }

        const response = await axios.get(import.meta.env.VITE_API_URL + "/products", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });

        console.log("Received from API:", response.data); // Debug: Log received data
        setProducts(response.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error(error?.response?.data?.message || "Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-full h-full overflow-y-scroll bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <div className="sticky top-0 z-20 backdrop-blur-lg bg-white/80 border-b border-slate-200/60 shadow-sm">
        <div className="flex items-center justify-between gap-3 px-6 py-5">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Products
              </h2>
              <p className="text-sm text-slate-500 mt-0.5">
                Manage your catalog with ease
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right mr-2">
              <p className="text-xs text-slate-500 font-medium">Total Items</p>
              <p className="text-2xl font-bold text-slate-800">{products?.length ?? 0}</p>
            </div>
            <div className="w-px h-10 bg-slate-200"></div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200/50">
              <div className="relative">
                <span className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></span>
                <span className="relative h-2 w-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
              </div>
              <span className="text-sm font-semibold text-slate-700">Active</span>
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-slate-200 rounded-full"></div>
              <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-blue-500 border-r-purple-600 rounded-full animate-spin"></div>
            </div>
            <p className="mt-4 text-slate-600 font-medium">Loading amazing products...</p>
            <p className="text-sm text-slate-400 mt-1">This will only take a moment</p>
          </div>
        </div>
      ) : products.length === 0 ? (
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center max-w-md">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl flex items-center justify-center">
              <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">No products yet</h3>
            <p className="text-slate-500 mb-6">Start building your catalog by adding your first product</p>
            <Link
              to="/admin/add-product"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Your First Product
            </Link>
          </div>
        </div>
      ) : (
        <div className="p-6">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200/60 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200/60">
                  <tr>
                    <th className="px-6 py-4 text-left">
                      <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Product ID</span>
                    </th>
                    <th className="px-6 py-4 text-left">
                      <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Name</span>
                    </th>
                    <th className="px-6 py-4 text-left">
                      <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Price</span>
                    </th>
                    <th className="px-6 py-4 text-left">
                      <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Labeled Price</span>
                    </th>
                    <th className="px-6 py-4 text-left">
                      <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Category</span>
                    </th>
                    <th className="px-6 py-4 text-center">
                      <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Image</span>
                    </th>
                    <th className="px-6 py-4 text-center">
                      <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Status</span>
                    </th>
                    <th className="px-6 py-4 text-left">
                      <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Brand</span>
                    </th>
                    <th className="px-6 py-4 text-left">
                      <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Model</span>
                    </th>
                    <th className="px-6 py-4 text-center">
                      <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Actions</span>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {products.map((item, index) => (
                    <tr
                      key={item.productId}
                      className={`hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 transition-all duration-300 ${
                        index % 2 === 0 ? 'bg-white' : 'bg-blue-200'
                      }`}
                    >
                      <td className="px-6 py-5">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-slate-100 to-slate-200 border border-slate-300/50">
                          <span className="text-xs font-mono font-semibold text-slate-700">{item.productId}</span>
                        </div>
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex flex-col gap-1">
                          <span className="font-semibold text-slate-800 text-sm">{item.productName}</span>
                          <span className="text-xs text-slate-500">{item.category || 'Uncategorized'}</span>
                        </div>
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex flex-col">
                          <span className="font-bold text-green-600 text-sm">{getformattedPrice(item.price)}</span>
                          <span className="text-xs text-slate-400">Current</span>
                        </div>
                      </td>

                      <td className="px-6 py-5">
                        {/* Debug: Check all possible field names */}
                        {console.log("Product:", item.productName, "All fields:", Object.keys(item), "LabeledPrice:", item.labeledPrice, "labeledPrice:", item.labeledPrice, "markedPrice:", item.markedPrice)}
                        {(item.labeledPrice && item.labeledPrice !== "" && item.labeledPrice !== null && item.labeledPrice !== undefined) ? (
                          <div className="flex flex-col">
                            <span className="text-sm text-slate-500 line-through">{getformattedPrice(item.labeledPrice)}</span>
                            <span className="text-xs text-slate-400">Original</span>
                          </div>
                        ) : (item.labeledPrice && item.labeledPrice !== "" && item.labeledPrice !== null && item.labeledPrice !== undefined) ? (
                          <div className="flex flex-col">
                            <span className="text-sm text-slate-500 line-through">{getformattedPrice(item.labeledPrice)}</span>
                            <span className="text-xs text-slate-400">Original</span>
                          </div>
                        ) : (item.markedPrice && item.markedPrice !== "" && item.markedPrice !== null && item.markedPrice !== undefined) ? (
                          <div className="flex flex-col">
                            <span className="text-sm text-slate-500 line-through">{getformattedPrice(item.markedPrice)}</span>
                            <span className="text-xs text-slate-400">Original</span>
                          </div>
                        ) : (
                          <div className="flex flex-col">
                            <span className="text-slate-300 text-sm">—</span>
                            <span className="text-xs text-slate-400">No labeled price</span>
                          </div>
                        )}
                      </td>

                      <td className="px-6 py-5">
                        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border border-blue-200/50">
                          {item.category || 'Others'}
                        </span>
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex justify-center">
                          <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            <img
                              src={item.images?.[0] || "/placeholder.png"}
                              alt={item.productName}
                              className="w-14 h-14 object-cover rounded-xl border-2 border-slate-200 shadow-sm group-hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex justify-center">
                          {item.isVisible ? (
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-green-50 to-emerald-100 text-green-700 border border-green-200/50">
                              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                              <span>Visible</span>
                            </div>
                          ) : (
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-slate-100 to-slate-200 text-slate-600 border border-slate-300/50">
                              <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                              <span>Hidden</span>
                            </div>
                          )}
                        </div>
                      </td>

                      <td className="px-6 py-5">
                        <span className="text-sm font-medium text-slate-700">{item.Brand || <span className="text-slate-400">N/A</span>}</span>
                      </td>

                      <td className="px-6 py-5">
                        <span className="text-sm text-slate-600">{item.model || <span className="text-slate-400">N/A</span>}</span>
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex justify-center">
                          <Link
                            to="/admin/update-product"
                            state={item}
                            className="group inline-flex items-center justify-center p-2.5 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 hover:from-blue-100 hover:to-purple-100 transition-all duration-200 border border-blue-200/50 hover:border-blue-300/50 hover:shadow-md transform hover:scale-105"
                            title="Edit product"
                          >
                            <CiEdit className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-4 px-4 py-3 bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl border border-slate-200/60">
            <p className="text-xs text-slate-500 text-center flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Tip: Scroll horizontally on smaller screens to view all columns
            </p>
          </div>
        </div>
      )}

      {/* Floating Add Button */}
      <Link
        to="/admin/add-product"
        className="fixed bottom-8 right-8 group w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center border border-white/20"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <FaPlus className="text-xl relative z-10 group-hover:rotate-90 transition-transform duration-500" />
      </Link>
    </div>
  );
}
//hower means mkk hri ekk udata mouse geniyana ek 
//absolute,fixed
//map use karanne array ekaka thiyena dewal display karanna clearly