
import styled from 'styled-components';

export const CardContainer = styled.div` 
  display:flex;
  flex-direction:column;
  gap:16px;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-left:15px solid var(--lilac-900);
  text-align:left;
  padding: 24px;
`;

export const CardTitle = styled.p`
  font-size: 16px;
  color:var(--lilac-700);
  
  @media (max-width: 768px) {
    font-size:14px;    
  }
`;

export const CardValue = styled.h2`
  font-size: 24px;
  color: var(--lilac-900);

  @media (max-width: 768px) {
    font-size:16px;    
  }
 
`;


