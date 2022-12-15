function searchStudentId(id) {
    return fetch(`https://apigenerator.dronahq.com/api/g4C15xPP/students/${id}`)
        .then(async function (response) {
            let data = await response.json()
            return data
        })
}

function searchGradesPerStudentId(id) {
    const grades = [];
    fetch('https://apigenerator.dronahq.com/api/5Bba_f-L/grades')
        .then(async function (response) {
            let body = await response.json()
            body.forEach(element => {
                if (element.studentId == id) {
                    grades.push(element)
                }
            });
        })
    return grades
}


async function findAllActivitiesPerStudent(idStudent) {
    const student = await searchStudentId(idStudent)
    const grades = searchGradesPerStudentId(idStudent)
    console.log(student.Name)
    console.log(grades)
    console.log(grades[0].number)
    return student.Name
}

var findAllActivitiesPerStudent = findAllActivitiesPerStudent(5)
