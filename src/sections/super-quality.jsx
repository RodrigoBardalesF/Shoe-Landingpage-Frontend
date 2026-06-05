import Button from "../components/Button.jsx"
import {shoe8} from "../assets/images/index.js"
 

function SuperQuality () {
    return (
        <section id="about-us "className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
        <div className="flex flex-1 flex-col">
            <h2 className="font-palanquin capitalize text-4xl font-bold">
                <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
                We provide you </span><br/>
                <span className="text-red-400 inline-block mt-3">
                Super Quality </span> Design</h2>
            <p className="text-lg leading-7 text-gray-500 mt-4 sm:max-w-sm">
                Ensuring premium comfort and style, our meticulously crafted footwear and clothes is designed to elevate your experience.
            </p>
            <p className="mt-6 text-lg leading-7 text-gray-500 sm:max-w-sm">
                Our dedication to detail and excellence ensures your satisfaction.
            </p>
            <div className="mt-11">
                <Button label="View Details"/>
            </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
            <img
            src= {shoe8}
            alt = "shoe8"
            width={570}
            height={522}
            className="object-contain"
            ></img>
        </div>
        </section>
    )
}

export default SuperQuality