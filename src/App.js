import logo from './logo.svg';
import TestRender from './components/TestRender';
import ContextContainer from './components/ContextContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import './App.css';
import { useState } from 'react';

export default function App() {


  // Ponemos un estado para ver como se renderiza desde el abuelp al Nieto Item.

  /* Ej- 8  */

  // Colocamos distintos log en los item list, y se van a renderzar dos veces por el setTimeout, que a los 2 seg se recarga
  // 1 render app, 2 render item container, 3 item list, y a los 2 segundos 2 y 3 se renderizan de nuevo,


 /*  const [darkMode, setDarkMode] = useState(false);
  console.log("Render de la App"); */


  return (
    <ContextContainer> 
    
    <BrowserRouter>
    {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LA RUTAS */}
      <Navbar/>
      {/* DECLARO RUTAS PUNTUALES */}
      <Routes>
        <Route path='/' element={<ItemListContainer/>} /> {/* Estamos colocando en la Home el Item List container */}
        {/* <Route path='/Checkout' element={<Checkout />} />
        <Route path='/Contacto' element={<Contacto/>} />
        <Route path='/Footer' element={<Footer/>} /> */}
        <Route path='/category/:idcategory' element={<ItemListContainer/>} />  {/* Esta categoria es multiruta, y filtramos por categoria mostarando solo esa categoria */}
        {/* <Route path='/item/:iditem' element={<ItemDetailContainer/>} /> */} {/* Este detak se tiene que hacer en la clase 7 */}
       
        <Route path='/test'  element={<TestRender/>} />
      </Routes>
      {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS ABAJO DE TODO */} 
      {/* <Footer/>  */}  
    </BrowserRouter>
    </ContextContainer>
  );
}
