import styled from "styled-components";

export const Container = styled.div`
  width: 30.4rem;
  height: 46.2rem;

  padding: 0 2.4rem;

  border-radius: 0.8rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-right: 2.7rem; */

  background: ${({ theme }) => theme.COLORS.DARK_200};

  position: relative;

  > button {
    position: absolute;

    top: 1.6rem;
    right: 1.8rem;

    background: none;
    border: none;
  }

  > #imgContainer {
    width: 17.6rem;
    height: 17.6rem;

    margin-top: 2.4rem;

    img {
      object-fit: cover;
    }
  }

  > h1 {
    font-size: 2.4rem;
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

    > #changeNumBox {
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-right: 1.6rem;
    }

    .changeNum {
      font-family: "Roboto", sans-serif;
      font-size: 2.4rem;

      margin-right: 1.4rem;

      background: none;
      border: none;
    }

    p {
      font-size: 2rem;
      margin-right: 1.4rem;
    }
  }
`;
