import styled from "styled-components"

export const ShowcaseContainer = styled.section`
  background-color: #fff;
  padding: 10rem ${props => props.theme.pd_xl} 6rem;
  height: auto;
  display:flex;

  @media (max-width: 62em){
    display:block;
  }
  @media (max-width: 37em){
    padding: 6rem ${props => props.theme.pd_sm} 3rem;
  }
`
export const ShowcaseImge = styled.div`
  flex:50%;
  background: url("/images/mission.jpg") center center/cover no-repeat;
  min-height:550px;
`
export const ShowcaseContent = styled.div`
  flex:50%;
  background: ${props => props.theme.blue};
  color: #fff;
  padding: 3rem 4rem;
`
export const ShowcaseHeader = styled.p`
  text-transform:uppercase;
  color:#c0c0c0;
  font-weight: 800;
  font-size:0.8rem;
`
export const ShowcaseTitle = styled.h2`
  text-transform:capitalize;
  font-size:2.5rem;
  line-height: 1.1;
  margin: 1rem 0 1.5rem;
`
export const ShowcaseText = styled.p`
  margin: ${props => props.position? "0" :"1.2rem" } 0;
  font-weight:600;
  font-size:0.85rem;
`
export const Signature = styled.div`
  margin: 7rem 1rem 1rem;
`
export const Name = styled.h2`
  font-size: 1.2rem;
`
