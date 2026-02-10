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
      content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {
      title: "Sécurité",
      content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
  ];

  return (
    <div className="flex flex-col justify-center items-center pb-2 pt-5">
        <div className="flex justify-center items-center bg-[url('/apropos.jpg')] bg-cover bg-center bg-no-repeat w-[95vw] h-[30vh] top-40.75 left-25 rounded-3xl border bg-blend-darken bg-black/30 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"></div>
        <div className="w-[80vw] mx-auto px-8 py-12">
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