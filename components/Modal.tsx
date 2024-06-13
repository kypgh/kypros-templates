import React from "react";
import styled from "styled-components";
import useModal, { ModalState } from "../utils/hooks/useModal";

const ModalSC = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999999;
  cursor: default;
`;

const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: -1;
`;

interface ModalComponentProps {
  closeModal: () => void;
  modalData?: any;
  isOpen: boolean;
}

interface ModalProps {
  children: ({
    openModal,
  }: {
    openModal: (data?: any) => void;
  }) => React.ReactNode;
  componentToShow: React.ReactElement<ModalComponentProps>;
  onCloseModal?: () => void;
  disableBackdropClick?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  children,
  componentToShow,
  onCloseModal = () => null,
  disableBackdropClick = false,
}) => {
  const { isOpen, openModal, closeModal, data } = useModal({
    onClose: onCloseModal,
  });

  const handleOpenModal = (modalData: any) => {
    openModal(modalData);
  };

  if (isOpen) {
    return (
      <>
        {children({ openModal: handleOpenModal })}
        <ModalSC
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <ModalBg
            onClick={(e) => (!disableBackdropClick ? closeModal() : undefined)}
          />
          {React.cloneElement(componentToShow, {
            closeModal,
            modalData: data as ModalState["data"],
            isOpen,
          })}
        </ModalSC>
      </>
    );
  }

  return children({ openModal: handleOpenModal });
};

export default Modal;
