"use strict";

function searchStudent(students, registrationNumber) {

    return new Promise((resolve, reject) => {

        console.log("Consultando banco de dados...");

        setTimeout(() => {

            const student = students.find(
                student =>
                    student.registrationNumber === registrationNumber
            );

            if (student) {

                resolve(student);

            } else {

                reject("Aluno não encontrado.");
            }

        }, 2000);
    });
}

module.exports = {
    searchStudent
};