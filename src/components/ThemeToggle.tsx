import SunIcon from '../assets/sun-solid-full.svg';
import MoonIcon from '../assets/moon-regular-full.svg';

type ThemeToggleProps = {
  isLight: boolean; // true = light, false = dark
  onToggle: () => void;
};

export default function ThemeToggle({ isLight, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={`w-10 h-10 flex items-center justify-center text-white rounded-full transition ${
        isLight
          ? 'bg-slate-800 hover:bg-slate-700'
          : 'bg-yellow-400 hover:bg-yellow-500'
      }`}
    >
      <img
        src={isLight ? MoonIcon : SunIcon}
        alt={isLight ? 'Dark Mode' : 'Light Mode'}
        className='w-5 h-5'
      />
    </button>
  );
}
