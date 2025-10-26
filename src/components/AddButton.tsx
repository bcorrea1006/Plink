import 'leaflet/dist/leaflet.css';

interface AddButtonProps {
  position: [number, number] | null;
}

export default function AddButton({ position }: AddButtonProps) {
  return (
    <div className='absolute bottom-4 left-4 z-10 bg-white p-2 rounded shadow'>
      <button
        onClick={() =>
          alert(`Location added: ${position ? position : 'Unknown'}`)
        }
        className='ml-2 bg-blue-500 text-white px-3 py-1 rounded'
      >
        Add
      </button>
    </div>
  );
}
