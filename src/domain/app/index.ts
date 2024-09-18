import { CriarSoapClientType } from '@/services/soap-client'
import { ConsultarDadosAsoExame } from '../usecases/teste/consultar-aso-exame-soc'

type Deps = {
  repositories: any
  soapClient: CriarSoapClientType
}

export const App = ({ repositories, soapClient }: Deps) => {
  return {
    consultarDadosAsoExame: ConsultarDadosAsoExame(soapClient),
  }
}
