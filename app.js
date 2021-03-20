var Reader = require("./services/Reader")
var Processor = require("./services/Processor")
var Table = require("./services/Table")
var HtmlParser = require("./services/HtmlParser")
var Writer = require("./services/Writer")
var PDFWriter = require("./services/PDFWriter")

var leitor = new Reader()
var escritor = new Writer()


async function main() {
    var dados = await leitor.Read("./users.csv")
    var dadosProcessados = Processor.Process(dados)

    var usuarios = new Table(dadosProcessados)
    var html = await HtmlParser.Parse(usuarios)

    escritor.Write(`./html/${Date.now()}.html`, html)
    PDFWriter.WritePdf(`./pdfs/${Date.now()}.pdf`, html)
}

main()