// PlaxementOverlay.tsx
// A transparent overlay used during placement mode to add the crosshairs

export default function PlaxementOverlay({
  onCancel,
}: {
  onCancel: () => void;
}) {
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

      {/* Cancel Button */}
      <button
        onClick={onCancel}
        className='absolute bottom-6 left-1/2 -translate-x-1/2 bg-red-600 text-white rounded-full px-6 py-2 z-[10001] pointer-events-auto shadow-lg'
      >
        X
      </button>
    </div>
  );
}
