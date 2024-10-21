// import logo from './logo.svg';
// import './App.css';
import "./styles.css";
import Header from "./Header.js";
import Add from "./Add.js";
import List from "./List.js";
import Modal from "./Modal.js";

function App() {
  return (
  <> 
  <Header />
  <Add />
  <List Img="image/avocado.png" productName="Avocado"/>
  <Modal />
  </>
  );
}

export default App;
