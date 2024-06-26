import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  margin-top: 56px;
`;

export const AppContainer = styled.div`
  width: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin-bottom: 24px;
  color: var(--lilac-900);
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 24px;
`;
