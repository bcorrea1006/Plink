import './App.css';
import MapCenter from './components/MapCenter';
import MapWrapper from './components/MapWrapper';
import type { MarkerData } from './components/MapWrapper';

const defaultZoom: number = 12;

function App() {
  const markers: MarkerData[] = [
    { id: 1, position: [47.6061, -122.3328], label: 'Seattle 🌃' },
    { id: 2, position: [47.6537, -122.3078], label: 'Drumheller fountain ⛲️' },
  ];

  return (
    <>
      <div className='h-screen w-screen flex items-center justify-center'>
        <div className='h-1/2 w-1/2'>
          <MapCenter />
        </div>
      </div>
    </>
  );
}

export default App;
