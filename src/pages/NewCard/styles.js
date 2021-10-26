import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.div`
  padding: 1.5rem 2.5rem;
  width: 100vw;

  display: grid;
  grid-auto-rows: min-content;
  grid-template-columns: 3fr 1fr;
  gap: 0.75rem;

  form {
    padding: 2rem 1rem 1rem;

    display: grid;
    gap: 0.75rem;
  }

  aside {
    display: grid;
    grid-template-rows: repeat(4, min-content);
    justify-items: center;
    gap: 0.5rem;

    padding: 2rem 1rem 1rem;

    p {
      color: #444345;
    }
  }
`;

export const Head = styled.div`
  padding: 0 1rem 1rem;
  grid-column: 1 / 3;

  border-bottom: 1px solid #c4c4c4;
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

export const FormInput = styled.div`
  display: grid;
  grid-template-rows: min-content min-content;
  gap: 0.5rem;

  label {
    color: #382268;

    span {
      font-size: 0.9rem;
      font-weight: 300;
    }
  }

  input,
  textarea,
  select {
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    border: 2px solid #846db4;
    box-shadow: 0px 5px 15px rgba(147, 158, 175, 0.26);
    background-color: white;
    height: 2rem;

    &:focus {
      outline: none;
    }
  }

  textarea {
    resize: none;
    width: 100% !important;
    min-height: 5rem;
  }

  select {
    -webkit-appearance: none;
    appearance: none;
  }
`;

export const Button = styled.button`
  background-color: #846db4;
  color: white;
  border-radius: 2rem;

  width: 8rem;
  white-space: nowrap;
  justify-self: end;

  font-size: 0.95rem;

  padding: 0.35rem 1rem;
  box-shadow: 0px 5px 15px rgba(147, 158, 175, 0.26);
  border: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #6c4bb1;
  }
`;

export const Card = styled.div`
  display: grid;
  grid-template-rows: repeat(3, min-content);
  grid-template-columns: min-content min-content;
  gap: 0.25rem 0.75rem;
  align-items: center;
  justify-items: center;

  div {
    display: grid;
    align-items: center;
    justify-items: center;

    text-align: center;

    color: #4e4e4e;
  }

  .front {
    width: calc(7.25rem * 1.25);
    height: calc(9.5rem * 1.25);
    border-radius: 0.5rem;

    border: 2px solid #777085;
    background-color: ${({ color }) => color};

    word-break: break-all;
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
    width: calc(7.25rem * 1.25);
    height: calc(9.5rem * 1.25);

    border-radius: 0.5rem;

    background-color: ${({ color }) => lighten(0.05, color)};
    word-break: break-all;

    border: 2px solid #777085;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.26);
  }
`;
