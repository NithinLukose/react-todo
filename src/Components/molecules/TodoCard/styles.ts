import styled from "styled-components";

export const TodoCardContainer = styled.div`
  padding: 1rem;
  box-shadow: 0px 1px 5px 0px rgba(196, 194, 196, 1);
  background-color: white;
  border-radius: 4px;
  .todo-description {
    overflow: hidden;
    white-space: nowrap; /* Prevent text from wrapping */
    text-overflow: ellipsis; /* Show ellipsis (...) if text overflows */
  }
`;
