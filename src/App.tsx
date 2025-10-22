import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MapContainer
        center={[37.7749, -122.4194]} // coordinates for San Francisco
        zoom={13}
        style={{ height: '100vh', width: '100%' }}
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; OpenStreetMap contributors'
        />
        {/* <Marker position={[37.7749, -122.4194]}>
          <Popup>Piano here!</Popup>
        </Marker> */}
      </MapContainer>
      );
    </>
  );
}

export default App;
