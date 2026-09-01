import type { PianoDetail } from '../types/piano';
import { motion, type HTMLMotionProps } from 'motion/react';

interface PianoPanelProps extends HTMLMotionProps<'div'> {
  isOpen: boolean;
  onClose: () => void;
  isLight: boolean;
  piano: PianoDetail
};

export function PianoPanel({
  isOpen,
  onClose,
  isLight,
  piano,
  ...motionProps
}: PianoPanelProps) {
  return (
    <motion.div {...motionProps}
      className={`
        fixed top-0 right-0 h-full w-100 shadow-xl z-1000
        ${isLight ? 'bg-white text-black' : 'bg-[#2c2c2c] text-white'}
      `}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Panel Button */}
      <div className='p-4 pr-20 border-b flex justify-between items-baseline'>
        <h2 className='text-lg font-bold'>Piano Details... </h2>
        <button onClick={onClose} className='text-gray-500 hover:text-black'>
          ✕
        </button>
      </div>
    </motion.div>
  );
}
