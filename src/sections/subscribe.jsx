import Button from "../components/Button"

function Subscribe () {
    return (
        <section className="max-container flex justify-between items-center max-lg:flex-col gap-10" id="contact-us">
            <h2 className="text-2xl leading-17 lg:max-w-md font-palanquin font-bold"> 
                Sign Up for <span className="text-red-500"> Updates</span> & Newsletter
            </h2>

            <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
                <input className="sm:flex-1 max-sm:w-full text-base leading-normal text-slate-gray pl-5 max-sm:p-5 outline-none sm:border-none border max-sm:border-slate-gray max-sm:rounded-full" 
                type="text" placeholder="shoes@email.com"></input>
           
            <div className="flex max-sm:justify-end items-center max-sm:w-full">
                <Button label="Sign Up" className="w-full"></Button>
            </div>
         </div>
        </section>

    )
}

export default Subscribe