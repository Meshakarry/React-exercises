import { createContext, useContext, useState } from 'react'

type ModalID = string

type ModalContextType = {
  activeModal: ModalID | null
  open: (id: ModalID) => void
  close: () => void
}

const ModalContext = createContext<ModalContextType | null>(null)

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [activeModal, setActiveModal] = useState<ModalID | null>(null)

  const open = (id: ModalID) => setActiveModal(id)
  const close = () => setActiveModal(null)

  return (
    <ModalContext.Provider value={{ activeModal, open, close }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const ctx = useContext(ModalContext)
  if (!ctx) throw new Error('useModal must be used within a ModalProvider')
  return ctx
}
