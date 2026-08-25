"use strict";

function getStatistics(students, teachers) {

    const totalStudents = students.length;

    const totalTeachers = teachers.length;

    let average = 0;

    if (totalStudents > 0) {

        average =
            students.reduce(
                (sum, student) => sum + student.average,
                0
            ) / totalStudents;
    }

    let bestStudent = null;

    if (totalStudents > 0) {

        bestStudent = students.reduce(
            (best, current) =>
                current.average > best.average
                    ? current
                    : best
        );
    }

    return {
        totalStudents,
        totalTeachers,
        average,
        bestStudent
    };
}

module.exports = {
    getStatistics
};