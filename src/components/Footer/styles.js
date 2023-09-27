import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 7.7rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 4.8rem;

  background: ${({ theme }) => theme.COLORS.DARK_600};

  padding: 0 12.3rem;

  > #logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    > p {
      font-weight: 700;
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_700};
    }
  }

  span {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }
`;
