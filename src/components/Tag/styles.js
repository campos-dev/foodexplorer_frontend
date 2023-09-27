import styled from "styled-components";

export const Container = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;

  border-radius: 0.5rem;
  padding: 0.4rem 0.8rem;
  margin-right: 1.2rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
`;
