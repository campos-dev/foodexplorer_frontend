import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: clamp(18%, 20%, 30%);

  margin: 0.8rem 0.8rem;
  background: ${({ theme, $isnew }) =>
    $isnew ? "transparent" : theme.COLORS.LIGHT_600};

  border: ${({ theme, $isnew }) =>
    $isnew ? `1px dashed ${theme.COLORS.LIGHT_600}` : "none"};
  border-radius: 0.8rem;

  button {
    display: flex;
    align-items: center;
    margin-right: 1.6rem;

    background: none;
    border: none;
  }

  input {
    width: 100%;
    height: 3.2rem;

    background: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    padding: 1.2rem;
    border: none;
  }
`;
