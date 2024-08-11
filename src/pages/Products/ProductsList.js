import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ProductCard } from "../../components";
import { FilterBar } from "./components/FilterBar";
import { useTitle } from "../../hooks/useTitle";
import { useFilter } from "../../context";
import { getProductList } from "../../services";
import { toast } from "react-toastify";

export const ProductsList = () => {
  
  const { products, intialProductList } = useFilter();
  const [show, setShow] = useState(false);
  const search = useLocation().search;
  const searchTerm = new URLSearchParams(search).get("q");
  useTitle("Explore E-Books")

  useEffect(() => {
    async function fetchProducts(){
      try{
        const data = await getProductList(searchTerm);
        intialProductList(data); //eslint-disable-line
      } catch(error){
        toast.error(error.message, 
          { closeButton: true,
            autoClose: 5000,
            closeOnClick: true
          });
      }

    }
    fetchProducts();
  }, [searchTerm]); //eslint-disable-line

  return (
    <main>
        <section className="my-5">
          <div className="my-5 flex justify-between">
            <span className="text-2xl font-semibold dark:text-slate-100 mb-5">All eBooks ({products.length})</span>
            <span>
              <button onClick={() => setShow(!show)} id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700" type="button"> 
                <span className="text-lg tracking-wider">Filters</span>
              </button>
            </span>            
          </div>    

          <div className="flex flex-wrap justify-center lg:flex-row">
            { products.map((product) => (
              <ProductCard key={product.id} product={product} />
            )) }            
          </div>  
        </section>

        { show && <FilterBar setShow={setShow} /> }

    </main> 
  )
}
