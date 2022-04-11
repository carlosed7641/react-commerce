import Ref from '../assets/icons/ref.jpeg'
import Close from '../assets/icons/close.png'
import '../styles/OrderItem.css'

const OrderItem = () => {
    return (
        <div className="OrderItem">
            <figure>
                <img src={Ref} alt="imagen" />
            </figure>
            <p>Rick Sánchez</p>
            <p>$1</p>
            <img src={Close} alt="close" className='close' />
        </div>       
    );
}

export default OrderItem;