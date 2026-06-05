import {socialMedia, footerLinks} from "../constants"

function Footer() {
  return (
    <footer className="max-container mx-10">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <p className="mt-6 text-base leading-7 font-montserrat text-white sm:max-w-sm">
            Get shoes ready for the new term at your nearest store. Find your perfect size and get rewards!</p>
        <div className="flex items-center gap-5 mt-8">
          {socialMedia.map((logos) => (
            <div className="flex justify-center items-center w-12 h-12 bg-red-300 rounded-full">
              <img src={logos.src}
              alt= {logos.alt}
              width={24}
              height={24}
              ></img>
            </div>
          ))}
        </div>
        </div>

      <div className=" mx-6 flex-1 justify-between flex lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
            <h4 className="text-red-400 text-xl mb-6 leading-normal">
              {section.title}</h4>
            <ul>
              {section.links.map((item) => (
                <li className="hover:text-slate-gray mt-3 text-slate-500  text-base font-montserrat leading-normal">
                  <a>{item.name}</a>
                </li>
              ))}
            </ul>
            </div>
          ))}
      </div>

      </div>
      <div className="my-6 mx-6">
      <p>&copy; Shoe Landpage. All rights reserved.</p>
      <a href="https://www.flaticon.com/free-icons/animals" title="animals icons">Animals icons created by Freepik - Flaticon</a>
      </div>
   </footer>
  );
}

export default Footer;