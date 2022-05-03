import { useState, useEffect, useContext } from 'react';
import CharacterIttem from '../components/CharacterIttem';
import '../styles/CharacterList.css';
import AppContext from "../context/AppContext";
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

    //Importo el estado global de la búsqueda
    const { search } = useContext(AppContext);

    //Función para retornar los productos con esa coincidencia
    const filteredProducts = (() =>

        character.filter((product) => {
            return product.name.toLowerCase().includes(search.toLocaleLowerCase());
        })
    )

    return (
        <div className={filteredProducts().length > 0 ? 'grid-characters' : 'no-results'}>
            {
                //Si hay coincidencias las recorre y las muestra
                filteredProducts().length > 0 ?
                    filteredProducts().map((character) => (
                        <CharacterIttem character={character} key={character.id} />
                    ))
                    //Sino arroja un mensaje 
                    :
                    <h2>No hay resultados para tu búsqueda</h2>
            }
        </div>
    );
}

export default CharacterList;