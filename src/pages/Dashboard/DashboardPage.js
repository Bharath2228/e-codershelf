import { useEffect, useState } from "react"
import { DashbaordCard } from "./components/DashboardCard"
import { DashbaordEmpty } from "./components/DashboardEmpty"

export const DashbaordPage = () => {

  const token = JSON.parse(sessionStorage.getItem("token"));
  const ebid = JSON.parse(sessionStorage.getItem("ebid"));

  const [ orders, setOrders] = useState([])

    useEffect(() => {
      async function fetchOrders(){
        const response = await fetch(`http://localhost:8000/660/orders?user.id=${ebid}`, {
          method: "GET",
          headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`},
          
      })
        const data = await response.json();
        setOrders(data);
      }
      fetchOrders();
    }, [])

    return (
      <main>
        <section>
          <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
        </section>

        <section>
          {orders.length && orders.map((order) => (
            <DashbaordCard key={order.id} order={order} />
          ))}
        </section>

        <section>
          { !orders.length && <DashbaordEmpty />}
        </section>

      </main>
    )
  }