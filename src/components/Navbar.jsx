import turtle  from "../assets/images/turtle.png"
import MenuIcon from "../assets/icons/menu-burger.svg?react"

function Navbar () {
    return (
        <>
    <header className="padding absolute z-10 w-full py-8">
        <nav className = "flex justify-between items-center max-container">
            <a href="/">
                <img src={turtle} width={30} height={30} alt="turtle" className="h-10 w-10" />
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16">
                <li>
                    <a href="/" className="font-monserrat leading-normal text-lg text-slate-600">Home</a>
                </li>
                <li>
                    <a href="/about" className="font-monserrat leading-normal text-lg text-slate-600">About Us</a>
                </li>
                <li>
                    <a href="/products" className="font-monserrat leading-normal text-lg text-slate-600">Products</a>
                </li>
                <li>
                    <a href="/contact" className="font-monserrat leading-normal text-lg text-slate-600">Contact Us</a>
                </li>
            </ul>
            <div>
                <MenuIcon className="h-5 w-5 fill-current"></MenuIcon>
            </div>
        </nav>
    </header>
        </>
    )
}

export default Navbar

//Optional to import svg 
//import menuIconUrl from "../assets/icons/menu-burger.svg"

//function Navbar() {
//    return (
//        <img src={menuIconUrl} alt="menu" className="h-6 w-6" />
//    )
//}