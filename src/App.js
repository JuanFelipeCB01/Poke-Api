import './styles/styles.css'

import { Route, Routes } from 'react-router-dom'; 
import Layout from './Pages/Layout/Layout';
import HomePage from './Pages/HomePage/HomePage';
import ContactPage from './Pages/ContactPage/ContactPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import PokemonsPage from './Pages/PokemonsPage/PokemonsPage';

function App() {
  return (
    <div className='header'>
      <h1>P0k3d3x</h1>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/contact' element={<ContactPage></ContactPage>}/>
          <Route path='/pokemons' element={<PokemonsPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
