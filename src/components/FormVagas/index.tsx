import { FormEvent, useState } from 'react'
import { ButtonJobs, FormJobs, InputJobs } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormJobs onSubmit={aoEnviarForm}>
      <InputJobs
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <ButtonJobs type="submit">Pesquisar</ButtonJobs>
    </FormJobs>
  )
}
export default FormVagas
