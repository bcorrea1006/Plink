import './App.css';
import MapWrapper from './components/MapWrapper';
import type { MarkerData } from './components/MapWrapper';
import MinMap from './components/MinMap';

const defaultZoom: number = 12;

function App() {
  const markers: MarkerData[] = [
    { id: 1, position: [37.7749, -122.4194], label: 'San Francisco 🌉' },
    { id: 2, position: [34.0522, -118.2437], label: 'Los Angeles 🌴' },
    { id: 3, position: [40.7128, -74.006], label: 'New York City 🏙️' },
  ];

  return (
    <>
      <div className='h-screen w-screen flex items-center justify-center'>
        <div className='h-1/2 w-1/2'>
          <MapWrapper
            center={[47.6061, -122.3328]}
            zoom={defaultZoom}
            markers={markers}
            className='h-full w-full'
          />
        </div>
      </div>
    </>
  );
}

export default App;
