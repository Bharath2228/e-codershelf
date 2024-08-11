import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Search } from "../Sections/Search"
import { DroppedDownLoggedOut, DroppedDownLoggedIn } from "../index";
import { useCart } from "../../context";
import logo from "../../assets/codershelf.png"

export const Header = () => {

  const { cartList } = useCart();
  const [ darkMode, setDarkMode ] = useState( JSON.parse(localStorage.getItem("darkMode")) || false);
  const [ searchSection, setSearchSection ] = useState(false)
  const [ dropDown, setDropDown ] = useState(false);  
  const dropDownRef = useRef(null)
  const token = JSON.parse(sessionStorage.getItem("token"))

  const handleClickOutside = (event) => {
    if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
      setDropDown(false);
      setSearchSection(false);
    }
  }

  useEffect(() => {

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode))
    if(darkMode){
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  },[darkMode])

  return (
    <header ref={dropDownRef}>      
      <nav className="bg-white dark:bg-gray-800">
          <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
              <Link to="/" className="flex items-center">
                  <div className="w-10 h-8 mr-4">
                    <img className="w-full h-full object-contain dark:bg-slate-200 text-white rounded-md" src={logo} />
                  </div>
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">E-CoderShelf</span>
              </Link>
              <div className="flex items-center relative">
                  <span onClick={() => setDarkMode(!darkMode)} className={ darkMode ? "cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-sun-fill" : "cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-moon-fill"}></span>
                  <span onClick={() => setSearchSection(!searchSection)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
                  <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
                    <span className="text-2xl bi bi-cart-fill relative">
                      <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">{cartList.length}</span>
                    </span>                    
                  </Link>
                  <span onClick={() => setDropDown(!dropDown)} className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
                  { dropDown && ( token ? <DroppedDownLoggedIn setDropDown={setDropDown} /> : <DroppedDownLoggedOut setDropDown={setDropDown} /> ) }
              </div>
          </div>
      </nav>
      { searchSection && <Search clicked={searchSection} setSearchSection={setSearchSection} /> }
    </header>
  )
}