import { Routes, Route } from 'react-router-dom';
import AccueilPage from '../pages/AccueilPage';
import AProposPage from '../pages/AProposPage';
import Page404 from '../pages/404Page';

function Routeur () {
    return (
    <Routes>
      <Route path="/" element={<AccueilPage/>}/>
      <Route path="/AccueilPage" element={<AccueilPage/>}/>
      <Route path="/AProposPage" element={<AProposPage/>}/>
      <Route path="/Logement"></Route>
      <Route path="*" element={<Page404/>}/>
    </Routes>
    )
}

export default Routeur