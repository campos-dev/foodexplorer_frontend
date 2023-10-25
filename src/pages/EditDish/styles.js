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
    grid-area: "content";
    overflow-y: auto;
  }
`;

export const Content = styled.form`
  width: 100%;
  padding: 0 12rem;

  #backButton {
    font-family: "Poppins", sans-serif;
    font-size: 2.4rem;

    margin-top: 2.4rem;

    display: inline-flex;
    align-items: center;

    gap: 1rem;

    > span {
      font-weight: 100;
      font-size: 4.4rem;

      padding-top: 0.5rem;
    }
  }

  #addDishContainer {
    display: flex;
    flex-direction: column;
  }

  h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin-top: 2.4rem;
  }

  p {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    margin: 3.2rem 0 1.6rem;
  }

  input:not(#TagsContainer input),
  textArea,
  select,
  label {
    border: none;
    border-radius: 0.8rem;
    background: ${({ theme }) => theme.COLORS.DARK_800};

    &:focus {
      outline: none;
    }
  }

  .rows {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3.2rem;

    label {
      padding: 1.2rem 2.5vw;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      cursor: pointer;

      > svg {
        font-size: 2.4rem;
      }

      > p {
        font-family: "Poppins", sans-serif;
        white-space: nowrap;
        font-size: 1.4rem;
        margin: 0;
      }
    }

    input[type="file"] {
      display: none;
    }

    #dishNameBox > input {
      width: clamp(20vw, 30vw, 46vw);

      padding: 1.6rem 0 1.6rem 1.4rem;
    }

    #dishCategory > select {
      width: clamp(10vw, 20vw, 30vw);
      padding: 1.3rem 1.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};

      font-family: "Roboto", sans-serif;
      font-size: 1.6rem;
    }

    #TagsContainer {
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      width: clamp(20vw, 55vw, 70vw);

      overflow-x: auto;

      border-radius: 0.8rem;
      background: ${({ theme }) => theme.COLORS.DARK_800};
    }

    #priceBox > input {
      padding: 1.6rem 1.4rem;
    }
  }

  textarea {
    width: 100%;
    height: 20rem;
    resize: none;
    padding: 1.4rem;
  }

  .editButtons {
    display: flex;
    align-self: flex-end;

    .Btn {
      width: 10vw;
      margin: 3.2rem 0;
      padding: 1.2rem 2.4rem;

      font-size: 1vw;
    }

    .remove {
      width: 15vw;
      margin-right: 1.5rem;
      background: ${({ theme }) => theme.COLORS.DARK_600};
    }
  }

  @media (max-width: ${BREAKPOINTS.xlg}) {
    #TagsContainer {
      > div {
        width: 16vw;
      }
    }
    #priceBox {
      > input {
        width: 15vw;
      }
    }
    .editButtons {
      .Btn {
        font-size: 1.5vw;
      }
    }
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    display: flex;
    flex-direction: column;

    #backButton {
      font-size: 4vw;
      margin: 4vw 0 2vw;
      > span {
        font-size: 7vw;
      }
    }

    h1 {
      font-size: 5.5vw;
      margin-top: 0;
    }

    .rows {
      flex-direction: column;
      align-items: flex-start;
      width: 100%;

      input,
      textArea,
      select,
      label,
      #dishNameBox > input,
      #dishCategory > select,
      #TagsContainer {
        height: 8vw;
        width: 100%;
      }

      #TagsContainer {
        height: auto;
        > div {
          width: 30vw;
          > input {
            font-size: 3vw;
          }
        }
      }

      label {
        padding: 0 3vw;

        justify-content: flex-start;

        > svg {
          font-size: 5vw;
        }

        > p {
          font-size: 3vw;
        }
      }

      #dishCategory > select,
      input::placeholder,
      input {
        font-size: 3vw;
      }

      > div {
        width: 100%;
      }

      p {
        font-size: 4vw;
      }
    }
    textarea::placeholder,
    textarea,
    p {
      font-size: 3vw;
    }

    #saveBtn {
      width: 20vw;
      height: 7vw;
      margin-bottom: 7vw;
    }

    .editButtons {
      .Btn {
        font-size: 3vw;
        width: 20vw;
        margin: 7vw 0;
        height: 7vw;
      }

      .remove {
        width: 25vw;
        margin-right: 5vw;
      }
    }
  }
`;
