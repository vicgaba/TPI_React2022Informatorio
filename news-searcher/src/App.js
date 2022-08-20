import './App.css';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import Layout from './components/Layout';
import { Route, Routes } from 'react'
import Logo from './components/Logo';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
    <Logo></Logo>
    <Home></Home>
    <Footer></Footer>
    </div>
  );
}

export default App;
