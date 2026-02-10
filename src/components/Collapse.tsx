import { useState } from 'react';

interface CollapseProps {
  title: string;
  content: string | string[];
}

function Collapse({ title, content }: CollapseProps) {
  const [isOpen, setIsOpen] = useState(false);

    return (
    <div className="mb-5">
        <button onClick={() => setIsOpen(!isOpen)} className="w-full bg-[#ff6060] text-white px-5 py-3 rounded-[5px] flex justify-between items-center font-montserrat">
        <span className="font-bold text-2xl">{title}</span>
            <svg className={`w-6 h-6 transform transition-transform ${isOpen ? '' : 'rotate-180'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
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
