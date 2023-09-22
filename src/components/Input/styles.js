import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 5.6rem;

  margin: 0 3.2rem;

  display: flex;
  align-items: center;

  background: ${({ theme }) => theme.COLORS.DARK_900};
  border: none;
  border-radius: 0.5rem;

  > svg {
    margin-left: 9rem;
  }

  > input {
    width: 100%;
    height: 100%;

    padding-left: 1.4rem;

    background: transparent;
    border: none;
    outline: none;
  }
`;
