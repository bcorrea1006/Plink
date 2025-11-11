import 'leaflet/dist/leaflet.css';

interface AddButtonProps {
  position: [number, number] | null;
  onStartPlacement: () => void;
}

export default function AddButton({ onStartPlacement }: AddButtonProps) {
  return (
    <button
      onClick={onStartPlacement}
      className='pointer-events-auto absolute bottom-6 right-6 z-[9999]
             bg-pink-400 hover:bg-pink-700 text-black hover:text-white font-bold
             rounded-full w-14 aspect-square flex items-center justify-center
             shadow-lg transition'
    >
      +
    </button>
  );
}
