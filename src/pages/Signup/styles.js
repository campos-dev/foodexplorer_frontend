import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  #logo {
    display: flex;
    align-items: center;
    gap: 1.9rem;

    margin-right: 17%;

    > img {
      width: 4.7rem;
      height: 4.7rem;
    }

    > p {
      font-size: 4.2rem;
      font-weight: 700;
    }
  }

  #userInfoBox {
    display: flex;
    flex-direction: column;

    padding: 6.4rem;

    border-radius: 1.6rem;

    background: ${({ theme }) => theme.COLORS.DARK_600};

    h1 {
      text-align: center;
    }

    p {
      margin: 3.2rem 0 0.8rem;
    }

    button:first-of-type {
      margin-top: 3.2rem;
      padding: 1.2rem 0;
    }

    button:last-of-type {
      margin-top: 3.2rem;
    }
  }
`;
