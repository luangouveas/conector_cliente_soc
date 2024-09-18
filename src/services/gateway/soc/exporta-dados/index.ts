import { SoapClientType } from '@/services/soap-client'
import { gerarXmlExportaDados } from './gerar-xml-exporta-dados'
import { map, mapLeft, pipe, toError, tryCatch } from '@/services/either'

type Deps = {
  soapClient: SoapClientType
  parametros: object
}

type RetornoSoapExportaDados = {
  return: {
    erro: any
    mensagemErro: string | undefined
    retorno: string
  }
}

export const exportaDadosWs = ({ soapClient, parametros }: Deps) => {
  const wsdl = process.env.WSDL_SOC_EXPORTADADOS as string
  return pipe(
      tryCatch(() => soapClient.execute(wsdl, 'exportaDadosWs', gerarXmlExportaDados(parametros)) ,toError),
      map((retSoapEd: RetornoSoapExportaDados) => retSoapEd.return),
      mapLeft((err) => err)
  )
}
