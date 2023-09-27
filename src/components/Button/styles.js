import styled from "styled-components";

export const Container = styled.button`
  height: 100%;

  padding: 0 1.6rem;

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
