import styled from 'styled-components'

export const HeaderCardWrapper = styled.div`
  height: auto;
  width:100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  padding-bottom: 1.2rem;
  margin-top: -4.4rem;
  z-index:20;

  @media (max-width: 42em){
    margin-top: -8rem;
  }
`;