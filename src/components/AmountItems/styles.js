import styled from "styled-components";

export const Container = styled.div`
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
`;
