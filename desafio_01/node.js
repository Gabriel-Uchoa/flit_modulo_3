const jsonfile = require('jsonfile')
const readXlsxFile = require('read-excel-file/node')
const file = './carros.json'
const obj = []

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
            console.log('Write complete')
        })
        .catch(error => console.error(error))
})
