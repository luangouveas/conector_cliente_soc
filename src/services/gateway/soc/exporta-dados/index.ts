import { SoapClientType } from '@/services/soap-client'
import { gerarXmlExportaDados } from './gerar-xml-exporta-dados'
import { map, mapLeft, pipe, TaskEither, toError, tryCatch } from '@/services/either'

type Deps = {
  soapClient: SoapClientType
  parametros: object
}

export type RetornoExportaDados = {
  erro: any
    mensagemErro: string | undefined
    retorno: string
}

type RetornoSoapExportaDados = {
  return: RetornoExportaDados
}

type ExportaDadosWs = ({ soapClient, parametros }: Deps) => TaskEither<Error, RetornoExportaDados>

export const exportaDadosWs: ExportaDadosWs = ({ soapClient, parametros }: Deps) => {
  const wsdl = process.env.WSDL_SOC_EXPORTADADOS as string
  return pipe(
      tryCatch(() => soapClient.execute(wsdl, 'exportaDadosWs', gerarXmlExportaDados(parametros)) ,toError),
      map((retSoapEd: RetornoSoapExportaDados) => retSoapEd.return),
      mapLeft((err) => err)
  )
}
