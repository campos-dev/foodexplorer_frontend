import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakpoints";

export const Container = styled.div`
  width: 32.4rem;
  height: 46.2rem;

  padding: 0 6.4rem;

  border-radius: 0.8rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${({ theme }) => theme.COLORS.DARK_200};

  position: relative;

  > .editFavIcons {
    position: absolute;

    top: 1.6rem;
    right: 1.8rem;

    background: none;
    border: none;

    > svg {
      height: 2vw;
    }
  }

  > a {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;

    > #imgContainer {
      width: 17.6rem;
      height: 17.6rem;

      margin-top: 2.4rem;

      img {
        object-fit: cover;

        width: 17.6rem;
        height: 17.6rem;

        border-radius: 50%;
      }
    }

    > h1 {
      font-size: 2.4vw;
      font-weight: bold;

      white-space: nowrap;

      margin-top: 1.5rem;
    }

    > p {
      font-family: "Roboto", sans-serif;
      font-size: 1.4rem;

      margin-top: 1.5rem;

      text-align: center;
    }
  }

  > span {
    margin-top: 1.5rem;

    font-family: "Roboto", sans-serif;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  div {
    width: 10rem;
    height: 3.8rem;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "Roboto", sans-serif;

    margin: 1.5rem 0;
  }

  @media (max-width: ${BREAKPOINTS.xmd}) {
    width: 50.4rem;
    height: 60.2rem;
    padding: 0 2vw;

    .editFavIcons > svg {
      height: 4vw;
    }

    a {
      h1 {
        font-size: 4vw;
      }

      p {
        font-size: 3vw;
        margin-bottom: 2vw;
      }
    }

    span {
      font-size: 4vw;
      margin-bottom: 2vw;
    }
    div > div {
      margin-right: 5vw;
    }

    button {
      font-size: 3vw;
    }
  }
`;
