import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakpoints";

export const Container = styled.div`
  width: 100%;
  height: 4.8rem;

  display: flex;
  align-items: center;

  background: ${({ theme }) => theme.COLORS.DARK_900};
  border: none;
  border-radius: 0.5rem;

  > svg {
    width: 3.2rem;
    height: 3.2rem;
    margin-left: 2vw;
  }

  > input {
    width: 100%;
    height: 100%;

    padding-left: 1.4rem;

    background: transparent;
    border: none;
    outline: none;
  }

  @media (max-width: ${BREAKPOINTS.md}) {
    height: 9vw;

    > input {
      font-size: 3vw;
    }

    > svg {
      width: 5vw;
      height: 5vw;
      padding-bottom: 0.5vw;
    }

    input::placeholder {
      font-size: 3vw;
    }
  }

  @media (max-width: ${BREAKPOINTS.lg}) {
    > svg {
      margin-left: 2rem;
    }
  }
`;
