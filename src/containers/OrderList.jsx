import OrderItem from "../components/OrderItem";
import AppContext from '../context/AppContext'
import Flechita from '../assets/icons/flecha.png'
import '../styles/OrderList.css';
import { useContext } from "react";

const OrderList = ({ toggleOrders, setToggleOrders }) => {

    const { state } = useContext(AppContext);

    return (
        <aside>
            <div className="encabezado">
                <img src={Flechita} alt="cerrar" onClick={() => setToggleOrders(!toggleOrders)}/>
                <h3>Mi Orden</h3>
            </div>
            <div className="ItemOrder"> 
                { state.carrito.map((item, index) => (
                    <OrderItem item={item} key={index} />      
                ))}
            </div>
            <div className="total">
                <p>
                    <span>Total</span>
                </p>
                <p>$1</p>
            </div>
            <button>Pagar</button>
        </aside>        
    );
}

export default OrderList;