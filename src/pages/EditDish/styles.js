import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.4rem auto;
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
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      width: clamp(20vw, 60vw, 70vw);

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
      width: 10rem;
      margin: 3.2rem 0;
      padding: 1.2rem 2.4rem;
    }

    .remove {
      width: 15rem;
      margin-right: 1.5rem;
      background: ${({ theme }) => theme.COLORS.DARK_600};
    }
  }
`;
