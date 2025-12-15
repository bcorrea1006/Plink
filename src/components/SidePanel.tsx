type SidePanelProps = {
  isOpen: boolean;
  onClose: () => void;
  markerData: any | null;
};

export default function SidePanel({
  isOpen,
  onClose,
  markerData,
}: SidePanelProps) {
  return (
    <div
      className={`
        fixed top-0 right-0 h-full w-80 bg-white text-black shadow-xl z-1000
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}
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
        {markerData ? (
          <div className='space-y-2'>
            <p>
              <strong>Quality:</strong> {markerData.quality}
            </p>
            <p>
              <strong>Tuned:</strong> {markerData.tuned ? 'Yes' : 'No'}
            </p>
            <p>
              <strong>Access:</strong> {markerData.access}
            </p>
          </div>
        ) : (
          <p className='text-gray-500'>No marker selected</p>
        )}
      </div>
    </div>
  );
}
