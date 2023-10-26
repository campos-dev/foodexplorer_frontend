import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4.8rem;

  font-family: "Poppins", sans-serif;
  font-size: 3.2rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  #picsCaroussel {
    display: flex;

    margin-top: 2.3rem;
  }

  #CarouselContainer {
    position: relative;
    display: flex;
    overflow: auto;
    width: 100%;
    scrollbar-width: none; /*For Firefox */
    &::-webkit-scrollbar {
      display: none; /* For Chrome, Safari and Opera */
    }
  }

  #CarouselContainer::before,
  #CarouselContainer::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 30%;
    pointer-events: none;
    z-index: 1;
  }

  #CarouselContainer::before {
    left: -1px;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.COLORS.DARK_400},
      transparent
    );
  }

  #CarouselContainer::after {
    right: -1px;
    background: linear-gradient(
      to left,
      ${({ theme }) => theme.COLORS.DARK_400},
      transparent
    );
  }

  .buttonCarousel {
    position: absolute;
    z-index: 2;
    top: -2rem;

    font-family: "Poppins", sans-serif;
    background: none;
    border: none;

    font-size: 5rem;
    font-weight: 100;

    cursor: pointer;
  }

  .buttonCarousel-prev {
    position: relative;
    /* left: 50px; */
  }

  .buttonCarousel-next {
    position: relative;
    /* right: 50px; */
  }

  .control-dots {
    display: none;
  }
`;
