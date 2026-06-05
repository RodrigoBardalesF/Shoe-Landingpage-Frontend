import { star } from "../assets/icons"

function ReviewCard({customerName, feedback, imgURL, rating}) {
    return(
        <div className="flex justify-center items-center flex-col">
            <img src={imgURL} alt={customerName} className="rounded-full object-cover w-30 h-30"></img>
            <p className="mt-6 max-w-sm text-center text-lg leading-7 text-gray-500">
                {feedback}</p>
            <div className="mt-3 flex justify-center items-center gap-2.5">
                <img src={star} alt="rating" width={24} height={24} className="object-contain m-0" />
                <p className="font-montserrat text-slate-500">
                ({rating})</p>           
            </div>
            <h4 className="mt-1 font-palanquin text-3xl text-center font-bold">
                {customerName}</h4>
        </div>
    )
}

export default ReviewCard