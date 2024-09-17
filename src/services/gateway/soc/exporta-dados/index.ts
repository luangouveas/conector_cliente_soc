import { CriarSoapClientType } from "@/services/soap-client";
import { gerarXmlExportaDados } from "./gerar-xml-exporta-dados";

type Deps = {
    soapClient: CriarSoapClientType
    parametros: object
}

type RetornoSoapExportaDados = {
    return: {
        erro: any
        mensagemErro: string | undefined
        retorno: string
      }
}
  
export const exportaDadosWs = async ({soapClient, parametros}: Deps) => {
    const wsdl = process.env.WSDL_SOC_EXPORTADADOS as string
    const resExportaDados: RetornoSoapExportaDados = await soapClient.execute(wsdl, 'exportaDadosWs', gerarXmlExportaDados(parametros))
    
    return resExportaDados.return
}