import axios from 'axios';


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