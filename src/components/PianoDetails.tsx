import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import type { Piano } from '../types/piano';

type PianoDetailsProps = { piano: Piano };

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
        {piano.quality}
      </p>
      <p>
        <strong>tuned: </strong>
        {piano.tuned}
      </p>
      <p>
        <strong>access: </strong>
        {piano.access}
      </p>
      <p>
        <strong>notes: </strong>
        {piano.notes}
      </p>
    </div>
  );
}
