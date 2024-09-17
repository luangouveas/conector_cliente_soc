import { FastifyInstance } from 'fastify'
import { AppCore } from '@/main/app/index'

export type ArrayRoutes = ((server: FastifyInstance, app: AppCore) => Promise<void>)[]
