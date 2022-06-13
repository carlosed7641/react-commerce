import axios from 'axios';

//Función para consumir la API y retonar los personajes
export const getCharacters = async () => {

    const API = 'https://rickandmortyapi.com/api/character';
    const { data } = await axios(API);

    const characters = data.results.map(chr => {

        return {
            id: chr.id,
            name: chr.name,
            image: chr.image
        }
    })

    return characters;

}