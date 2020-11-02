import styled from 'styled-components'
import {Link} from "react-router-dom"

export const Card = styled.div`
  padding: 1.5rem;
  margin:0.8rem;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,0.1);
  transition: all 0.4s ease;

  &:hover{
    background-color: ${props => props.primary? props.theme.blue: ""};
    color:${props => props.primary ? "#fff" : ""};
    box-shadow: ${props => props.primary? "": " 3px 3px 20px 3px rgba(0,0,0,0.2)"};
  }
`
export const CardHeader = styled.h3`
  margin: 1rem 0;
`
export const CardText = styled.p`
  font-weight:500;
  font-size:0.8rem;
`
export const CardLink = styled(Link)`

`