import { useState } from "react";

interface ModalProps {
  onClose?: () => void;
}

export interface ModalState {
  isOpen: boolean;
  data?: any;
}

type ModalActions = {
  openModal: (data?: any) => void;
  closeModal: () => void;
  toggleModal: () => void;
};

function useModal({
  onClose = () => null,
}: ModalProps): ModalState & ModalActions {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<any | null>(null);

  const openModal = (modalData: any) => {
    setData(modalData);
    setIsOpen(true);
  };

  const closeModal = () => {
    setData(null);
    setIsOpen(false);
    onClose();
  };

  const toggleModal = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
    if (isOpen) {
      setData(null);
      onClose();
    }
  };

  return {
    isOpen,
    data,
    openModal,
    closeModal,
    toggleModal,
  };
}

export default useModal;
