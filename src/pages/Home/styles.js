import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 12.4rem auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    width: 100%;
    grid-area: "content";
    overflow-y: auto;

    display: flex;
    flex-direction: column;

    #searchFilter {
      display: flex;
      align-items: center;

      gap: 2rem;

      > button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        font-size: 2.3rem;

        background: ${({ theme }) => theme.COLORS.TOMATO_100};
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 0.5rem;

        > svg {
          padding-top: 0.3rem;
          font-size: 1.5rem;
        }
      }
    }

    > footer {
      margin-top: auto;
    }
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    main {
      #searchFilter {
        h3 {
          font-size: 2.7vw;
        }

        button {
          font-size: 2.5vw;

          svg {
            padding-bottom: 0.3rem;
            font-size: 2vw;
          }
        }
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 10%;
  margin-bottom: 4.6rem;

  #banner {
    height: 25vw;

    display: flex;
    justify-content: right;
    align-items: center;

    position: relative;

    margin-top: 8vw;
    margin-bottom: 5vw;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.COLORS.GRADIENT_200};

    > img {
      position: absolute;
      height: 30vw;

      bottom: 0rem;
      left: -6.3rem;
    }

    > #textContainer {
      margin-right: 3vw;

      h1 {
        font-size: 4.2rem;
        font-weight: 500;
      }

      p {
        font-size: 1.6rem;
        font-weight: 100;
      }

      @media (max-width: ${BREAKPOINTS.sm}) {
        padding-left: 45rem;
        h1 {
          line-height: 4rem;
        }
        p {
          padding-top: 2rem;
          font-size: 2.6vw;
        }
      }
    }
  }
`;
