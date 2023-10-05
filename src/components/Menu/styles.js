import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakpoints";

export const Container = styled.aside`
  &[data-menuisopen="true"] {
    transform: translateY(0);
  }

  display: flex;
  flex-direction: column;

  transform: translateY(-100%);
  transition: transform 0.3s ease-in-out;

  width: 100%;
  height: 100vh;

  position: absolute;
  z-index: 3;

  background: ${({ theme }) => theme.COLORS.DARK_100};

  #closeMenuBar {
    height: 12.4rem;

    display: flex;

    padding: 2% 10% 0;
    background: ${({ theme }) => theme.COLORS.DARK_700};

    p {
      display: flex;
      align-items: center;
      gap: 1vw;

      font-size: 3vw;

      > svg {
        font-size: 4.5vw;
        cursor: pointer;
      }
    }
  }

  .contentBox {
    padding: 5.6rem 10%;
  }

  #line {
    margin-top: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
  }

  @media (min-width: ${BREAKPOINTS.lg}) {
    &[data-menuisopen="true"] {
      display: none;
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  padding-top: 5.6rem;
  font-weight: 100;
  font-size: 4vw;
  cursor: pointer;
`;
