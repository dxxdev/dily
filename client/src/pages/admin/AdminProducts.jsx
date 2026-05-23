import React, { useState } from "react";
import { Plus, Search, Edit, Trash2, MoreVertical } from "lucide-react";
import { products as initialProducts, options } from "../../data/data";

const AdminProducts = () => {
  const [products, setProducts] = useState(initialProducts);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-dark-gray">Products</h1>
          <p className="text-address-gray text-sm mt-1">Manage your store products and inventory.</p>
        </div>
        <button className="bg-bright-green text-white px-4 py-2 rounded-10 font-semibold flex items-center gap-2 hover:bg-green-600 transition-slice shadow-product-card-shadow">
          <Plus size={20} /> Add New Product
        </button>
      </div>

      <div className="bg-white rounded-10 shadow-sm border border-light-gray overflow-hidden">
        {/* Table Toolbar */}
        <div className="p-4 border-b border-light-gray flex justify-between items-center bg-white">
          <div className="flex items-center bg-light-gray rounded-10 px-4 py-2 w-72 border border-transparent focus-within:border-bright-green transition-slice">
            <Search size={18} className="text-address-gray" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent border-none outline-none ml-2 w-full text-sm text-dark-gray placeholder-address-gray"
            />
          </div>
          <div className="flex gap-2">
             {/* Filter/Sort buttons could go here */}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-light-gray/50 text-dark-gray text-sm border-b border-light-gray">
                <th className="p-4 font-semibold">Product Name</th>
                <th className="p-4 font-semibold">Category</th>
                <th className="p-4 font-semibold">Price</th>
                <th className="p-4 font-semibold">Stock</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-light-gray hover:bg-light-gray/30 transition-colors">
                  <td className="p-4 font-semibold text-dark-gray">{product.productName}</td>
                  <td className="p-4 text-address-gray">{product.category?.originalCategory || "N/A"}</td>
                  <td className="p-4 text-dark-gray font-medium">${typeof product.price === 'function' ? product.price().toLocaleString("en-US", options) : product.price}</td>
                  <td className="p-4 text-dark-gray">{product.stock || 100}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      (product.stock || 100) > 20 ? 'bg-light-green text-bright-green' :
                      (product.stock || 100) > 0 ? 'bg-orange-100 text-orange-500' :
                      'bg-red-100 text-red-500'
                    }`}>
                      {(product.stock || 100) > 20 ? 'Active' : (product.stock || 100) > 0 ? 'Low Stock' : 'Out of Stock'}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-address-gray hover:text-bright-green hover:bg-light-green rounded-10 transition-slice">
                        <Edit size={18} />
                      </button>
                      <button className="p-2 text-address-gray hover:text-red-500 hover:bg-red-50 rounded-10 transition-slice">
                        <Trash2 size={18} />
                      </button>
                      <button className="p-2 text-address-gray hover:text-dark-gray rounded-10 transition-slice">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Placeholder */}
        <div className="p-4 border-t border-light-gray flex items-center justify-between text-sm text-address-gray">
          <span>Showing 1 to {products.length > 5 ? 5 : products.length} of {products.length} entries</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 rounded border border-light-gray hover:border-bright-green hover:text-bright-green">Prev</button>
            <button className="px-3 py-1 rounded bg-bright-green text-white">1</button>
            <button className="px-3 py-1 rounded border border-light-gray hover:border-bright-green hover:text-bright-green">2</button>
            <button className="px-3 py-1 rounded border border-light-gray hover:border-bright-green hover:text-bright-green">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
