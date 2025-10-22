import './App.css';
import MapWrapper from './components/MapWrapper';
import type { MarkerData } from './components/MapWrapper';

function App() {
  const markers: MarkerData[] = [
    { id: 1, position: [37.7749, -122.4194], label: 'San Francisco 🌉' },
    { id: 2, position: [34.0522, -118.2437], label: 'Los Angeles 🌴' },
    { id: 3, position: [40.7128, -74.006], label: 'New York City 🏙️' },
  ];

  return (
    <>
      <div>
        {/* <div id='map'>
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            style={{ height: '100vh', width: '100%' }}
          >
            {' '}
            <MapContainer
              center={[37.7749, -122.4194]} // coordinates for San Francisco
              zoom={13}
              style={{ height: '100vh', width: '100vw' }}
            />
            <TileLayer
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              attribution='&copy; OpenStreetMap contributors'
            />
            <Marker position={[37.7749, -122.4194]}>
              <Popup>Piano here!</Popup>
            </Marker>
          </MapContainer>
        </div> */}
      </div>

      <div className='h-screen w-screen flex flex-col items-center justify-center bg-gray-100'>
        <h1 className='text-2xl font-bold mb-4'>Plink Draft Map</h1>
        <div className='w-3/4 h-3/f'>
          <MapWrapper
            center={[36.7783, -119.4179]}
            zoom={6}
            markers={markers}
          />
        </div>
      </div>
    </>
  );
}

export default App;
