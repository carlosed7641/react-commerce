import Ref from '../assets/icons/ref.jpeg'
import Close from '../assets/icons/close.png'
import '../styles/OrderItem.css'

const OrderItem = ({item}) => {
    return (
        <div className="OrderItem">
            <figure>
                <img src={item.image} alt="imagen" />
            </figure>
            <p>{item.name}</p>
            <p>${item.id}</p>
            <img src={Close} alt="close" className='close' />
        </div>       
    );
}

export default OrderItem;