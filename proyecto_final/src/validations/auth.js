export const isValidEmail = (emailInput) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    return regex.test(emailInput)
}

export const isAtLeastSixCharacters = (input) => {
    const regex = /.{6,}/
    return regex.test(input)
}

export const isValidName = (input) => {
    const regex = /^[a-zA-Z_][a-zA-Z0-9_]*$/
    return regex.test(input)
}