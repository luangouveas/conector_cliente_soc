import { criarApp } from './app/criar-app'

const disponibilizarDadosAsoExameSoc = async () => {
  const app = criarApp()

  const ret = await app.consultarDadosAsoExame({
    dataInicial: '01/07/2024',
    dataFinal: '30/08/2024',
    filtroTipoData: 3,
    codigoEmpresa: 99999,
  })

  console.log(JSON.parse(ret.retorno))
}

disponibilizarDadosAsoExameSoc()
