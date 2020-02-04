export const calculate = ({ previousNumber, number, operation }) => {
    switch (operation) {
        case '/':
            return String(Number(previousNumber) / Number(number))
        case 'X':
            return String(Number(previousNumber) * Number(number))
        case '-':
            return String(Number(previousNumber) - Number(number))
        case '+':
            return String(Number(previousNumber) + Number(number))
        default:
            return ''
    }
}
