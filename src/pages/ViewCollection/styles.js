import { lighten } from "polished";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.section`
  padding: 1.5rem 2.5rem;

  display: grid;
  grid-auto-rows: min-content;
  gap: 0.75rem;

  .actions {
    padding: 0 1rem 1rem;
  }
`;

export const Back = styled.div`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  align-items: center;
  gap: 0.5rem;
  padding: 0 1rem 1rem;

  width: min-content;

  color: #382268;
  cursor: pointer;
`;

export const Head = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  grid-template-rows: repeat(2, min-content);
  align-items: center;
  gap: 0.5rem;
  padding: 0 1rem 1rem;

  border-bottom: 1px solid #c4c4c4;

  h1 {
    grid-column: 1 / 3;
  }

  p {
    font-weight: 300;
    color: #382268;
  }
`;

export const ReviewButton = styled.div`
  background-color: #846db4;
  color: white;
  border-radius: 2rem;

  display: grid;
  grid-template-columns: repeat(2, min-content);
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  width: min-content;
  white-space: nowrap;

  font-size: 0.95rem;

  padding: 0.35rem 1rem;

  opacity: 50%;
  box-shadow: 0px 5px 15px rgba(147, 158, 175, 0.26);

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

export const CardsContainer = styled.div`
  padding: 0 1rem 1rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, 15rem);
  gap: 3rem;
`;

export const NewCard = styled(Link)`
  display: grid;
  grid-template-rows: repeat(2, min-content);
  gap: 0.5rem;
  align-items: center;
  justify-items: center;

  cursor: pointer;

  div {
    width: 8rem;
    height: 9.5rem;
    border-radius: 0.5rem;

    border: 2px dashed #777085;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 2rem;
      height: 2rem;
      color: #9a92ab;
    }
  }

  p {
    color: #382268;
  }
`;

export const Card = styled(Link)`
  display: grid;
  grid-template-rows: repeat(3, min-content);
  grid-template-columns: min-content min-content;
  gap: 0 0.75rem;
  align-items: center;
  justify-items: center;
  color: #444345;
  cursor: pointer;

  div {
    display: grid;
    align-items: center;
    justify-items: center;

    text-align: center;
  }

  .front {
    width: 7.25rem;
    height: 9.5rem;
    border-radius: 0.5rem;

    border: 2px solid #777085;
    background-color: ${({ color }) => color};

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 1;

    svg {
      width: 2rem;
      height: 2rem;
      color: #9a92ab;
    }
  }

  .back {
    width: 7.25rem;
    height: 9.5rem;

    border-radius: 0.5rem;

    background-color: ${({ color }) => lighten(0.05, color)};

    border: 2px solid #777085;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.26);
  }
`;

export const EditButton = styled(Link)`
  display: grid;
  grid-template-columns: min-content min-content;
  white-space: nowrap;
  gap: 0.25rem;

  color: #382268;
`;
