interface CancelButtonProps {
  onCancel: () => void;
}

export function CancelButton({
  onCancel
}: CancelButtonProps) {
  return (
    <button
      onClick={onCancel}
      className="
        pointer-events-auto bg-red-500 hover:bg-red-600 text-black
        hover:text-white font-bold border transition rounded-full
        aspect-square w-14 absolute top-6 left-6"
      >
        X
    </button>
  );
}