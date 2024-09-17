import { criarApp } from './criar-app'

export const appCore = criarApp()

export type AppCore = typeof appCore
