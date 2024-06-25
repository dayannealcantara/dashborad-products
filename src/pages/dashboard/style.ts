
import styled from 'styled-components';


export const AppContainer = styled.div` 
  width:100vh;
  display: flex;
  flex-direction: column;  
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  color: var(--lilac-900);
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 24px;
`;