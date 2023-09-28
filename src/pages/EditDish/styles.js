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
  width: 100%;
  grid-area: content;

  padding: 0 12rem;

  #backButton {
    font-family: "Poppins", sans-serif;
    font-size: 2.4rem;

    margin-top: 2.4rem;
    padding-left: 0;

    display: flex;
    align-items: center;

    gap: 1rem;
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

  input,
  textArea,
  select,
  label {
    border: none;
    border-radius: 0.8rem;
    background: ${({ theme }) => theme.COLORS.DARK_800};
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
      width: clamp(20vw, 40vw, 46vw);

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
      width: clamp(20vw, 60vw, 70vw);
      padding: 1.6rem 2.4rem;

      border-radius: 0.8rem;
      background: ${({ theme }) => theme.COLORS.DARK_800};

      > span {
        padding: 0.8rem 1.6rem;
        background: ${({ theme }) => theme.COLORS.LIGHT_600};
        border-radius: 0.8rem;
      }
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

  button:last-of-type {
    width: 10rem;
    margin: 3.2rem 0;
    padding: 1.2rem 2.4rem;
    align-self: flex-end;
  }
`;
