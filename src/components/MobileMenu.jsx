import'../styles/MobileMenu.css';

const MobileMenu = () => {
    return (
        <div className='mobile-menu'>
             <ul>
                <li>
                   <p>CATEGORIAS</p>
                </li>
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="#">Nosotros</a>
                </li>
                <li>
                    <a href="#">Productos</a>
                </li>
            </ul>

            <ul>
                <p>PRODUCTO QUE DESEA BUSCAR</p>
                <input type="text" placeholder="Buscar producto" />
            </ul>
        </div>
    );
}

export default MobileMenu;