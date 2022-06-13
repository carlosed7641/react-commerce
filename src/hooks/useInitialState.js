import { useState, useEffect } from "react";
import { firebase } from '../firebase';


//Declaramos el estado inicial, un objeto con el carrito vacío
const initialState = {
    cart: []
}

//Declaro el compontente
const useInitialState = () => {

    //Inicializa con la variable del objeto de estado incial
    const [state, setState] = useState(initialState);
    //Estado para la busqueda de personajes, inicialmente una cadena vacía
    const [search, setSearch] = useState('')

    /** Utilizamos el hook de efecto para cargar los datos de firebase. 
    Solo se ejecutará una sola vez por eso el arreglo de dependencias
    está vacío. **/
    useEffect(() => {
        //Función asíncrona que  nos envía los datos al estado
        const getCart = async () => {
            try {
                //Conexión a la BD
                const db = firebase.firestore()
                const data = await db.collection('orden').get()

                //Recorremos el documento y lo guardamos en la variable array
                const array = data.docs.map(item => (
                    {
                        ...item.data()
                    }
                ))
                //Enviamos al estado lo que cargamos de firebase
                setState(array[0])
            } catch (error) {
                console.log(error)
            }
        }
        //Llamamos la función
        getCart();
    }, [])


    //Función para añadir al carrito, recibe como argumento el personaje a agregar
    const addToCart = async (character) => {

        try {
            /**Validamos si el personaje a agregar está o no en el carrito
            Si está no pasa nada, si no está entra en el condicional **/
            if (!state.cart.some(item => item.id === character.id)) {

                //Conexión a la BD
                const db = firebase.firestore();

                /** Objeto del nuevo personaje, obtiene la propiedad (cart), 
                y todo lo que tenemos en el carrito más el nuevo personaje 
                para insertarlos en la BD y en el estado **/
                const nuevoPersonaje = {
                    cart: [...state.cart, character]
                }

                //Actualiza el documento en la BD y envia el objeto al estado
                await db.collection('orden').doc('productos').update(nuevoPersonaje);
                setState(nuevoPersonaje);
            }

        } catch (error) {
            console.log(error);
        }

    }

    const removeFromCart = async (character) => {

        try {

            //Conexión a la BD
            const db = firebase.firestore();

            /** Creamos un nuevo objeto, que tendrá la lista de personajes
            que hay en el carrito a excepción del personaje a eliminar
            para insertarlos en la BD y en el estado **/
            const nuevaLista = {

                cart: state.cart.filter((item) => item.id !== character.id),
            }

            //Actualiza el documento en la BD y envia el objeto al estado
            await db.collection('orden').doc('productos').update(nuevaLista);
            setState(nuevaLista);

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