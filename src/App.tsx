import { use, useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import AddButton from './components/AddButton';
import MapCenter from './components/MapCenter';

function App() {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [markers, setMarkers] = useState<
    { id: number; position: [number, number] }[]
  >([]);

  const [isPlacing, setIsPlacing] = useState(false);

  const handleAddMarker = (position: [number, number]) => {
    setMarkers((prev) => [
      ...prev,
      { id: prev.length + 1, position: position },
    ]);
    // Play the Plink!!!
    const whichPlink = Math.floor(Math.random() * 3) + 1;
    const audio = new Audio(`src/sounds/plink-${whichPlink}.mp3`);
    audio.play().catch((err) => console.error('Error Plinking 😢\n', err));
  };

  // Update viewport height dynamically
  useEffect(() => {
    const handleResize = () => setViewportHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div
        style={{ height: `${viewportHeight}px` }}
        className='w-full flex items-center justify-center'
      >
        {/* Pass setPosition so MapCenter can update it */}
        <MapCenter
          position={position}
          setPosition={setPosition}
          markers={markers}
          isPlacing={isPlacing}
          setIsPlacing={setIsPlacing}
          onPlacementConfirm={handleAddMarker}
        />
        {/* Pass position so AddButton can read it */}
      </div>
    </>
  );
}

export default App;
