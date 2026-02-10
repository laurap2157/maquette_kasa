import { Routes, Route } from 'react-router-dom';
import AccueilPage from '../pages/AccueilPage';
import AProposPage from '../pages/AProposPage';

function Routeur () {
    return (
    <Routes>
      <Route path="/" element={<AccueilPage/>}/>
      <Route path="/AccueilPage" element={<AccueilPage/>}/>
      <Route path="/AProposPage" element={<AProposPage/>}/>
      <Route path="/Logement"></Route>
      <Route path="/404Page"></Route>
    </Routes>
    )
}

export default Routeur