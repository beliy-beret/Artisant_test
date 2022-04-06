import styled from 'styled-components';

const AppContainer = styled.div`
  width: 95%;
  max-width: 1600px;
  height: 100%;
  margin: 0 auto;  
  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 1rem;
  }
`;

export default AppContainer;
