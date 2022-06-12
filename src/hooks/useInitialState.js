import { useState, useEffect } from "react";
import { firebase } from '../firebase';


//Obtener los elementos del carrito desde una base de datos
const initialState = {
    carrito: []
}

//console.log(initialState.carrito.includes(char))

//Declaro el compontente
const useInitialState = () => {

    //Inicializa con la variable de objeto de estado incial
    const [state, setState] = useState(initialState);
    //Estado global para la busqueda de productos, inicialmente no tiene nada
    const [search, setSearch] = useState('')


    useEffect(() => {
        const getCart = async () => {
            try {
                const db = firebase.firestore()
                const data = await db.collection('orden').get()

                const array = data.docs.map(item => (
                    {
                        ...item.data()
                    }
                ))

                setState(array[0])
            } catch (error) {
                console.log(error)
            }
        }
        getCart();
    }, [])


    //Función para añadir al carrito, recibe como argumento el personaje a agregar(cosa)
    const addToCart = async (cosa) => {

        try {

            if (!state.carrito.some(item => item.id === cosa.id)) {

                //Conectar la base de datos
                const db = firebase.firestore();
                //Objeto de producto contiene los datos para insertarlos en la BD
                const nuevoProducto = {
                    ...state,
                    carrito: [...state.carrito, cosa]
                }

                await db.collection('orden').doc('productos').update(nuevoProducto);

                setState(nuevoProducto);

            }


        } catch (error) {
            console.log(error);
        }

    }

    const removeFromCart = async (cosa) => {

        try {

            //Conectar la base de datos
            const db = firebase.firestore();
            //Objeto de producto contiene los datos para insertarlos en la BD
            const nuevoProducto = {
                ...state,
                carrito: state.carrito.filter((item) => item.id !== cosa.id),
            }

            await db.collection('orden').doc('productos').update(nuevoProducto);

            setState(nuevoProducto);


        } catch (error) {
            console.log(error);
        }

    }


    return { //Retornamos el estado y la función de añadir al carrito
        state,
        search,
        setSearch,
        addToCart,
        removeFromCart
    }
}

export default useInitialState;