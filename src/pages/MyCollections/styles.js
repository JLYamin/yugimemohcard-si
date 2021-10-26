import { darken, desaturate } from "polished";
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

export const Head = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: end;
  padding: 0 1rem 1rem;

  border-bottom: 1px solid #c4c4c4;
`;

export const SearchInput = styled.div`
  display: grid;
  grid-template-columns: min-content min-content;

  input {
    width: 15rem;
    padding: 0.25rem 0.75rem;
    border-radius: 2rem;
    border: 2px solid #846db4;
    box-shadow: 0px 5px 15px rgba(147, 158, 175, 0.26);

    &:focus {
      outline: none;
    }
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

export const CollectionsContainer = styled.div`
  padding: 0 1rem 1rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, 8rem);
  gap: 3rem;
`;

export const NewCollection = styled(Link)`
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

export const Collection = styled.div`
  display: grid;
  grid-template-rows: repeat(3, min-content);
  align-items: center;
  justify-items: center;

  position: relative;

  cursor: pointer;

  .front {
    width: 7.25rem;
    height: 9.5rem;
    border-radius: 0.5rem;

    border: 2px solid #777085;
    background-color: ${({ color }) => color};

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    left: -0.5rem;

    z-index: 1;

    svg {
      width: 2rem;
      height: 2rem;
      color: #9a92ab;
    }
  }

  .back {
    position: absolute;
    width: 7.25rem;
    height: 9.5rem;
    top: 0;
    left: 0.75rem;
    border-radius: 0.5rem;

    background-color: ${({ color }) => darken(0.05, desaturate(0.5, color))};

    border: 2px solid #777085;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.26);
  }

  p {
    color: #382268;
    margin-top: 0.5rem;
  }

  span {
    color: #513b81;
    font-size: 0.95rem;
    font-weight: 300;
  }
`;
