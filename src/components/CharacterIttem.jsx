import { useState } from 'react';
import '../styles/CharacterIttem.css';
import toAdd from '../assets/icons/toAdd.jpg';
import Added from '../assets/icons/added.png';




const CharacterIttem = ({character}) => {

	const [AddtoCart, setAddtoCart] = useState(true);

    return (
        <div className="CharactertIttem">
			<img src={character.image} alt={character.name} className='imageCharacter' />
			<div className='info'>
				<div className="character-info">
					<p className='price'>${character.id}</p>
					<p>{character.name}</p>
				</div>
				<div className='toAdd' onClick={()=> setAddtoCart(!AddtoCart)}>

					{
						AddtoCart ? <img src={toAdd} alt="toAdd" className='allowed'/> : 
						<img src={Added} alt="Added" />
					}
					
				</div>
			</div>			
		</div>
    );
}

export default CharacterIttem;