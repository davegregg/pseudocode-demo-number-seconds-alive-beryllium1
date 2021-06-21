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
} else {
    let currentYear = new Date().getFullYear()
    let currentMonth = new Date().getMonth() + 1
    
    const secondsInMonth = 30 * 24 * 60 * 60
    const secondsInYear = secondsInMonth * 12
    
    let secondsInBirthYear = (12 - birthMonth) * secondsInMonth
    let secondsInCurrentYear = currentMonth * secondsInMonth
    let secondsInBetween = (currentYear - birthYear - 2) * secondsInYear
    
    let secondsSinceBirth = secondsInBirthYear + secondsInBetween + secondsInCurrentYear
    let secondsSinceBirth_LOCALIZED = secondsSinceBirth.toLocaleString()

    console.log({ currentYear, currentMonth, birthYear, birthMonth, secondsSinceBirth_LOCALIZED })
    document.write(`
        <h3>
            You have been alive for approximately ${secondsSinceBirth_LOCALIZED} seconds!
        </h3>
    `)
}