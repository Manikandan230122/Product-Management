
import { Routes,Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Addproduts from './Components/Addproduts';
import Editproducts from './Components/Editproducts';

function App() {
  return (
    <>
     <Navbar />
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/addproducts' element={<Addproduts />}></Route>
      <Route path='/editproduct' element={<Editproducts />}></Route>
     </Routes>
    </>
  );
}

export default App;
