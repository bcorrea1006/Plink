// TODO: Figure out how to get PianoForm to work with
//       Reviews field for multiple reviews.
import { ImagePlus } from 'lucide-react';
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

  const emptyPiano: PianoDetail = {
    id: '',
    name: '',
    location: [0, 0],
    reviews: [],
  }
  const emptyReview: Review = {
    id: '',
    rating: 0,
    tuning: 50,
    access: 'public',
    notes: '',
    images: [],
  }

  const [pianoData, setPianoData] = useState<PianoDetail>({
    ...emptyPiano,
    location
  });
  const [reviewData, setReviewData] = useState<Review>(emptyReview);

  const handleStarClick = (rating: number) => {
    // toggle star if already on
    if (reviewData.rating === rating) {
      rating--;
    }
    setReviewData((prev) => ({ ...prev, rating }));
  };

  // generic setState for PianoDetail or Reveiw objects
  const updateData = <T extends object>(
    setter: React.Dispatch<React.SetStateAction<T>>,
    name: string,
    value: string,
  ) => {
    setter((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const target = e.target as HTMLInputElement; // e.target normally types as EventTarget, which is too generic for the "checked" property.
    const { name, value, } = target;

    if (Object.hasOwn(pianoData, name)) {
      updateData(setPianoData, name, value); // 'name' input box
    } else {
      updateData(setReviewData, name, value); // 'review' input box
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPiano: PianoDetail = {
      ...pianoData,
      reviews: [reviewData],
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
      <div>
        <label className='block font-medium mb-1'>Piano Name</label>
        <textarea
          name='name'
          maxLength={50} // 120 chars max length
          value={pianoData.name || ''} // Keep input controlled
          onChange={handleChange}
          placeholder='Placeholder...'
          rows={1}
          className='w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-150 placeholder-gray-400 resize-none overflow-hidden'
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = 'auto'; // reset height
            target.style.height = `${target.scrollHeight}px`; // grow to fit content
          }}
        />
        <p className='text-sm text-gray-500 mt-1'>
          {pianoData.name?.length || 0}/50 characters
        </p>
      </div>

      {/* Star Rating */}
      <div>
        <label className='block font-medium mb-1'>Overall Quality</label>
        <div className='flex space-x-1'>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type='button'
              onClick={() => handleStarClick(star)}
              className={`text-5xl ${
                reviewData.rating >= star ? 'text-yellow-400' : 'text-gray-300'
              } hover:brightness-90`}
            >
              *
            </button>
          ))}
        </div>
      </div>

      {/* Tuning Slider  */}
      <div className='flex-col items-center space-x-2'>
        <label className='font-medium'>Tuning</label>
        <input
          id='tuning-slider'
          type='range'
          min={0}
          max={100}
          step={1}
          // value={reviewData.tuning}
          onChange={() => handleChange}
          className='h-4 w-full cursor-pointer text-blue-600 border-gray-300 rounded'
        />
      </div>

      {/* Access Select */}
      <div>
        <label className='block font-medium mb-1'>Access Permissions</label>
        <select
          name='access'
          value={reviewData.access}
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
          value={reviewData.notes || ''} // Keep input controlled
          onChange={handleChange}
          placeholder='Placeholder...'
          rows={1}
          className='w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-150 placeholder-gray-400 resize-none overflow-hidden'
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = 'auto'; // reset height
            target.style.height = `${target.scrollHeight}px`; // grow to fit content
          }}
        />
        <p className='text-sm text-gray-500 mt-1'>
          {reviewData.notes?.length || 0}/120 characters
        </p>
      </div>

      {/* Image upload button */}
      <button
        className={`flex justify-evenly mx-auto items-center w-3/4 bg-gray-300 font-medium py-1 rounded border-dashed border-2 border-gray-400`}
      >
        <ImagePlus />
        Add Photo
      </button>

      <button
        type='submit'
        className='w-full bg-blue-500 text-white font-medium py-2 rounded hover:bg-blue-600 transition'
      >
        Submit
      </button>
    </form>
  );
}
