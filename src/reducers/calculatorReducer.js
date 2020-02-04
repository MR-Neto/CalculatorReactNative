import { calculate } from '../helpers/calculatorHelper'

export const initialState = {
    number: '',
    previousNumber: null,
    operation: null
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'setNumber':
            return { ...state, number: state.number + action.newNumber }
        case 'setOperation':
            if (state.number.length > 0) {
                return { operation: action.operation, number: '', previousNumber: state.number }
            } else {
                return initialState
            }
        case 'calculate':
            return { ...initialState, number: calculate(state) }
        case 'clear':
            return initialState
        default:
            throw new Error()
    }
}
