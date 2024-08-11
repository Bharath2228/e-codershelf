import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

export const Hero = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        "https://images.unsplash.com/photo-1485856407642-7f9ba0268b51?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1522407183863-c0bf2256188c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1587170194491-ce8e824631d6?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ];

      useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }, 5000);
    
        return () => clearInterval(intervalId);
      }, [images.length]);

    return (
      <section className="flex flex-col my-5 lg:flex-row dark:text-slate-100 items-center">
        
        <div className="text my-5">
            <h1 className="text-5xl font-bold">The Ultimate eBook Store</h1>
            <p className="text-2xl my-7 px-1 dark:text-slate-300">E-CoderShelf is an online store specializing in a wide range of coding books, offering resources for programmers of all skill levels. Discover the latest titles and essential reads to enhance your coding expertise.</p>
            <Link to="/products" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Explore eBooks</Link>
        </div>

        <div className="visual my-5 ml-5 lg:max-w-xl">
            <img className="rounded-lg max-h-full transition-opacity duration-2000 ease-in-out" src={images[currentImageIndex]} alt="E-CoderShelf Hero Section"/>
        </div>

      </section>
    )
  }
  