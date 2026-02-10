import { Routes, Route } from 'react-router-dom';
import AccueilPage from '../pages/AccueilPage';
import AProposPage from '../pages/AProposPage';
import Page404 from '../pages/404Page';
import Logement from '../pages/Logement';

function Routeur () {
    return (
    <Routes>
      <Route path="/" element={<AccueilPage/>}/>
      <Route path="/apropos" element={<AProposPage/>}/>
      <Route path="/logement/:id" element={<Logement/>}/>
      <Route path="*" element={<Page404/>}/>
    </Routes>
    )
}

export default Routeur