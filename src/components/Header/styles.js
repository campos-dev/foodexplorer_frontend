import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakpoints";

export const Container = styled.div`
  grid-area: header;
  width: 100%;
  height: 12.4rem;

  background: ${({ theme }) => theme.COLORS.DARK_600};

  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: "header";

  padding: 2.4rem 12rem;

  > #buttonMenuCellphone,
  #buttonOrdersCellphone,
  #amountButtonOrderCellphone {
    display: none;
  }

  > div:nth-of-type(2) {
    max-width: 50vw;
  }

  > button:nth-of-type(2) {
    white-space: nowrap;
    max-width: 25rem;
    margin: 0 4.2rem;

    > svg {
      font-size: clamp(1.6rem, 5vw, 3.2rem);
    }
  }

  #logoBox {
    margin-right: 3.2rem;

    display: flex;
    flex-direction: column;
    > span {
      color: ${({ theme }) => theme.COLORS.CAKE_200};
      font-size: 1.2rem;
      align-self: self-end;
      margin-top: -1rem;
    }
  }

  @media (max-width: ${BREAKPOINTS.lg}) {
    padding: 0 10%;
    height: 12.4rem;

    div:nth-child(3),
    #buttonLogout,
    #buttonOrders,
    #amountButtonOrderCellphone {
      display: none;
    }

    #addDish {
      font-size: 2rem;
    }

    #buttonMenuCellphone {
      display: flex;

      background: none;
      border: none;
      font-size: 4vw;
    }

    #logo {
      justify-content: center;
      margin: 0;
    }

    #buttonOrdersCellphone {
      display: flex;
      position: relative;
      padding: 0;

      background: none;
      border: none;
      font-size: 5vw;

      > svg {
        margin: 0;
      }
    }

    #amountButtonOrderCellphone {
      display: flex;
      position: absolute;

      font-size: 2vw;

      padding: 0.5vw 1vw;

      background: ${({ theme }) => theme.COLORS.TOMATO_100};
      border-radius: 50%;
      top: 2.5vw;
      right: 9vw;
    }
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    #buttonMenuCellphone {
      font-size: 6vw;
    }
    #buttonOrdersCellphone {
      font-size: 7vw;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: bold;
  white-space: nowrap;

  img {
    height: 4.5rem;
    margin-right: 1rem;
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    font-size: 4rem;
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    font-size: clamp(1.8rem, 5vw, 3.2rem);
  }
`;
