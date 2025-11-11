import { use, useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import AddButton from './components/AddButton';
import MapCenter from './components/MapCenter';

function App() {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

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
        <MapCenter position={position} setPosition={setPosition} />
        {/* Pass position so AddButton can read it */}
      </div>
    </>
  );
}

export default App;
