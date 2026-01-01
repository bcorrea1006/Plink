import type { Piano } from './types/piano';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ThemeContext } from './components/context/ThemeContext';
import MapCenter from './components/MapCenter';
import ThemeToggle from './components/ThemeToggle';
import SignIn from './components/SignIn';
import 'leaflet/dist/leaflet.css';

function App() {
  const [position, setPosition] = useState<[number, number] | null>(null); // The user's current position
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [isPlacing, setIsPlacing] = useState(false);
  const [isLight, setIsLight] = useState(true);

  // Theme controls
  const toggleTheme = () => setIsLight((prev) => !prev);

  // Piano state logic
  const [pianos, setPianos] = useState<Piano[]>([]);
  const [selectedPiano, setSelectedPiano] = useState<Piano | null>(null);

  // Called by PianoMarkerForm
  const updatePiano = (updated: Piano) => {
    setPianos((prev) =>
      prev.map((p) => (p.id === updated.id ? { ...p, ...updated } : p))
    );
  };

  const addPiano = (position: [number, number]) => {
    const newPiano: Piano = {
      id: crypto.randomUUID(),
      position,
      quality: 3,
      tuned: false,
      access: 'private',
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
    <>
      <Routes>
        <Route path='/signin' element={<SignIn />} />
      </Routes>
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
    </>
  );
}

export default App;
