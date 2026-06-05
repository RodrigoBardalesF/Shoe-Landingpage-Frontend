
import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import { statistics, shoes } from "../constants"
import { bigShoe1 } from "../assets/images"
import { useState } from "react"

function MainExposition () {
    const[bigShoeImg, setbigShoeImg] = useState(bigShoe1)

    return (
        <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
           <div className="relative xl:w-2/5 flex flex-col jusitify-center items-start w-full pt-15">
            <p className="text-xl text-red-400">
                Our New Product Available Now!
                </p>
            <h1 className="z-10 mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                <span className=" xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
                The New Arrival</span>
                <br />
                <span className="z-10 text-red-400 inline-block mt-3">
                100% Mexican</span>Shoes</h1>
            <p className="text-lg leading-8 text-gray-500 mt-6 mb-14 sm:max-w-sm">
                Discover the perfect blend of style and comfort with our latest collection of Mexican shoes.</p>
            <Button label="Shop Now"/>

            <div className="w-full flex justify-start items-start flex-wrap mt-20 gap-16">
                {statistics.map((data) => (
                    <div key={data.label}>
                    <p className="text-lg font-palanquin font-bold">{data.value}
                    </p>
                    <p className="leading-7 font-montserrat text-slate-500">{data.label}
                    </p>
                    </div>
                ))}
            </div>
             </div>

            <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
            <img src={bigShoeImg} width={610} height={500} alt="Shoe 1" className="object-contain relative"/>
            <div className="flex sm:gap-6 gap-4 absolute -bottom-0.5 sm:left-1 max-sm:px-6">
              {shoes.map((shoe, index) => (
                <div key={index}>
                <ShoeCard
                key={shoe.bigShoe}
                imgURL={shoe}
                changeBigShoeImg={(shoe) => setbigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
                />
                 </div>
              ))}
            </div>
         </div>
        </section>
    )
}

export default MainExposition