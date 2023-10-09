import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakpoints";

export const Container = styled.footer`
  width: 100%;
  height: 7.7rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${({ theme }) => theme.COLORS.DARK_600};

  margin-top: auto;
  padding: 0 12.3rem;

  > #logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    > p {
      font-weight: 700;
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_700};
    }

    > svg {
      height: 4.5rem;
    }
  }

  span {
    font-size: 1.4vw;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};

    @media (max-width: ${BREAKPOINTS.sm}) {
      font-size: 2.4vw;
    }
  }
`;
