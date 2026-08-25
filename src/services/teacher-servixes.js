"use strict";

function listTeachers(teachers) {

    return teachers.map(teacher => {

        return {
            name: teacher.name,
            subject: teacher.subject,
            registrationDate: teacher.registrationDate
        };

    });
}

module.exports = {
    listTeachers
};