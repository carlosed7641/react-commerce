import "../styles/Header.css";
import Menu from "../assets/mobile-menu.png";

const Header = () => {
    return (
        <nav className="navBar">
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
            </div>
            <div className="Menu">
                <img src={Menu} alt="Menu Mobile" />
            </div>
        </nav>
    );
}

export default Header;