import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 10.4rem;

  background: ${({ theme }) => theme.COLORS.DARK_600};

  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: "header";

  padding: 2.4rem 12rem;

  > button {
    max-width: 22rem;
    margin-right: 3.2rem;

    > svg {
      font-size: clamp(1.6rem, 5vw, 3.2rem);
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: bold;
  white-space: nowrap;

  img {
    font-size: clamp(1.8rem, 5vw, 3rem);
    margin-right: 1rem;
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    font-size: clamp(1.8rem, 5vw, 3.2rem);
  }
`;
