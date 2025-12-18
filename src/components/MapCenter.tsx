import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import AddButton from './AddButton';
import PlacementOverlay from './PlacementOverlay';
import SidePanel from './SidePanel';
import PianoForm from './PianoMarkerForm';
import type { Piano } from '../types/piano';
import PianoDetails from './PianoDetails';

interface MapCenterProps {
  position: [number, number] | null;
  setPosition: React.Dispatch<React.SetStateAction<[number, number] | null>>;
  pianos: Piano[];
  isPlacing: boolean;
  setIsPlacing: React.Dispatch<React.SetStateAction<boolean>>;
  onPlacementConfirm: (center: [number, number]) => void;
}

export default function MapCenter({
  position,
  setPosition,
  pianos,
  isPlacing,
  setIsPlacing,
  onPlacementConfirm,
}: MapCenterProps) {
  useEffect(() => {
    // Fetch initial location
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

  const [isOpen, setIsOpen] = useState(false);
  const [selectedPiano, setSelectedPiano] = useState<Piano | null>(null);

  return (
    <div className='h-full w-full relative z-0'>
      <AddButton
        isPlacing={isPlacing}
        onTogglePlacement={() => setIsPlacing((prev) => !prev)}
      />
      {position ? (
        <MapContainer
          center={position}
          zoom={13}
          className='h-full w-full z-10'
        >
          {isPlacing && (
            <PlacementOverlay
              onCancel={() => setIsPlacing(false)}
              onConfirm={onPlacementConfirm}
            />
          )}
          <ResizeOnPlacement isPlacing={isPlacing} />
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Render Piano Markers dynamically */}
          {pianos.map((piano) => (
            <Marker key={piano.id} position={piano.position}>
              <Popup
                autoClose={false}
                closeOnClick={false}
                eventHandlers={{
                  remove: () => {
                    setIsOpen(false);
                    setSelectedPiano(null); // no piano currently selected
                  },
                }}
              >
                <PianoDetails piano={piano} />
                <button
                  className='w-1/2 bg-blue-500 text-white font-medium py-2 rounded hover:bg-blue-600 transition'
                  onClick={() => {
                    setIsOpen(true);
                    setSelectedPiano(piano);
                  }}
                >
                  Edit
                </button>
              </Popup>
            </Marker>
          ))}
          <SidePanel
            isOpen={isOpen}
            onClose={() => {
              setIsOpen(false);
              setSelectedPiano(null);
            }}
            piano={selectedPiano}
          ></SidePanel>
        </MapContainer>
      ) : (
        <p className='text-center mt-10'>Fetching location...</p>
      )}
    </div>
  );
}

// Forces Leaflet to recalc size whenever the position changes
function RecenterMap({ position }: { position: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize(); // Fix container sizing
    map.setView(position);
  }, [position, map]);

  return null;
}

function ResizeOnPlacement({ isPlacing }: { isPlacing: boolean }) {
  const map = useMap();

  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 50);
  }, [isPlacing]);

  return null;
}
