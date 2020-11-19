import styled from "styled-components"
import {Link} from "react-router-dom"


export const CardHeader = styled.h3`
  color: ${props => props.color};
`
export const CardText = styled.p`
  font-size:0.8rem;
  font-weight: 500;
  margin: 1rem 0;
`

export const CardLink = styled(Link)`
  font-size:0.8rem;
  font-weight:700;
  color: ${props => props.theme.light_green};
  text-decoration: underline;
  transition: all 0.25s linear;

  &:hover{
    color: ${props => props.theme.links_clr};
  }
`