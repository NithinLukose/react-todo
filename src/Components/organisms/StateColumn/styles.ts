import styled from "styled-components";

export const ColumnContainer = styled.div`
  width: 200px;
  min-height: 500px;
  background-color: #e8e6e6;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 5px;
  padding: 0.5rem;
`;

export const StateContainer = styled.div<{
  color: string;
  backgroundColor: string;
}>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  width: max-content;
  padding: 4px;
  border-radius: 2px;
`;
