// TODO: Figure out how to get PianoForm to work with
//       Reviews field for multiple reviews.
import { useEffect } from 'react';
import { useContext, useState } from 'react';
import { ThemeContext } from './context/ThemeContext';
import type { PianoDetail } from '../types/piano';
import type { Review } from '../types/review';

type PianoFormProps = {
  location: [number, number];
  onUpdate: (updatePiano: PianoDetail) => void;
};

export default function PianoForm({
  location,
  onUpdate,
}: PianoFormProps) {
  const [pianoData, setPianoData] = useState<PianoDetail>();
  const [reviewData, setReviewData] = useState<Review>();

  const handleStarClick = (star: number) => {
    setDraftPiano((prev) => ({ ...prev, quality: star }));
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const target = e.target as HTMLInputElement; // e.target normally types as EventTarget, which is too generic for the "checked" property.
    const { name, value, type, checked } = target;
    setDraftPiano((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPiano: PianoDetail = {
      ...piano,
      ...marker,
    };
    onUpdate(newPiano);
  };

  const { isLight } = useContext(ThemeContext);

  return (
    <form
      onSubmit={handleSubmit}
      className={`max-w-md mx-auto p-6 rounded-xl space-y-4 ${
        isLight ? 'bg-white text-black' : 'bg-[#2c2c2c] text-white'
      }`}
    >
      {/* Name input box */}

      {/* Tuning slider */}

      {/* Access drop-down */}

      {/* Overall rating (stars) */}

      {/* Notes input */}

      {/* Image upload */}

      {/* Star Rating */}
      <div>
        <label className='block font-medium mb-1'>Piano Quality!!!</label>
        <div className='flex space-x-1'>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type='button'
              onClick={() => handleStarClick(star)}
              className={`text-5xl ${
                draftPiano.quality >= star ? 'text-yellow-400' : 'text-gray-300'
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
          checked={draftPiano.tuned}
          onChange={handleChange}
          className='h-4 w-4 text-blue-600 border-gray-300 rounded'
        />
        <label className='font-medium'>Tuned?</label>
      </div>

      {/* Access Select */}
      <div>
        <label className='block font-medium mb-1'>Access Permissions</label>
        <select
          name='access'
          value={draftPiano.access}
          onChange={handleChange}
          className='w-full border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-blue-400'
        >
          <option value='public'>Public</option>
          <option value='private'>Private</option>
          <option value='restricted'>Restricted</option>
        </select>
      </div>

      {/* Notes input box */}
      <div>
        <label className='block font-medium mb-1'>Notes</label>
        <textarea
          name='notes'
          maxLength={120} // 120 chars max length
          value={draftPiano.notes || ''} // Keep input controlled
          onChange={handleChange}
          placeholder='Add notes about this piano...'
          rows={1}
          className='w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-150 placeholder-gray-400 resize-none overflow-hidden'
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = 'auto'; // reset height
            target.style.height = `${target.scrollHeight}px`; // grow to fit content
          }}
        />
        <p className='text-sm text-gray-500 mt-1'>
          {draftPiano.notes?.length || 0}/120 characters
        </p>
      </div>

      <button
        type='submit'
        className='w-full bg-blue-500 text-white font-medium py-2 rounded hover:bg-blue-600 transition'
      >
        suave Piano Marker
      </button>
    </form>
  );
}
