import { useBodyScrollLock } from '../../components/hooks/useBodyScrollLock';
import { useModal } from '../../context/ModalContext';
import Icon from './Icon';

interface ModalProps {
  id: string
  children: React.ReactNode
  header?: React.ReactNode
  footer?: React.ReactNode
}

export default function Modal({ id, children, header, footer }: ModalProps) {
  const { activeModal, close } = useModal();
  useBodyScrollLock(activeModal === id);

  if (activeModal !== id) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 p-6 flex items-center justify-center" onClick={close}>
      <div className="flex flex-col overflow-hidden relative z-[100] bg-white rounded-2xl max-w-md w-full max-h-[90svh]">
        <div className="p-6 pb-0">
          <button onClick={close} className="absolute right-4 top-4 z-[1]">
            <Icon name="close" className="w-4 h-4" />
          </button>

          { header }
        </div>

        <div className="h-full px-6 overflow-y-auto">
          { children }
        </div>
        { footer && (
          <div className="p-6">
            { footer }
          </div>
        )}
      </div>
    </div>
  )
}
