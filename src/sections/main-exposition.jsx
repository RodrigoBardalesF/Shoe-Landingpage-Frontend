
import Button from "../components/Button"
import tenis4 from "../assets/images/tenis4.jpg"
import tenis3 from "../assets/images/tenis3.jpg"
import tenis2 from "../assets/images/tenis2.jpg"
import tenis1 from "../assets/images/tenis1.jpg"
import ShoeCard from "../components/ShoeCard"

function MainExposition () {
    return (
        <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
           <div className="relative xl:w-2/5 flex flex-col jusitify-center items-start w-full pt-28">
            <p className="text-xl text-red-400">
                Our Summer Collection</p>
            <h1 className="mt-10 font-palanquin text-8xl font-bold">
                <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
                The New Arrival</span><br/>
                <span className="text-red-400 inline-block mt-3">
                100% Mexican</span>Shoes</h1>
            <p className="text-lg leading-8 text-gray-500 mt-6 mb-14 sm:max-w-sm">
                Discover the perfect blend of style and comfort with our latest collection of Mexican shoes.</p>
            <Button label="Shop Now"/>
            </div>

            <div className="w-full flex justify-start items-start flex-wrap mt-20 gap-16">
                <div>
                    <p className="text-3xl font-palanquin text-bold">
                        Free Shipping</p>
                    <p className="text-lg leading-7 text-gray-500">
                        On all orders over $50</p>
                </div>
                   <div> 
                    <p className="text-3xl font-palanquin text-bold">
                        100% Natural Materials</p>
                    <p className="text-lg leading-7 text-gray-500">
                        Made from sustainable sources</p>
                </div>
                   <div>
                    <p className="text-3xl font-palanquin text-bold"> 
                        Artesanal work</p>
                    <p className="text-lg leading-7 text-gray-500">
                        Handcrafted with care</p>
                </div>
            </div>

            <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
                <img src={tenis4} width="610" height="500" alt="Tenis 4" className="object-contain relative z-10"/>
            </div>
            <div>
                <ShoeCard 
                imgURL = {tenis3}
                changeBigShoeImg = {() => {}}
                bigShoeImg = ""
                />
                 <ShoeCard 
                imgURL = {tenis3}
                changeBigShoeImg = {() => {}}
                bigShoeImg = ""
                />
                 <ShoeCard 
                imgURL = {tenis3}
                changeBigShoeImg = {() => {}}
                bigShoeImg = ""
                />
            </div>
        </section>
    )
}

export default MainExposition