interface CancelButtonProps {
  onCancel: () => void;
  className?: string;
}

export function CancelButton({
  onCancel,
  className
}: CancelButtonProps) {
  return (
    <button
      onClick={onCancel}
      className={ className + ' pointer-events-auto bg-red-500 ' +
        'hover:bg-red-600 text-black hover:text-white font-bold border ' +
        'transition rounded-full aspect-square w-14'}
      >
        X
    </button>
  );
}