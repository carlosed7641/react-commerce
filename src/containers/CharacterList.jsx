import { useState, useEffect } from 'react';
import CharacterIttem from '../components/CharacterIttem';
import '../styles/CharacterList.css';
import axios from 'axios';

const CharacterList = () => {

    const API = 'https://rickandmortyapi.com/api/character';

    const [character, setCharacter] = useState([]);

    useEffect(() => {

        const axiosData = async () => {

            const res = await axios(API);
            setCharacter(res.data.results)

        }

        axiosData();

    }, [])

    return (
        <div className='grid-characters'>
            {
                character.map((character) => (
                    <CharacterIttem character={character} key={character.id} />
                ))
            }
        </div>
    );
}

export default CharacterList;