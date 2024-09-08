import { PlusCircle } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';  

interface ChoiceProps {
  title: string;
  route: string; 
}

export function Choice({ title, route }: ChoiceProps) {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate(route); 
  };

  return (
    <div
      className="flex flex-col items-center justify-center p-6 hover:bg-white hover:border hover:border-gray-200 hover:rounded-lg hover:shadow-lg transition-shadow duration-200 cursor-pointer"
      onClick={handleClick}
    >
      <PlusCircle color="#15803D" size={80} className="mb-4" />
      <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
    </div>
  );
}
