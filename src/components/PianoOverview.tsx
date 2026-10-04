import type { PianoDetail } from '../types/piano';

interface PianoOverviewProps {
  piano: PianoDetail;
}

export function PianoOverview({ piano }: PianoOverviewProps) {
  const ratings: number[] = piano.reviews.map(review => review.rating);
  const tunings: number[] = piano.reviews.map(review => review.tuning);
  const accessTypes: string[] = piano.reviews.map(review => review.access);
  const majorityAccess = getMostCommonAccess(accessTypes);

  const getAverage = (arr: number[]) => {
    return arr.reduce((sum, num) => sum + num, 0) / arr.length;
  }

  function getMostCommonAccess(accessTypes: string[]) {
    const counts = new Map<string, number>();

    for (const type of accessTypes) {
      counts.set(type, (counts.get(type) ?? 0) + 1);
    }

    const max = Math.max(...counts.values()); // check this

    const types = [...counts.entries()]
      .filter(([, count]) => count === max)
      .map(([type]) => type);

    return {
      types,
      numVotes: max
    };
  }

  return (
    <div className='p-4 pr-20'>
      <img /> { /** TODO: add actual images from DB **/}
      <h2>
        <b>Name: </b>
        { piano.name } </h2>
      <h2>
        <b>Rating: </b>
        { getAverage(ratings).toFixed(2) + ' (' + ratings.length + ')' } </h2>
      <h2>
        <b>Tuning: </b>
        { getAverage(tunings).toFixed(2) } average tuning score </h2>
      <h2>
        <b>Access: </b>
        {
          majorityAccess.types.length === 1 ? majorityAccess.types :
          'Tied between ' + majorityAccess.types.join(' and ')
        } according to most users
        { ' (' + majorityAccess.numVotes + ')' }
      </h2>
      <h2>
        <b>Distance: </b>
        TODO: ADD THIS LATER
      </h2>
      <button className='block w-1/2 mx-auto my-4 bg-blue-500 text-white
        font-medium py-2 rounded hover:bg-blue-600 transition'
      > Directions </button>
    </div>
  )
}