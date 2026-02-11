import { useParams } from 'react-router-dom';
import logements from '../data/logements.json';
import Slideshow from '../components/Slideshow';
import Collapse from '../components/Collapse';

function Logement() {
  const { id } = useParams();
  const logement = logements.find(log => log.id === id);

  if (!logement) {
  return <div>Logement introuvable</div>;
}
  
  return (
    <div className='m-22 mt-5 mb-15'>
      <Slideshow pictures={logement.pictures}/>
      <div className='flex justify-between'>
        <div className='flex flex-col'>
          <h1 className='font-medium text-4xl text-[#ff6060] m-1'>{logement.title}</h1>
          <h2 className='font-medium text-lg m-1'>{logement.location}</h2>
          <ul className='flex flex-row gap-4 m-1'>
            {logement.tags.map((tag, index) => (
            <li key={index} className='rounded-4xl bg-[#ff6060] text-white font-bold text-sm p-2'>
              {tag}
            </li>
            ))}
          </ul>
        </div>
        <div className='flex flex-col items-end'>
          <div className='flex flex-row m-1'>
            <span className='font-medium text-lg text-[#ff6060] p-3'>{logement.host.name}</span> 
            <img src={logement.host.picture} className='rounded-full w-16 h-16'></img>
          </div>
          <div>{logement.rating}</div>  
          {/* staractive à utiliser */}
        </div>
      </div>
      <div className='flex flex-row justify-between mt-5 gap-16'>
        <div className='flex-1'>
        <Collapse title="Description" content={logement.description}/>
        </div>
        <div className='flex-1'>
        <Collapse title="Equipements" content={logement.equipments}/>
        </div>
      </div>
    </div>
  );
}

export default Logement;