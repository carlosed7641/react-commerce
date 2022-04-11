import OrderItem from "../components/OrderItem";
import Flechita from '../assets/icons/flecha.png'
import '../styles/OrderList.css';

const OrderList = ({ toggleOrders, setToggleOrders }) => {
    return (

        <aside>
            <div className="encabezado">
                <img src={Flechita} alt="cerrar" onClick={() => setToggleOrders(!toggleOrders)}/>
                <h3>Mi Orden</h3>
            </div>
            <div className="ItemOrder"> 
                <OrderItem />
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