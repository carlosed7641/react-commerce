import OrderItem from "../components/OrderItem";
import AppContext from '../context/AppContext'
import Flechita from '../assets/icons/flecha.png'
import '../styles/OrderList.css';
import { useContext } from "react";

const OrderList = ({ toggleOrders, setToggleOrders }) => {

    const { state } = useContext(AppContext);

    const sumTotal = () => {

        const reducer = (acum, currentValue) => acum + currentValue.id;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    }

    return (
        <aside>
            <div className="encabezado">
                <img src={Flechita} alt="cerrar" onClick={() => setToggleOrders(!toggleOrders)} />
                <h3>Mi Orden</h3>
            </div>
            <div className="ItemOrder">
                {state.cart.map((item, index) => (
                    <OrderItem item={item} key={index} />
                ))}
            </div>
            <div className="total">
                <p>
                    <span>Total</span>
                </p>
                <p>${sumTotal()}</p>
            </div>
            <button>Pagar</button>
        </aside>
    );
}

export default OrderList;