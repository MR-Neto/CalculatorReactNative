import { calculate } from '../helpers/calculatorHelper'

export const initialState = {
    number: '',
    previousNumber: null,
    operation: null
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'setNumber':
            if (action.newNumber === '.' && state.number.includes('.')) {
                return state
            }
            return { ...state, number: state.number + action.newNumber }
        case 'setOperation':
            if (state.number.length > 0) {
                return { operation: action.operation, number: '', previousNumber: state.number }
            }
            return initialState
        case 'calculate':
            return { ...initialState, number: calculate(state) }
        case 'clear':
            return initialState
        default:
            throw new Error()
    }
}
