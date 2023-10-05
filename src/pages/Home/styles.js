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

    margin-top: 15vw;
    margin-bottom: 8vw;
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
