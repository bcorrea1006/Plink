import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export interface MarkerData {
  id: string | number;
  position: [number, number];
  label: string;
}

interface MapWrapperProps {
  center: [number, number];
  zoom: number;
  markers?: MarkerData[];
  className?: string;
}

const MapWrapper: React.FC<MapWrapperProps> = ({
  center,
  zoom,
  markers = [],
  className = '',
}) => {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <MapContainer center={center} zoom={zoom} className={className}>
        <TileLayer
          // This is your current Leaflet tiles - to be swapped out with Mapbox or other provider later
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map((marker) => (
          <Marker key={marker.id} position={marker.position}>
            {marker.label && <Popup>{marker.label}</Popup>}
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapWrapper;
