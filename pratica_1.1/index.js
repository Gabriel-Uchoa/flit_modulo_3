const readXlsxFile = require('read-excel-file/node')
var validator = require('validator');


function ageIsValid(age) {
    return age >= 0
}
function isEmail(email) {
    return validator.isEmail(email)
}
function isEmpyt(string) {
    if (string == null) {
        return true
    }

}
function isAlphanumeric(string) {
    return validator.isAlphanumeric(string)
}

function print() {
    readXlsxFile('./data/Alunos.xlsx').then((rows) => {
        for (let x = 1; x < rows.length; x++) {
            console.log(`-------------------------------------------------`)
            for (let y = 0; y < rows[0].length; y++) {
                if ((!isEmpyt(rows[x][0])) && (isEmail(rows[x][1])) && (ageIsValid(rows[x][2])) && (isAlphanumeric(rows[x][3]))) {
                    console.log(`${rows[0][y]}: ${rows[x][y]}`)
                }
            }
        }
    })
}

print()