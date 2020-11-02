import styled from 'styled-components'

export const Button = styled.button`
  outline: none;
  border: none;
  padding:1rem 2.5rem;
  background-color: ${props => props.primary? props.theme.links_clr: props.theme.light_green};
  color: #fff;
  font-weight:800;
  font-size: 0.75rem;
  text-transform: uppercase;
  text-align: center;
  margin-right: ${props => props.primary ? "auto" : "4px"};
  margin-top: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.25s linear;

  &:hover{
    background-color: ${props => props.theme.blue}
  };
  
  @media(max-width: 62em){
    width: ${props => props.navbtn? "100%": "auto"};
    display: block;
    margin: 0;
  }
`