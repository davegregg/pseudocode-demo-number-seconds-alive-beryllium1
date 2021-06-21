// Step 1: Get user input!
let birthYearInput = prompt("What year were you born?")
let birthMonthInput = prompt("What month were you born?")
let birthYear = parseInt(birthYearInput)
let birthMonth = parseInt(birthMonthInput)

// if birthYear or birthMonth is NaN,
// then alert the user to retry
let inputIsInvalid = Number.isNaN(birthYear) || Number.isNaN(birthMonth)
if (inputIsInvalid) {

    document.write(`
        <h3>
            "${birthYearInput}" and/or "${birthMonthInput}" is invalid input. 
            Please refresh the page and provide 
            a number (for example, "6" for June).
        </h3>
    `)

} else {  // Otherwise... We have the user-supplied information we need and we're ready to continue!

    // Step 2: Get current year and month as numbers!
    let currentYear = new Date().getFullYear()
    let currentMonth = new Date().getMonth() + 1

    // Step 3: Calculate the number of seconds in a month/year.
    const secondsInMonth = 30 * 24 * 60 * 60
    const secondsInYear = secondsInMonth * 12
    
    // Step 4: Calculate the number of seconds in the user's birth year.
    let secondsInBirthYear = (12 - birthMonth) * secondsInMonth
    // Step 5: Calculate the number of seconds in the current year.
    let secondsInCurrentYear = currentMonth * secondsInMonth
    // Step 6: Calculate the number of seconds total in all of the years in between their birth year and the current year.
    let secondsInBetween = (currentYear - birthYear - 2) * secondsInYear
    
    // Step 7: Calculate the final result by adding the above three values together, giving us the total approximate number of seconds since birth.
    let secondsSinceBirth = secondsInBirthYear + secondsInBetween + secondsInCurrentYear
    let secondsSinceBirth_LOCALIZED = secondsSinceBirth.toLocaleString()

    // Step 8: Output!
    console.log({ currentYear, currentMonth, birthYear, birthMonth, secondsSinceBirth_LOCALIZED })
    document.write(`
        <h3>
            You have been alive for approximately ${secondsSinceBirth_LOCALIZED} seconds!
        </h3>
    `)

}