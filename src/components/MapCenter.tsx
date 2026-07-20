// External libraries
import { useContext, useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// Side effects
import 'leaflet/dist/leaflet.css';
// Local components
import AddButton from './AddButton';
import PianoDetails from './PianoDetails';
import PlacementOverlay from './PlacementOverlay';
import SidePanel from './SidePanel';
// Context
import { ThemeContext } from './context/ThemeContext';
// Types
import type { PianoDetail } from '../types/piano';

interface MapCenterProps {
  position: [number, number] | null;
  setPosition: React.Dispatch<React.SetStateAction<[number, number] | null>>;
  pianos: PianoDetail[];
  selectedPiano: PianoDetail | null;
  onSelectPiano: React.Dispatch<React.SetStateAction<PianoDetail | null>>;
  onUpdatePiano: (updated: PianoDetail) => void;
  isPlacing: boolean;
  setIsPlacing: React.Dispatch<React.SetStateAction<boolean>>;
  onPlacementConfirm: (center: [number, number]) => void;
}

export function MapCenter({
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
            <Marker key={piano.id} position={piano.location}>
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
