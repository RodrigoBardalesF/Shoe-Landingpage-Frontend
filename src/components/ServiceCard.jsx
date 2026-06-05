

function ServiceCard({imgURL, label, subtext}) {
    return(
        <div className="flex-1 w-full sm:w-4 rounded-[20px] shadow-3xl px-10 py-16" >
            <div className="flex w-11 h-11 justify-center items-center bg-red-500 rounded-full">
                <img src={imgURL} alt={label} width={24} height={24}
                ></img>
            </div>
            <h3 className="font-bold mt-5 leading-4.5 text-xl">{label}</h3>
            <p className="overflow-wrap mt-3 font-montserrat text-sm leading-4 text-slate-700">{subtext}</p>
        </div>
    )
}

export default ServiceCard