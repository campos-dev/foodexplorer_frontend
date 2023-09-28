import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  grid-template-rows: 10.4rem auto;
  grid-template-areas:
    "header"
    "content"
    "footer";
  > main {
    width: 100%;
    overflow-y: auto;
  }
`;

export const Content = styled.div`
  grid-area: content;

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

    margin: 4.2rem 0 15rem;

    display: flex;
    align-items: center;
    gap: 4.7rem;

    > #imgItemContainer {
      width: 40rem;
      height: 40rem;

      > img {
        object-fit: cover;
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
        font-size: 2.4rem;
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
`;
