import Card from '../components/Cards';

export default function Dashboard() {
  const recentOrders = [
    { id: "1", customer: "Rahul Sharma", items: "3x Alphonso Mango", total: "₹540", status: "Delivered" },
    { id: "2", customer: "Priyanka Nair", items: "1x Organic Broccoli", total: "₹120", status: "Pending" },
    { id: "3", customer: "Amit Patel", items: "2x Dragon Fruit", total: "₹380", status: "Delivered" },
    { id: "4", customer: "Sneha Reddy", items: "5x Avocados Pack", total: "₹750", status: "Pending" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
        <p className="text-sm text-gray-500">Live operational snapshots for today.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card title="Total Orders" value="1,482" icon="📦" bgGradient="from-blue-500 to-blue-600" />
        <Card title="Revenue" value="₹1,24,500" icon="💰" bgGradient="from-emerald-500 to-emerald-600" />
        <Card title="Active Users" value="342" icon="👥" bgGradient="from-purple-500 to-purple-600" />
        <Card title="Pending Deliveries" value="19" icon="🚚" bgGradient="from-amber-500 to-amber-600" />
      </div>


      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-xs">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Inbound Orders</h3>
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-xs font-semibold uppercase tracking-wider text-gray-400">
                <th className="pb-3 pl-4">Order ID</th>
                <th className="pb-3">Customer</th>
                <th className="pb-3">Items Purchased</th>
                <th className="pb-3">Total Amount</th>
                <th className="pb-3 pr-4">Logistics Status</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-50 text-gray-600">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 pl-4 font-semibold text-emerald-700">{order.id}</td>
                  <td className="py-4 font-medium text-gray-900">{order.customer}</td>
                  <td className="py-4">{order.items}</td>
                  <td className="py-4 font-semibold text-gray-900">{order.total}</td>
                  <td className="py-4 pr-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      order.status === 'Delivered' ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}