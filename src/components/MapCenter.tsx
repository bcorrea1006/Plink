import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapCenter() {
  const [position, setPosition] = useState<[number, number] | null>(null);

  useEffect(() => {
    // Simulate fetching new center position from an API or other source
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setPosition([latitude, longitude]);
        },
        (err) => {
          console.error('Error fetching geolocation:', err);
          setPosition([47.6061, -122.3328]); // Default to Seattle
        }
      );
    } else {
      console.log('Geolocation not available, defaulting to Seattle');
      setPosition([47.6061, -122.3328]); // Default to Seattle
    }
  }, []);

  return (
    <div className='h-full w-full'>
      {position ? (
        <MapContainer
          center={position}
          zoom={13}
          // style={{ height: '100%', width: '100%' }}
          className='h-full w-full'
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={position}>
            <Popup>You are here!</Popup>
            <RecenterMap position={position} />
          </Marker>
        </MapContainer>
      ) : (
        <p className='text-center mt-10'>Fetching location...</p>
      )}
    </div>
  );
}

function RecenterMap({ position }: { position: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.setView(position);
  }),
    [position, map];
  return null;
}
