import { JobLiGen, JobLink, LiCommonJob, TitleJob, UlJob } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <JobLiGen>
    <TitleJob>{props.titulo}</TitleJob>
    <UlJob>
      <LiCommonJob>Localizacao: {props.localizacao}</LiCommonJob>
      <LiCommonJob>Senioridade: {props.nivel}</LiCommonJob>
      <LiCommonJob>Tipo de contratacao: {props.modalidade}</LiCommonJob>
      <LiCommonJob>
        Salário: {props.salarioMin} - {props.salarioMax}
      </LiCommonJob>
      <LiCommonJob>Requisitos: {props.requisitos.join(', ')}</LiCommonJob>
    </UlJob>
    <JobLink href="#">Ver detalhes e candidatar-se</JobLink>
  </JobLiGen>
)

export default Vaga
