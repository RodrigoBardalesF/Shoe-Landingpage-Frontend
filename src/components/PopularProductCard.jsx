import star from "../assets/icons/star.svg"

function PopularProductCard ({imgURL, name, price}) {
    return (
        <div className="flex flex-col justify-start items-start gap-4">
        <img src={imgURL} alt={name} className="w-40 h-40">
        </img>
        <div className= "mt-8 flex justify-start gap-2.5">
        <img src ={star} alt="rating" width={24} heaight={24}></img>
        <p className="font-montserrat text-xl leading-1.5 text-slate-600">
        (4.5)</p>
        </div>
        <h3 className="mt-2 text-xl leading-4.5 font-semibold font-palanquin">
        {name}</h3>
        <p className="mt-2 font-semibold text-red-500 text-xl leading-4.5">
        {price}</p>
        </div>
    )
}

export default PopularProductCard