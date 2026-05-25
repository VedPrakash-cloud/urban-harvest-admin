import { useSelector } from "react-redux";

export default function Header({setIsOpen}){

    const user = useSelector((state)=> state.auth.user);

    return(
        <header className="h-16 bg-white border-b border-gray-100 px-6 flex items-center justify-between sticky top-0 z-30 shadow-xs">
            <div className="flex items-center space-x-4">
                <button 
                onClick={()=> setIsOpen(true)}
                className="lg:hidden text-gray-600 focus: outline-none text-2xl"
                >
                    ☰
                </button>
                <h2 className="text-lg font-semibold text-gray-800 hidden sm:block">Admin Management Portal</h2>
            </div>

            <div className="flex items-center space-x-3">
                <div className="text-right hidden sm:block">
                    <p className="text-sm font-medium text-gray-800">{user?.email || 'Admin User'}</p>
                    <p className="text-xs text-emerald-600 font-medium">Store Manager</p>
                </div>
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Profile"
                className="h-10 w-10 rounded-full object-cover border-2 border-emerald-500" />
            </div>
        </header>
    )
}