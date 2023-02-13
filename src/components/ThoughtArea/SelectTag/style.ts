import styled from "styled-components";

export const SelectItem = styled.li`
  &:before {
    content: '';
    width: 1ex;
    height: 1ex;
    margin-right: 1ex;
    background-color: var(--color);
    display: inline-block;
    border-radius: 50%;
    vertical-align: middle;
  }
`
