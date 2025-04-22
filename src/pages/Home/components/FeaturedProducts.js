import { useEffect, useState } from "react"
import { ProductCard } from "../../../components"
import { getFeaturedList } from "../../../services"
import { toast } from "react-toastify"

export const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getFeaturedList();
        setProducts(data);
      } catch (error) {
        toast.error(error.message, {
          closeButton: true,
          autoClose: 5000,
          closeOnClick: true,
        });
      } finally {
        setLoading(false); // 
      }
    }

    fetchProducts();
  }, []);

  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
        Featured eBooks
      </h1>

      {loading ? (
        <p className="text-center text-2xl text-gray-600 dark:text-slate-300">Fetching data from server...</p>
      ) : (
        <div className="flex flex-wrap justify-center lg:flex-row">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};
