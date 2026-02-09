import { Routes, Route } from 'react-router-dom';
import AccueilPage from '../pages/AccueilPage';

function Routeur () {
    return (
    <Routes>
      <Route path="/" element={<AccueilPage/>}/>
      <Route path="/AccueilPage" element={<AccueilPage/>}/>
      <Route path="/AProposPage"></Route>
      <Route path="/Logement"></Route>
      <Route path="/404Page"></Route>
    </Routes>
    )
}

export default Routeur