import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import AddButton from './AddButton';
import PlaxementOverlay from './PlacementOverlay';

interface MapCenterProps {
  position: [number, number] | null;
  setPosition: React.Dispatch<React.SetStateAction<[number, number] | null>>;
}

export default function MapCenter({ position, setPosition }: MapCenterProps) {
  const [isPlacing, setIsPlacing] = useState(false);

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
    <div className='h-full w-full relative z-0'>
      <AddButton
        onStartPlacement={() => setIsPlacing(true)}
        position={position}
      />
      {isPlacing && <PlaxementOverlay onCancel={() => setIsPlacing(false)} />}
      {position ? (
        <MapContainer center={position} zoom={13} className='h-full w-full z-0'>
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>You are here!</Popup>
            <RecenterMap position={position} />
          </Marker>
          <Marker position={[47.66342038920617, -122.32327057882037]}>
            <Popup>My bedroom lol :D</Popup>
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
