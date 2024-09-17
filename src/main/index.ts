import { appCore } from './app/index'
import { criarWebApi } from '@/interfaces/api'

const webApi = criarWebApi(appCore)

const init = async () => {
  await webApi.listen({
    port: 3000
  }).then(() => console.log('Server running !'))
  
}

init()
