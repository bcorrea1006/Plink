import PianoForm from './PianoForm';
import { CancelButton } from './CancelButton';
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

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/50 backdrop-blur-sm">
      <div className={`pointer-events-auto absolute w-1/2 max-w-lg mx-4 h-3/4 z-10002 text-black
        bg-white rounded-2xl shadow-lg flex max-h-[80vh] flex-col justify-between items-center`}>
        <CancelButton onCancel={onToggleModal} className='absolute top-6 left-6'/>
        <PianoForm
          location={location}
          onUpdate={updatePianos}
        />
      </div>
    </div>
  );
}