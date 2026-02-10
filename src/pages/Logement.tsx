import { useParams } from 'react-router-dom';
import logements from '../data/logements.json';
import Slideshow from '../components/Slideshow';

function Logement() {
  const { id } = useParams();
  const logement = logements.find(log => log.id === id);
  
  return (
    <div>
        <Slideshow pictures={logement.pictures}/>
      <h1>{logement?.title}</h1>
      {/* Reste du contenu */}
    </div>
  );
}

export default Logement;