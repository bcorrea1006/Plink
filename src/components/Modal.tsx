import { useContext } from 'react';
import { PianoForm } from './PianoForm';
import { CancelButton } from './CancelButton';
import { ThemeContext } from './context/ThemeContext';
import type { PianoDetail } from '../types/piano';

interface ModalProps {
  onToggleModal: () => void;
  location: [number, number];
  updatePianos: (updated: PianoDetail) => void;
}

export function Modal({
  onToggleModal,
  location,
  updatePianos
}: ModalProps ) {

  const { isLight } = useContext(ThemeContext);

  return (
    <div className={`fixed inset-0 z-50 flex px-3 justify-center items-center
      bg-black/50 backdrop-blur-sm`}>
      <div
        className={`pointer-events-auto absolute max-w-lg w-3/4 mx-4 h-3/4 z-10002 text-black
          rounded-2xl shadow-lg flex max-h-[80vh] flex-col justify-between items-center
          ${ isLight ? 'bg-white text-black' : 'bg-[#2c2c2c] text-white'}
        `}>
        <CancelButton onCancel={onToggleModal} className='absolute top-6 right-6 w-1/9'/>
        <PianoForm
          location={location}
          onUpdate={updatePianos}
        />
      </div>
    </div>
  );
}