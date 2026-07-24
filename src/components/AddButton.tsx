import 'leaflet/dist/leaflet.css';

interface AddButtonProps {
  isPlacing: boolean; // <-- new prop to track if we are in placement mode
  onTogglePlacement: () => void;
}

export default function AddButton({
  isPlacing,
  onTogglePlacement,
}: AddButtonProps) {
  return (
    <button
      onClick={onTogglePlacement}
      className={`
              pointer-events-auto absolute bottom-6 right-6 z-100
            text-black text-2xl hover:text-white font-bold border
              rounded-full w-14 aspect-square flex items-center justify-center
              shadow-lg transition bg-green-400 hover:bg-green-700`}
    >
      +
    </button>
  );
}
