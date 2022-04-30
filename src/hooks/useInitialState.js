import { useState } from "react";


//Variable de objeto estado inicial, contiene al carrito, inicialmente un arreglo vacío
const initialState = {
    carrito: [],
}

//Declaro el compontente
const useInitialState = () => {
    //Inicializa con la variable de objeto de estado incial
    const [state, setState] = useState(initialState); 

    //Función para añadir al carrito, recibe como argumento el personaje a agregar(cosa)
    const addToCart = (cosa) => {
        setState({
            ...state, //Primero toma todo lo que haya si ya lo hay
            carrito: state.carrito.includes(cosa) //Aqui valida si el producto que se le dio click ya está en el carrito
            ? state.carrito //Si existe queda igual
            : [...state.carrito, cosa], //Sino agrega el nuevo producto
        })
    }

    const removeFromCart = (cosa, indexValue) => {
        setState({
            ...state,
            carrito: state.carrito.filter((item) => item.id !== cosa.id),
        });
    }   

    return { //Retornamos el estado y la función de añadir al carrito
        state,
        addToCart,
        removeFromCart
    }
}

export default useInitialState;