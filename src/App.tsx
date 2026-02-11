import './App.scss'
import { NavLink, BrowserRouter } from 'react-router-dom'
import Routeur from './components/Routeur';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className='min-h-screen flex flex-col'>
        <header className='flex flex-row items-center justify-between w-full h-17 px-6 py-15'>
          <img src="./LogoHeader.svg" alt="Logo" className='w-[210.32px] h-17 ml-8'/>
          <nav className='flex gap-14 text-black mr-8'>
            <NavLink to="/" className='active:underline [&.active]:underline'>Accueil</NavLink>
            <NavLink to="/apropos" className='active:underline [&.active]:underline'>A propos</NavLink>
          </nav>
        </header>
        <div className='flex-1'>
        <Routeur/>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App