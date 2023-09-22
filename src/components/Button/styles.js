import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;

  padding: 0 1.6rem;
  margin: 3.2rem 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

  > svg {
    margin-right: 1.1rem;
  }
`;
