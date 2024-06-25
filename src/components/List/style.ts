import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  background-color: var(--lilac-700);
  color:var(--gray);
  white-space: nowrap; 

  @media (max-width: 768px) {  
    white-space: normal;  
  }
`;

export const Th = styled.th`
  padding: 16px;
  text-align:left;

  @media (max-width: 768px) {
   padding: 8px; 
   font-size:14px;
  }
`;

export const Td = styled.td`
  padding: 16px;  
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size:14px;
    padding: 8px; 
    white-space: normal;
    overflow: visible;  
    text-overflow: clip; 
  }
`;
