import { map, mapLeft, pipe } from '@/services/either'
import { criarApp } from './app/criar-app'
import { FiltrosDadosAso } from '@/domain/usecases/soc/consultar-aso-exame-soc'

const disponibilizarDadosAsoExameSoc = async () => {
  const app = criarApp()
  const filtros: FiltrosDadosAso = {
    dataInicial: '01/07/2024',
    dataFinal: '30/08/2024',
    filtroTipoData: 3,
    codigoEmpresa: 999999,
  }

  pipe(
    filtros,
    app.consultarDadosAsoExame,
    map((res) => {
      if (res.erro) {
        console.log(res.mensagemErro)
      }else{
        console.log(JSON.parse(res.retorno))
      }
    }),
    mapLeft((err) => console.log(err.message))
  )()
}

disponibilizarDadosAsoExameSoc()
