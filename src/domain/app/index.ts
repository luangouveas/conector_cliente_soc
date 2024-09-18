import { SoapClientType } from '@/services/soap-client'
import { ConsultarDadosAsoExame } from '../usecases/soc/consultar-aso-exame-soc'

type Deps = {
  repositories: any
  soapClient: SoapClientType
}

export const App = ({ repositories, soapClient }: Deps) => {
  return {
    consultarDadosAsoExame: ConsultarDadosAsoExame(soapClient),
  }
}
