import './App.css';
import { use, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import AddButton from './components/AddButton';
import MapCenter from './components/MapCenter';

function App() {
  const [position, setPosition] = useState<[number, number] | null>(null);

  return (
    <>
      <div className='h-full w-full flex items-center justify-center'>
        {/* Pass setPosition so MapCenter can update it */}
        <MapCenter position={position} setPosition={setPosition} />
        {/* Pass position so AddButton can read it */}
      </div>
    </>
  );
}

export default App;
