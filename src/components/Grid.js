import React from 'react'
import { ButtonCalculator } from './Button'
import { Row } from './View'

const Grid = ({ operation, dispatch }) => {

    return (
        <>
            <Row>
                <ButtonCalculator onPress={() => dispatch({ type: 'clear' })} flex={3}>
                    C
                </ButtonCalculator>
                <ButtonCalculator onPress={() => dispatch({ type: 'setOperation', operation: '/' })} isOperation operation={operation} flex={1}>
                    /
                </ButtonCalculator>
            </Row>
            <Row>
                <ButtonCalculator onPress={() => dispatch({ type: 'setNumber', newNumber: '7' })} flex={1}>
                    7
                </ButtonCalculator>
                <ButtonCalculator onPress={() => dispatch({ type: 'setNumber', newNumber: '8' })} flex={1}>
                    8
                </ButtonCalculator>
                <ButtonCalculator onPress={() => dispatch({ type: 'setNumber', newNumber: '9' })} flex={1}>
                    9
                </ButtonCalculator>
                <ButtonCalculator onPress={() => dispatch({ type: 'setOperation', operation: 'x' })} isOperation operation={operation} flex={1}>
                    x
                </ButtonCalculator>
            </Row>
            <Row>
                <ButtonCalculator onPress={() => dispatch({ type: 'setNumber', newNumber: '6' })} flex={1}>
                    6
                </ButtonCalculator>
                <ButtonCalculator onPress={() => dispatch({ type: 'setNumber', newNumber: '5' })} flex={1}>
                    5
                </ButtonCalculator>
                <ButtonCalculator onPress={() => dispatch({ type: 'setNumber', newNumber: '4' })} flex={1}>
                    4
                </ButtonCalculator>
                <ButtonCalculator onPress={() => dispatch({ type: 'setOperation', operation: '-' })} isOperation operation={operation} flex={1}>
                    -
                </ButtonCalculator>
            </Row>
            <Row>
                <ButtonCalculator onPress={() => dispatch({ type: 'setNumber', newNumber: '1' })} flex={1}>
                    1
                </ButtonCalculator>
                <ButtonCalculator onPress={() => dispatch({ type: 'setNumber', newNumber: '2' })} flex={1}>
                    2
                </ButtonCalculator>
                <ButtonCalculator onPress={() => dispatch({ type: 'setNumber', newNumber: '3' })} flex={1}>
                    3
                </ButtonCalculator>
                <ButtonCalculator onPress={() => dispatch({ type: 'setOperation', operation: '+' })} isOperation operation={operation} flex={1}>
                    +
                </ButtonCalculator>
            </Row>
            <Row>
                <ButtonCalculator onPress={() => dispatch({ type: 'setNumber', newNumber: '0' })} flex={2}>
                    0
                </ButtonCalculator>
                <ButtonCalculator onPress={() => dispatch({ type: 'setNumber', newNumber: '.' })} flex={1}>
                    .
                </ButtonCalculator>
                <ButtonCalculator onPress={() => dispatch({ type: 'calculate' })} isOperation flex={1}>
                    =
                </ButtonCalculator>
            </Row>
        </>
    )
}

export default Grid
