import { useContext, useState } from 'react';
import type { Piano } from '../types/piano';
import { ThemeContext } from './context/ThemeContext';

type PianoMarker = {
  quality: number; // 1 - 5 stars
  tuned: boolean;
  access: 'public' | 'private' | 'restricted';
  notes?: string;
};

type PianoMarkerFormProps = {
  piano: Piano;
  onUpdate: (updateMarker: Piano) => void;
};

export default function PianoMarkerForm({
  piano,
  onUpdate,
}: PianoMarkerFormProps) {
  const [marker, setMarker] = useState<PianoMarker>({
    quality: piano.quality,
    tuned: piano.tuned,
    access: piano.access,
    notes: piano.notes,
  });

  const handleStarClick = (star: number) => {
    setMarker((prev) => ({ ...prev, quality: star }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement; // e.target normally types as EventTarget, which is too generic for the "checked" property.
    const { name, value, type, checked } = target;
    setMarker((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedPiano: Piano = {
      ...piano,
      ...marker,
    };
    onUpdate(updatedPiano);
  };

  const { isLight } = useContext(ThemeContext);

  return (
    <form
      onSubmit={handleSubmit}
      className={`max-w-md mx-auto p-6 rounded-xl space-y-4 ${
        isLight ? 'bg-white text-black' : 'bg-[#2c2c2c] text-white'
      }`}
    >
      {/* Star Rating */}
      <div>
        <label className='block font-medium mb-1'>Piano Quality</label>
        <div className='flex space-x-1'>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type='button'
              onClick={() => handleStarClick(star)}
              className={`text-5xl ${
                marker.quality >= star ? 'text-yellow-400' : 'text-gray-300'
              } hover:text-yellow-500 transition`}
            >
              *
            </button>
          ))}
        </div>
      </div>

      {/* Tuned Checkbox  */}
      <div className='flex items-center space-x-2'>
        <input
          type='checkbox'
          name='tuned'
          checked={marker.tuned}
          onChange={handleChange}
          className='h-4 w-4 text-blue-600 border-gray-300 rounded'
        />
        <label className='font-medium'>Tuned?</label>
      </div>

      {/* Acces Select */}
      <div>
        <label className='block font-medium mb-1'>Access Permissions</label>
        <select
          name='access'
          value={marker.access}
          onChange={handleChange}
          className='w-full border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-blue-400'
        >
          <option value='public'>Public</option>
          <option value='private'>Private</option>
          <option value='restricted'>Restricted</option>
        </select>
      </div>

      <button
        type='submit'
        className='w-full bg-blue-500 text-white font-medium py-2 rounded hover:bg-blue-600 transition'
      >
        Save Piano Marker
      </button>
    </form>
  );
}
