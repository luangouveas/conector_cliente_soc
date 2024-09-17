import { AppCore } from '@/main/app/index'
import { FastifyInstance } from 'fastify'

const rota = async (server: FastifyInstance, app: AppCore) => {
  server.get('/dadosAsoExame',  (req, res) => 
   {
    const teste = app.consultarAsoPorFuncionario()
    console.log(teste)
    res.code(200).send(teste) 
   }
  )
}

export default rota
