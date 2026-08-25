"use strict";

function createAbsenceController() {

    const absences = new Map();

    return {

        add(registrationNumber) {

            const current =
                absences.get(registrationNumber) || 0;

            absences.set(
                registrationNumber,
                current + 1
            );
        },

        get(registrationNumber) {

            return absences.get(registrationNumber) || 0;
        }
    };
}

module.exports = {
    createAbsenceController
};