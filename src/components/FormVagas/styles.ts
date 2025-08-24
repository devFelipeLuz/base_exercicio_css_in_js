import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
  gap: 8px;

  @media (max-width: 485px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`
export const Input = styled.input`
  padding: 0 16px;
  height: 40px;
  outline-color: var(--cor-principal);
`
export const BtnPesquisar = styled.button`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  cursor: pointer;
`
