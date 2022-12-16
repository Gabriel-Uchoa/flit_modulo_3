async function searchStudentId(id) {
    const response = await fetch(`https://apigenerator.dronahq.com/api/g4C15xPP/students/${id}`);
    let data = await response.json();
    return await data;
}

async function searchStudents() {
    const response = await fetch(`https://apigenerator.dronahq.com/api/g4C15xPP/students`);
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

async function searchTasks() {
    return await fetch(`https://apigenerator.dronahq.com/api/75U0yEKU/tasks`)
        .then(async function (response) {
            let body = await response.json()
            return body
        })
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
async function searchGrades() {
    const response = await fetch(`https://apigenerator.dronahq.com/api/5Bba_f-L/grades`);
    let data = await response.json();
    return await data;
}

async function findAllActivitiesPerStudent(idStudent) {
    const student = await searchStudentId(idStudent)
    const grades = await searchGradesPerStudentId(idStudent)
    const tasks = await searchTaskPerIdGrades(grades)

    console.log(`Aluno: ${student.Name}`)

    for (let i = 0; i < grades.length; i++) {
        console.log(`Materia: ${tasks[i].title} - Nota: ${grades[i].number}`)
    }
}

async function gradeAveragePerStudent(idStudent) {
    var average = 0
    const student = await searchStudentId(idStudent)
    const grades = await searchGradesPerStudentId(idStudent)

    for (let i = 0; i < grades.length; i++) {
        average += parseFloat(grades[i].number)
    }

    console.log(`Aluno: ${student.Name}`)
    console.log(`Média do Aluno: ${average / grades.length}`)
}

async function searchTasksPending(idStudent) {
    const grades = await searchGradesPerStudentId(idStudent)
    const tasksStudent = await searchTaskPerIdGrades(grades)
    const tasks = await searchTasks()

    const tasksPendig = tasks.filter(x => {
        return JSON.stringify(tasksStudent).indexOf(JSON.stringify(x)) < 0;
    });
    const tasksDelivered = tasks.filter(x => {
        return JSON.stringify(tasksStudent).indexOf(JSON.stringify(x)) > 0;
    });
    for (let i = 0; i < tasksPendig.length; i++) {
        console.log(`Materia Pendente: ${tasksPendig[i].title}`)
    }
    for (let i = 0; i < tasksDelivered.length; i++) {
        console.log(`Materia Concluida: ${tasksDelivered[i].title}`)
    }
}

async function searchStudentsPerDeliveredOfTasks(task) {
    const tasks = await searchTasks()
    const students = await searchStudents()
    const grades = await searchGrades()

    var idTask = 0
    var taskStudentIds = []
    var studentTaskDelivered = []

    tasks.forEach(element => {
        if (element.title == task) {
            idTask = element.id
        }
    });

    grades.forEach(element => {
        if (element.taskId == idTask) {
            taskStudentIds.push(element)
        }
    });

    students.forEach(element => {
        taskStudentIds.forEach(x => {
            if (element.id == x.studentId) {
                studentTaskDelivered.push(element)
            }
        })
    });

    for (let i = 0; i < taskStudentIds.length; i++) {
        for (let x = 0; x < studentTaskDelivered.length; x++) {
            if (taskStudentIds[i].studentId == studentTaskDelivered[x].id) {
                console.log(`Nome: ${studentTaskDelivered[x].Name} - Nota: ${taskStudentIds[i].number}`)
            }
        }
    }
}

async function exec() {
    await findAllActivitiesPerStudent(5)
    await gradeAveragePerStudent(5)
    await searchTasksPending(5)
    await searchStudentsPerDeliveredOfTasks("Colocando em prática 2.3")
}

exec()
