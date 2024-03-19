import styled from 'styled-components'
import { VariablesColor } from '../../styles'

export const JobLiGen = styled.li`
  border: 1px solid ${VariablesColor.mainColor};
  background-color: ${VariablesColor.secondaryColor};
  color: ${VariablesColor.mainColor};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: ${VariablesColor.mainColor};
    color: ${VariablesColor.secondaryColor};

    a {
      border-color: ${VariablesColor.mainColor};
      background-color: ${VariablesColor.secondaryColor};
      color: ${VariablesColor.mainColor};
    }
  }
`
export const TitleJob = styled.h3`
  font-weight: bold:
  margin-bottom: 16px;
`

export const UlJob = styled.ul``

export const LiCommonJob = styled.li``

export const JobLink = styled.a`
  border-color: ${VariablesColor.secondaryColor};
  background-color: ${VariablesColor.mainColor};
  color: ${VariablesColor.secondaryColor};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`
