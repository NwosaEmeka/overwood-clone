import styled from "styled-components"
import { Link } from "react-router-dom"

export const NextCardHeader = styled.h3`

`
export const NextCardLink = styled(Link)`
  font-size:0.82rem;
  font-weight:500;
  color: ${props => props.theme.links_clr};
  display: inline-block;
  margin: 1rem 0;
  transition: all 0.25s linear;

  &:hover{
    color: ${props => props.theme.light_green};
  }
`