import styled from "styled-components"

export const CredentialsWrapper = styled.section`
  padding: 6.5rem ${props => props.theme.pd_xl};

  @media (max-width: 37em){
    padding: 4rem ${props => props.theme.pd_sm};
  }
`
export const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    margin-top: 1.5rem;
`
export const CredentialHeader = styled.h2`
  font-size: 2.5rem;
  text-transform: capitalize;
  line-height: 1.2;
`
export const CredentialTitle = styled.div`
  text-transform:uppercase;
  font-weight: 800;
  font-size:0.75rem;
  color: #666;
  margin-bottom:0.5rem;
`