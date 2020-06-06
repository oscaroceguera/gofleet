import React from 'react'
import Modal from 'react-modal'
import Styled from 'styled-components'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minWidth: "20%",
    padding: 0,
  },
};

const TitleBar = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ecf0f1;
  padding: 0.5em;

  p {
    color: #5c5c5c;
    font-size: 1.5em;
  }
`;

const Container = Styled.div`
  padding: .5em 0;
  margin-bottom: .5em;
`;

Modal.setAppElement("#root");

const ModalComponent = (props) => {


  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.showjobModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <TitleBar>
        <p>{props.title}</p>
        <button onClick={props.showjobModal}>close</button>
      </TitleBar>
      <Container>{props.children}</Container>
    </Modal>
  );
}

export default ModalComponent;