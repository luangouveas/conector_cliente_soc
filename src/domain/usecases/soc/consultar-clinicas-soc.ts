import { SoapClientType } from '@/services/soap-client'
import { exportaDadosWs, RetornoExportaDados } from '@/services/gateway/soc/exporta-dados'
import { TaskEither } from '@/services/either'

export type FiltrosEmpresaPrestador = {
  codigoEmpresa: number
  codigoPrestador?: number
}

type ConsultarListaDePrestadoresPorEmpresa = (
  soapClient: SoapClientType
) => (filtros: FiltrosEmpresaPrestador) => TaskEither<Error, RetornoExportaDados>

export const ConsultarListaDePrestadoresPorEmpresa: ConsultarListaDePrestadoresPorEmpresa = (soapClient) => (filtros) => {
  const parametros = {
    tipoSaida: 'json',
    codigo: process.env.CODIGO_EMPRESA_PRESTADORES,
    chave: process.env.CHAVE_EMPRESA_PRESTADORES,
    codigoDaEmpresa: filtros.codigoEmpresa,
    codigoPrestador: filtros.codigoPrestador ? filtros.codigoPrestador : '',
  }

  return exportaDadosWs({ soapClient, parametros })
}
