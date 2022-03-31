import { useState } from "react";
import "../styles/Header.css";
import MobileMenu from '../components/MobileMenu';
import Menu from "../assets/icons/mobile-menu.png";
import Cart from "../assets/icons/add-to-cart.png";

const Header = () => {

    const [toggleMobile, setToggleMobile] = useState(false);

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
                        <img src={Cart} alt="" />
                </div>
            </div>
            {toggleMobile && <MobileMenu />}
        </nav>
    );
}

export default Header;