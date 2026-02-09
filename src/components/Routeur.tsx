import { Routes, Route } from 'react-router-dom';
import AccueilPage from '../pages/AccueilPage';

function Routeur () {
    return (
    <Routes>
      <Route path="/" element={<AccueilPage/>}/>
      <Route path="/AccueilPage" element={<AccueilPage/>}/>
      <Route path="/AProposPage"></Route>
      <Route path="/AppartementCosy0"></Route>
      <Route path="/AppartementCanal1"></Route>
      <Route path="/StudioChaumont2"></Route>
      <Route path="/NidDouillet3"></Route>
      <Route path="/Standing4"></Route>
      <Route path="/Studio5"></Route>
      <Route path="/Cheap6"></Route>
      <Route path="/Eiffel7"></Route>
      <Route path="/Suite8"></Route>
      <Route path="/Parc9"></Route>
      <Route path="/Marais10"></Route>
      <Route path="/Republique11"></Route>
      <Route path="/Bungalow12"></Route>
      <Route path="/Maison13"></Route>
      <Route path="/Vesinet14"></Route>
      <Route path="/Loft15"></Route>
      <Route path="/Apt16"></Route>
      <Route path="/Chambre17"></Route>
      <Route path="/Studio18"></Route>
      <Route path="/Rivoli19"></Route>
      <Route path="/404Page"></Route>
    </Routes>
    )
}

export default Routeur