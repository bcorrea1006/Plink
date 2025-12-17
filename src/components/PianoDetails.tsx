import type { Piano } from '../types/piano';

type PianoDetailsProps = { piano: Piano };

export default function PianoDetails({ piano }: PianoDetailsProps) {
  return (
    <div>
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
