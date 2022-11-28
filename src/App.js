import logo from './logo.svg';
import TestRender from './components/TestRender';

import './App.css';

export default function App() {
  return (
    <BrowserRouter>

    {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LA RUTAS */}

      <Navbar/>
      {/* DECLARO RUTAS PUNTUALES */}
      <Routes>
        <Route path='/' element={<ItemListContainer/>} /> {/* Estamos colocando en la Home el Item List container */}
        <Route path='/Checkout' element={<Checkout />} />
        <Route path='/Contacto' element={<Contacto/>} />
        <Route path='/Footer' element={<Footer/>} />
        <Route path='/category/:idcategory' element={<ItemListContainer/>} />  {/* Esta categoria es multiruta, y filtramos por categoria mostarando solo esa categoria */}
        {/* <Route path='/item/:iditem' element={<ItemDetailContainer/>} /> */} {/* Este detak se tiene que hacer en la clase 7 */}
       
        <Route path='/TestRender' element={<TestRender/>} />
      </Routes>
      {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS ABAJO DE TODO */} 
      <Footer/>   
    </BrowserRouter>
  );
}
