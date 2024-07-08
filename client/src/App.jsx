import { Routes, Route } from 'react-router-dom';

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Catalogue from './components/catalogue/Catalogue';
import Create from './components/create/Create';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Details from './components/details/Details';

function App() {

  return (
    <div id="box">
    <Header />

    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/catalogue' element={<Catalogue />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<Login />} />
      <Route path='/create' element={<Create />} />
      <Route path='/games/:gameId' element={< Details />}/>
    </Routes>
    </div>
  )
}

export default App
