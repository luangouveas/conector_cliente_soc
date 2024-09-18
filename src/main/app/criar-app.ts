import { App } from '@/domain/app'
import { criarSoapClient } from '@/services/soap-client'

export const criarApp = () => {
  const soapClient = criarSoapClient()
  const repositories = ''

  return App({ repositories, soapClient })
}
