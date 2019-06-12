import React from "react";
import { StyledWrapper, Overlay, CloseButton } from "./style";

const Modal = ({ content, setModal }) => {
  const closeModal = () => content && setModal(false);

  return (
    <>
      <Overlay visible={content} onClick={closeModal} />
      <StyledWrapper visible={content}>
        <CloseButton onClick={closeModal} />
        {content}
      </StyledWrapper>
    </>
  );
};

export default Modal;
