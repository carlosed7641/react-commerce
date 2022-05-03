import AppContext from '../context/AppContext'
import { useContext } from "react";
import Close from '../assets/icons/close.png'
import '../styles/OrderItem.css'

const OrderItem = ({ item }) => {

    const { removeFromCart } = useContext(AppContext);

    const handleRemove = (cosa) => {
        removeFromCart(cosa)
    }

    return (
        <div className="OrderItem">
            <figure>
                <img src={item.image} alt="imagen" />
            </figure>
            <p>{item.name}</p>
            <p>${item.id}</p>
            <img src={Close} alt="close" className='close' onClick={() => handleRemove(item)} />
        </div>
    );
}

export default OrderItem;