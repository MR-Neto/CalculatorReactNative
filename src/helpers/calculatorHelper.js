export const calculate = ({ previousNumber, number, operation }) => {
    switch (operation) {
        case '/':
            return Math.round(String(Number(previousNumber) / Number(number)) * 10000) / 10000
        case 'X':
            return Math.round(String(Number(previousNumber) * Number(number)) * 10000) / 10000
        case '-':
            return Math.round(String(Number(previousNumber) - Number(number)) * 10000) / 10000
        case '+':
            return Math.round(String(Number(previousNumber) + Number(number)) * 10000) / 10000
        default:
            return ''
    }
}
