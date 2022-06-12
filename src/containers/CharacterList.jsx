import { useState, useEffect, useContext } from 'react';
import '../styles/CharacterList.css';
import AppContext from "../context/AppContext";
import { getCharacters } from '../helpers/getCharacters';
import CharacterIttem from '../components/CharacterIttem';



const CharacterList = () => {

 
    //Importo el estado global de la búsqueda
    const { search } = useContext(AppContext);
    const [character, setCharacter] = useState([]);


    useEffect(() => {
        getCharacters()
            .then(chr => {
                setCharacter(chr)
            });
    }, [])


    //Función para retornar los personajes con esa coincidencia
    const filteredCharacters = () => (

        character.filter((chr) => {
            return chr.name.toLowerCase().includes(search.toLocaleLowerCase().trim());
        })
    )


    return (
        <div className={filteredCharacters().length > 0 ? 'grid-characters' : 'no-results'}>
            {
                //Si hay coincidencias las recorre y las muestra
                filteredCharacters().length > 0 ?
                    filteredCharacters().map((character) => (
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