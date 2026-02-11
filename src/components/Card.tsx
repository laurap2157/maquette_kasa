import { Link } from 'react-router-dom';

interface CardProps {
  id: string;
  title: string;
  cover: string;
}

function Card({ id, title, cover }: CardProps) {
    return (
    <Link to={`/logement/${id}`} className="relative block h-85 rounded-[10px] overflow-hidden group">
      <img src={cover} alt={title} className="w-full h-full object-cover"/>
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/50"></div>
      <h3 className="absolute bottom-5 left-5 right-5 text-white text-lg font-medium">
        {title}
      </h3>
    </Link>
  );
};

export default Card;
