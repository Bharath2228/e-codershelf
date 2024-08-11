import { Accordian } from "./Accordian";

export const Faq = () => {
    const faqs = [
        {
          "id": 1,
          "question": "Why should I use E-CoderShelf?",
          "answer": "E-CoderShelf is your go-to platform for discovering and purchasing top-quality coding books. We offer a carefully curated selection of titles, ensuring you have access to the most relevant and up-to-date resources. Our competitive pricing and detailed book information make it easy to find exactly what you need, whether you're a beginner or an experienced developer. With a secure and user-friendly checkout process, E-CoderShelf ensures a seamless experience from browsing to buying."
        },
        {
          "id": 2,
          "question": "Can I access my eBook on mobile?",
          "answer": "Yes, you can access your eBook on mobile devices through E-CoderShelf. The platform is optimized for mobile browsing, ensuring that you can easily read your purchased eBooks on your smartphone or tablet, providing flexibility and convenience wherever you are."
        },
        {
          "id": 3,
          "question": "Do you offer refunds?",
          "answer": "Yes, E-CoderShelf offers refunds under certain conditions. If you're not satisfied with your purchase, you can request a refund within a specified period, typically within 14 days of purchase, provided the eBook has not been significantly accessed or downloaded. Please review our refund policy on the website for detailed information and to ensure you meet the requirements for a refund."
        },
        {
          "id": 4,
          "question": "Do you support International payments?",
          "answer": "Yes, E-CoderShelf supports international payments. We accept a variety of payment methods, including major credit cards and digital payment platforms, allowing customers from around the world to purchase books securely and conveniently."
        }
    ];
    
  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">        
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Question in mind?</h1>    
            <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
              { faqs.map((faq) => (
                  <Accordian key={faq.id} faq={faq} />
              ))}           
            </div>
      </section>
  )
}
