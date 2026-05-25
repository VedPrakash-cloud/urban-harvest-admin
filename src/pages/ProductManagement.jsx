import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../redux/productSlice';

export default function ProductManagement() {
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [name, setName] = useState('');
  const [category, setCategory] = useState('Fresh Produce');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState('Available');

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!name || !price) return alert("Please fill all the information");

    const newProduct = {
      id: Date.now(),
      name,
      category,
      price: Number(price),
      status
    };

    dispatch(addProduct(newProduct));
    setIsModalOpen(false);
    
    setName('');
    setPrice('');
  };

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'All' || p.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Product Management</h1>
          <p className="text-sm text-gray-500">Track and add stock items on inventory sheets.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-2.5 rounded-xl text-sm shadow-md shadow-emerald-600/10 transition-all self-start sm:self-auto"
        >
          + Add New Product
        </button>
      </div>


      <div className="flex flex-col sm:flex-row gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-2xs">
        <input 
          type="text" 
          placeholder="🔍 Search fresh products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2 text-sm border border-gray-200 rounded-xl outline-none focus:border-emerald-500 transition-all"
        />
        <select 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 text-sm border border-gray-200 rounded-xl outline-none focus:border-emerald-500 bg-white"
        >
          <option value="All">All Status</option>
          <option value="Available">Available</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-xs">
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-xs font-semibold uppercase tracking-wider text-gray-400">
                <th className="pb-3 pl-4">Item Name</th>
                <th className="pb-3">Category</th>
                <th className="pb-3">Price Rate</th>
                <th className="pb-3 pr-4">Stock Status</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-50 text-gray-600">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 pl-4 font-semibold text-gray-900">{product.name}</td>
                  <td className="py-4 text-gray-500">{product.category}</td>
                  <td className="py-4 font-medium text-gray-900">₹{product.price}</td>
                  <td className="py-4 pr-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      product.status === 'Available' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                </tr>
              ))}
              {filteredProducts.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-8 text-gray-400 text-sm font-medium">Koi items nahi mile bhai!</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl border border-gray-100 space-y-4">
            <h3 className="text-lg font-bold text-gray-800 border-b border-gray-100 pb-2">Add New Product Details</h3>
            <form onSubmit={handleAddProduct} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Product Name</label>
                <input 
                  type="text" required value={name} onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-xl outline-none focus:border-emerald-500"
                  placeholder="e.g. Organic Apple Pack"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Category</label>
                <select 
                  value={category} onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-xl bg-white outline-none focus:border-emerald-500"
                >
                  <option value="Fresh Produce">Fresh Produce</option>
                  <option value="Dairy Alternatives">Dairy Alternatives</option>
                  <option value="Bakery">Bakery</option>
                  <option value="Pantry">Pantry</option>
                  <option value="Meat & Seafood">Meat & Seafood</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Price (₹)</label>
                <input 
                  type="number" required value={price} min={0} onChange={(e) => setPrice(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-xl outline-none focus:border-emerald-500"
                  placeholder="e.g. 150"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Stock Status</label>
                <div className="flex gap-4 mt-1">
                  <label className="flex items-center space-x-1 text-sm font-medium text-gray-700 cursor-pointer">
                    <input type="radio" name="status" value="Available" checked={status === 'Available'} onChange={() => setStatus('Available')} className="text-emerald-600 focus:ring-emerald-500" />
                    <span>Available</span>
                  </label>
                  <label className="flex items-center space-x-1 text-sm font-medium text-gray-700 cursor-pointer">
                    <input type="radio" name="status" value="Out of Stock" checked={status === 'Out of Stock'} onChange={() => setStatus('Out of Stock')} className="text-emerald-600 focus:ring-emerald-500" />
                    <span>Out of Stock</span>
                  </label>
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-2 border-t border-gray-100">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 border border-gray-200 text-gray-600 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold transition-colors">Save Item</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}