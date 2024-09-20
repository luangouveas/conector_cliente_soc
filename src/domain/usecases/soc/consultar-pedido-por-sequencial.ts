import { TaskEither } from '@/services/either'
import { exportaDadosWs, RetornoExportaDados } from '@/services/gateway/soc/exporta-dados'
import { SoapClientType } from '@/services/soap-client'

type FiltrosPedido = {
  codigoEmpresa: number
  codigoSequencialFichaSoc: number
}

type ConsultarPedidoExamePorSequencial = (soapClient: SoapClientType) => (filtros: FiltrosPedido) => TaskEither<Error, RetornoExportaDados>

export const ConsultarPedidoExamePorSequencial: ConsultarPedidoExamePorSequencial = (soapClient) => (filtros) => {
  const parametros = {
    empresa: process.env.CODIGO_EMPRESA_PRINCIPAL,
    codigo: process.env.CODIGO_PEDIDO_EXAME,
    chave: process.env.CHAVE_PEDIDO_EXAME,
    tipoSaida: 'json',
    sequencial: filtros.codigoSequencialFichaSoc,
    empresaTrabalho: filtros.codigoEmpresa,
  }

  return exportaDadosWs({ soapClient, parametros })
}
