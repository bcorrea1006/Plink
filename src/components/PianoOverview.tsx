import type { PianoDetail } from '../types/piano';

interface PianoOverviewProps {
  piano: PianoDetail;
}

export function PianoOverview({ piano }: PianoOverviewProps) {
  return (
    <div>
      <h2> {piano.name} </h2>
      <h2>Other piano info coming soon...</h2>
    </div>
  )
}