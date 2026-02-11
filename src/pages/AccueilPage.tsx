import Banner from '../components/Banner';
import Card from '../components/Card';
import logements from '../data/logements.json';

function Accueil () {
    return (
        <div>
        <Banner/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-8 md:p-12 md:bg-gray-100 rounded-[25px] md:m-11.25 font-montserrat">
            {logements.map((logement) => (
                <Card 
                key={logement.id}
                id={logement.id}
                title={logement.title}
                cover={logement.cover}/>
            ))}
            </div>
        </div>
    )
}

export default Accueil;