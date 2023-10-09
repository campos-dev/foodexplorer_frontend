import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  #logo {
    display: flex;
    align-items: center;
    gap: 1.9rem;

    margin-right: 17%;

    > img {
      width: 4.7rem;
      height: 4.7rem;
    }

    > p {
      font-size: 4.2rem;
      font-weight: 700;
    }
  }

  #userInfoBox {
    width: 32%;

    display: flex;
    flex-direction: column;

    padding: 6.4rem;

    border-radius: 1.6rem;

    background: ${({ theme }) => theme.COLORS.DARK_600};

    h1 {
      text-align: center;
    }

    p {
      margin: 3.2rem 0 0.8rem;
    }

    button:first-of-type {
      margin-top: 3.2rem;
      padding: 1.2rem 0;
    }

    a {
      text-align: center;
      font-size: 1.4rem;
      margin-top: 3.2rem;
    }
  }

  @media (max-width: ${BREAKPOINTS.md}) {
    display: flex;
    flex-direction: column;

    #logo {
      margin: 3vw 0 0 0;
    }

    #userInfoBox {
      width: 60%;

      padding: 2vw;

      background: none;

      div {
        height: 7vw;
      }

      h1 {
        font-size: 3vw;
      }

      a,
      p {
        margin: 2.2rem 0 0.8rem;
        font-size: 2vw;
      }
      button:first-of-type {
        padding: 3.5vw 0;
        margin-top: 5vw;
      }
    }
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    #userInfoBox {
      h1 {
        font-size: 5vw;
      }

      a,
      p {
        font-size: 3vw;
      }

      button {
        padding-top: 10rem;
        height: 7vw;
        font-size: 3vw;
      }
    }
  }
`;
