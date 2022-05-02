import { useContext } from 'react';
import '../styles/CharacterIttem.css';
import AppContext from '../context/AppContext';
import toAdd from '../assets/icons/toAdd.jpg';
import Added from '../assets/icons/added.png';


const CharacterIttem = ({ character }) => {

	const { state, addToCart } = useContext(AppContext);

	const handleClick = item => {
		
		addToCart(item);

	}

	return (
		<div className="CharactertIttem">
			<img src={character.image} alt={character.name} className='imageCharacter' />
			<div className='info'>
				<div className="character-info">
					<p className='price'>${character.id}</p>
					<p>{character.name}</p>
				</div>
				<div className='toAdd' onClick={() => handleClick(character)}>

					{state.carrito.includes(character) ?
						<img src={Added} alt="Added" className='disabled' /> :
						<img src={toAdd} alt="toAdd" className='pointer' />
					}

				</div>
			</div>
		</div>
	);
}

export default CharacterIttem;