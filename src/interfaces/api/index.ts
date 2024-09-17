import { AppCore } from '@/main/app/index'
import { ArrayRoutes } from './protocols'
import fastify from 'fastify'
import { glob } from 'glob'

const getRoutes = () => {
  const routeFiles = glob.sync(__dirname + '/routes/**/*.route.ts', { absolute: true })
  const routes = routeFiles.map(file => require(file).default) as ArrayRoutes
  return routes
}

export const criarWebApi = (appCore: AppCore) => {
  const webApi = fastify({
    logger: false
  })

  const routes = getRoutes()
  
  for (const route of routes) {
    route(webApi, appCore)
  }

  return webApi
}
