"use strict";

async function demonstrateAsync(searchFunction, registrationNumber) {

    try {

        const student =
            await searchFunction(registrationNumber);

        return student;

    } catch (error) {

        throw error;
    }
}

module.exports = {
    demonstrateAsync
};
