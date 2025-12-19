import PianoMarkerForm from './PianoMarkerForm';
import type { Piano } from '../types/piano';

type SidePanelProps = {
  isOpen: boolean;
  onClose: () => void;
  piano: Piano | null;
  isLight: boolean;
};

export default function SidePanel({
  isOpen,
  onClose,
  piano,
  isLight,
}: SidePanelProps) {
  return (
    <div
      className={`
        fixed top-0 right-0 h-full w-80 shadow-xl z-1000
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        ${isLight ? 'bg-white text-black' : 'bg-[#2c2c2c] text-white'}
      `}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Panel Button */}
      <div className='p-4 border-b flex justify-between items-center'>
        <h2 className='text-lg font-bold'>Piano Details</h2>
        <button onClick={onClose} className='text-gray-500 hover:text-black'>
          ✕
        </button>
      </div>
      {/* Content */}
      <div className='p-4'>
        <PianoMarkerForm />
      </div>
    </div>
  );
}
