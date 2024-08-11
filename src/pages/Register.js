import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register } from '../services';
import { useTitle } from '../hooks/useTitle';
import { useState } from 'react';

export const Register = () => {

  useTitle("Sign-up")

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleToggleVisibility = () => {
    setShowPassword(!showPassword);
  };

  async function handleRegister(event){
    event.preventDefault();
    try{
      const authDetail = {
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value
      }
      const data = await register(authDetail);
      data.accessToken ? navigate("/products") : toast.error(data)
    }catch (error){
      toast.error(error.message, 
        { closeButton: true,
          autoClose: 5000,
          closeOnClick: true
        });
    }
  }


    return (
      <main >
        <section className='flex flex-col items-center justify-start min-h-screen'>
          <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">Register</p>
          <form className='w-2/4' onSubmit={handleRegister}>
            <div className="mb-6">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
                  <input type="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name" required autoComplete="off" />
              </div>
              <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                  <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="codershelf@example.com" required autoComplete="off" />
              </div>
              <div className="mb-6">
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                  <div className="relative">
                    <input type={showPassword ? "text" : "password"} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password" required minLength="7"/>
                    <button
                      type="button"
                      onClick={handleToggleVisibility}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 rounded p-1 focus:outline-none"
                    >
                      {showPassword ? (<i className="bi bi-eye-slash text-xl dark:text-white"></i>)  : (<i className="bi bi-eye text-xl dark:text-white"></i>)}
                    </button>
                  </div>
              </div>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
            </form>
        </section>
      </main>
    )
  }