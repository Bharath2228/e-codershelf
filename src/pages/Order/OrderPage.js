import { OrderSuccess } from "./components/OrderSuccess"
import { OrderFailed } from "./components/OrderFailed"
import { useLocation } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle"

export const OrderPage = () => {

  useTitle("Order Summary");
  const { state } = useLocation();

  return (
    <main>
        { state.status ? <OrderSuccess data={state.data} />: <OrderFailed /> }
    </main>
  )
}
