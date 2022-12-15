async function searchStudentId(id) {
    const response = await fetch(`https://apigenerator.dronahq.com/api/g4C15xPP/students/${id}`);
    let data = await response.json();
    return await data;
}

async function searchTaskPerIdGrades(grades) {
    const tasks = [];
    for (let i = 0; i < grades.length; i++) {
        await fetch(`https://apigenerator.dronahq.com/api/75U0yEKU/tasks/${grades[i].taskId}`)
            .then(async function (response) {
                let body = await response.json()
                tasks.push(body)
            })
    }
    return tasks
}

async function searchGradesPerStudentId(id) {
    const grades = [];
    await fetch('https://apigenerator.dronahq.com/api/5Bba_f-L/grades')
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
    const grades = await searchGradesPerStudentId(idStudent)
    const tasks = await searchTaskPerIdGrades(grades)

    console.log(`Aluno: ${student.Name}`)
    for (let i = 0; i < grades.length; i++) {
        console.log(`Materia: ${tasks[i].title} - Nota: ${grades[i].number}`)
    }
    // return student.Name
}

var findAllActivitiesPerStudent = findAllActivitiesPerStudent(5)

//findAllActivitiesPerStudent.then(console.log)