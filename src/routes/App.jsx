import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import AppContext from '../context/AppContext';
import useInitialState from "../hooks/useInitialState";


const App = () => {

  //Inistanciamos el hook que creamos para el estado inicial del carrito
  const initialState = useInitialState();
  return (
    //Envolvemos el AppContext como  variable global como prop. el estado inicial
    <AppContext.Provider value={initialState}>
      <Header />
      <Body />
      <Footer />
    </AppContext.Provider>
  );
}

export default App;

