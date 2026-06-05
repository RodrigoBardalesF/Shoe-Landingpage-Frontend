import {products} from "../constants"
import PopularProductCard from "../components/PopularProductCard"

function PopularProducts () {
    return (
        <section id="products" className="max-container" max-sm:mt-12>
            <div className="flex flex-col justify-start gap-5">
            <h2 className="text-4xl font-palanquin font-bold">
                Our Popular 
                <span className="text-red-400">
                Products
                </span>
                </h2>
            <p lg:max-w-lg mt-2 font-monserrat text-gray-500>
                Discover our most sought-after footwear collection. Discover a world of comfort and style with our premium selection.</p>
            </div>

            <div  className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 sm:gap-4 gap-14">
                {products.map((product) => (
                    <PopularProductCard key = {product.name} {...product}
                    />
                ))}

            </div>
        </section>
    )
}

export default PopularProducts