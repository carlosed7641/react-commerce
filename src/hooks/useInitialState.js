import { useState } from "react";
//import { firebase } from '../firebase';


//Variable de objeto estado inicial, contiene al carrito, inicialmente un arreglo vacío
const initialState = {
    carrito: [],
}

//Declaro el compontente
const useInitialState = () => {

    //Inicializa con la variable de objeto de estado incial
    const [state, setState] = useState(initialState);
    //Estado global para la busqwueda de productos, inicialmente no tiene nada
    const [search, setSearch] = useState('')


    /**Obtener los elementos del carrito desde una base de datos
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
                //console.log(array[0])
                setState(array[0])

            } catch (error) {
                console.log(error)
            }
        }

        getCart()
    }, [])
    **/


    //Función para añadir al carrito, recibe como argumento el personaje a agregar(cosa)
    const addToCart = /*async*/ (cosa) => {

        try {

            /**Conectar la base de datos
            const db = firebase.firestore();
            //Objeto de producto contiene los datos para insertarlos en la BD
            const nuevoProducto = {
                ...state, //Primero toma todo lo que haya si ya lo hay
                carrito: state.carrito.includes(cosa) //Aqui valida si el producto que se le dio click ya está en el carrito
                    ? state.carrito //Si existe queda igual
                    : [...state.carrito, cosa], //Sino agrega el nuevo producto
            }
            
            await db.collection('orden').doc('productos').update(nuevoProducto); **/

            setState({
                ...state, //Primero toma todo lo que haya si ya lo hay
                carrito: state.carrito.includes(cosa) //Aqui valida si el producto que se le dio click ya está en el carrito
                    ? state.carrito //Si existe queda igual
                    : [...state.carrito, cosa], //Sino agrega el nuevo producto

            });

        } catch (error) {
            console.log(error)
        }

    }

    const removeFromCart = (cosa) => {
        setState({
            ...state,
            carrito: state.carrito.filter((item) => item.id !== cosa.id),
        });
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