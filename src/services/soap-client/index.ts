import * as soap from 'soap'

export type SoapClientType = {
  execute: (wsdl: string, method: string, xml: string) => Promise<any>
}

export const criarSoapClient = (): SoapClientType => {
  return {
    async execute(wsdl, method, xml) {
      const client = await soap.createClientAsync(wsdl)
      const methodAsync = method + 'Async'
      const args = {
        _xml: xml,
      }
      const [res] = await client[methodAsync](args)
      return res
    },
  }
}
