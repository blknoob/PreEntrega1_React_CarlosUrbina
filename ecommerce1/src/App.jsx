import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Nabvar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"Bienvenidos a mi tienda"}/>
    </>
  );
}

export default App;
