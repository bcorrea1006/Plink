import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import type { PianoDetail } from '../types/piano';

type PianoDetailsProps = { piano: PianoDetail };

export default function PianoDetails({ piano }: PianoDetailsProps) {
  const { isLight } = useContext(ThemeContext);

  return (
    <div
      className={isLight ? 'bg-white text-black' : 'bg-[#2c2c2c] text-white'}
    >
      <p>
        <strong>id: </strong>
        {piano.id}
      </p>
      <p>
        <strong>quality: </strong>
        {piano.reviews[0].rating}
      </p>
      <p>
        <strong>tuned:</strong>
        {piano.reviews[0].tuning ? ' YEAH!!' : ' naaah'}
      </p>
      <p>
        <strong>access: </strong>
        {piano.reviews[0].access}
      </p>
      <p>
        <strong>notes: </strong>
        {piano.reviews[0].notes}
      </p>
    </div>
  );
}
