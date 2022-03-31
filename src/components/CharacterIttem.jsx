import '../styles/CharacterIttem.css';
import toAdd from '../assets/icons/toAdd.jpg';

const CharacterIttem = ({character}) => {
    return (
        <div className="CharactertIttem">
			<img src={character.image} alt={character.name} />
			<div className='info'>
				<div className="character-info">
					<p className='price'>${character.id}</p>
					<p>{character.name}</p>
				</div>
				<img src={toAdd} alt="toAdd" className='iconAdd' />
			</div>
			
		</div>
    );
}

export default CharacterIttem;