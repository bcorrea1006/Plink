import { CancelButton } from './CancelButton';

interface ModalProps {
  onToggleModal: () => void;
}

export function Modal({
  onToggleModal,
}: ModalProps ) {

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/50 backdrop-blur-sm">
      <div className={'pointer-events-auto absolute max-w-lg mx-4 h-3/4 z-10002 text-black bg-white rounded-2xl shadow-lg flex flex-col justify-between items-center'}>
        <CancelButton onCancel={onToggleModal} className='absolute top-6 left-6'/>
        <h1>This is the modal window</h1>
      </div>
    </div>
  );
}