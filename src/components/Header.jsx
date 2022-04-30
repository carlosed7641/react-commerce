import { useState, useContext } from "react";
import "../styles/Header.css";
import MobileMenu from '../components/MobileMenu';
import Menu from "../assets/icons/mobile-menu.png";
import Cart from "../assets/icons/add-to-cart.png";
import OrderList from "../containers/OrderList";
import AppContext from "../context/AppContext";


const Header = () => {

    const { state } = useContext(AppContext);
    const [toggleMobile, setToggleMobile] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);


    return (
        <nav>
            <div className="navBar">
                <div className="Menu" onClick={() => setToggleMobile(!toggleMobile)}>
                    <img src={Menu} alt="Menu Mobile" />
                </div>
                <div className="Left-Side">
                    <a href="#" className="enlaceTitulo">
                        <h1 className="Logo">React-Commerce</h1>
                    </a>
                    <div className="enlaces">
                        <a href="">Inicio</a>
                        <a href="">Nosotros</a>
                        <a href="">Productos</a>
                    </div>
                </div>
                <div className="Rigth-Side">
                    <input type="text" placeholder="Buscar producto" />
                    <div>
                        <img src={Cart} alt="" onClick={() => setToggleOrders(!toggleOrders)} />
                        {
                            state.carrito.length > 0 ?
                            <p>{state.carrito.length}</p>
                            :null
                        }
                    </div>
                </div>
            </div>
            {toggleMobile && <MobileMenu />}
            {toggleOrders &&
                <OrderList
                    toggleOrders={toggleOrders}
                    setToggleOrders={setToggleOrders} />}
        </nav>
    );
}

export default Header;