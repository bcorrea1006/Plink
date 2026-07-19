import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import MapCenter from './components/MapCenter';
import type { PianoDetail } from './types/piano';
import type { Review } from './types/review';
import ThemeToggle from './components/ThemeToggle';
import { ThemeContext } from './components/context/ThemeContext';

function App() {
  const [position, setPosition] = useState<[number, number] | null>(null); // The user's current position
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [isPlacing, setIsPlacing] = useState(false);
  const [isLight, setIsLight] = useState(true);

  // Theme controls
  const toggleTheme = () => setIsLight((prev) => !prev);

  // Piano state logic
  const [pianos, setPianos] = useState<PianoDetail[]>([]);
  const [selectedPiano, setSelectedPiano] = useState<PianoDetail | null>(null);

  // Called by PianoMarkerForm
  const updatePiano = (updated: PianoDetail) => {
    setPianos((prev) =>
      prev.map((p) => (p.id === updated.id ? { ...p, ...updated } : p))
    );
  };

  const addPiano = (position: [number, number]) => {
    const newPiano: PianoDetail = {
      id: crypto.randomUUID(),
      name: 'placeholder',
      location: position,
      reviews: [
        {
          id: crypto.randomUUID(),
          rating: 3,
          tuning: 50,
          access: 'private',
          notes: 'placeholder'
        },
      ],
    };

    setPianos((prev) => [...prev, newPiano]);
    playPlink(); // Play the Plink sound!
  };

  const playPlink = () => {
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
    <ThemeContext.Provider value={{ isLight, toggleTheme }}>
      <div
        style={{ height: `${viewportHeight}px` }}
        className={`w-full flex items-center justify-center ${
          isLight ? 'light-theme' : 'dark-theme'
        }`}
      >
        <div className='absolute top-25 left-1.5 z-1000'>
          <ThemeToggle
            isLight={isLight}
            onToggle={() => setIsLight((prev) => !prev)}
          />
        </div>
        <MapCenter
          position={position}
          setPosition={setPosition}
          pianos={pianos}
          selectedPiano={selectedPiano}
          onSelectPiano={setSelectedPiano}
          onUpdatePiano={updatePiano}
          isPlacing={isPlacing}
          setIsPlacing={setIsPlacing}
          onPlacementConfirm={addPiano}
        />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
