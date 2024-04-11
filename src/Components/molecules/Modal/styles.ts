import styled from "styled-components";

export const ModalOverLay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalContainer = styled.div`
  position: relative;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 500px;
  height: 500px;
`;

export const ModalHeader = styled.div`
  display: flex;
  margin-bottom: 1rem;
  & .close-button {
    margin-left: auto;
  }
`;
