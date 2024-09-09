import 'react-multi-carousel/lib/styles.css';
import { Helmet } from 'react-helmet-async';
import { Choice } from './components/choice';

export function ChoiceCreate() {
  return (
    <>
      <Helmet title="O que deseja criar?" />
      <div className="max-w-2xl mx-auto p-6 my-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-gray-800">O que você deseja criar?</h3>
        </div>
        <div className="flex justify-around">
          <Choice title="Nova Ação" route="/" />
          <Choice title="Novo Evento" route="/" />
        </div>
      </div>
    </>
  );
}
