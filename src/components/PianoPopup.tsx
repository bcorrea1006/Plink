import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import type { PianoDetail } from '../types/piano';

type PianoPopupProps = { piano: PianoDetail };

export default function PianoPopup({ piano }: PianoPopupProps) {
  const { isLight } = useContext(ThemeContext);

  return (
    <div
      className={isLight ?
        'bg-white text-black' : 'bg-[#2c2c2c] text-white'}>
      {/* TODO: Consider adding the top images here? */}
      <p>
        <strong>name: </strong>
        {piano.name}
      </p>
      <p>
        <strong>overall quality: </strong>
        {/* // TODO: Replace with actual average quality and add stars */}
        {piano.reviews[0].rating + ' (' + piano.reviews.length + ')'}
      </p>
      <p>
        {/* TODO: Add actual distance finding... somehow */}
        <strong>Distance: </strong>
        0 miles
      </p>
    </div>
  );
}
