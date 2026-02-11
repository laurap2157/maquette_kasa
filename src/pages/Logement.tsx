import { useParams } from 'react-router-dom';
import logements from '../data/logements.json';
import Slideshow from '../components/Slideshow';
import Collapse from '../components/Collapse';
import { Star } from 'lucide-react';
import { Navigate } from 'react-router-dom';

function Logement() {
  const { id } = useParams();
  const logement = logements.find(log => log.id === id);

  if (!logement) {
  return <div><Navigate to={"/404Page"}/></div>;
}

  const stars = [1, 2, 3, 4, 5];
  
  return (
    <div className='m-8 md:m-22 md:mt-2 mt-5 mb-4 md:mb-8'>
      <Slideshow pictures={logement.pictures}/>
      <div className='flex flex-col md:flex-row md:justify-between'>
        <div className='flex flex-col'>
          <h1 className='font-medium text-4xl text-[#ff6060] m-1'>{logement.title}</h1>
          <h2 className='font-medium text-lg m-1'>{logement.location}</h2>
          <ul className='flex flex-row gap-4 m-1 mt-2'>
            {logement.tags.map((tag, index) => (
            <li key={index} className='rounded-4xl bg-[#ff6060] text-white font-bold text-sm p-2'>
              {tag}
            </li>
            ))}
          </ul>
        </div>
        <div className='flex flex-row-reverse justify-between md:flex-col md:items-end mt-4'>
          <div className='flex md:flex-row'>
            <span className='font-medium text-lg text-[#ff6060] p-3'>{logement.host.name}</span> 
            <img src={logement.host.picture} className='rounded-full w-16 h-16'></img>
          </div>
          <div className='flex gap-1 mt-4'>
            {stars.map((_, index) => (
              <span key={index}><Star className={index < Number(logement.rating) ? "text-[#ff6060]" : "text-gray-300"} fill="currentColor"/></span>
            ))}
          </div>  
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-between mt-5 md:mt-7 gap-2 md:gap-16'>
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