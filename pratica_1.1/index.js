const readXlsxFile = require('read-excel-file/node')

function print() {

    readXlsxFile('./data/Alunos.xlsx').then((rows) => {
        for (let x = 1; x < rows.length; x++) {
            console.log(`-------------------------------------------------`)
            for (let y = 0; y < rows[0].length; y++) {
                console.log(`${rows[0][y]}: ${rows[x][y]}`)

            }
        }
    })


}
print()
