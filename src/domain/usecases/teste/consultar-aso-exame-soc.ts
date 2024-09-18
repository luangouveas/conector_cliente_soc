import { SoapClientType } from '@/services/soap-client'
import { exportaDadosWs } from '@/services/gateway/soc/exporta-dados'

type FiltrosDadosAso = {
  dataInicial: string
  dataFinal: string
  filtroTipoData: number
  codigoFuncionario?: number
  codigoEmpresa: number
}

export const ConsultarDadosAsoExame = (soapClient: SoapClientType) => {
  return async (filtros: FiltrosDadosAso) => {
    const parametros = {
      tipoSaida: 'json',
      codigo: process.env.CODIGO_DADOS_ASO_EXAME,
      chave: process.env.CHAVE_DADOS_ASO_EXAME,
      empresa: filtros.codigoEmpresa,
      funcionarioInicio: 0,
      funcionarioFim: 99999999,
      pFuncionario: 0,
      funcionario: 0,
      dataInicio: filtros.dataInicial,
      dataFim: filtros.dataFinal,
      pDataIncAso: 3,
      tpExame: '1,2,3,4,5,6,7,8,9',
    }

    return await exportaDadosWs({ soapClient, parametros })
  }
}
