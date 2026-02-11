import Collapse from '../components/Collapse';

function APropos() {
  const aboutData = [
    {
      title: "Fiabilité",
      content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    },
    {
      title: "Respect",
      content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
      title: "Service",
      content: "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
    },
    {
      title: "Sécurité",
      content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
  ];

  return (
    <div className="flex flex-col justify-center items-center pt-5">
        <div className="flex justify-center items-center bg-[url('/apropos.jpg')] bg-cover bg-center bg-no-repeat w-[90vw] h-[20vh] md:w-[95vw] md:h-[30vh] rounded-3xl border bg-blend-darken bg-black/30 md:shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mt-2 md:mt-0"></div>
        <div className="w-[98vw] md:w-[80vw] mx-auto pr-8 pl-8 pt-8 md:pb-4 md:p-12">
        {aboutData.map((item, index) => (
        <Collapse 
          key={index}
          title={item.title}
          content={item.content}/>
        ))}
        </div>
    </div>
  );
}

export default APropos;