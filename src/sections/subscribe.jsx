import Button from "../components/Button"

function Subscribe () {
    return (
        <section className="max-container flex justify-between items-center max-lg:flex-col gap-10" id="contact-us">
            <h2 className="text-4xl leading-3 lg:max-w-md font-palanquin font-bold"> 
                Sign Up from
                <span className="text-red-500">
                Updates
                </span> & Newsletters
            </h2>
            <div>
                <input className="sm:flex-1 max-sm:w-full text-base leading-normal text-slate-gray pl-5 max-sm:p-5 outline-none sm:border-none border max-sm:border-slate-gray max-sm:rounded-full" 
                type="text" placeholder="shoes@email.com"></input>
            </div>
            <div>
                <Button label="Sign Up" className="w-full"></Button>
            </div>
        </section>
    )
}

export default Subscribe