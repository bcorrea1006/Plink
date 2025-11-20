// PlacementOverlay.tsx
// A transparent overlay used during placement mode to add the crosshairs

import { useMap } from 'react-leaflet';

interface PlacementOverlayProps {
  onCancel: () => void;
  onConfirm: (pos: [number, number]) => void;
}

export default function PlacementOverlay({
  onCancel,
  onConfirm,
}: PlacementOverlayProps) {
  const map = useMap();

  const handleConfirm = () => {
    const center = map.getCenter();
    onConfirm([center.lat, center.lng]);
    onCancel();
  };

  return (
    <div className='absolute inset-0 z-[10000] pointer-events-none'>
      {/* slight dim effect apparently */}
      <div className='absolute inset-0 bg-black/20 pointer-events-none' />

      {/* Crosshair */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
        <svg width='40' height='40' className='text-white opacity-80'>
          <line
            x1='20'
            y1='0'
            x2='20'
            y2='40'
            stroke='currentColor'
            strokeWidth='2'
          />
          <line
            x1='0'
            y1='20'
            x2='40'
            y2='20'
            stroke='currentColor'
            strokeWidth='2'
          />
        </svg>
      </div>

      {/* Confirm Button */}
      <button
        onClick={handleConfirm}
        className='absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center bg-green-500 text-2xl text-black hover:text-white font-bold px-6 py-4 rounded-full shadow-2xl z-50 pointer-events-auto hover:bg-green-600'
      >
        ✓
      </button>
    </div>
  );
}
