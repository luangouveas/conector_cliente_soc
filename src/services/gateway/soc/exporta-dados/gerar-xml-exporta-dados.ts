export const gerarXmlExportaDados = (parametros: object) => {
    return `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://services.soc.age.com/">
        <soapenv:Header/>
        <soapenv:Body>
        <ser:exportaDadosWs>
            <arg0>
                <parametros>${JSON.stringify(parametros)}</parametros>"
            </arg0>
        </ser:exportaDadosWs>
        </soapenv:Body>
    </soapenv:Envelope>`
}