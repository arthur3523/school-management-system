"use strict";

function registerStudent(students, Student, name, registrationNumber, average) {

    const student = new Student(
        name,
        registrationNumber,
        Number(average)
    );

    students.push(student);

    return student;
}

module.exports = {
    registerStudent
};