import Button from "../components/Button"
import { offer } from "../assets/images"

function SpecialOffer () {
    return (
        <section className="flex justify-wrap items-center gap-10 max-container max-xl:flex-col-reverse">
            <div className="flex-1">
                <img
                src={offer} width={773} height={687} className="object-contain w-full">
                </img>
            </div>
            <div className="flex flex-1 flex-col">
            <h2 className="font-palanquin capitalize text-4xl font-bold">
                <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
                Special </span><br/>
                <span className="text-red-400 inline-block mt-3">
                Offer</span></h2>
            <p className="text-lg leading-7 text-gray-500 mt-4 sm:max-w-sm">
                Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible saving, we offer unparalleled value that sets us apart.
            </p>
            <p className="mt-6 text-lg leading-7 text-gray-500 sm:max-w-sm">
                Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
            </p>
            <div className="mt-11 flex-wrap gap-4">
                <Button label="Shop now"/>
                <Button label="Learn more"/>
            </div>
            </div>
        </section>
    )
}

export default SpecialOffer