import styled from 'styled-components'
import { VariablesColor } from '../../styles'

export const FormJobs = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${VariablesColor.secondaryColor};
  padding: 32px;
  border-radious: 12px;
  margin-top: 40px;
`

export const InputJobs = styled.input`
  padding: 0 16px;
  outline-color: ${VariablesColor.mainColor};
`
export const ButtonJobs = styled.button`
  background-color: ${VariablesColor.mainColor};
  border: 1px solid ${VariablesColor.mainColor};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${VariablesColor.secondaryColor};
  margin-left: 8px;
  cursor: pointer;
`
