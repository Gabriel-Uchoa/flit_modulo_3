const jsonfile = require('jsonfile')
const readXlsxFile = require('read-excel-file/node')
const writeXlsxFile = require('write-excel-file/node')
const https = require('https');

const file = './carros.json'
const obj = []

function readXlsx() {
    readXlsxFile('./data/Carros.xlsx').then((rows) => {
        for (let x = 1; x < rows.length; x++) {
            var [marca, modelo, ano, placa, cor, imagem] = [rows[x][0], rows[x][1], rows[x][2], rows[x][3], rows[x][4], rows[x][5]]
            const objToArray = {
                marca, modelo, ano, placa, cor, imagem
            }
            obj.push(objToArray)
        }
        jsonfile.writeFile(file, obj)
            .then(res => {
                console.log('Json Data Update')
            })
            .catch(error => console.error(error))
    })
}

function getValuAPI() {
    https.get('https://apigenerator.dronahq.com/api/u0ZzwNqP/carros', (resp) => {
        let data = '';
        resp.on('data', (chunk) => {
            data += chunk;
        });
        resp.on('end', () => {
            writeXlsx(JSON.parse(data))
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    })
}

async function writeXlsx(data) {
    const schema = [
        {
            column: 'Marca',
            type: String,
            value: data => data.marca
        },
        {
            column: 'Modelo',
            type: String,
            value: data => data.modelo
        },
        {
            column: 'Ano',
            type: String,
            value: data => data.ano
        },
        {
            column: 'Placa',
            type: String,
            value: data => data.placa
        },
        {
            column: 'Cor',
            type: String,
            value: data => data.cor
        },
        {
            column: 'Imagem',
            type: String,
            value: data => data.imagem
        }
    ]

    await writeXlsxFile(data, {
        schema,
        filePath: './data/Carros.xlsx'
    })

    readXlsx()
}

getValuAPI()
