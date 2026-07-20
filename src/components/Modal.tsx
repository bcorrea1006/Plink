interface ModalProps {
  onToggleModal: () => void;
}

export default function Modal({
  onToggleModal,
}: ModalProps ) {
  return (
    <div>
      <h1>This is the modal window</h1>
      <button onClick={onToggleModal}>X</button>
    </div>
  );
}