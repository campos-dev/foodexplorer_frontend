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

  main {
    width: 100%;
    height: auto;
    grid-area: "content";
    overflow-y: auto;
  }
  @media (max-width: ${BREAKPOINTS.lg}) {
    main {
      display: flex;
      flex-direction: column;

      > footer {
        padding: 5vw 4vw;
        margin-top: 100vw;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 12rem;

  #backButton {
    font-family: "Poppins", sans-serif;
    font-size: 2.4rem;

    margin-top: 2.4rem;

    display: flex;
    align-items: center;

    gap: 1rem;

    > span {
      font-weight: 100;
      font-size: 4.4rem;

      padding-top: 0.5rem;
    }
  }

  #itemContainer {
    height: 40rem;

    margin: 4.2rem 0;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10.7rem;

    > #imgItemContainer {
      width: 40rem;
      height: 40rem;

      > img {
        object-fit: cover;

        width: 40rem;
        height: 40rem;

        border-radius: 50%;
      }
    }

    > #aboutItemContainer {
      display: flex;
      flex-direction: column;

      > h1 {
        font-size: 4rem;
      }

      > p {
        font-family: "Poppins", sans-serif;
        font-size: 2rem;
        text-align: justify;
      }

      > #tagsContainer {
        display: flex;

        > span {
          display: inline-block;
          margin-top: 2.4rem;
        }
      }
      > #addItemsContainer {
        height: 4.8rem;
        width: 100%;

        margin-top: 4.8rem;

        display: flex;
        align-items: center;

        > button:first-of-type {
          width: 11rem;
        }

        > button:last-of-type {
          margin-left: 3.2rem;
          background-color: ${({ theme }) => theme.COLORS.DARK_600};
        }
      }
    }
  }

  @media (max-width: ${BREAKPOINTS.lg}) {
    #itemContainer {
      flex-direction: column;

      #imgItemContainer {
        text-align: center;
        width: 30vw;
        height: 30vw;

        > img {
          width: 30vw;
          height: 30vw;
        }
      }

      #aboutItemContainer {
        text-align: center;

        h1 {
          font-size: 6vw;
          margin-bottom: 2vw;
        }

        p {
          font-size: 3vw;
          text-align: center;
        }
        > #tagsContainer {
          margin: 3vw 0;
          flex-wrap: wrap;
          > span {
            font-size: 3vw;
          }
        }
        #addItemsContainer {
          justify-content: space-between;

          div:first-of-type {
            height: 20vw;
            width: 20vw;
            > button {
              font-size: 6vw;
            }
            > p {
              font-size: 4vw;
            }
          }

          > button:first-of-type {
            white-space: nowrap;
            margin-left: 20vw;
            padding: 0 10vw;
            font-size: 3vw;
          }

          > button:last-of-type {
            white-space: nowrap;
            font-size: 3vw;
          }
        }
      }
    }

    @media (max-width: ${BREAKPOINTS.xmd}) {
      #backButton {
        font-size: 4vw;
      }
    }
  }
`;
