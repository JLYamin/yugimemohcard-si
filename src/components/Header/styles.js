import styled from "styled-components";

export const Container = styled.header`
  display: grid;
  align-items: center;
  grid-template-columns: min-content 1fr min-content;
  gap: 5rem;

  height: 4rem;
  padding: 0.25rem 2rem;

  background-color: #846db4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  img {
    height: 2.75rem;
  }
`;

export const HeaderLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  align-items: center;
  gap: 2rem;

  white-space: nowrap;

  a {
    color: white;
    transition: 0.3s;

    &.active {
      color: #ffd79b;
    }

    &:hover {
      color: #ffd79b;
    }
  }
`;

export const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  align-items: center;
  gap: 0.5rem;

  img {
    height: 2.75rem;
    width: auto;
    border-radius: 50%;

    border: 3px solid white;
  }

  svg {
    color: white;
  }
`;
