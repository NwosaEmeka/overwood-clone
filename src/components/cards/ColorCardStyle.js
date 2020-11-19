import styled from "styled-components"


export const SectionWrapper = styled.section`
  background-color: ${props => props.theme.light_bg_clr};
  padding: 4rem ${props => props.theme.pd_xl};

  @media (max-width: 37em){
    padding: 4rem ${props => props.theme.pd_sm};
  }
  @media (max-width:32em){
    padding: 4rem 0;
  }
`
export const SectionInfo = styled.p`
  text-transform:uppercase;
  font-weight:700;
  font-size:0.8rem;
  color: ${props => props.theme.dark};
`

export const Sectionheader = styled.h1`
  font-size:2.5rem;
  margin-bottom: 1.5rem;
`
export const Cardwrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`
export const Card = styled.div`
  padding: 2rem;
  background-color: ${props => props.theme.card_clr};
  border: 3px solid #fff;
`
export const Prytxt = styled.span`
  text-transform:uppercase;
  font-weight: 700;
  color: ${props => props.theme.light_green};
`
export const Sectxt = styled.span`
  text-transform:uppercase;
  font-weight: 700;
  color: ${props => props.theme.links_clr};
`