import 'leaflet/dist/leaflet.css';
import { useContext, useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { ThemeContext } from './context/ThemeContext';
import type { Piano } from '../types/piano';
import AddButton from './AddButton';
import PlacementOverlay from './PlacementOverlay';
import SidePanel from './SidePanel';
import PianoDetails from './PianoDetails';

interface MapCenterProps {
  position: [number, number] | null;
  setPosition: React.Dispatch<React.SetStateAction<[number, number] | null>>;
  pianos: Piano[];
  selectedPiano: Piano | null;
  onSelectPiano: React.Dispatch<React.SetStateAction<Piano | null>>;
  onUpdatePiano: (updated: Piano) => void;
  isPlacing: boolean;
  setIsPlacing: React.Dispatch<React.SetStateAction<boolean>>;
  onPlacementConfirm: (center: [number, number]) => void;
}

// Adding a random comment just to show my dad the workflow!!

export default function MapCenter({
  position,
  setPosition,
  pianos,
  selectedPiano,
  onSelectPiano,
  onUpdatePiano,
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
  const { isLight } = useContext(ThemeContext);

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
            url={
              isLight
                ? 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                : `https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png`
            }
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
                    onSelectPiano(null); // no piano currently selected
                  },
                }}
              >
                <div>
                  <PianoDetails piano={piano} />
                  <button
                    className='w-1/2 bg-blue-500 text-white font-medium py-2 rounded hover:bg-blue-600 transition'
                    onClick={() => {
                      setIsOpen(true);
                      onSelectPiano(piano);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}
          <SidePanel
            isOpen={isOpen}
            onClose={() => {
              setIsOpen(false);
              onSelectPiano(null);
            }}
            piano={selectedPiano}
            onUpdate={onUpdatePiano}
            isLight={isLight}
          ></SidePanel>
        </MapContainer>
      ) : (
        <p className='text-center mt-10'>Fetching location...</p>
      )}
    </div>
  );
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
