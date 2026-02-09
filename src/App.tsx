import './App.scss'
import { Link } from 'react-router-dom'
import Routeur from './components/Routeur';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <header className='flex flex-row items-center justify-between w-full h-17 px-6 py-15'>
        <img src="./LogoHeader.svg" alt="Logo" className='w-[210.32px] h-17'/>
        <nav className='flex gap-14 text-black'>
          <Link to={"AccueilPage"} className='underline'>Accueil</Link>
          <Link to={"AProposPage"}>A propos</Link>
        </nav>
      </header>
      <Routeur/>
      <Footer/>
    </div>
  )
}

export default App
