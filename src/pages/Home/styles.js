import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.4rem auto;
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

  padding: 0 12rem;

  #banner {
    width: 110rem;
    height: 26rem;

    display: flex;
    justify-content: right;
    align-items: center;

    position: relative;

    margin-top: 16.4rem;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.COLORS.GRADIENT_200};

    > img {
      position: absolute;

      bottom: 0rem;
      left: -5.3rem;
    }

    > #textContainer {
      margin-right: 10rem;

      h1 {
        font-size: 4.2rem;
        font-weight: 500;
      }

      p {
        font-size: 1.6rem;
        font-weight: 100;
      }
    }
  }
`;
