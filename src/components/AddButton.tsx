import 'leaflet/dist/leaflet.css';

interface AddButtonProps {
  position: [number, number] | null;
  isPlacing: boolean; // <-- new prop to track if we are in placement mode
  onStartPlacement: () => void;
  onCancelPlacement: () => void; // <-- new prop for cancel
}

export default function AddButton({
  isPlacing,
  onStartPlacement,
  onCancelPlacement,
}: AddButtonProps) {
  return (
    <button
      onClick={isPlacing ? onCancelPlacement : onStartPlacement}
      className={`
              pointer-events-auto absolute bottom-6 right-6 z-[10001]
            text-black hover:text-white font-bold
              rounded-full w-14 aspect-square flex items-center justify-center
              shadow-lg transition
        ${
          isPlacing
            ? 'bg-red-500 hover:bg-red-700'
            : 'bg-pink-400 hover:bg-pink-700'
        }
             `}
    >
      {isPlacing ? 'X' : '+'}
    </button>
  );
}
