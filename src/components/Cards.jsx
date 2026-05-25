export default function Card({title, value, icon, bgGradient}){
    return (
        <div className={`p-6 rounded-2xl shadow-xs bg-linear-to-br ${bgGradient} text-white flex item-center justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-md`}>
            <div className="space-y-2">
                <p className="text-sm font-medium opacity-85 tracking-wide">{title}</p>
                <h3 className="text-2xl fnt-bold tracking-tight">{value}</h3>
            </div>
            <div className="bg-white/20 p-3 rounded-xl text-2xl backdrop-blur-xs">
                {icon}
            </div>
        </div>
    )
}