import {PopularProducts, SuperQuality, Services,
    SpecialOffer, CustomerReviews, Subscribe, MainExposition } from "../sections/sections"
    
function Home() {
    return(
        <>
           <section className = "padding">
            <MainExposition />
        </section>
        <section className = "padding">
            <PopularProducts />
        </section>
          <section className = "padding">
            <SuperQuality />
        </section>
          <section className = "padding py-10">
            <Services />    
        </section>
          <section className = "padding">
            <SpecialOffer />
        </section>
         <section className = "bg-pale-blue padding">
            <CustomerReviews />
        </section>
         <section className = "padding sm:py-32 py-16 w-full">
            <Subscribe />
        </section>
        </>
    )
}

export default Home