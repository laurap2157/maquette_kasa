import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface CollapseProps {
  title: string;
  content: string | string[];
}

function Collapse({ title, content }: CollapseProps) {
  const [isOpen, setIsOpen] = useState(false);

    return (
    <div className="mb-5">
        <button onClick={() => setIsOpen(!isOpen)} className="w-full bg-[#ff6060] text-white px-5 py-3 rounded-[5px] flex justify-between items-center">
        <span className="font-bold text-2xl">{title}</span>
        <ChevronDown size={40} strokeWidth={2} className={`transform transition-transform ${isOpen ? '' : 'rotate-180'}`}/>
        </button>
      {isOpen && (
        <div className="bg-gray-100 px-5 py-6 rounded-b-[5px]">
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Collapse;
