export const calculate = ({ previousNumber, number, operation }) => {
    let returnValue
    switch (operation) {
        case '/':
            returnValue = Number(previousNumber) / Number(number)
            break
        case 'x':
            returnValue = Number(previousNumber) * Number(number)
            break
        case '-':
            returnValue = Number(previousNumber) - Number(number)
            break
        case '+':
            returnValue = Number(previousNumber) + Number(number)
            break
        default:
            return ''
    }
    return String(roundDecimalPlaces(returnValue, 5))
}

const roundDecimalPlaces = (number, numberDecimals) => Math.round(number * (10 ^ numberDecimals)) / (10 ^ numberDecimals)
