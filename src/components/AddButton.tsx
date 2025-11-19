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
              pointer-events-auto absolute bottom-6 right-6 z-[10001]
            text-black hover:text-white font-bold
              rounded-full w-14 aspect-square flex items-center justify-center
              shadow-lg transition
        ${
          isPlacing
            ? 'bg-red-600 hover:bg-red-700'
            : 'bg-pink-400 hover:bg-pink-700'
        }
             `}
    >
      {isPlacing ? 'X' : '+'}
    </button>
  );
}
