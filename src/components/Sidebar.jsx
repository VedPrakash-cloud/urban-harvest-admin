import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {logout} from "../redux/authSlice";

export default function Sidebar({isOpen, setIsOpen}){
    const location = useLocation();
    const dispatch = useDispatch();

    const menuItems = [
        { name: 'Dashboard', path: '/dashboard', icon: '📊' },
        { name: 'Products', path: '/products', icon: '🛒' },
    ];

    const handleLogout = ()=>{
        dispatch(logout());
        localStorage.removeItem("rememberedUser");
        localStorage.removeItem("isLoggedIn");
    };


    return(
        <>
        {isOpen && (
            <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            onClick={()=> setIsOpen(false)} />)}

            <div className={`fixed top-0 left-0 h-screen w-64 bg-emerald-900 text-white z-50 transition-transform duration-300 ease-in-out flex flex-col justify-between ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>

                <div>
                    <div className="p-6 flex justify-between items-center border-b border-emerald-800">
                        <h1 className="text-xl font-bold tracking-wide text-emerald-300">Urban Harvest</h1>
                        <button className="lg:hidden text-2xl" onClick={()=> setIsOpen(false)}>x</button>
                    </div>

                    <nav className="p-4 space-y-2 mt-4">
                        {menuItems.map((item)=>{
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                key={item.name}
                                to={item.path}
                                onClick={()=>setIsOpen(false)}
                                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-20 ${
                                    isActive ? 'bg-emerald-700 text-white shadow-lg' : 'hover:bg-emerald-800/60 text-emerald-100'
                                }`}
                                >
                                    <span className="text-xl">{item.icon}</span>
                                    <span className="font-medium">{item.name}</span>
                                </Link>
                            )
                        })}
                    </nav>
                </div>
                <div className="p-4 border-t border-emerald-800">
                    <button
                    onClick={handleLogout}
                    className="w-ful flex items-center space-x-3 px-4 py-3  rounded-xl hover:bg-red-800/20 text-red-300 hover:text-red-200 transition-all duration-200">
                        <span>🚪</span>
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            </div>
        </>
    )





}