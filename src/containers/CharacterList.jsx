import { useState, useEffect } from 'react';
import CharacterIttem from '../components/CharacterIttem';
import '../styles/CharacterList.css';

const CharacterList = () => {

    const API = 'https://rickandmortyapi.com/api/character';

    const [character, setCharacter] = useState([]);

    useEffect(() => {

        const fetchData = async () => {

            const res = await fetch(API);
            const data = await res.json();
            setCharacter(data.results);
        }

        fetchData();

    });


    return (
        <section className='main-container'>
            <div className='grid-characters'>
                {character.map((character) => (
                    <CharacterIttem character={character} key={character.id} />
                ))}
            </div>
        </section>
    );
}

export default CharacterList;