import { SoapClientType } from '@/services/soap-client'
import { exportaDadosWs, RetornoExportaDados } from '@/services/gateway/soc/exporta-dados'
import { TaskEither } from '@/services/either'

export type FiltrosDadosAso = {
  dataInicial: string
  dataFinal: string
  filtroTipoData: number
  codigoFuncionario?: number
  codigoEmpresa: number
}

type ConsultarDadosAsoExame = (soapClient: SoapClientType) => (filtros: FiltrosDadosAso) => TaskEither<Error, RetornoExportaDados>

export const ConsultarDadosAsoExame = (soapClient: SoapClientType) => {
  return (filtros: FiltrosDadosAso) => {
    const parametros = {
      tipoSaida: 'json',
      codigo: process.env.CODIGO_DADOS_ASO_EXAME,
      chave: process.env.CHAVE_DADOS_ASO_EXAME,
      empresa: filtros.codigoEmpresa,
      funcionarioInicio: 0,
      funcionarioFim: 99999999,
      pFuncionario: filtros.codigoFuncionario ? 1 : 0,
      funcionario: filtros.codigoFuncionario ? filtros.codigoFuncionario : 0,
      dataInicio: filtros.dataInicial,
      dataFim: filtros.dataFinal,
      pDataIncAso: filtros.filtroTipoData,
      tpExame: '1,2,3,4,5,6,7,8,9',
    }

    return exportaDadosWs({ soapClient, parametros })
  }
}
